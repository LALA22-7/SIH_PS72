"""
SIH PS072 - Radar Data Endpoints
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/latest")
async def get_latest_radar():
    """Get the most recent processed radar reflectivity data."""
    return {"status": "ok", "message": "Stub — wire to radar ingestion cache"}


@router.get("/stations")
async def list_radar_stations():
    """List all available DWR stations with their coordinates and status."""
    return {"stations": [], "message": "Stub — populate from IMD station registry"}
