# 🗺️ StormSight - Project Roadmap & Execution Plan

This document outlines the phased engineering schedule for the StormSight nowcasting system. Each phase is strictly gated by acceptance criteria requiring zero-tolerance compliance before proceeding to the next.

---

## Phase 1: Ingestion & Stream Processing Engine
**Objective**: Establish a robust, high-throughput data pipeline to ingest multi-modal sensor data, parse native binary formats, and stage them via Kafka and MinIO with a $< 10\text{s}$ ingestion latency budget.

*   [ ] **1.1 MinIO & Kafka Infrastructure**: Deploy and configure Kafka topics (`ingest.radar.raw`, `ingest.satellite.insat`, `ingest.lightning.strikes`) and MinIO buckets (`radar-raw`, `nowcast-predictions`) with appropriate retention policies.
*   [ ] **1.2 Radar Ingestion Daemon**: Implement `radar_ingestor.py` using `arm-pyart`.
    *   Connect to IMD DWR feed.
    *   Extract radial sweeps, parse Reflectivity ($Z_H$) and Differential Reflectivity ($Z_{DR}$).
    *   Write raw NetCDF to MinIO and publish metadata to Kafka.
*   [ ] **1.3 Satellite Ingestion Daemon**: Implement `satellite_ingestor.py` using `satpy`.
    *   Connect to MOSDAC INSAT-3D/3DR feed.
    *   Extract TIR1 and WV channels. Write raw HDF5 to MinIO and publish metadata.
*   [ ] **1.4 Lightning Ingestion Daemon**: Implement `lightning_ingestor.py` using `geopandas`.
    *   Parse ILDN/GLD360 JSON/CSV payloads.
    *   Push lightning point geometries directly to PostGIS and Kafka.
*   [ ] **1.5 NWP Ingestion Daemon**: Implement `nwp_ingestor.py` using `xarray` and `cfgrib`.
    *   Extract CAPE and CIN from GRIB2 files and stage to MinIO.
*   [ ] **1.6 Database Migrations**: Apply Alembic migrations to construct the `radar_frames` and `lightning_events` tables in PostGIS.

> **Verification & Acceptance Criteria (Phase 1)**:
> *   Data arrives in Kafka $< 5\text{s}$ after file generation on the provider side.
> *   Kafka messages successfully carry pre-signed URIs pointing to MinIO blobs.
> *   Zero unhandled exceptions during parsing of malformed or missing data sweeps.

---

## Phase 2: Multi-Modal Spatio-Temporal ML Engine
**Objective**: Construct the Tensor Fusion pipeline and the PyTorch UNet-ConvLSTM inference module. Transform heterogeneous data into a unified coordinate system and execute forward passes under stringent time constraints.

*   [ ] **2.1 Spatial Normalization & Tensor Fusion (`fusion.py`)**:
    *   Implement strict reprojection to the target Cartesian CRS (e.g., EPSG:32643 - UTM Zone 43N) using `rasterio`/`gdal`.
    *   Apply 2D Gaussian KDE to lightning point geometries to create dense probability heatmaps.
    *   Construct the $[B, T_{in}, C, H, W]$ tensor (7 channels, 512x512 resolution).
*   [ ] **2.2 UNet-ConvLSTM Architecture (`model.py`)**:
    *   Define the PyTorch spatial encoders (UNet blocks).
    *   Define the temporal recurrent hidden states (ConvLSTM cells).
    *   Implement dual-headed outputs for Radar Reflectivity and Lightning Probability.
*   [ ] **2.3 Loss Function Definition (`train.py`)**:
    *   Implement the custom composite loss function combining Weighted Balanced MSE, SSIM, and Soft-CSI.
*   [ ] **2.4 Model Optimization**:
    *   Export trained models to ONNX.
    *   Configure FP16 half-precision inference and TensorRT acceleration.

> **Verification & Acceptance Criteria (Phase 2)**:
> *   Zero coordinate offset across all 7 channels in the fused tensor when mapped back to GeoJSON.
> *   Forward pass PyTorch inference time (FP16/ONNX) completes in $< 5\text{s}$ per spatial patch.
> *   Validation CSI $\ge 0.55$ for the 35 dBZ threshold at 60-minute lead time.

---

## Phase 3: Real-Time Inference & Backend Serving
**Objective**: Bridge the ML Engine to the FastAPI backend, implementing stateful inference background loops, database persistence, and WebSocket broadcast channels.

*   [ ] **3.1 Background Inference Worker**:
    *   Implement the Kafka consumer for the ingestion topics to trigger inference automatically.
    *   Manage ConvLSTM hidden state persistence (in VRAM or Redis) to prevent cold-start latencies.
*   [ ] **3.2 Output Processing & Tiling**:
    *   Convert ML output tensors back to geographic coordinates.
    *   Generate RGBA PNG tiles for web mapping.
    *   Upload tiles to MinIO and insert metadata into `nowcast_predictions` PostGIS table.
*   [ ] **3.3 Severe Weather Alerting System (`alerts.py`)**:
    *   Calculate high-intensity polygons (e.g., predicted $Z \ge 45\text{ dBZ}$) using PostGIS `ST_Contour` or `raster2pgsql`.
    *   Generate `severe_weather_alerts` rows.
*   [ ] **3.4 WebSocket Broadcast Layer (`ws.py`)**:
    *   Implement FastAPI WebSockets to push `NOWCAST_FRAME_READY` and `NEW_ALERT` JSON events to connected clients.

> **Verification & Acceptance Criteria (Phase 3)**:
> *   End-to-End Latency: The time from the last required data frame arriving in Kafka to the WebSocket push must not exceed 45 seconds.
> *   WebSocket can maintain 1000+ concurrent simulated connections without dropping frames.
> *   PostGIS intersection queries complete in $< 100\text{ms}$.

---

## Phase 4: High-Performance Geospatial Frontend
**Objective**: Render the nowcasting data in the browser fluidly, overlaying radar, satellite, and alerts on an interactive map.

*   [ ] **4.1 React Component Architecture**:
    *   Integrate Leaflet.js within the React ecosystem (`NowcastMap`).
    *   Implement global state management (Zustand or Redux) for managing the timeline state.
*   [ ] **4.2 Map Layers & Tile Rendering**:
    *   Consume MinIO pre-signed URLs to display dynamic raster tiles (predicted radar, satellite IR).
    *   Implement opacity sliders for dual-radar/satellite visualization.
*   [ ] **4.3 Timeline Scrubber**:
    *   Build a playback scrubber to smoothly transition between $t=-60$ (historical) to $t=+120$ (predicted).
*   [ ] **4.4 Alert Polygons & Lightning Animation**:
    *   Render `severe_weather_alerts` GeoJSON as flashing polygons on the map.
    *   Animate live lightning point strikes over the raster layers.

> **Verification & Acceptance Criteria (Phase 4)**:
> *   Client-side rendering maintains a steady 60 FPS while zooming, panning, and scrubbing through the 12-frame prediction timeline.
> *   WebSocket event reception to UI update latency is $< 100\text{ms}$.

---

## Phase 5: Field Validation, Benchmarking & Packaging
**Objective**: Subject the integrated system to extreme stress tests utilizing historical severe weather events and package for production deployment.

*   [ ] **5.1 Retrospective Extreme Event Benchmarking**:
    *   Replay data from 3 major historical convective events (e.g., Kalbaishakhi/Nor'westers) through the pipeline.
    *   Calculate formal CSI, POD, and FAR metrics against ground-truth IMD observations.
*   [ ] **5.2 Chaos Engineering & Load Testing**:
    *   Simulate Kafka broker failures, database disconnects, and massive message bursts. Ensure the pipeline auto-recovers without data corruption.
*   [ ] **5.3 Deployment Scripts**:
    *   Finalize `docker-compose.prod.yml` and Kubernetes Helm charts (if applicable).
    *   Configure Nginx/Traefik reverse proxies for production WebSocket handling.

> **Verification & Acceptance Criteria (Phase 5)**:
> *   System achieves $99.9\%$ uptime during a simulated 72-hour sustained high-volume weather event replay.
> *   CSI metrics match or exceed baseline mathematical expectations established in Phase 2.
> *   Production deployment spins up cleanly via single command (`docker compose -f docker-compose.prod.yml up -d`).
