# SIH 2026 PS26072: Comprehensive Presentation & Implementation Expansion

This document serves as the **exhaustive expansion** of the SIH 2026 Master Blueprint for PS26072. It provides the exact speaker scripts, detailed slide content, deeply expanded architectural workflows, and a rigorous differentiation between our **Current State (MVP / SIH Presentation)** and our **Future State (Post-MVP Operational Implementation)**.

This is the ultimate reference document for the team to use when building the final presentation deck and preparing for the judge's Q&A.

---

## 1. STRATEGIC POSITIONING: MVP vs. FULL SYSTEM

Before detailing the slides, it is vital that every team member understands the boundary between what we will present at the hackathon (MVP) and what the ultimate architecture demands (Post-MVP). We must present a highly feasible, scientifically grounded system without making fraudulent claims about real-time operational status.

### Current State (The SIH MVP & Presentation)
*   **Core Goal:** Prove the *feasibility* of multi-modal AI nowcasting through a **Historical Replay System**.
*   **Data Sources:** We will utilize publicly available historical datasets (e.g., IMD Radar archives, MOSDAC Satellite IR).
*   **Model:** We implement a **CNN + ConvLSTM** architecture. This handles the spatial extraction (CNN) and temporal sequencing (ConvLSTM) required for weather prediction, but is lightweight enough to train and infer on consumer GPUs during a hackathon.
*   **Data Strategy:** We will focus on fusing **Radar Reflectivity (dBZ)** and **Satellite Infrared (IR)**. Lightning and NWP are complex to acquire and synchronize historically and are excluded from the MVP code to ensure a working demo.
*   **Backend:** FastAPI serving predictions from local/MinIO storage.
*   **Frontend:** A React+Leaflet dashboard allowing judges to scrub through the timeline of a *past* thunderstorm event to see the model's prediction alongside what actually happened.

### Future State (Post-MVP Operational System)
*   **Core Goal:** Deploy a highly available, real-time warning system at the national or regional level.
*   **Data Sources:** Direct, live ingestion streams from IMD's DWR network, continuous MOSDAC feeds, real-time ILDN/GLD360 lightning feeds, and 6-hourly GFS/NCUM outputs.
*   **Model:** Transition to a **Hybrid Fusion Vision Transformer (ViT) or Swin-Transformer**, which can better capture long-range spatial dependencies (e.g., how a squall line hundreds of kilometers away affects local convection).
*   **Data Strategy:** Full 4-modality fusion (Radar + Satellite + Lightning + NWP) using explicit missing-modality dropout masks to handle sensor downtime.
*   **Backend:** Kubernetes-orchestrated microservices, Kafka for streaming ingestion, and PostGIS for real-time alerting.
*   **Frontend:** Live dashboard with real-time push notifications and a mobile companion app for citizens.

---

## 2. DETAILED SYSTEM WORKFLOW (THE "ENGINE")

This is the exact sequence of operations that powers the proposed system.

### Step 1: Ingestion & Quality Control
*   **Workflow:** Radar (NetCDF), Satellite (HDF5), and NWP (GRIB) data arrive at different intervals.
*   **QC:** The system removes ground clutter from radar and masks out anomalous pixels.
*   **MVP vs Future:** MVP uses pre-downloaded, pre-cleaned data. Future uses Apache Kafka to buffer and process streams on the fly.

### Step 2: Spatial Alignment & Reprojection
*   **Workflow:** Radar is natively polar (radial); Satellite is a geostationary projection. Everything is reprojected onto a common **2km x 2km Cartesian Grid (EPSG:32643)** covering the target bounding box.
*   **Lightning Handling:** Sparse lightning coordinate points are converted into a dense continuous probability heatmap using Kernel Density Estimation (KDE).

### Step 3: Temporal Synchronization
*   **Workflow:** Data arrives asynchronously (Radar: 10m, Sat: 30m). The system creates **15-minute temporal buckets**. If a radar frame is missing for a bucket, a zero-filled array is inserted alongside a boolean mask channel set to `True` (indicating "Data Missing").

### Step 4: Multi-Modal Tensor Fusion
*   **Workflow:** The aligned grids are stacked along the channel dimension.
*   **Tensor Shape:** `[Batch, Time=4, Channels=C, Height=512, Width=512]`. The past 60 minutes of data ($t-45, t-30, t-15, t$) are grouped together.

### Step 5: AI Inference (ConvLSTM)
*   **Workflow:** The tensor passes through the spatial encoders (CNN) to extract weather features, then through the recurrent layers (ConvLSTM) to project the temporal movement and growth of the storm.
*   **Output:** The model generates probability logits for the future ($t+15, \dots, t+120$).

### Step 6: Probabilistic Output & Decision Engine
*   **Workflow:** Logits are passed through a Sigmoid function to generate a probability surface ($0.0$ to $1.0$).
*   **Alert Generation:** The system applies meteorological thresholds (e.g., $P > 0.6$). Contiguous high-probability pixels are vectorized into PostGIS Polygon geometries representing the warning zones.

---

## 3. EXHAUSTIVE SLIDE-BY-SLIDE CONTENT & SPEAKER SCRIPT

The following section dictates exactly what appears on the slides and exactly what the speaker should say. 

### SLIDE 1: TITLE PAGE
**Visual Layout:**
*   Clean, professional background (dark mode preferred).
*   MoES / IMD / SIH Logos prominently displayed.
*   **Title:** StormSight: Multi-Modal AI Nowcasting for Convective Severe Weather
*   **Problem Statement:** PS26072 - AIML based Nowcasting of thunderstorm and lightning using atmospheric observation.
*   **Team:** [Team Name] | **Category:** Software

**Speaker Script:**
> *"Good morning respected judges. We are Team [Name], and we are tackling Problem Statement 26072 from the Ministry of Earth Sciences. Our project, StormSight, is an AI-driven nowcasting engine designed to predict highly localized, rapidly evolving thunderstorms and lightning strikes minutes before they happen."*

---

### SLIDE 2: THE PROBLEM & OUR SOLUTION
**Visual Layout:**
*   **Left Side (The Problem):** A graphic showing a traditional weather model (NWP) taking 6 hours to compute, while a thunderstorm develops in 20 minutes.
*   **Right Side (The Solution):** The StormSight pipeline: `Observations` $\rightarrow$ `Deep Learning` $\rightarrow$ `15-Min Updates`.
*   **Bullet Points:**
    *   **Problem:** Traditional NWP models are too slow and coarse for rapid convective initiation.
    *   **Solution:** AI fusion of Radar, Satellite, and Lightning data.
    *   **Differentiation:** Standard extrapolation just "moves" existing storms. Our AI predicts non-linear storm *growth and decay*.

**Speaker Script:**
> *"The fundamental problem in meteorology today is that severe thunderstorms can initiate, peak, and dissipate in under an hour. Traditional physics-based models, or NWPs, take hours to run on supercomputers. By the time the forecast is published, the storm has already caused damage. 
> 
> Current short-term solutions rely on 'optical flow'—which basically just takes a radar image and moves it forward in a straight line. It cannot predict when a new storm will suddenly erupt.
> 
> Our solution, StormSight, solves this. By fusing radar, satellite, and atmospheric data into a deep learning model, we don't just move existing storms; we use AI to model the non-linear physics of storm initiation and decay, generating 2km-resolution probability maps every 15 minutes."*

---

### SLIDE 3: TECHNICAL ARCHITECTURE
**Visual Layout:**
*   This slide MUST contain the master **System Workflow Diagram** (from the blueprint).
*   Keep text minimal; let the diagram breathe.
*   **Tech Stack Footer:** Python, PyTorch, FastAPI, PostGIS, React, Leaflet.

**Speaker Script:**
> *"This is the engine powering StormSight. 
> 
> On the left, we ingest heterogeneous data: Radial radar scans, geostationary satellite images, and sparse lightning coordinates. 
> 
> The magic happens in our Preprocessing Engine. We reproject all these different modalities onto a common 2-kilometer Cartesian grid and synchronize them into 15-minute time buckets. 
> 
> This multi-modal tensor is then fed into our Hybrid-Fusion ConvLSTM model. The CNN layers extract the spatial structure of the clouds, while the Long Short-Term Memory network captures how the storm is moving and growing over the past hour. 
> 
> The output is a high-resolution spatial probability grid up to 2 hours into the future, which our FastAPI backend converts into actionable warning polygons for our React dashboard."*

---

### SLIDE 4: FEASIBILITY, MVP, & ROADMAP
**Visual Layout:**
*   A clear timeline/roadmap graphic.
*   **MVP Box:** "Historical Replay Demo (Radar + Satellite IR) via CNN-ConvLSTM."
*   **Risk & Mitigation Box:** "Data Outages $\rightarrow$ Handled via Explicit Modality Masking."
*   **Roadmap:** `Data Pipeline` $\rightarrow$ `Baseline` $\rightarrow$ `MVP Model` $\rightarrow$ `Validation` $\rightarrow$ `Post-MVP Real-time Ops`.

**Speaker Script:**
> *"We understand that building a real-time meteorological pipeline is a massive undertaking. Therefore, our hackathon MVP is laser-focused on feasibility. 
> 
> For our MVP, we have built a Historical Replay System. We take a known severe weather event from the IMD and MOSDAC archives, feed it through our ConvLSTM architecture, and demonstrate the model's predictive skill against what actually occurred. 
> 
> We have engineered the system to degrade gracefully. If a radar station goes offline—a common real-world issue—our model uses explicit masking to automatically fall back and rely heavier on satellite and NWP data, ensuring continuous operation. This ensures a clear path from our student MVP to a robust, post-MVP operational deployment."*

---

### SLIDE 5: IMPACT & BENEFITS
**Visual Layout:**
*   A central node ("StormSight Warnings") branching out to key sectors: Aviation, Agriculture, Disaster Response, Power Grids.
*   **Key Metrics (Targets):** $+15$ to $+120$ minute lead times, $2\times 2$ km precision.
*   **Bullet Points:**
    *   **Operational:** Enhances IMD's short-term situational awareness without supercomputer overhead.
    *   **Safety:** Precise spatial polygons reduce the "cry wolf" effect of county-wide warnings.

**Speaker Script:**
> *"The impact of StormSight is measured in lives and assets saved. By providing accurate 0-to-2 hour nowcasts, we give air traffic controllers the lead time needed to reroute planes, we give power companies time to protect grid infrastructure from lightning, and we give emergency services precise polygons of where extreme convection will hit. 
> 
> Furthermore, by pinpointing the exact 2km grid where a storm will strike, we drastically reduce false alarms. When the public stops experiencing false alarms, they start trusting and acting upon the warnings that matter."*

---

### SLIDE 6: RESEARCH, VALIDATION, & REFERENCES
**Visual Layout:**
*   **Validation Graph Concept:** A small line chart showing our target CSI (Critical Success Index) outperforming the Persistence Baseline over time.
*   **Data Sources:** IMD DWR Archives, MOSDAC INSAT.
*   **References:** List 2-3 credible papers (e.g., Shi et al. on ConvLSTM for precipitation).

**Speaker Script:**
> *"Finally, StormSight is strictly grounded in meteorological science. We source our training data directly from the IMD and MOSDAC. 
> 
> We evaluate our model not using standard accuracy—which is misleading for rare weather events—but using the Critical Success Index (CSI) and False Alarm Ratio (FAR). Our target is to demonstrably beat optical-flow baselines, particularly at the critical 60-to-120 minute lead times. 
> 
> Thank you. We are now open for your questions."*

---

## 4. JUDGE DEFENSE & Q&A RESERVOIR

The presentation will generate intense technical questions. The team must memorize these defenses.

**Q: How do you handle missing data when a radar goes down?**
> **A:** "Our architecture utilizes 'Missing Modality Dropout' during training. We explicitly pass a boolean mask channel alongside the data. If radar is down, we zero-fill the radar tensor and set the mask channel to 1. The ConvLSTM learns to ignore the empty radar channel and shift its attention weights to the Satellite IR and NWP CAPE/CIN channels to infer the convective state."

**Q: Why use ConvLSTM instead of a Vision Transformer (ViT)?**
> **A:** "While ViTs represent the state-of-the-art for long-range spatial dependencies, they require massive datasets and massive compute clusters to converge. For a hackathon MVP, ConvLSTM is highly proven for spatiotemporal sequence prediction (like video frame prediction) and can be trained efficiently on consumer GPUs while still modeling the temporal growth of the storm."

**Q: How are you generating the ground-truth 'labels' for lightning?**
> **A:** "Lightning data arrives as sparse point coordinates. We cannot train a convolutional network on sparse points effectively. Therefore, we use Kernel Density Estimation (KDE) to convert the discrete points into a continuous 2D Gaussian probability heatmap on our 2km grid. The model is then trained to predict this future heatmap."

**Q: Why don't you use standard Accuracy as your metric?**
> **A:** "Severe weather is highly imbalanced; 99% of the map has no storms. If our model simply predicts 'No Storms Anywhere, Ever', it would achieve 99% accuracy. Instead, we use the Critical Success Index (CSI), which completely ignores True Negatives, focusing only on how well we predicted the actual storm occurrences and penalizing false alarms."

**Q: Can this scale to the whole country?**
> **A:** "Post-MVP, yes. The inference is highly parallelizable. We can divide the Indian subcontinent into overlapping $512 \times 512$ km tiles, run inference on a Kubernetes GPU cluster for each tile simultaneously, and stitch the probability grids back together on the backend before serving them via PostGIS."

---

## 5. TECH STACK SUMMARY (For the Architecture Slide)

*   **Data Ingestion (Future):** Apache Kafka (Pub/Sub for streaming), MinIO (Object Storage for heavy NetCDF/HDF5 arrays).
*   **Preprocessing:** `xarray`, `pyart` (Radar), `satpy` (Satellite), `geopandas` (Lightning), `rasterio` (Reprojection).
*   **ML Framework:** PyTorch, optimized with ONNX Runtime or TensorRT for low-latency inference.
*   **Backend Server:** FastAPI (Python), utilizing AsyncIO for non-blocking I/O during inference calls.
*   **Database:** PostgreSQL with PostGIS extension (for spatial queries and alert polygon intersections).
*   **Frontend:** React (Vite), TypeScript, Tailwind CSS, Leaflet.js (Canvas/WebGL for high-performance raster rendering).
*   **Orchestration:** Docker Compose (MVP) $\rightarrow$ Kubernetes Helm Charts (Future).
