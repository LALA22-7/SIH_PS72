"""
SIH PS072 - Nowcasting Endpoints

REST endpoints for thunderstorm/lightning nowcast predictions.
"""
from fastapi import APIRouter, HTTPException, Query
from typing import Optional

router = APIRouter()


@router.get("/predict")
async def get_nowcast_prediction(
    lat: float = Query(..., ge=-90, le=90, description="Latitude of the query point"),
    lon: float = Query(..., ge=-180, le=180, description="Longitude of the query point"),
    radius_km: float = Query(50.0, ge=1, le=500, description="Radius in km for area prediction"),
    horizon_min: int = Query(30, ge=5, le=180, description="Forecast horizon in minutes"),
):
    """
    Get a thunderstorm/lightning nowcast prediction for a specific location.

    Returns probability of thunderstorm, lightning risk, estimated intensity,
    and predicted movement vector within the given time horizon.
    """
    # TODO: Wire to NowcastService → ML model inference
    return {
        "status": "ok",
        "query": {"lat": lat, "lon": lon, "radius_km": radius_km, "horizon_min": horizon_min},
        "prediction": {
            "thunderstorm_probability": 0.0,
            "lightning_risk": "none",
            "estimated_max_reflectivity_dbz": 0.0,
            "movement_vector": {"speed_kmh": 0.0, "direction_deg": 0.0},
            "confidence": 0.0,
            "model_version": "v0.1.0-stub",
        },
        "message": "Stub response — connect ML predictor to activate.",
    }


@router.get("/grid")
async def get_nowcast_grid(
    lat_min: float = Query(6.0, description="Southern boundary"),
    lat_max: float = Query(38.0, description="Northern boundary"),
    lon_min: float = Query(68.0, description="Western boundary"),
    lon_max: float = Query(98.0, description="Eastern boundary"),
    horizon_min: int = Query(30, ge=5, le=180),
    resolution_deg: float = Query(0.25, description="Grid resolution in degrees"),
):
    """
    Get a gridded nowcast prediction over a bounding box.
    Returns a 2D probability grid suitable for overlay rendering.
    """
    # TODO: Wire to NowcastService → batch grid inference
    return {
        "status": "ok",
        "bounds": {
            "lat_min": lat_min, "lat_max": lat_max,
            "lon_min": lon_min, "lon_max": lon_max,
        },
        "horizon_min": horizon_min,
        "resolution_deg": resolution_deg,
        "grid": [],  # Will be a 2D array of probabilities
        "message": "Stub response — connect ML predictor to activate.",
    }


@router.get("/status")
async def get_nowcast_status():
    """
    Get the current status of the nowcasting pipeline:
    data freshness, model health, last prediction time.
    """
    # TODO: Pull from NowcastService singleton
    return {
        "pipeline_status": "initializing",
        "data_sources": {},
        "last_prediction_at": None,
        "model_loaded": False,
    }
