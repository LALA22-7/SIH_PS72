"""GeoJSON and spatial utility helpers.

Adapted from PS 070 CycloneWatch geo.py.
"""
from __future__ import annotations

from typing import Any


def point_geojson(lat: float, lon: float) -> dict[str, Any]:
    """Create a GeoJSON Point feature."""
    return {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [lon, lat],
        },
        "properties": {},
    }


def bbox_polygon(
    lat_min: float, lon_min: float, lat_max: float, lon_max: float
) -> dict[str, Any]:
    """Create a GeoJSON Polygon from a bounding box."""
    return {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [lon_min, lat_min],
                [lon_max, lat_min],
                [lon_max, lat_max],
                [lon_min, lat_max],
                [lon_min, lat_min],
            ]],
        },
        "properties": {},
    }
