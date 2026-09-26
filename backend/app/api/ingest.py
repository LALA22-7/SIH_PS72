"""POST /ingest -- data ingestion trigger endpoints."""
from fastapi import APIRouter

router = APIRouter(prefix="/ingest", tags=["ingest"])


@router.post("/radar")
async def ingest_radar() -> dict:
    """Trigger radar data ingestion for the latest available scans."""
    # TODO: invoke RadarIngestor.fetch_one() or consume from Kafka topic
    return {"status": "accepted", "source": "radar", "message": "Ingestion queued"}


@router.post("/lightning")
async def ingest_lightning() -> dict:
    """Trigger lightning data ingestion."""
    # TODO: invoke LightningIngestor or consume from Kafka topic
    return {"status": "accepted", "source": "lightning", "message": "Ingestion queued"}


@router.post("/satellite")
async def ingest_satellite() -> dict:
    """Trigger satellite imagery ingestion."""
    # TODO: invoke SatelliteIngestor
    return {"status": "accepted", "source": "satellite", "message": "Ingestion queued"}


@router.post("/nwp")
async def ingest_nwp() -> dict:
    """Trigger NWP model data ingestion."""
    # TODO: invoke NWPIngestor
    return {"status": "accepted", "source": "nwp", "message": "Ingestion queued"}
