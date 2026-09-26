"""GET /alerts -- active thunderstorm alert endpoints."""
from fastapi import APIRouter

router = APIRouter(prefix="/alerts", tags=["alerts"])


@router.get("/")
async def get_active_alerts() -> dict:
    """Return all currently active thunderstorm alerts."""
    # TODO: query DB for active alerts where valid_until > now()
    return {
        "alerts": [],
        "count": 0,
        "message": "No active alerts (stub)",
    }


@router.get("/{alert_id}")
async def get_alert_by_id(alert_id: str) -> dict:
    """Return a specific alert by ID."""
    # TODO: fetch from DB
    return {"alert_id": alert_id, "status": "not_found"}
