"""
SIH PS072 - Health Check Endpoint
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def health_check():
    return {"status": "healthy", "service": "sih-ps072-nowcasting"}


@router.get("/ready")
async def readiness_check():
    """Readiness probe — checks if all critical dependencies are available."""
    # TODO: Add DB, Redis, model health checks
    return {"ready": True, "checks": {"database": "pending", "redis": "pending", "model": "pending"}}
