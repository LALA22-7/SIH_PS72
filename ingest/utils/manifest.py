"""Download manifest tracker (CSV-based).

Provides append-only, crash-safe tracking of ingestion attempts.
Adapted from PS 070's download_manifest pattern.
"""
from __future__ import annotations

import csv
import os
from pathlib import Path
from typing import Any


MANIFEST_FIELDNAMES = [
    "source", "timestamp", "local_path", "status", "method",
]


class ManifestTracker:
    """Append-only CSV manifest for tracking download attempts."""

    def __init__(self, manifest_path: str | Path):
        self.path = Path(manifest_path)
        self._already_done: set[tuple[str, str]] | None = None

    def _load_done(self) -> set[tuple[str, str]]:
        """Load (source, timestamp) pairs already recorded as success/skipped."""
        done: set[tuple[str, str]] = set()
        if self.path.exists():
            with open(self.path, newline="") as f:
                for row in csv.DictReader(f):
                    if row.get("status") in ("success", "skipped_existing"):
                        done.add((row["source"], row["timestamp"]))
        return done

    @property
    def already_done(self) -> set[tuple[str, str]]:
        if self._already_done is None:
            self._already_done = self._load_done()
        return self._already_done

    def is_done(self, source: str, timestamp: str) -> bool:
        return (source, timestamp) in self.already_done

    def append(self, record: dict[str, str]) -> None:
        """Append a single record to the manifest CSV."""
        is_new = not self.path.exists()
        with open(self.path, "a", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=MANIFEST_FIELDNAMES)
            if is_new:
                writer.writeheader()
            writer.writerow(record)
