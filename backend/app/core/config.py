"""Application configuration loaded from environment variables.

Adapted from PS 070 CycloneWatch config for PS 072 Thunderstorm Nowcasting.
"""
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # -- Database ----------------------------------------------------------
    database_url: str = (
        "sqlite+aiosqlite:///nowcast.db"
    )
    database_sync_url: str = (
        "sqlite:///nowcast.db"
    )

    # -- Application -------------------------------------------------------
    debug: bool = True
    api_version: str = "v1"

    # -- CORS --------------------------------------------------------------
    cors_origins: str = "*"

    # -- Data paths --------------------------------------------------------
    data_root: str = "/data"
    radar_data_dir: str = "/data/raw/radar"
    lightning_data_dir: str = "/data/raw/lightning"
    satellite_data_dir: str = "/data/raw/satellite"
    nwp_data_dir: str = "/data/raw/nwp"

    # -- ML ----------------------------------------------------------------
    ml_package_path: str = "/ml"
    ml_force_stub: bool = False

    # -- Redis (caching + pub/sub for real-time push) ----------------------
    redis_url: str = "redis://localhost:6379/0"

    # -- Kafka / Redpanda (streaming ingest) -------------------------------
    kafka_bootstrap_servers: str = "localhost:9092"
    kafka_radar_topic: str = "radar.scans"
    kafka_lightning_topic: str = "lightning.strokes"

    # -- Nowcasting --------------------------------------------------------
    nowcast_horizon_minutes: int = 120
    nowcast_interval_minutes: int = 15
    alert_threshold_probability: float = 0.60

    @property
    def cors_origins_list(self) -> list[str]:
        if self.cors_origins == "*":
            return ["*"]
        return [o.strip() for o in self.cors_origins.split(",")]


@lru_cache
def get_settings() -> Settings:
    return Settings()
