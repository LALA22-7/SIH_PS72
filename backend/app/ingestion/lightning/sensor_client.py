"""
SIH PS072 - Lightning Sensor Network Client

Ingests lightning stroke/flash data from India's Lightning Location Network (LLN)
or IITM's lightning detection sensors.

Each lightning event provides:
  - Latitude / Longitude
  - Timestamp (µs precision)
  - Peak current (kA)
  - Stroke type (Cloud-to-Ground, Intra-Cloud)
  - Polarity (+CG / -CG)

This is the HIGHEST FREQUENCY data source (~1 update/sec during active storms).
The ingestion loop runs every 60 seconds by default but can go faster.
"""
from datetime import datetime, timezone, timedelta
from typing import Any, Dict, List, Optional

import httpx
import numpy as np
from loguru import logger

from app.core.config import get_settings
from app.ingestion.base import BaseIngestor


class LightningSensorClient(BaseIngestor):
    """
    Lightning Location Network ingestor.
    Fetches recent lightning strokes and parses them into structured events.
    """

    def __init__(self):
        super().__init__(source_name="Lightning_LLN")
        self.settings = get_settings()
        self._client = httpx.AsyncClient(
            base_url=self.settings.LLN_API_URL,
            timeout=30.0,
            headers={"Authorization": f"Bearer {self.settings.LLN_API_KEY}"},
        )
        # Rolling window of recent events for density computation
        self._recent_events: List[Dict] = []

    async def fetch(self) -> Any:
        """
        Fetch lightning events from the last N minutes.

        In production: queries the LLN API for recent strokes.
        In development: generates synthetic lightning data for testing.

        Returns:
            List of raw lightning event dictionaries, or None.
        """
        if self.settings.APP_ENV == "development" and not self.settings.LLN_API_URL:
            return self._generate_synthetic_data()

        try:
            # Fetch events from the last polling interval
            lookback_sec = self.settings.LIGHTNING_POLL_INTERVAL_SEC + 30  # small overlap
            response = await self._client.get(
                "/events",
                params={
                    "since_seconds": lookback_sec,
                    "format": "json",
                    "include_ic": True,  # include intra-cloud flashes
                },
            )
            response.raise_for_status()
            data = response.json()
            logger.debug("Fetched {} lightning events from LLN", len(data.get("events", [])))
            return data.get("events", [])

        except httpx.HTTPError as e:
            logger.error("Lightning API request failed: {}", e)
            raise

    def _generate_synthetic_data(self) -> List[Dict]:
        """
        Generate realistic synthetic lightning data for offline development.
        Simulates a thunderstorm cell over central India.
        """
        n_events = np.random.randint(5, 80)
        now = datetime.now(timezone.utc)

        # Storm centred near Nagpur (21.15°N, 79.09°E) with 100km spread
        events = []
        for i in range(n_events):
            events.append({
                "event_id": f"SYN-{now.strftime('%H%M%S')}-{i:04d}",
                "timestamp": (
                    now - timedelta(seconds=np.random.randint(0, 60))
                ).isoformat(),
                "latitude": 21.15 + np.random.normal(0, 0.5),
                "longitude": 79.09 + np.random.normal(0, 0.5),
                "peak_current_ka": float(np.random.lognormal(3.0, 0.8)),
                "stroke_type": np.random.choice(["CG", "IC"], p=[0.35, 0.65]),
                "polarity": np.random.choice(["+", "-"], p=[0.1, 0.9]),
            })

        logger.info("Generated {} synthetic lightning events", n_events)
        return events

    async def process(self, raw_data: Any) -> Dict[str, Any]:
        """
        Process raw lightning events into:
          1. Structured event list (validated)
          2. Spatial density grid (for heatmap rendering)
          3. Summary statistics for alerting

        Returns:
            Dictionary with:
                - "events": list of validated lightning event dicts
                - "density_grid": 2D numpy array of flash counts per grid cell
                - "summary": dict with counts, max current, dominant type, etc.
        """
        events: List[Dict] = raw_data
        if not events:
            return {"events": [], "density_grid": None, "summary": {}}

        # --- Validate and normalise events ---
        validated = []
        for evt in events:
            try:
                validated.append({
                    "event_id": str(evt.get("event_id", "")),
                    "timestamp": evt["timestamp"],
                    "lat": float(evt["latitude"]),
                    "lon": float(evt["longitude"]),
                    "peak_current_ka": float(evt.get("peak_current_ka", 0)),
                    "stroke_type": evt.get("stroke_type", "UNKNOWN"),
                    "polarity": evt.get("polarity", ""),
                })
            except (KeyError, ValueError, TypeError) as e:
                logger.warning("Skipping malformed lightning event: {}", e)
                continue

        # --- Compute spatial density grid ---
        # 0.1° × 0.1° grid over India (6°N–38°N, 68°E–98°E)
        lat_bins = np.arange(6.0, 38.1, 0.1)
        lon_bins = np.arange(68.0, 98.1, 0.1)

        lats = [e["lat"] for e in validated]
        lons = [e["lon"] for e in validated]

        density_grid, _, _ = np.histogram2d(
            lats, lons, bins=[lat_bins, lon_bins]
        )

        # --- Summary statistics ---
        cg_events = [e for e in validated if e["stroke_type"] == "CG"]
        summary = {
            "total_events": len(validated),
            "cg_count": len(cg_events),
            "ic_count": len(validated) - len(cg_events),
            "max_peak_current_ka": max(
                (e["peak_current_ka"] for e in validated), default=0
            ),
            "mean_peak_current_ka": float(np.mean(
                [e["peak_current_ka"] for e in validated]
            )) if validated else 0,
            "bounding_box": {
                "lat_min": min(lats) if lats else None,
                "lat_max": max(lats) if lats else None,
                "lon_min": min(lons) if lons else None,
                "lon_max": max(lons) if lons else None,
            },
        }

        logger.info(
            "Lightning processed: {} events (CG={}, IC={}) | max={:.0f} kA",
            summary["total_events"],
            summary["cg_count"],
            summary["ic_count"],
            summary["max_peak_current_ka"],
        )

        # Update rolling window for trend analysis
        self._recent_events = (self._recent_events + validated)[-5000:]

        return {
            "events": validated,
            "density_grid": density_grid,
            "summary": summary,
        }

    async def close(self):
        """Clean up the HTTP client."""
        await self._client.aclose()
