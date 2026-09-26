"""Lightning sensor data ingestor for ILDN / GLD360 / LIS networks.

Implements the BaseIngestor interface for lightning stroke data.
"""
from __future__ import annotations

import logging
from datetime import datetime, timedelta, timezone
from pathlib import Path

from ingest.base import BaseIngestor, IngestRecord, IngestStatus

logger = logging.getLogger(__name__)


class LightningIngestor(BaseIngestor):
    """Ingestor for lightning location network data.

    Supported formats: CSV (ILDN), JSON (GLD360 API), NetCDF (LIS/OTD).
    Typical cadence: continuous stream or 1-minute aggregates.
    """

    def __init__(self, output_dir: str | Path, base_url: str = ""):
        super().__init__(output_dir)
        self.base_url = base_url

    @property
    def source_name(self) -> str:
        return "lightning"

    def fetch_one(self, timestamp: datetime) -> IngestRecord:
        """Fetch lightning data for a specific timestamp window.

        TODO: Implement actual API call or file download.
        """
        ts_str = timestamp.strftime("%Y%m%dT%H%M%SZ")
        filename = f"lightning_{ts_str}.csv"
        local_path = self.output_dir / filename

        if local_path.exists() and local_path.stat().st_size > 0:
            return IngestRecord(
                source=self.source_name,
                timestamp=timestamp,
                local_path=str(local_path),
                status=IngestStatus.SKIPPED_EXISTING,
                method="cache",
            )

        # TODO: actual download
        logger.info("[%s] Would download: %s", self.source_name, filename)
        return IngestRecord(
            source=self.source_name,
            timestamp=timestamp,
            status=IngestStatus.SUCCESS,
            method="placeholder",
        )

    def list_available(
        self, start: datetime, end: datetime
    ) -> list[datetime]:
        """List lightning data timestamps at 1-minute intervals."""
        timestamps = []
        current = start
        while current <= end:
            timestamps.append(current)
            current += timedelta(minutes=1)
        return timestamps
