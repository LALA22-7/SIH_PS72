"""GET /radar -- radar data query endpoints."""
from fastapi import APIRouter

router = APIRouter(prefix="/radar", tags=["radar"])


@router.get("/latest")
async def get_latest_radar() -> dict:
    """Return metadata for the latest radar scans across all stations."""
    # TODO: query DB for most recent radar_scan records
    return {"scans": [], "message": "No radar data yet (stub)"}


@router.get("/station/{station_id}")
async def get_radar_by_station(station_id: str) -> dict:
    """Return recent radar scans for a specific DWR station."""
    # TODO: query DB filtered by station_id
    return {"station_id": station_id, "scans": []}
