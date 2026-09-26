"""PostGIS custom type helpers for SQLAlchemy models."""
from geoalchemy2 import Geometry


# Common geometry column types for nowcasting models
PointGeometry = Geometry(geometry_type="POINT", srid=4326)
PolygonGeometry = Geometry(geometry_type="POLYGON", srid=4326)
