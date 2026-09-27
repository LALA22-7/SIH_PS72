# StormSight - SIH Problem Statement 072 Documentation

**AIML based Nowcasting of thunderstorm and lightning using atmospheric observation including multiple radars, satellite, lightning and model data.**

---

## 1. Project Structure Analysis

The StormSight repository is organized into a modular, microservice-oriented architecture, separating data ingestion, machine learning, backend serving, and frontend presentation.

```text
SIH_PS72/
├── backend/            # FastAPI backend, WebSocket server, DB migrations (Alembic)
│   ├── app/            # Core backend logic (routes, models, schemas)
│   ├── alembic/        # PostGIS database migrations
│   ├── tests/          # Backend unit/integration tests
│   └── docker-compose.yml # Infrastructure orchestration (DB, Kafka, Redis, MinIO)
├── frontend/           # React + Vite frontend application
│   ├── src/            # UI components, state management (Zustand/Redux), Leaflet maps
│   └── public/         # Static assets
├── ml/                 # PyTorch Machine Learning Pipeline
│   ├── src/            # Model architecture (UNet-ConvLSTM), training loops, fusion logic
│   ├── configs/        # Hyperparameter and model configurations
│   ├── checkpoints/    # Saved model weights
│   └── inference.py    # Standalone inference scripts
├── ingest/             # Standalone data ingestion daemons
│   # (Contains ingestors for Radar, Satellite, Lightning, NWP)
├── data/               # Local sample data and raw inputs for testing
├── docs/               # Project documentation (where this file resides)
├── model_artifacts/    # Exported models (e.g., ONNX/TensorRT) for production inference
├── scripts/            # Utility scripts (deployment, DB setup, etc.)
├── README.md           # Executive summary and architecture overview
└── ROADMAP.md          # Phased execution plan
```

---

## 2. System Architecture & Workflow

StormSight operates as a high-throughput, low-latency data pipeline designed to ingest heterogeneous weather data, process it through a deep learning model, and serve real-time predictions.

### 2.1 The Dataflow Pipeline

1. **Ingestion Daemons**: Dedicated workers (Python scripts using `pyart`, `satpy`, `geopandas`, `xarray`) continuously pull data from various sources (IMD DWR, INSAT, ILDN, NWP models).
2. **Streaming & Storage**: 
   - Heavy binary data (NetCDF, HDF5, GRIB) is saved to **MinIO** (S3-compatible object storage).
   - Lightweight metadata and event triggers (URIs, timestamps, bounding boxes) are published to **Apache Kafka**.
3. **Tensor Fusion & Inference (ML Engine)**:
   - A background worker consumes Kafka topics, triggering the **Tensor Fusion Module**.
   - Data is fetched from MinIO, reprojected into a common Cartesian CRS (EPSG:32643), and stacked into a 7-channel input tensor.
   - The tensor is passed through the **UNet-ConvLSTM PyTorch model** (optimized via ONNX/TensorRT) to predict future radar reflectivity and lightning probability for the next 120 minutes.
4. **Backend Serving**:
   - The ML output is converted into geospatial tiles and saved to MinIO.
   - Severe weather alerts (polygons) are generated and saved to **PostgreSQL + PostGIS**.
   - A **FastAPI** server reads these alerts and exposes REST endpoints.
   - Real-time updates (new tiles, immediate alerts) are pushed to the frontend via **WebSockets** (backed by Redis Pub/Sub).

---

## 3. Frontend Design & Features

The frontend is a high-performance Geospatial Web Application built with React, Vite, and Leaflet (WebGL accelerated). It is designed for meteorologists and emergency responders.

### 3.1 Visual Layout

*   **Full-Screen Interactive Map**: The core of the UI. A dark-themed base map (e.g., CartoDB Dark Matter) to make weather overlays pop.
*   **Time Scrubber (Bottom)**: A horizontal playback bar allowing users to scrub from the past 60 minutes (observed data) into the future 120 minutes (nowcast predictions).
*   **Layer Controls (Floating Panel - Top Right)**: Toggles for different overlays:
    *   Observed Radar (dBZ)
    *   Predicted Radar (dBZ)
    *   Satellite (IR/Water Vapor)
    *   Lightning Strike Heatmap (Observed vs Predicted)
    *   Severe Weather Alert Polygons
*   **Alert Feed (Side Drawer - Left)**: A real-time scrolling list of active severe weather warnings (Push notifications via WebSocket). Clicking an alert centers the map on that region.
*   **Legend (Bottom Right)**: Color scales for Radar Reflectivity (dBZ) and Lightning Probability.

### 3.2 Key Technical Features

*   **Fluid Animation**: Smooth transitions between the 15-minute interval frames.
*   **WebGL Rendering**: Utilizing Leaflet Canvas or Mapbox GL for handling thousands of lightning points and complex raster tiles without frame drops.
*   **Low Latency Updates**: As soon as the backend completes an inference step ($< 45$ seconds from real-time), the WebSocket pushes an event, and the UI fetches the new tile layer instantly.

---

## 4. Smart India Hackathon (SIH) Presentation Structure

A winning SIH presentation must be concise, visually appealing, and directly address the problem statement. 

**Recommended Slide Count**: 10-12 Slides
**Estimated Time**: 5-7 Minutes

### Slide 1: Title Slide
*   **Project Name**: StormSight
*   **Problem Statement**: PS072 - AIML based Nowcasting of thunderstorm and lightning...
*   **Team Name & Logo**
*   **Catchphrase**: "Actionable Meteorological Intelligence, Minutes Before the Storm."

### Slide 2: The Problem & The Impact
*   **The Challenge**: Thunderstorms and lightning are highly localized, rapidly evolving convective events. Traditional NWP (Numerical Weather Prediction) models are too slow (6-hour lag) and too coarse to predict them accurately in real-time.
*   **The Impact**: Loss of life, aviation disruptions, and agricultural/infrastructure damage.
*   **The Goal**: Predict with high precision (2km spatial, 15-min temporal) up to 2 hours in advance (Nowcasting).

### Slide 3: Our Solution - StormSight
*   **Overview**: A multi-modal, deep-learning powered Nowcasting engine.
*   **Key Innovation**: Fusing 4 disparate data sources (Radar, Satellite, Lightning, NWP) into a unified spatio-temporal ML pipeline.
*   **Output**: Real-time web-dashboard providing exact impact polygons and timelines.

### Slide 4: Data Fusion Strategy (The "Secret Sauce")
*   Visual diagram showing the 4 data sources funneling into the "Tensor Fusion" block.
*   Explain the difficulty of aligning different grids (Radial radar, satellite pixels, sparse lightning points) into a single 3D Tensor ($[Time, Channels, Spatial]$).

### Slide 5: The AI Model Architecture
*   **Model**: UNet-ConvLSTM.
*   **Why this model?**: 
    *   *UNet*: Captures complex spatial features (storm shapes).
    *   *ConvLSTM*: Captures temporal dynamics (storm movement and growth).
*   **Custom Loss Function**: Briefly mention that standard models produce "blurry" forecasts. We use a custom loss (Weighted Balanced MSE) to penalize missing severe storm cores.

### Slide 6: System Architecture & Tech Stack
*   **Diagram**: Use a simplified version of the Mermaid diagram from the README.
*   **Tech Stack**:
    *   *Ingestion*: Python, Kafka, MinIO.
    *   *ML*: PyTorch, TensorRT.
    *   *Backend*: FastAPI, PostGIS, Redis.
    *   *Frontend*: React, Vite, Leaflet.
*   Highlight the **low-latency ($< 90s$)** end-to-end design.

### Slide 7: The User Experience (UI/UX)
*   **Mockup/Screenshot**: Show a high-fidelity mockup of the React frontend.
*   Highlight the Time Scrubber, the layered map, and the real-time Alert Feed.
*   Emphasize that the UI is designed for rapid decision-making by authorities.

### Slide 8: Novelty & Unique Selling Proposition (USP)
*   **Multi-Modal**: Not just radar-extrapolation (like standard optical flow), but true physics-aware AI using atmospheric constraints (NWP CAPE/CIN).
*   **Scalable & Cloud-Native**: Kafka/Microservices design means we can scale ingestion horizontally as new radar stations are added.
*   **Actionable Alerts**: We don't just show images; we compute PostGIS alert polygons to notify specific districts.

### Slide 9: Roadmap & Future Scope
*   **Current Hackathon Scope**: Pipeline ingestion, Model training, Dashboard prototype.
*   **Future Scope**: 
    *   Mobile App with Push Notifications for citizens.
    *   Integration with local disaster response APIs.
    *   Expanding the grid to cover the entire Indian subcontinent.

### Slide 10: Conclusion & Team
*   Summary of impact.
*   Team Member names and roles (e.g., ML Engineer, Backend Dev, Geospatial Expert).
*   "Thank You" and open for Q&A.

---

### Tips for the Presentation Delivery
*   **Show, Don't Just Tell**: If you have a working prototype or a mocked-up animation of a storm moving across the dashboard, make that the centerpiece of the pitch.
*   **Know Your Metrics**: Judges will ask about accuracy. Be prepared to explain CSI (Critical Success Index) and why it's better than standard accuracy for rare weather events.
*   **Address Latency**: Emphasize that in nowcasting, speed is everything. Highlight how Kafka and MinIO help achieve sub-90-second latency.
