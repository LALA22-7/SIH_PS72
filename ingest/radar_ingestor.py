"""Radar volume scan ingestor for IMD DWR / NEXRAD data.

Implements the BaseIngestor interface for Doppler Weather Radar data.
Supports both file-based ingestion (for historical data) and can be
extended for near-real-time stream consumption.
"""
from __future__ import annotations

import logging
from datetime import datetime, timedelta, timezone
from pathlib import Path

from ingest.base import BaseIngestor, IngestRecord, IngestStatus

logger = logging.getLogger(__name__)

# IMD DWR stations relevant to thunderstorm nowcasting
# (station_id, lat, lon, name)
DWR_STATIONS = [
    ("DEL", 28.58, 77.21, "New Delhi"),
    ("KOL", 22.57, 88.36, "Kolkata"),
    ("MUM", 19.08, 72.88, "Mumbai"),
    ("CHE", 13.08, 80.27, "Chennai"),
    ("HYD", 17.38, 78.49, "Hyderabad"),
    ("PAT", 25.61, 85.14, "Patna"),
    ("LKN", 26.85, 80.95, "Lucknow"),
    ("NGP", 21.09, 79.05, "Nagpur"),
]


class RadarIngestor(BaseIngestor):
    """Ingestor for Doppler Weather Radar volume scan data.

    Data format: HDF5 (ODIM) or binary sweep files.
    Typical cadence: every 6-10 minutes per station.

    Parameters
    ----------
    output_dir : str | Path
        Directory to write downloaded radar files.
    station_ids : list[str] | None
        DWR station IDs to ingest. None = all stations.
    base_url : str
        Root URL or S3 prefix for the radar data source.
    """

    def __init__(
        self,
        output_dir: str | Path,
        station_ids: list[str] | None = None,
        base_url: str = "",
    ):
        super().__init__(output_dir)
        self.station_ids = station_ids or [s[0] for s in DWR_STATIONS]
        self.base_url = base_url

    @property
    def source_name(self) -> str:
        return "dwr_radar"

    def _build_filename(self, station_id: str, timestamp: datetime) -> str:
        """Build a deterministic local filename for a radar volume scan."""
        ts_str = timestamp.strftime("%Y%m%dT%H%M%SZ")
        return f"radar_{station_id}_{ts_str}.h5"

    def fetch_one(self, timestamp: datetime) -> IngestRecord:
        """Download radar volume scans for all configured stations at a timestamp.

        TODO: Implement actual download logic when data source API is finalised.
              For now, returns a placeholder record.
        """
        for station_id in self.station_ids:
            filename = self._build_filename(station_id, timestamp)
            local_path = self.output_dir / filename

            if local_path.exists() and local_path.stat().st_size > 0:
                logger.debug("[%s:%s] Skipping existing: %s", self.source_name, station_id, filename)
                continue

            # TODO: Replace with actual download from self.base_url
            # Example: with_retries(download_fn, url, local_path)
            logger.info("[%s:%s] Would download: %s", self.source_name, station_id, filename)

        return IngestRecord(
            source=self.source_name,
            timestamp=timestamp,
            local_path=str(self.output_dir),
            status=IngestStatus.SUCCESS,
            method="placeholder",
        )

    def list_available(
        self, start: datetime, end: datetime
    ) -> list[datetime]:
        """List radar scan timestamps in range at ~10-minute cadence.

        TODO: Query actual data source API for available scan times.
              For now, generates synthetic timestamps at 10-min intervals.
        """
        timestamps = []
        current = start
        interval = timedelta(minutes=10)
        while current <= end:
            timestamps.append(current)
            current += interval
        return timestamps
