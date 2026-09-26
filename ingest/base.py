"""Abstract base ingestor for multi-source atmospheric data.

All data source ingestors (radar, lightning, satellite, NWP) inherit from
this base class and implement the same interface, following the retry +
manifest pattern from PS 070's aws_downloader.py.
"""
from __future__ import annotations

import abc
import logging
from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import Enum
from pathlib import Path
from typing import Any

logger = logging.getLogger(__name__)


class IngestStatus(str, Enum):
    SUCCESS = "success"
    SKIPPED_EXISTING = "skipped_existing"
    FAILED = "failed"
    MISSING_FROM_SOURCE = "missing_from_source"


@dataclass
class IngestRecord:
    """A single ingestion attempt -- written to the manifest CSV."""
    source: str
    timestamp: datetime
    local_path: str = ""
    status: IngestStatus = IngestStatus.FAILED
    method: str = ""
    metadata: dict[str, Any] = field(default_factory=dict)

    def as_dict(self) -> dict[str, str]:
        return {
            "source": self.source,
            "timestamp": self.timestamp.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "local_path": self.local_path,
            "status": self.status.value,
            "method": self.method,
        }


class BaseIngestor(abc.ABC):
    """Abstract base class for all data ingestors.

    Subclasses must implement:
      - source_name: str property identifying the data source.
      - fetch_one(timestamp): download a single observation for a timestamp.
      - list_available(start, end): discover available data in a time range.
    """

    def __init__(self, output_dir: str | Path):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self._records: list[IngestRecord] = []

    @property
    @abc.abstractmethod
    def source_name(self) -> str:
        """Human-readable identifier for this data source (e.g., 'dwr_radar')."""
        ...

    @abc.abstractmethod
    def fetch_one(self, timestamp: datetime) -> IngestRecord:
        """Download a single observation file for the given timestamp.

        Must handle:
          - Idempotency: skip if file already exists and is non-empty.
          - Retries: use ingest.utils.retry.with_retries for transient errors.
          - Return an IngestRecord regardless of success or failure.
        """
        ...

    @abc.abstractmethod
    def list_available(
        self, start: datetime, end: datetime
    ) -> list[datetime]:
        """List timestamps of available observations in the [start, end] range.

        This is used by the orchestrator to decide which timestamps to fetch.
        For push-based sources (e.g., Kafka streams), this can return an
        empty list -- fetching is driven by the stream consumer instead.
        """
        ...

    def fetch_range(
        self, start: datetime, end: datetime
    ) -> list[IngestRecord]:
        """Fetch all available observations in a time window.

        This is the primary entry point for batch ingestion scripts.
        """
        timestamps = self.list_available(start, end)
        logger.info(
            "[%s] Found %d observations in [%s, %s]",
            self.source_name, len(timestamps),
            start.isoformat(), end.isoformat(),
        )

        records: list[IngestRecord] = []
        for ts in timestamps:
            record = self.fetch_one(ts)
            records.append(record)
            self._records.append(record)

        success = sum(1 for r in records if r.status == IngestStatus.SUCCESS)
        skipped = sum(1 for r in records if r.status == IngestStatus.SKIPPED_EXISTING)
        failed = sum(1 for r in records if r.status in (IngestStatus.FAILED, IngestStatus.MISSING_FROM_SOURCE))

        logger.info(
            "[%s] Batch complete: %d success, %d skipped, %d failed",
            self.source_name, success, skipped, failed,
        )
        return records

    @property
    def records(self) -> list[IngestRecord]:
        """All ingestion records accumulated during this session."""
        return list(self._records)
