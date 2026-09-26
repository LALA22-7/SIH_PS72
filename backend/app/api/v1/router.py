"""
SIH PS072 - API v1 Router

Aggregates all versioned endpoint routers into a single prefix.
Follows the same modular routing pattern you used in FreeLangX:
  background.js routes messages by `action` key →
  here we route HTTP requests by URL path prefix.
"""
from fastapi import APIRouter

from app.api.v1.endpoints import nowcast, radar, lightning, alerts, health

api_v1_router = APIRouter()

# Each sub-router is self-contained with its own tags for Swagger grouping
api_v1_router.include_router(
    health.router,
    prefix="/health",
    tags=["Health"],
)

api_v1_router.include_router(
    nowcast.router,
    prefix="/nowcast",
    tags=["Nowcasting"],
)

api_v1_router.include_router(
    radar.router,
    prefix="/radar",
    tags=["Radar Data"],
)

api_v1_router.include_router(
    lightning.router,
    prefix="/lightning",
    tags=["Lightning Data"],
)

api_v1_router.include_router(
    alerts.router,
    prefix="/alerts",
    tags=["Alerts"],
)
