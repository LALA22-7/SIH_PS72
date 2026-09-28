# StormSight — Complete Research, Data, API, Dataset & ML Implementation Report

**Project:** StormSight — Mission-Critical Meteorological Nowcasting  
**SIH:** Smart India Hackathon 2026 — Problem Statement 072  
**Objective:** AIML-based nowcasting of thunderstorms and lightning using radar, satellite, lightning and model/NWP data.

---

## 1. Executive Summary

StormSight is designed as a multimodal spatio-temporal AI system combining:

- Weather radar
- INSAT satellite observations
- Lightning observations
- Numerical Weather Prediction (NWP)
- Deep-learning-based temporal forecasting
- Storm tracking
- Alert generation
- FastAPI REST APIs
- WebSocket live updates
- React + Leaflet visualization

### Target operational metrics

| Metric | Target |
|---|---|
| Lead time | 0–120 minutes |
| Temporal resolution | 10–15 minutes |
| Spatial resolution | 2 km |
| Grid | 512 × 512 |
| Approx. domain | 1024 × 1024 km |
| End-to-end latency target | <90 seconds |
| Important radar threshold | ≥35 dBZ |
| Initial input history | 60 minutes |
| Future prediction | 120 minutes |

The original README defines the input tensor as:

```text
[B, T_in, C, H, W]
```

where:

```text
B = batch size
T_in = 4 historical frames
C = 7 channels
H = 512
W = 512
```

The seven channels are:

```text
C0 = Radar Reflectivity
C1 = Satellite TIR1
C2 = Satellite Water Vapour
C3 = TIR1 - WV
C4 = Lightning Density
C5 = NWP CAPE
C6 = NWP CIN
```

The output is:

```text
[B, 8, 2, 512, 512]
```

where the two output channels are:

```text
C0 = predicted radar reflectivity
C1 = predicted lightning probability
```

---

# 2. Recommended Overall Architecture

```text
                         REAL-TIME DATA
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
      RADAR               SATELLITE             LIGHTNING
        │                     │                     │
        ▼                     ▼                     ▼
       QC                 Calibration          Geolocation
        │                     │                     │
        ▼                     ▼                     ▼
 Cartesian Grid         Reprojection          Point/Grid
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                              ▼
                       TEMPORAL ALIGNMENT
                              │
                              ▼
                         NWP FEATURES
                              │
                              ▼
                        TENSOR FUSION
                              │
                              ▼
                       STORMSIGHT MODEL
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
              REFLECTIVITY         LIGHTNING
               FORECAST            PROBABILITY
                    │                   │
                    └─────────┬─────────┘
                              ▼
                         STORM TRACKER
                              │
                              ▼
                         ALERT ENGINE
                              │
                   ┌──────────┴──────────┐
                   ▼                     ▼
                POSTGIS                MINIO
                   │                     │
                   └──────────┬──────────┘
                              ▼
                           FASTAPI
                              │
                   ┌──────────┴──────────┐
                   ▼                     ▼
                  REST                WEBSOCKET
                   │                     │
                   └──────────┬──────────┘
                              ▼
                       REACT + LEAFLET
```

---

# 3. Data Source Strategy

A critical implementation point is that all required datasets will not necessarily be available through one public API.

The recommended strategy is:

### Final India-specific system

```text
IMD DWR
+
MOSDAC INSAT
+
ILDN Lightning
+
GFS / NCUM
```

### Open development/training system

```text
NOAA NEXRAD
+
SEVIR
+
GFS
+
ERA5
```

The open datasets allow the complete ML architecture to be developed before access to restricted or difficult Indian operational datasets is finalized.

---

# 4. Data Source Matrix

| Data | Preferred source | Backup/development source | Main purpose |
|---|---|---|---|
| Indian radar | IMD DWR | NOAA NEXRAD | Radar reflectivity |
| Satellite | MOSDAC INSAT-3D/3DR/3DS | GOES/SEVIR | Cloud/thermal structure |
| Indian lightning | ILDN | SEVIR GLM | Lightning density/probability |
| Commercial lightning | Vaisala GLD360 | ILDN | High-frequency lightning |
| NWP | GFS | ERA5 | CAPE/CIN/wind/shear |
| Indian NWP | NCUM/NCUM-R | GFS | India-focused NWP |
| Historical environment | ERA5 | — | Environmental context |
| Multimodal ML benchmark | SEVIR | — | Radar + satellite + lightning |

---

# 5. RADAR DATA

## 5.1 IMD DWR

The intended Indian radar source is the India Meteorological Department's Doppler Weather Radar network.

The target radar variable is:

```text
Reflectivity Z / dBZ
```

The intended processing is:

```text
Raw radar volume
       ↓
Quality control
       ↓
Georeferencing
       ↓
Reflectivity extraction
       ↓
CAPPI / Cartesian conversion
       ↓
2 km grid
       ↓
Normalization
```

### Important access issue

The public IMD API catalogue is not automatically equivalent to unrestricted access to raw DWR volumetric radar files.

Therefore, do not make the entire training pipeline dependent on raw IMD DWR until the exact data access, file format and permission are confirmed.

For development use NOAA NEXRAD.

---

# 6. IMD OFFICIAL API

Official reference:

https://api.imd.gov.in/public/api_reference.html

The IMD API catalogue includes operational services such as:

- current weather
- district nowcast
- station nowcast
- AWS/ARG observations
- warnings
- rainfall
- radar imagery
- lightning data

### Important distinction

An IMD radar-image endpoint can be useful for:

```text
Frontend visualization
```

but is not automatically a replacement for raw radar volumetric data needed to train a radar nowcasting model.

---

# 7. NOAA NEXRAD

NOAA provides open NEXRAD Level-II radar data.

Official/open-data reference:

https://registry.opendata.aws/noaa-nexrad/

NEXRAD is highly useful for:

- model development
- radar preprocessing
- Py-ART testing
- historical training
- pipeline validation

The archive is publicly accessible and supports no-sign-request AWS access.

Typical workflow:

```text
NEXRAD Level-II
      ↓
Py-ART
      ↓
Radar volume
      ↓
Reflectivity
      ↓
Cartesian grid
      ↓
Training tensor
```

---

# 8. Radar Processing Libraries

Recommended:

```text
arm_pyart
wradlib
xarray
xradar
numpy
scipy
pyproj
rasterio
GDAL
```

### Py-ART

Repository:

https://github.com/ARM-DOE/pyart

Purpose:

- read weather-radar data
- radar quality control
- visualization
- georeferencing
- grid generation

### wradlib

Repository:

https://github.com/wradlib/wradlib

Purpose:

- radar processing
- georeferencing
- clutter processing
- attenuation-related processing
- rainfall/radar utilities

---

# 9. Radar Processing Pipeline

```text
Raw Radar
   ↓
Read volume
   ↓
Quality Control
   ├── noise filtering
   ├── clutter removal
   ├── invalid-gate removal
   └── optional velocity processing
   ↓
Georeference
   ↓
Extract reflectivity
   ↓
CAPPI / Cartesian interpolation
   ↓
2 km model grid
   ↓
Spatial clipping
   ↓
Normalization
   ↓
Zarr / NetCDF / GeoTIFF
```

---

# 10. SATELLITE DATA — INSAT

Primary Indian source:

https://mosdac.gov.in/

Relevant satellites:

- INSAT-3D
- INSAT-3DR
- INSAT-3DS

MOSDAC is the Indian meteorological satellite data platform associated with ISRO/SAC.

---

# 11. INSAT Variables

Recommended channels:

```text
TIR1
TIR2
Water Vapour
TIR1 - Water Vapour
```

The initial StormSight model can use:

```text
TIR1
WV
TIR1-WV
```

as specified in the original architecture.

MOSDAC also provides multiple derived meteorological products.

---

# 12. MOSDAC Data Download API

Official documentation:

https://www.mosdac.gov.in/downloadapi-manual

The API supports dataset-oriented downloads using parameters such as:

```text
datasetId
startTime
endTime
boundingBox
gId
```

General workflow:

```text
MOSDAC dataset discovery
        ↓
Dataset ID
        ↓
Time range
        ↓
Bounding box
        ↓
Download API
        ↓
HDF/HDF5 data
```

Authentication/account requirements should be handled according to MOSDAC's current access policy.

---

# 13. Satellite Processing

Recommended libraries:

```text
satpy
pyresample
xarray
h5py
rasterio
pyproj
numpy
```

Pipeline:

```text
MOSDAC INSAT file
        ↓
HDF/HDF5 read
        ↓
Calibration
        ↓
Geolocation
        ↓
Lat/Lon extraction
        ↓
Reprojection
        ↓
2 km common grid
        ↓
Temporal alignment
        ↓
Normalization
```

### Important resolution note

If the original satellite product has a coarser native resolution, interpolation onto a 2 km grid does not create new physical satellite information.

It creates a common 2 km model grid.

---

# 14. MOSDAC Near-Real-Time Discovery

MOSDAC also provides feeds for relevant INSAT products.

Useful for:

```text
new-file detection
      ↓
download
      ↓
processing
      ↓
Kafka event
```

Reference:

https://www.mosdac.gov.in/rss-feed

---

# 15. LIGHTNING DATA

The original architecture proposes:

```text
ILDN / GLD360
      ↓
Point lightning events
      ↓
GeoPandas
      ↓
Gaussian KDE
      ↓
2D lightning density
```

This is a suitable architecture.

---

# 16. ILDN

Indian Lightning Detection Network:

https://ildn.in/

ILDN provides lightning-related data products including:

- stroke data
- flash data
- sferic-related records
- density statistics
- daily files
- structured data
- near-live/low-latency feeds
- timestamp/geographic searches

The network is especially relevant because the project is India-focused.

Access terms and bulk-data requirements must be checked with ILDN for the intended use.

---

# 17. ILDN Data Representation

A lightning event can contain fields such as:

```text
timestamp
latitude
longitude
peak current
polarity
```

Example conceptual record:

```json
{
  "timestamp": "2026-09-28T04:15:00Z",
  "latitude": 28.67,
  "longitude": 77.43,
  "peak_current_ka": 42.3,
  "polarity": 1
}
```

---

# 18. Lightning Preprocessing

```text
Lightning points
      ↓
Time window selection
      ↓
Spatial binning
      ↓
KDE / density estimation
      ↓
2D grid
      ↓
Normalization
      ↓
Model input
```

For example:

```text
t = 10:00
Lightning observations from 09:45–10:00
        ↓
15-minute density map
```

---

# 19. Lightning Target

For training, lightning can be represented as:

### Binary occurrence

```text
0 = no lightning
1 = lightning occurred
```

or:

### Probability

```text
0.0 → no expected lightning
1.0 → high probability
```

The second output of the model is:

```text
Predicted Lightning Probability
```

---

# 20. GLD360

Vaisala GLD360:

https://www.vaisala.com/en/products/systems/lightning-data/gld360

Documentation:

https://iris.vaisala.com/doc/en_US/gld360.html

GLD360 is a commercial lightning network.

It provides high-quality lightning observations, but it should not be a hard dependency for an SIH prototype unless appropriate access is available.

Recommended priority:

```text
ILDN first
GLD360 optional
```

---

# 21. SEVIR — Key Development Dataset

SEVIR is one of the most useful datasets for developing StormSight.

Official open-data listing:

https://registry.opendata.aws/sevir/

SEVIR contains aligned Earth-observation data including:

- satellite observations
- radar
- lightning

It is particularly useful because the data modalities are spatially and temporally aligned for machine-learning research.

Typical modalities include:

```text
GOES satellite
NEXRAD radar
GOES GLM lightning
```

---

# 22. Why SEVIR Is Important

StormSight's core concept is:

```text
Radar
+
Satellite
+
Lightning
```

SEVIR already contains a multimodal combination of these observations.

Therefore:

```text
SEVIR
   ↓
Multimodal architecture
   ↓
Training/testing
   ↓
India-specific fine-tuning
```

This avoids blocking model development on restricted Indian data.

The complete SEVIR dataset is large, so do not initially download everything.

---

# 23. SEVIR Access

Official AWS registry:

https://registry.opendata.aws/sevir/

Useful repository:

https://github.com/MIT-AI-Accelerator/eie-sevir

SEVIR challenge/tools:

https://github.com/MIT-AI-Accelerator/sevir_challenges

A catalog-first approach is recommended:

```text
CATALOG.csv
      ↓
select events
      ↓
download required modalities
      ↓
create training windows
```

---

# 24. NWP DATA — GFS

NOAA GFS is the easiest operational-style NWP source for the prototype.

Official NOMADS:

https://nomads.ncep.noaa.gov/pub/data/nccf/com/gfs/prod/

GFS can provide environmental information such as:

```text
CAPE
CIN
temperature
pressure
humidity
wind
geopotential height
```

depending on product/run/level.

---

# 25. GFS Processing

```text
NOMADS
   ↓
GRIB2
   ↓
cfgrib
   ↓
xarray
   ↓
Variable selection
   ↓
Derived-index calculation if needed
   ↓
Spatial interpolation
   ↓
2 km common grid
   ↓
Temporal alignment
```

Recommended libraries:

```text
xarray
cfgrib
eccodes
numpy
scipy
pyproj
```

---

# 26. Recommended NWP Variables

Start with:

```text
CAPE
CIN
0–6 km bulk shear
850 hPa wind
500 hPa wind
```

Do not start with dozens of NWP channels.

Add more only after measuring whether they improve validation performance.

---

# 27. ERA5

Copernicus Climate Data Store:

https://cds.climate.copernicus.eu/

ERA5 is useful for:

- historical environmental conditions
- training augmentation
- CAPE/CIN-related environmental information
- wind/shear context
- historical case analysis

ERA5 is a reanalysis dataset and should not be treated as a replacement for observed radar.

Single levels:

https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels

Pressure levels:

https://cds.climate.copernicus.eu/datasets/reanalysis-era5-pressure-levels

---

# 28. NCUM / NCUM-R

NCMRWF:

https://nwp.ncmrwf.gov.in/

NCUM is India's unified numerical weather prediction system.

NCUM-R is especially relevant to regional forecasting over India.

The NCMRWF ecosystem provides model guidance and research related to:

- convection
- regional forecasting
- lightning
- environmental conditions

NCUM should be treated as a valuable India-specific enhancement, but GFS is easier to use for the initial prototype.

Recommended progression:

```text
GFS
 ↓
working prototype
 ↓
NCUM integration
 ↓
India-specific enhancement
```

---

# 29. Complete Dataset Strategy

## Dataset A — India operational/research

```text
IMD DWR
+
INSAT
+
ILDN
+
GFS / NCUM
```

Purpose:

```text
Final India-focused StormSight
```

---

## Dataset B — SEVIR

```text
NEXRAD
+
GOES ABI
+
GOES GLM
```

Purpose:

```text
Multimodal model development
```

---

## Dataset C — ERA5

```text
ERA5
```

Purpose:

```text
Historical environmental/NWP features
```

---

# 30. ML Development Strategy

Do not immediately train the full seven-channel system.

Use progressive development.

## Model V1 — Radar only

```text
4 radar frames
      ↓
CNN Encoder
      ↓
ConvLSTM
      ↓
U-Net Decoder
      ↓
8 future radar frames
```

Purpose:

- validate data pipeline
- validate temporal model
- establish baseline

---

## Model V2 — Radar + satellite

```text
Radar
+
TIR1
+
WV
      ↓
Multimodal fusion
      ↓
Forecast
```

---

## Model V3 — Radar + satellite + lightning

```text
Radar
+
Satellite
+
Lightning
      ↓
Multimodal model
```

---

## Model V4 — Full StormSight

```text
Radar
+
Satellite
+
Lightning
+
NWP
      ↓
Fusion
      ↓
Temporal model
      ↓
Radar + Lightning forecast
```

---

# 31. Recommended Model Architecture

```text
                    RADAR
                      │
                 CNN Encoder
                      │
                   ConvLSTM
                      │
                      ▼
                Radar Features
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
   Satellite       Lightning        NWP
    Encoder          Encoder        Encoder
       │              │              │
       └──────────────┼──────────────┘
                      ▼
               Multimodal Fusion
                      │
               Temporal Module
                      │
                U-Net Decoder
                      │
            ┌─────────┴─────────┐
            ▼                   ▼
      Reflectivity         Lightning
       Forecast            Probability
```

---

# 32. ConvLSTM / U-Net

The initial architecture should remain:

```text
CNN
+
ConvLSTM
+
U-Net decoder
```

Reasons:

- comparatively simple
- suitable for spatio-temporal data
- easy to explain to judges
- easier to train than a very large transformer
- easier to deploy within hackathon constraints

---

# 33. Earthformer

Earthformer is a possible advanced temporal architecture.

Repository:

https://github.com/amazon-science/earth-forecasting-transformer

It is designed for spatio-temporal Earth forecasting and has been evaluated on datasets such as SEVIR.

Potential future architecture:

```text
CNN Encoder
      ↓
Earthformer
      ↓
Decoder
```

It should be treated as a later experiment, not a requirement for the first MVP.

---

# 34. DGMR

DeepMind's precipitation nowcasting research provides another reference architecture.

Repository:

https://github.com/google-deepmind/deepmind-research/tree/master/nowcasting

Generative approaches can eventually be used to produce multiple possible future storm states instead of one deterministic forecast.

---

# 35. Baselines

StormSight should not be evaluated only against itself.

Use:

## Baseline 1 — Persistence

```text
Future = latest observed radar
```

## Baseline 2 — Optical flow

Extrapolate existing radar echoes according to estimated movement.

## Baseline 3 — ConvLSTM

Single-modality neural model.

## Baseline 4 — Multimodal StormSight

Final proposed system.

This provides an objective comparison.

---

# 36. Input Tensor

Recommended first complete tensor:

```text
[B, 4, 7, 512, 512]
```

Channels:

| Channel | Variable |
|---|---|
| 0 | Radar reflectivity |
| 1 | TIR1 |
| 2 | Water vapour |
| 3 | TIR1 − WV |
| 4 | Lightning density |
| 5 | CAPE |
| 6 | CIN |

Potential future channels:

```text
0–6 km bulk shear
Storm-relative helicity
850-hPa wind
500-hPa wind
```

Add them only after validation.

---

# 37. Output Tensor

```text
[B, 8, 2, 512, 512]
```

For each 15-minute future interval:

```text
Radar reflectivity
Lightning probability
```

Timeline:

```text
+15 min
+30 min
+45 min
+60 min
+75 min
+90 min
+105 min
+120 min
```

---

# 38. Temporal Alignment

Different sources have different update frequencies.

Example:

```text
Radar:
10:00
10:10
10:20
10:30

Satellite:
10:00
10:15
10:30

Lightning:
continuous

GFS:
model cycles
```

Create a common timeline:

```text
10:00
10:15
10:30
10:45
...
```

Then:

- aggregate faster data
- interpolate/resample slower data where scientifically appropriate
- never invent observations
- record source timestamps and interpolation status

---

# 39. Spatial Alignment

All inputs must be mapped to the same model grid.

Target:

```text
512 × 512
2 km spacing
```

For regional domains, a suitable projected CRS can be used.

UTM is appropriate for a localized domain.

For a very large India-wide domain, a suitable national/regional projection such as Lambert Conformal Conic should be considered.

For the hackathon, a fixed regional domain is preferable to attempting the entire country initially.

---

# 40. Training Sample Construction

Example:

```text
09:00
09:15
09:30
09:45
10:00
10:15
10:30
10:45
11:00
11:15
11:30
11:45
```

Input:

```text
09:00
09:15
09:30
09:45
```

Target:

```text
10:00
10:15
10:30
10:45
11:00
11:15
11:30
11:45
```

---

# 41. Dataset Splitting

Avoid random frame-level splitting.

Use event/time-based splitting.

Example:

```text
Training:
2018–2023

Validation:
2024

Testing:
2025
```

or split by storm event IDs.

This avoids leakage where nearly identical frames from the same storm appear in both train and test sets.

---

# 42. Normalization

## Radar

```text
dBZ
clip to a suitable physical range
normalize to [0,1]
```

A common initial approach:

```text
[-10, 70] dBZ → [0,1]
```

---

## Satellite

```text
Brightness temperature
      ↓
physical-range clipping
      ↓
normalization
```

---

## CAPE

Because CAPE can have a strongly skewed distribution:

```text
log1p(CAPE)
      ↓
standardization
```

can be evaluated.

---

## Lightning

```text
density
 ↓
log1p(density)
 ↓
normalization
```

---

## CIN

Clip extreme values and standardize.

---

# 43. Loss Function

The original architecture proposes:

```text
L_total =
α × L_WB-MSE
+
β × (1 − SSIM)
+
γ × L_Soft-CSI
```

where high-reflectivity pixels receive greater importance.

This is useful because ordinary MSE tends to produce overly smooth predictions.

---

# 44. Recommended Radar Loss

Start with:

```text
Weighted Huber/MAE
+
SSIM
+
threshold-sensitive loss
```

Give greater weight to areas above important reflectivity thresholds.

Example conceptual weighting:

```python
weight =
    1 + alpha * sigmoid((reflectivity - 35) / temperature)
```

This makes severe-convection regions more important.

---

# 45. Recommended Lightning Loss

Lightning is sparse.

Suitable options:

```text
Weighted BCE
+
Focal Loss
```

The goal is to prevent the model from learning the trivial strategy:

```text
almost everything = no lightning
```

---

# 46. Evaluation Metrics — Radar

Do not report only accuracy.

Use:

```text
MAE
RMSE
SSIM
CSI
POD
FAR
```

Evaluate at thresholds such as:

```text
20 dBZ
30 dBZ
35 dBZ
40 dBZ
45 dBZ
```

and for different forecast horizons:

```text
0–30 min
30–60 min
60–90 min
90–120 min
```

---

# 47. Evaluation Metrics — Lightning

Use:

```text
CSI
POD
FAR
Precision
Recall
F1
Brier Score
AUC
```

Again evaluate separately by lead time.

---

# 48. Storm Tracking

Add an explicit storm-object tracking layer.

```text
Predicted radar
      ↓
35 dBZ threshold
      ↓
Binary mask
      ↓
Connected components
      ↓
Storm objects
      ↓
Centroid calculation
      ↓
Track matching
      ↓
Velocity
      ↓
Direction
      ↓
Growth/decay
```

Outputs can include:

```text
storm center
storm direction
storm speed
storm area
maximum reflectivity
growth rate
predicted path
```

---

# 49. Alert Engine

The neural model should produce probabilities/fields.

A separate alert engine should convert these into user-facing alerts.

```text
ML prediction
      ↓
thresholding
      ↓
morphological cleanup
      ↓
connected components
      ↓
storm tracking
      ↓
rule evaluation
      ↓
GeoJSON alert
```

Potential project-defined rules:

```text
Reflectivity > 35 dBZ
+
persistence
```

for thunderstorm candidates.

Higher-intensity project-defined conditions can combine:

```text
high reflectivity
+
rapid intensification
+
high lightning probability
```

Do not describe these as official IMD warning criteria unless the exact official criteria are adopted and cited.

---

# 50. Storage Architecture

## MinIO / S3

Use for large binary objects:

```text
raw radar
raw satellite
raw lightning
raw NWP
processed rasters
training tensors
prediction grids
GeoTIFF
Zarr
model checkpoints
map tiles
```

Suggested structure:

```text
radar-raw/
satellite-raw/
lightning-raw/
nwp-raw/

radar-processed/
satellite-processed/
lightning-processed/
nwp-processed/

fusion-tensors/
predictions/
tiles/
models/
```

---

# 51. Kafka

Kafka should transport lightweight events and metadata rather than huge arrays.

Example:

```json
{
  "source": "radar",
  "timestamp": "2026-09-28T03:30:00Z",
  "bbox": [77.0, 28.0, 78.0, 29.0],
  "object_uri": "s3://radar-raw/example.zarr"
}
```

Do not send entire 512×512×time arrays directly through Kafka.

---

# 52. Recommended Kafka Topics

Original topics:

```text
ingest.radar.raw
ingest.satellite.insat
ingest.lightning.strikes
inference.nowcast.completed
```

Recommended additions:

```text
ingest.nwp.raw
fusion.tensor.ready
alerts.generated
```

Suggested partitioning:

```text
radar       → radar station / region
satellite   → channel / region
lightning   → geohash / spatial tile
NWP         → model run / region
```

---

# 53. PostgreSQL + PostGIS

PostGIS should store metadata and vector/geospatial objects.

Store:

```text
radar frame metadata
radar station metadata
lightning events
storm objects
prediction metadata
alert polygons
```

Do not store large prediction tensors directly inside PostgreSQL.

Use:

```text
PostGIS = metadata/geospatial index
MinIO   = raster/tensor/blob storage
```

---

# 54. Suggested Tables

## radar_frames

```sql
CREATE TABLE radar_frames (
    id UUID PRIMARY KEY,
    timestamp TIMESTAMPTZ NOT NULL,
    radar_station VARCHAR(10) NOT NULL,
    minio_uri VARCHAR(255) NOT NULL,
    bbox GEOMETRY(Polygon, 4326) NOT NULL
);
```

## lightning_events

```sql
CREATE TABLE lightning_events (
    id UUID PRIMARY KEY,
    timestamp TIMESTAMPTZ NOT NULL,
    peak_current_ka FLOAT,
    polarity SMALLINT CHECK (polarity IN (-1, 1)),
    geom GEOMETRY(Point, 4326) NOT NULL
);
```

## nowcast_predictions

```sql
CREATE TABLE nowcast_predictions (
    id UUID PRIMARY KEY,
    forecast_reference_time TIMESTAMPTZ NOT NULL,
    valid_time TIMESTAMPTZ NOT NULL,
    lead_time_minutes INTEGER NOT NULL,
    minio_uri_reflectivity VARCHAR(255) NOT NULL,
    minio_uri_lightning_prob VARCHAR(255) NOT NULL,
    bbox GEOMETRY(Polygon, 4326) NOT NULL
);
```

## severe_weather_alerts

```sql
CREATE TABLE severe_weather_alerts (
    id UUID PRIMARY KEY,
    issued_at TIMESTAMPTZ NOT NULL,
    valid_until TIMESTAMPTZ NOT NULL,
    severity_level VARCHAR(20) NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    alert_polygon GEOMETRY(Polygon, 4326) NOT NULL
);
```

Indexes:

```sql
CREATE INDEX idx_lightning_geom
ON lightning_events
USING GIST (geom);

CREATE INDEX idx_alerts_geom
ON severe_weather_alerts
USING GIST (alert_polygon);
```

---

# 55. Redis

Redis can be used for:

```text
latest forecast
active alerts
short-lived cache
WebSocket Pub/Sub
model status
```

Example conceptual keys:

```text
alert:latest
forecast:latest:<region>
radar:latest
satellite:latest
model:status
```

---

# 56. FastAPI

The original API should be expanded beyond the three basic endpoints.

## Health

```http
GET /api/v1/health
```

## Latest observations

```http
GET /api/v1/observations/latest
```

## Radar

```http
GET /api/v1/radar/latest
GET /api/v1/radar/{timestamp}
GET /api/v1/radar/stations
```

## Satellite

```http
GET /api/v1/satellite/latest
GET /api/v1/satellite/{timestamp}
```

## Lightning

```http
GET /api/v1/lightning/latest
GET /api/v1/lightning/{timestamp}
```

## Forecast

```http
GET /api/v1/nowcast/forecast?lat={lat}&lon={lon}&radius={km}
```

## Forecast frames

```http
GET /api/v1/nowcast/frames/{forecast_id}
```

## Alerts

```http
GET /api/v1/alerts/active
GET /api/v1/alerts/history
GET /api/v1/alerts/{alert_id}
```

## Model information

```http
GET /api/v1/model/info
```

---

# 57. Forecast API Example

Request:

```http
GET /api/v1/nowcast/forecast?lat=28.67&lon=77.43&radius=50
```

Response concept:

```json
{
  "reference_time": "2026-09-28T04:00:00Z",
  "location": {
    "lat": 28.67,
    "lon": 77.43
  },
  "forecasts": [
    {
      "lead_time_minutes": 15,
      "reflectivity_dbz": 42.1,
      "lightning_probability": 0.73
    },
    {
      "lead_time_minutes": 30,
      "reflectivity_dbz": 45.8,
      "lightning_probability": 0.81
    }
  ]
}
```

---

# 58. Radar API

```http
GET /api/v1/radar/latest
```

Recommended response:

```json
{
  "timestamp": "2026-09-28T04:00:00Z",
  "source": "IMD_DWR",
  "bbox": [],
  "tile_url_template": "https://example/tiles/radar/{z}/{x}/{y}.png"
}
```

The API should return a pre-signed/object-store URL or tile template rather than transferring the entire raster through JSON.

---

# 59. Alert API

```http
GET /api/v1/alerts/active
```

Return GeoJSON:

```json
{
  "type": "FeatureCollection",
  "features": []
}
```

Each feature can include:

```text
alert ID
event type
severity
issued time
valid time
maximum predicted reflectivity
maximum lightning probability
storm speed
storm direction
```

---

# 60. WebSocket

Endpoint:

```text
/ws/live-stream
```

Heartbeat:

```json
{
  "type": "ping"
}
```

Server:

```json
{
  "type": "pong"
}
```

Recommended events:

```text
NEW_ALERT
NOWCAST_FRAME_READY
RADAR_FRAME_READY
LIGHTNING_UPDATE
MODEL_STATUS
```

---

# 61. NEW_ALERT Event

```json
{
  "type": "NEW_ALERT",
  "data": {
    "alert_id": "a82f",
    "severity": "WARNING",
    "event_type": "THUNDERSTORM",
    "valid_from": "2026-09-28T04:00:00Z",
    "valid_until": "2026-09-28T05:00:00Z",
    "polygon_geojson": {
      "type": "Polygon",
      "coordinates": []
    }
  }
}
```

---

# 62. NOWCAST_FRAME_READY Event

```json
{
  "type": "NOWCAST_FRAME_READY",
  "data": {
    "valid_time": "2026-09-28T04:15:00Z",
    "tile_url_template": "https://minio.local/tiles/nowcast_Z/{z}/{x}/{y}.png"
  }
}
```

---

# 63. Recommended Technology Stack

## Data processing

```text
Python
NumPy
SciPy
xarray
Py-ART
wradlib
xradar
Satpy
pyresample
GeoPandas
Rasterio
GDAL
PyProj
cfgrib
h5py
```

## ML

```text
PyTorch
CNN
U-Net
ConvLSTM
Attention
Earthformer (later)
```

## Infrastructure

```text
Docker
Kafka
MinIO
PostgreSQL
PostGIS
Redis
```

## Backend

```text
FastAPI
Pydantic
SQLAlchemy
Alembic
WebSockets
```

## Frontend

```text
React
Vite
Leaflet
GeoJSON
WebSocket
```

---

# 64. Recommended MVP

The first working version should be:

```text
SEVIR / NEXRAD
      ↓
Radar preprocessing
      ↓
ConvLSTM + U-Net
      ↓
0–120 minute radar forecast
      ↓
35 dBZ storm mask
      ↓
Storm tracking
      ↓
GeoJSON alert
      ↓
FastAPI
      ↓
WebSocket
      ↓
React + Leaflet
```

Then add:

```text
INSAT
ILDN
GFS
```

as multimodal inputs.

---

# 65. Recommended SIH Development Sequence

## Sprint 1 — Radar AI

```text
SEVIR/NEXRAD
 ↓
Radar preprocessing
 ↓
ConvLSTM
 ↓
Future radar
```

Goal:

A working radar nowcasting model.

---

## Sprint 2 — Multimodal AI

```text
Radar
+
Satellite
+
Lightning
```

Goal:

Demonstrate the main scientific differentiator.

---

## Sprint 3 — India Data

```text
MOSDAC INSAT
+
ILDN
+
IMD APIs
```

Goal:

India-specific operational/research data integration.

---

## Sprint 4 — NWP

```text
GFS
 ↓
CAPE
CIN
Shear
```

Goal:

Add environmental context.

---

## Sprint 5 — Production Pipeline

```text
Kafka
MinIO
PostGIS
Redis
FastAPI
WebSocket
React
```

Goal:

Complete operational prototype.

---

# 66. Key Risks

## Risk 1 — Raw IMD DWR access

Do not assume raw DWR volume data is publicly downloadable through the same IMD APIs used for operational weather products.

Mitigation:

```text
NEXRAD/SEVIR for development
+
IMD DWR once access is confirmed
```

---

## Risk 2 — GLD360

GLD360 is commercial.

Mitigation:

```text
Use ILDN
```

and treat GLD360 as optional.

---

## Risk 3 — NCUM

NCUM is valuable but should not block the prototype.

Mitigation:

```text
GFS first
NCUM later
```

---

## Risk 4 — Huge datasets

SEVIR and other radar archives can be very large.

Mitigation:

```text
catalog-first selection
+
event-based download
+
Zarr/chunked storage
```

---

## Risk 5 — Spatial resolution misunderstanding

Resampling a 4 km satellite product to a 2 km grid does not make the satellite observation physically 2 km resolution.

Document:

```text
native resolution
+
model grid resolution
```

separately.

---

# 67. Important Research References

## Official India

### IMD API

https://api.imd.gov.in/public/api_reference.html

### MOSDAC

https://mosdac.gov.in/

### MOSDAC INSAT-3D

https://mosdac.gov.in/insat-3d

### MOSDAC Download API

https://www.mosdac.gov.in/downloadapi-manual

### MOSDAC RSS

https://www.mosdac.gov.in/rss-feed

### NCMRWF

https://nwp.ncmrwf.gov.in/

### ILDN

https://ildn.in/

---

## Open/global datasets

### NOAA NEXRAD

https://registry.opendata.aws/noaa-nexrad/

### NOAA NOMADS / GFS

https://nomads.ncep.noaa.gov/pub/data/nccf/com/gfs/prod/

### SEVIR

https://registry.opendata.aws/sevir/

### ERA5

https://cds.climate.copernicus.eu/

---

## Research/open-source repositories

### Py-ART

https://github.com/ARM-DOE/pyart

### wradlib

https://github.com/wradlib/wradlib

### SEVIR tools

https://github.com/MIT-AI-Accelerator/eie-sevir

### SEVIR challenges

https://github.com/MIT-AI-Accelerator/sevir_challenges

### Earthformer

https://github.com/amazon-science/earth-forecasting-transformer

### DeepMind nowcasting research

https://github.com/google-deepmind/deepmind-research/tree/master/nowcasting

---

# 68. Final Recommended Data Pipeline

```text
                    ┌───────────────┐
                    │   IMD DWR     │
                    └───────┬───────┘
                            │
                            ▼
                      Radar Ingestor
                            │
                            ▼
                           QC
                            │
                            ▼
                     Cartesian Grid
                            │
                            │
┌───────────────┐           │
│    MOSDAC     │           │
│ INSAT-3D/3DR  │───────────┤
└───────┬───────┘           │
        │                   │
        ▼                   │
Satellite Ingestor          │
        │                   │
        └───────────┐       │
                    │       │
┌───────────────┐   │       │
│     ILDN      │───┤       │
│  Lightning    │   │       │
└───────────────┘   │       │
                    │       │
┌───────────────┐   │       │
│ GFS / NCUM    │───┤       │
│     NWP       │   │       │
└───────────────┘   │       │
                    ▼       │
             Temporal Alignment
                    │
                    ▼
             Spatial Reprojection
                    │
                    ▼
              Tensor Fusion
                    │
                    ▼
              StormSight ML
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
     Radar Forecast      Lightning Probability
          │                   │
          └─────────┬─────────┘
                    ▼
              Storm Tracker
                    │
                    ▼
               Alert Engine
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       PostGIS               MinIO
          │                   │
          └─────────┬─────────┘
                    ▼
                  FastAPI
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
         REST              WebSocket
          │                   │
          └─────────┬─────────┘
                    ▼
             React + Leaflet
```

---

# 69. Final Recommendation

The most robust implementation strategy is:

> **SEVIR/NEXRAD → develop and validate the ML pipeline → MOSDAC/ILDN/IMD/GFS → India-specific fine-tuning → Kafka/MinIO/PostGIS → FastAPI/WebSocket → React/Leaflet.**

Do not make the project dependent on GLD360 or raw IMD DWR access before those data permissions and formats are confirmed.

The most important open development dataset is **SEVIR**, because it provides aligned radar, satellite and lightning observations. The most important Indian sources are **MOSDAC for INSAT, ILDN for lightning, IMD for operational weather/nowcast/radar-related services, and NCMRWF/NCUM for India-focused NWP**.

---

# 70. One-Line Project Definition

**StormSight is a multimodal spatio-temporal AI system that fuses radar, satellite, lightning and NWP observations to forecast the location, intensity and lightning probability of thunderstorms up to 120 minutes ahead and convert those forecasts into geospatial, real-time alerts.**
