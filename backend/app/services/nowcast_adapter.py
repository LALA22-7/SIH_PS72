"""
Nowcast ML adapter -- bridges the backend to the ML package.

Follows the exact same stub/real pattern as PS 070's ml_adapter.py.
Tries to import ml.inference.run_nowcast. If the import fails or
ML_FORCE_STUB=true, falls back to deterministic stub responses.

All callers should use run_nowcast -- never import ML directly
from any other module.
"""
from __future__ import annotations

import logging
from typing import Any

logger = logging.getLogger(__name__)


# -- Mode detection ---------------------------------------------------------

def _detect_mode() -> str:
    """Return 'real' if ML package is importable and not force-stubbed, else 'stub'."""
    from app.core.config import get_settings
    settings = get_settings()
    if settings.ml_force_stub:
        return "stub"
    try:
        import ml.inference  # noqa: F401
        return "real"
    except ImportError:
        return "stub"


_MODE: str | None = None  # resolved lazily on first call


def _get_mode() -> str:
    global _MODE
    if _MODE is None:
        _MODE = _detect_mode()
        if _MODE == "stub":
            logger.warning(
                "[NOWCAST ADAPTER] Running in STUB MODE -- "
                "ml.inference not importable or ML_FORCE_STUB=true. "
                "All nowcasts are deterministic fixtures."
            )
        else:
            logger.info("[NOWCAST ADAPTER] Running in REAL MODE -- ml.inference loaded.")
    return _MODE


# -- Stub responses ---------------------------------------------------------

_NOWCAST_STUB: dict[str, Any] = {
    "nowcast_id": "stub-001",
    "issued_at": "2026-09-26T15:00:00Z",
    "valid_until": "2026-09-26T17:00:00Z",
    "cells": [
        {
            "cell_id": "TS-001",
            "center": {"lat": 28.61, "lon": 77.23},
            "radius_km": 35.0,
            "severity": "severe",
            "probability": 0.82,
            "hazards": {
                "lightning": {"probability": 0.88, "flash_rate_per_min": 12},
                "hail": {"probability": 0.45, "max_diameter_mm": 25},
                "wind_gust_kmh": 75,
            },
            "motion": {"bearing_deg": 245, "speed_kmh": 42},
            "forecast_positions": [
                {"minutes_ahead": 15, "lat": 28.58, "lon": 77.18, "probability": 0.80},
                {"minutes_ahead": 30, "lat": 28.55, "lon": 77.13, "probability": 0.74},
                {"minutes_ahead": 60, "lat": 28.49, "lon": 77.03, "probability": 0.61},
                {"minutes_ahead": 120, "lat": 28.37, "lon": 76.83, "probability": 0.43},
            ],
        },
    ],
    "model": {"name": "ps72-nowcast-stub", "version": "0.1.0"},
    "data_sources_used": ["radar", "satellite", "lightning"],
}


# -- Public interface -------------------------------------------------------

def run_nowcast(
    radar_data: Any | None = None,
    satellite_data: Any | None = None,
    lightning_data: Any | None = None,
    nwp_data: Any | None = None,
) -> dict[str, Any]:
    """
    Run thunderstorm nowcast inference on fused multi-source data.

    Parameters
    ----------
    radar_data
        Processed radar reflectivity / velocity arrays.
    satellite_data
        Satellite IR/WV channel arrays.
    lightning_data
        Lightning stroke location + intensity arrays.
    nwp_data
        NWP model fields (CAPE, CIN, wind shear, etc.).
        All ignored in stub mode.

    Returns
    -------
    dict with keys: nowcast_id, issued_at, valid_until, cells, model,
                    data_sources_used
    Each cell: cell_id, center, radius_km, severity, probability,
               hazards, motion, forecast_positions
    """
    if _get_mode() == "stub":
        logger.debug("[NOWCAST ADAPTER] nowcast -> stub")
        return dict(_NOWCAST_STUB)

    try:
        from ml.inference import run_nowcast as _ml_nowcast  # type: ignore[import]
        result = _ml_nowcast(
            radar_data=radar_data,
            satellite_data=satellite_data,
            lightning_data=lightning_data,
            nwp_data=nwp_data,
        )
        logger.debug("[NOWCAST ADAPTER] nowcast -> real inference")
        return result
    except Exception as exc:
        logger.error(
            "[NOWCAST ADAPTER] Real inference failed (%s), falling back to stub", exc
        )
        return dict(_NOWCAST_STUB)


def reset_mode() -> None:
    """Force re-detection of ML mode. Useful in tests."""
    global _MODE
    _MODE = None
