"""NWP model data ingestor for GFS / WRF / NCUM GRIB2 files.

Implements the BaseIngestor interface for Numerical Weather Prediction data.
"""
from __future__ import annotations

import logging
from datetime import datetime, timedelta, timezone
from pathlib import Path

from ingest.base import BaseIngestor, IngestRecord, IngestStatus

logger = logging.getLogger(__name__)

# Key NWP variables for thunderstorm nowcasting
NWP_VARIABLES = [
    "cape",       # Convective Available Potential Energy
    "cin",        # Convective Inhibition
    "k_index",    # K-Index (stability)
    "li",         # Lifted Index
    "pwat",       # Precipitable Water
    "shear_06",   # 0-6 km bulk wind shear
    "t2m",        # 2m Temperature
    "td2m",       # 2m Dewpoint
]


class NWPIngestor(BaseIngestor):
    """Ingestor for NWP model GRIB2 data (GFS, WRF, NCUM).

    Typical cadence: 6-hourly model runs, 1-3 hourly forecast steps.
    """

    def __init__(
        self,
        output_dir: str | Path,
        model_name: str = "gfs",
        variables: list[str] | None = None,
        base_url: str = "https://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_0p25.pl",
    ):
        super().__init__(output_dir)
        self.model_name = model_name
        self.variables = variables or NWP_VARIABLES
        self.base_url = base_url

    @property
    def source_name(self) -> str:
        return f"nwp_{self.model_name}"

    def fetch_one(self, timestamp: datetime) -> IngestRecord:
        """Fetch NWP model data for a specific initialization time.

        TODO: Implement GRIB2 download from NOMADS / NCMRWF.
        """
        ts_str = timestamp.strftime("%Y%m%dT%H%M%SZ")
        logger.info("[%s] Would download vars %s at %s", self.source_name, self.variables, ts_str)
        return IngestRecord(
            source=self.source_name,
            timestamp=timestamp,
            status=IngestStatus.SUCCESS,
            method="placeholder",
        )

    def list_available(
        self, start: datetime, end: datetime
    ) -> list[datetime]:
        """List NWP init times at 6-hourly intervals."""
        timestamps = []
        current = start
        while current <= end:
            timestamps.append(current)
            current += timedelta(hours=6)
        return timestamps
