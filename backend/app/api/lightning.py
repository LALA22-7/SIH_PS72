"""GET /lightning -- lightning stroke query endpoints."""
from fastapi import APIRouter

router = APIRouter(prefix="/lightning", tags=["lightning"])


@router.get("/recent")
async def get_recent_lightning() -> dict:
    """Return recent lightning stroke data (last N minutes)."""
    # TODO: query DB for recent lightning_event records
    return {"strokes": [], "count": 0, "message": "No lightning data yet (stub)"}


@router.get("/density")
async def get_lightning_density(
    lat_min: float = 20.0,
    lat_max: float = 30.0,
    lon_min: float = 70.0,
    lon_max: float = 85.0,
) -> dict:
    """Return lightning density grid for a bounding box."""
    # TODO: compute density from recent strokes
    return {
        "bbox": {"lat_min": lat_min, "lat_max": lat_max, "lon_min": lon_min, "lon_max": lon_max},
        "density_grid": [],
    }
