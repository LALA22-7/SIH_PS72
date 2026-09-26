"""Threshold-based thunderstorm alert generation engine.

Converts nowcast predictions into actionable alerts based on
configurable severity thresholds.
"""
from __future__ import annotations

import logging
from datetime import datetime, timezone
from typing import Any

from app.core.config import get_settings

logger = logging.getLogger(__name__)


def generate_alerts(nowcast: dict[str, Any]) -> list[dict[str, Any]]:
    """Generate alerts from a nowcast result.

    Parameters
    ----------
    nowcast : dict from nowcast_adapter.run_nowcast()

    Returns
    -------
    List of alert dicts, each with:
        alert_id, severity, cell_id, location, hazards, issued_at, valid_until
    """
    settings = get_settings()
    threshold = settings.alert_threshold_probability
    alerts: list[dict[str, Any]] = []

    for cell in nowcast.get("cells", []):
        if cell.get("probability", 0) >= threshold:
            alert = {
                "alert_id": f"ALERT-{cell['cell_id']}",
                "severity": cell.get("severity", "moderate"),
                "cell_id": cell["cell_id"],
                "location": cell.get("center"),
                "radius_km": cell.get("radius_km"),
                "probability": cell.get("probability"),
                "hazards": cell.get("hazards", {}),
                "issued_at": nowcast.get("issued_at"),
                "valid_until": nowcast.get("valid_until"),
            }
            alerts.append(alert)
            logger.info(
                "[ALERT] Generated: %s (severity=%s, prob=%.2f)",
                alert["alert_id"], alert["severity"], alert["probability"],
            )

    return alerts
