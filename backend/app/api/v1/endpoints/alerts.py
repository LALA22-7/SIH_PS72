"""
SIH PS072 - Alert Endpoints
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/active")
async def get_active_alerts():
    """Get all currently active thunderstorm/lightning alerts."""
    return {"alerts": [], "count": 0}


@router.get("/history")
async def get_alert_history():
    """Get historical alerts for review and analysis."""
    return {"alerts": [], "count": 0}
