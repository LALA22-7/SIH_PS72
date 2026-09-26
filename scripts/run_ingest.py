#!/usr/bin/env python
"""CLI to trigger all ingestors for a given time range."""
import argparse
import logging
from datetime import datetime, timezone

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(message)s")


def main():
    parser = argparse.ArgumentParser(description="StormSight data ingestion CLI")
    parser.add_argument("--source", choices=["radar", "lightning", "satellite", "nwp", "all"], default="all")
    parser.add_argument("--start", type=str, help="Start time ISO format", default=None)
    parser.add_argument("--end", type=str, help="End time ISO format", default=None)
    args = parser.parse_args()

    # TODO: parse times, instantiate appropriate ingestors, call fetch_range()
    print(f"Would ingest source={args.source} from {args.start} to {args.end}")
    print("Ingest CLI scaffold ready -- implement ingestor calls here.")


if __name__ == "__main__":
    main()
