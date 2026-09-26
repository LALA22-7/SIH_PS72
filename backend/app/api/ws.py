"""WebSocket endpoint for real-time nowcast push to frontend."""
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
import json
import logging

logger = logging.getLogger(__name__)

router = APIRouter(tags=["websocket"])


class ConnectionManager:
    """Manages active WebSocket connections."""

    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        logger.info("WebSocket client connected. Total: %d", len(self.active_connections))

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        logger.info("WebSocket client disconnected. Total: %d", len(self.active_connections))

    async def broadcast(self, message: dict):
        """Broadcast a message to all connected clients."""
        data = json.dumps(message)
        for connection in self.active_connections:
            try:
                await connection.send_text(data)
            except Exception:
                pass  # client may have disconnected


manager = ConnectionManager()


@router.websocket("/ws/nowcast")
async def nowcast_ws(websocket: WebSocket):
    """WebSocket endpoint for streaming nowcast updates.

    Clients connect here to receive real-time thunderstorm alerts
    and nowcast updates as they are generated.
    """
    await manager.connect(websocket)
    try:
        while True:
            # Keep connection alive; real updates come from broadcast()
            data = await websocket.receive_text()
            # Echo for now; TODO: handle client messages (e.g., bbox filter)
            await websocket.send_text(json.dumps({"echo": data}))
    except WebSocketDisconnect:
        manager.disconnect(websocket)
