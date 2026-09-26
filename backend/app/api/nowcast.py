"""GET /nowcast -- thunderstorm nowcast endpoints."""
from fastapi import APIRouter

from app.services.nowcast_adapter import run_nowcast

router = APIRouter(prefix="/nowcast", tags=["nowcast"])


@router.get("/")
async def get_latest_nowcast() -> dict:
    """Return the latest thunderstorm nowcast."""
    result = run_nowcast()
    return result


@router.get("/{nowcast_id}")
async def get_nowcast_by_id(nowcast_id: str) -> dict:
    """Return a specific nowcast by ID."""
    # TODO: fetch from DB by nowcast_id
    return run_nowcast()


@router.post("/trigger")
async def trigger_nowcast() -> dict:
    """Manually trigger a new nowcast cycle."""
    # TODO: run data fusion + ML inference pipeline
    result = run_nowcast()
    return {"status": "ok", "nowcast": result}
