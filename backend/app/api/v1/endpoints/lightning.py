"""
SIH PS072 - Lightning Data Endpoints
"""
from fastapi import APIRouter, Query

router = APIRouter()


@router.get("/recent")
async def get_recent_lightning(
    minutes: int = Query(30, ge=1, le=1440, description="Lookback window in minutes"),
):
    """Get recent lightning events within the specified time window."""
    return {"events": [], "count": 0, "lookback_minutes": minutes}


@router.get("/density")
async def get_lightning_density():
    """Get the current lightning density heatmap grid."""
    return {"density_grid": [], "message": "Stub — wire to lightning ingestion cache"}
