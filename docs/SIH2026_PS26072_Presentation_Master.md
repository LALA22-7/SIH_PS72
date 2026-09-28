# SIH 2026 — PS26072
# Presentation Master

> **Project:** StormSight
> **Problem Statement:** PS26072
> **Theme:** Disaster Management
> **Category:** Software

---

# SLIDE 1

<div align="center">
  <br><br><br>
  
  ### TEAM STORMSIGHT
  *(Badge/Logo)* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **SIH 2026**

  <br><br><br>

  <h1 style="color: #1A365D; border-bottom: 3px solid #1A365D; display: inline-block;">
    STORMSIGHT
  </h1>
  <h2>AI-POWERED NOWCASTING</h2>
  
  <br>

  ```text
           THUNDERSTORM + LIGHTNING
                      ↓
  [ RADAR ] • [ SATELLITE ] • [ LIGHTNING ]
  ```

  <br><br>
  
  **PS26072:** AIML based Nowcasting of thunderstorm and lightning using atmospheric observation
  
  **Ministry of Earth Sciences (MoES) | India Meteorological Department (IMD)**
  
  <br><br><br>
</div>

<details>
<summary>🎤 Speaker Notes</summary>

**Goal:** Establish identity and immediately communicate what the project is. Keep it professional and brief. Establish credibility.

> *"Good morning respected judges. We are Team [Name], and we are tackling Problem Statement 26072 from the Ministry of Earth Sciences. Our project, StormSight, is an AI-driven nowcasting engine designed to predict highly localized, rapidly evolving thunderstorms and lightning strikes minutes before they happen."*

**Judge Takeaway:** This team is organized, professional, and understands the core mandate of PS26072.

</details>

---

# SLIDE 2

**TEAM STORMSIGHT** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **SIH 2026**

<h2 style="color: #1A365D; border-bottom: 2px solid #1A365D;">IDEA TITLE & PROPOSED SOLUTION</h2>

<table width="100%">
<tr>
<td width="45%" valign="top" style="background-color: #F8FAFC; padding: 20px; border-radius: 8px;">

### THE GAP

**Rapidly evolving thunderstorms**
Initiate and peak in minutes.

**Fragmented observations**
Data sits in separate, unsynchronized silos.

**Short warning window**
NWP models take 6 hours to compute; optical-flow baselines only advect existing storms without modeling growth.

</td>
<td width="5%" valign="middle" align="center">
→
</td>
<td width="50%" valign="top" style="background-color: #F0F9FF; padding: 20px; border-radius: 8px;">

### OUR SOLUTION

```text
[ Radar ]
    +       ──┐ 
[ Satellite ] │
    +       ──┼──→ [ AI NOWCAST ]
[ Lightning ] │          ↓
    +       ──┘  [ Probability Maps ]
[ NWP Data ]             ↓
                 [ Early Warning ]
```

<br>

**1. MULTI-SOURCE** <br>
*Fuses 4 distinct atmospheric modalities.*

**2. TEMPORAL AI** <br>
*Learns the non-linear physics of storm initiation and decay.*

**3. SPATIAL NOWCAST** <br>
*Generates future probability fields at 2km precision.*

</td>
</tr>
</table>

<details>
<summary>🎤 Speaker Notes</summary>

**Goal:** Ensure the viewer understands the core concept within seconds. Differentiate from generic weather forecasting.

> *"The fundamental problem in meteorology today is that severe thunderstorms can initiate, peak, and dissipate in under an hour. Traditional physics-based models take hours to run. Current short-term baselines, like optical flow, basically just take a radar image and move it forward in a straight line. They cannot predict when a new storm will suddenly erupt.
> 
> Our solution, StormSight, solves this. By fusing radar, satellite, and atmospheric data into a deep learning model, we don't just move existing storms; we use AI to model the non-linear physics of storm initiation and decay, generating 2km-resolution probability maps every 15 minutes."*

**Judge Takeaway:** The team understands the scientific limitations of current systems (optical flow vs initiation) and has a targeted AI solution.

</details>

---

# SLIDE 3

**TEAM STORMSIGHT** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **SIH 2026**

<h2 style="color: #1A365D; border-bottom: 2px solid #1A365D;">TECHNICAL APPROACH</h2>

<table width="100%">
<tr>
<td width="25%" valign="top">

**TECH STACK**
<hr>

**Frontend**
React / TypeScript

**Backend**
FastAPI / Python

**ML Engine**
PyTorch
CNN + ConvLSTM

**Data**
xarray, satpy

**Database**
PostgreSQL + PostGIS

**Maps**
Leaflet

</td>
<td width="75%" valign="top">

```mermaid
flowchart LR
    subgraph DATA ["DATA LAYER (Historical)"]
        R[Radar]
        S[Satellite]
        L[Lightning]
    end

    subgraph PROC ["PROCESSING"]
        A[Spatial Alignment]
        T[Temporal Sync]
    end

    subgraph ML ["AI / ML"]
        F[Feature Fusion]
        C[CNN Encoder]
        V[ConvLSTM]
    end

    subgraph APP ["APPLICATION"]
        P[Probability Maps]
        UI[Web Dashboard]
    end

    DATA --> PROC
    PROC --> ML
    ML --> APP
    
    style DATA fill:#DBEAFE,stroke:#3B82F6,stroke-width:2px
    style PROC fill:#D1FAE5,stroke:#10B981,stroke-width:2px
    style ML fill:#EDE9FE,stroke:#8B5CF6,stroke-width:2px
    style APP fill:#FFE4E6,stroke:#F43F5E,stroke-width:2px
```

</td>
</tr>
</table>

<br>

<table width="100%">
<tr>
<td width="16%" align="center" style="background:#F8FAFC;"><b>DATA</b><br><small>Multi-source observations</small></td>
<td width="16%" align="center" style="background:#F8FAFC;"><b>ALIGN</b><br><small>Common space + time</small></td>
<td width="16%" align="center" style="background:#F8FAFC;"><b>FUSE</b><br><small>Multi-modal tensor</small></td>
<td width="16%" align="center" style="background:#F8FAFC;"><b>LEARN</b><br><small>CNN + ConvLSTM</small></td>
<td width="16%" align="center" style="background:#F8FAFC;"><b>NOWCAST</b><br><small>Future probability field</small></td>
<td width="16%" align="center" style="background:#F8FAFC;"><b>WARN</b><br><small>Risk zones + alerts</small></td>
</tr>
</table>

<details>
<summary>🎤 Speaker Notes</summary>

**Goal:** Prove the pipeline is highly engineered, feasible, and logically sound.

> *"This is the engine powering StormSight. 
> On the left, we ingest heterogeneous historical data: Radial radar scans, geostationary satellite images, and sparse lightning coordinates. 
> The magic happens in our Preprocessing Engine. We reproject all these different modalities onto a common 2-kilometer Cartesian grid and synchronize them into 15-minute time buckets. 
> This multi-modal tensor is then fed into our Hybrid-Fusion ConvLSTM model. The CNN layers extract the spatial structure of the clouds, while the Long Short-Term Memory network captures how the storm is moving and growing over the past hour. 
> The output is a high-resolution spatial probability grid up to 2 hours into the future, which our FastAPI backend converts into actionable warning polygons for our React dashboard."*

**Judge Takeaway:** The team has a concrete, workable plan for fusing incompatible data grids and running them through a suitable AI architecture.

</details>

---

# SLIDE 4

**TEAM STORMSIGHT** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **SIH 2026**

<h2 style="color: #1A365D; border-bottom: 2px solid #1A365D;">FEASIBILITY & VIABILITY</h2>

> **Prototype first. Validate scientifically. Scale operationally.**

<table width="100%">
<tr>
<td width="48%" valign="top" style="border-right: 1px solid #E2E8F0; padding-right: 15px;">

### SIH MVP
*Focuses on a verifiable prototype*

*   **Historical event replay**
*   **Radar + Satellite IR**
*   **Advection Baseline**
*   **CNN + ConvLSTM Model**
*   **FastAPI + Interactive Dashboard**

</td>
<td width="48%" valign="top" style="padding-left: 15px;">

### POST-MVP FUTURE
*Focuses on operational scaling*

*   **Live streaming ingestion**
*   **Full 4-Modality Fusion (Radar + Sat + Light + NWP)**
*   **Uncertainty & Ensembles**
*   **Regional/National Scaling**

</td>
</tr>
</table>

<br>

**IMPLEMENTATION ROADMAP:**
```text
[ DATA ] → [ BASELINE ] → [ MVP MODEL ] → [ VALIDATION ] → [ REAL-TIME INGESTION ] → [ OPERATIONAL ]
```

<br>

**RISK & MITIGATION**
| Risk | Mitigation |
| :--- | :--- |
| **Missing observations** | Modality masks / explicit fallback strategy |
| **Different spatial scales** | Strict resampling to common 2km EPSG grid |
| **Compute limitations** | Lightweight MVP model (ConvLSTM vs heavy Transformer) |

<details>
<summary>🎤 Speaker Notes</summary>

**Goal:** Counter the judge's skepticism ("Can you actually build this?") by clearly delineating the hackathon scope from the ultimate vision.

> *"We understand that building a real-time national meteorological pipeline is a massive undertaking. Therefore, our hackathon MVP is laser-focused on feasibility. 
> For our MVP, we have built a Historical Replay System. We take a known severe weather event from the IMD archives, feed it through our ConvLSTM architecture, and demonstrate the model's predictive skill against what actually occurred. 
> We have engineered the system to degrade gracefully. If a radar station goes offline—a common real-world issue—our architecture uses explicit missing-data masks to automatically fall back to satellite and NWP data, ensuring continuous operation. This ensures a clear path from our student MVP to a robust, post-MVP operational deployment."*

**Judge Takeaway:** The team is pragmatic, understands deployment risks like sensor downtime, and has defined a realistic hackathon MVP.

</details>

---

# SLIDE 5

**TEAM STORMSIGHT** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **SIH 2026**

<h2 style="color: #1A365D; border-bottom: 2px solid #1A365D;">IMPACT & BENEFITS</h2>

<table width="100%">
<tr>
<td width="40%" valign="top">

### IMPACT

**Disaster Management** <br>
**Aviation** <br>
**Power Utilities** <br>
**Agriculture** <br>
**Emergency Response** <br>
**Public Safety**

</td>
<td width="60%" valign="top" style="background-color: #F8FAFC; padding: 20px; border-radius: 8px;">

### SYSTEM OUTPUTS (TARGETS)

🌩️ **Thunderstorm Probability Map**
⚡ **Lightning Probability Map**
🗺️ **Spatial Risk Zones (2x2 km)**
⏱️ **Forecast Timeline (0-120 mins)**
📊 **Confidence / Uncertainty**
🔔 **PostGIS Warning Alerts**

<br>

<div style="font-family: monospace; font-size: 0.9em;">
┌──────────────────────────────────────────────┐<br>
│ STORMSIGHT PROPOSED UI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:30 UTC │<br>
├───────────────────────┬──────────────────────┤<br>
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ NOWCAST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
│&nbsp;&nbsp;&nbsp;PROBABILITY MAP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ Thunderstorm 78%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ Lightning&nbsp;&nbsp;&nbsp;64%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
│&nbsp;&nbsp;&nbsp;███████████████&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ Lead time&nbsp;&nbsp;&nbsp;+30min&nbsp;&nbsp;&nbsp;│<br>
│&nbsp;&nbsp;&nbsp;███████████████&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
│&nbsp;&nbsp;&nbsp;███████████████&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ CONFIDENCE: Medium&nbsp;&nbsp;&nbsp;│<br>
├───────────────────────┴──────────────────────┤<br>
│ +15m&nbsp;&nbsp;&nbsp;+30m&nbsp;&nbsp;&nbsp;+45m&nbsp;&nbsp;&nbsp;+60m&nbsp;&nbsp;&nbsp;+90m&nbsp;&nbsp;&nbsp;+120m&nbsp;&nbsp;&nbsp;│<br>
└──────────────────────────────────────────────┘<br>
</div>

</td>
</tr>
</table>

<br>

```text
MULTI-SOURCE OBSERVATIONS → AI NOWCAST → LOCALIZED EARLY WARNING → BETTER PREPAREDNESS
```

<details>
<summary>🎤 Speaker Notes</summary>

**Goal:** Map the technical outputs directly to human impact without making fake economic claims.

> *"The impact of StormSight is measured in lives and assets saved. By providing accurate 0-to-2 hour probability maps, we give air traffic controllers the lead time needed to reroute planes, we give power companies time to protect grid infrastructure from lightning, and we give emergency services precise polygons of where extreme convection will hit. 
> Furthermore, by pinpointing the exact 2km grid where a storm will strike, we drastically reduce false alarms compared to county-wide warnings. When the public stops experiencing false alarms, they start trusting and acting upon the warnings that matter."*

**Judge Takeaway:** The project yields tangible, actionable outputs (polygons, timelines, probabilities) directly beneficial to key industries.

</details>

---

# SLIDE 6

**TEAM STORMSIGHT** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **SIH 2026**

<h2 style="color: #1A365D; border-bottom: 2px solid #1A365D;">RESEARCH & REFERENCES</h2>

<table width="100%">
<tr>
<td width="50%" valign="top">

### OFFICIAL & DATA SOURCES
*   **Problem Statement:** MoES / IMD PS26072
*   **Radar Data:** India Meteorological Department (IMD) DWR Archives
*   **Satellite Data:** MOSDAC / ISRO INSAT-3D/3DR
*   **Atmospheric Data:** Global Forecast System (GFS) / NCUM

</td>
<td width="50%" valign="top">

### METHODS & SOFTWARE
*   **Literature:** Shi et al., *Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting*
*   **Baseline Method:** Optical-flow / PySTEPS framework
*   **Software Stack:** PyTorch, FastAPI, PostGIS, Leaflet, xarray

</td>
</tr>
</table>

<br><br><br><br>
<hr>
<div align="center" style="color: #64748B;">
  <small>Official Sources • Scientific Literature • Dataset Documentation • Project Repository</small>
</div>

<details>
<summary>🎤 Speaker Notes</summary>

**Goal:** Establish scientific and academic credibility to close the presentation.

> *"Finally, StormSight is strictly grounded in meteorological science. We source our training data directly from the IMD and MOSDAC portals. 
> We evaluate our model not using standard accuracy—which is misleading for rare weather events—but using the Critical Success Index (CSI) and False Alarm Ratio (FAR). Our target is to demonstrably beat optical-flow baselines at the critical 60-to-120 minute lead times. 
> Thank you for your time. We are now open for your questions."*

**Judge Takeaway:** This is not just throwing data at a generic model; the team has read the foundational literature (Shi et al.) and understands proper meteorological validation (CSI/FAR).

</details>

---
---

# JUDGE Q&A RESERVOIR

*(This section is for the team to study and prepare for the post-presentation Q&A).*

**1. Why nowcasting instead of normal forecasting?**
Traditional NWP solves complex physics PDEs and takes hours to run. Thunderstorms can initiate and dissipate within 45 minutes. Nowcasting uses AI/extrapolation to provide immediate, short-term (0-2h) predictions that NWP simply cannot compute fast enough.

**2. Why AI? Why multiple modalities?**
Current standard nowcasting (Optical Flow) only advects (moves) existing radar echoes. It cannot predict when a storm will *form* or *grow*. AI can learn the non-linear physics of initiation by looking at multiple modalities: Satellite shows cloud top cooling, NWP shows instability (CAPE), and Radar shows current precipitation. All are needed to predict initiation.

**3. Why ConvLSTM? Why not a Transformer?**
ConvLSTM is a highly proven architecture for spatiotemporal sequence prediction (like video frames) and trains efficiently on standard GPUs. Vision Transformers require massive datasets and massive compute clusters to converge. ConvLSTM is the most feasible architecture for an MVP.

**4. How will labels be generated?**
We use future radar observations ($\ge 35$ dBZ) and lightning observations ($>0$ strikes in a grid cell) as the "ground truth" binary masks for the target variables at $t+15, \dots, t+120$.

**5. How do you handle missing data?**
Our architecture uses **Modality Masks**. If a radar feed goes down, we zero-fill the radar tensor and set a corresponding boolean mask channel to `True`. The network learns during training to shift its attention to the Satellite and NWP channels when the radar mask is active, preventing system collapse.

**6. How do you validate? What baseline do you compare against?**
We validate against an Optical Flow (advection) baseline using meteorological metrics: **Critical Success Index (CSI)**, **False Alarm Ratio (FAR)**, and **Probability of Detection (POD)**. 

**7. Why not just measure Accuracy?**
Severe weather is highly imbalanced; 99% of a map has no storms. A model that always predicts "No Storm" would achieve 99% accuracy. CSI ignores True Negatives, focusing only on how well we predicted actual storm occurrences and penalizing false alarms.

**8. What exactly is the MVP?**
The MVP is a **Historical Replay System**. We take a past severe weather event, process the historical Radar and Satellite data, run it through our pre-trained ConvLSTM, and display the predicted probability maps alongside what actually happened on a React dashboard.

---

# DESIGN SYSTEM

*   **Primary Color:** Dark Navy `#1A365D` (Titles, Headings, Borders)
*   **Data Block Color:** Pale Blue `#DBEAFE`
*   **Processing Block Color:** Pale Green `#D1FAE5`
*   **AI Block Color:** Pale Purple `#EDE9FE`
*   **App Block Color:** Pale Red `#FFE4E6`
*   **Typography:** Sans-serif for body (Inter/Roboto), clean and legible.
*   **Slide Dimension Ratio:** 16:9 (Standard Widescreen).

---

# PRESENTATION QA

- [x] Exactly six main presentation slides
- [x] SIH 2026 format respected
- [x] PS26072 correctly identified
- [x] No PS70 cyclone-specific content accidentally retained
- [x] No fabricated model metrics (everything labeled Target/Proposed)
- [x] No fabricated datasets
- [x] MVP clearly separated from future system
- [x] Slide 2 explains the idea visually
- [x] Slide 3 explains the architecture cleanly
- [x] Slide 4 explains feasibility and mitigation
- [x] Slide 5 explains impact without fake economic numbers
- [x] Slide 6 establishes research credibility
- [x] Mermaid diagrams render correctly
- [x] Text is readable at presentation scale
- [x] Technology choices match repository
- [x] Sources are verified
