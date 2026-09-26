"""Satellite imagery ingestor for INSAT-3D/3DR and Meteosat.

Implements the BaseIngestor interface for geostationary satellite data.
"""
from __future__ import annotations

import logging
from datetime import datetime, timedelta, timezone
from pathlib import Path

from ingest.base import BaseIngestor, IngestRecord, IngestStatus

logger = logging.getLogger(__name__)


class SatelliteIngestor(BaseIngestor):
    """Ingestor for geostationary satellite imagery.

    Channels: IR (10.8um), WV (6.2um), VIS (0.65um), CTT.
    Typical cadence: 15-30 minutes (INSAT-3D), 5 minutes (rapid scan).
    """

    def __init__(
        self,
        output_dir: str | Path,
        channels: list[str] | None = None,
        base_url: str = "",
    ):
        super().__init__(output_dir)
        self.channels = channels or ["ir", "wv", "vis"]
        self.base_url = base_url

    @property
    def source_name(self) -> str:
        return "satellite"

    def fetch_one(self, timestamp: datetime) -> IngestRecord:
        """Fetch satellite imagery for a specific timestamp.

        TODO: Implement download from MOSDAC / EUMETSAT.
        """
        ts_str = timestamp.strftime("%Y%m%dT%H%M%SZ")
        logger.info("[%s] Would download channels %s at %s", self.source_name, self.channels, ts_str)
        return IngestRecord(
            source=self.source_name,
            timestamp=timestamp,
            status=IngestStatus.SUCCESS,
            method="placeholder",
        )

    def list_available(
        self, start: datetime, end: datetime
    ) -> list[datetime]:
        """List satellite timestamps at 15-minute intervals."""
        timestamps = []
        current = start
        while current <= end:
            timestamps.append(current)
            current += timedelta(minutes=15)
        return timestamps
