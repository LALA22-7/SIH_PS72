"""Tests for /nowcast endpoint."""
import pytest


@pytest.mark.asyncio
async def test_get_nowcast(client):
    response = await client.get("/nowcast/")
    assert response.status_code == 200
    data = response.json()
    assert "cells" in data
    assert "model" in data
    assert data["model"]["name"] == "ps72-nowcast-stub"
