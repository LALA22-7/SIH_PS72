import { create } from 'zustand';
import { type WeatherAlert, type RiskLevel } from '../types/nowcast';

export type MapLayer = 'thunderstorm' | 'lightning' | 'composite' | 'observations';

interface NowcastState {
  cells: any[];
  alerts: WeatherAlert[];
  timestamp: string | null;
  selectedLayer: MapLayer;
  mapCenter: [number, number] | null;
  mapZoom: number | null;
  setNowcastData: (data: any) => void;
  setAlerts: (alerts: WeatherAlert[]) => void;
  setSelectedLayer: (layer: MapLayer) => void;
  setMapCenter: (center: [number, number] | null, zoom?: number) => void;
}

// Hardcoded demo dates to ensure a consistent baseline for testing and review
const DEMO_ISSUED_AT = new Date('2026-11-12T14:30:00Z').toISOString();
const DEMO_VALID_UNTIL_CRITICAL = new Date('2026-11-12T16:30:00Z').toISOString();
const DEMO_VALID_UNTIL_HIGH = new Date('2026-11-12T16:00:00Z').toISOString();
const DEMO_VALID_UNTIL_MEDIUM = new Date('2026-11-12T17:30:00Z').toISOString();
const DEMO_VALID_UNTIL_LOW = new Date('2026-11-12T18:30:00Z').toISOString();

export const DEMO_ALERTS: WeatherAlert[] = [
  {
    id: 'alert-001',
    title: 'Severe Thunderstorm Warning',
    description: 'Intense convective activity detected. Large hail and damaging winds expected.',
    riskLevel: 'extreme',
    latitude: 26.8467,
    longitude: 80.9462,
    radius_km: 60,
    issuedAt: DEMO_ISSUED_AT,
    validUntil: DEMO_VALID_UNTIL_CRITICAL,
    eventType: 'THUNDERSTORM',
    probability: 0.92,
  },
  {
    id: 'alert-002',
    title: 'Lightning Activity — Severe Risk',
    description: 'Cloud-to-ground lightning frequency exceeding 50 strokes/min within the zone.',
    riskLevel: 'severe',
    latitude: 28.6139,
    longitude: 77.209,
    radius_km: 45,
    issuedAt: DEMO_ISSUED_AT,
    validUntil: DEMO_VALID_UNTIL_HIGH,
    eventType: 'EXTREME_LIGHTNING',
    probability: 0.78,
  },
  {
    id: 'alert-003',
    title: 'Thunderstorm Watch',
    description: 'Atmospheric conditions favorable for isolated storm development.',
    riskLevel: 'moderate',
    latitude: 22.5726,
    longitude: 88.3639,
    radius_km: 80,
    issuedAt: DEMO_ISSUED_AT,
    validUntil: DEMO_VALID_UNTIL_MEDIUM,
    eventType: 'THUNDERSTORM',
    probability: 0.45,
  },
  {
    id: 'alert-004',
    title: 'Low Risk Advisory',
    description: 'Minor instability detected. No immediate threat but monitoring advised.',
    riskLevel: 'low',
    latitude: 18.5204,
    longitude: 73.8567,
    radius_km: 50,
    issuedAt: DEMO_ISSUED_AT,
    validUntil: DEMO_VALID_UNTIL_LOW,
    eventType: 'THUNDERSTORM',
    probability: 0.25,
  },
];

export const useNowcastStore = create<NowcastState>((set) => ({
  cells: [],
  alerts: [],
  timestamp: null,
  selectedLayer: 'thunderstorm',
  mapCenter: null,
  mapZoom: null,
  setNowcastData: (data) => set({ cells: data.cells, timestamp: data.issued_at }),
  setAlerts: (alerts) => set({ alerts }),
  setSelectedLayer: (layer) => set({ selectedLayer: layer }),
  setMapCenter: (center, zoom) => set((state) => ({ 
    mapCenter: center, 
    mapZoom: zoom ?? state.mapZoom 
  })),
}));
