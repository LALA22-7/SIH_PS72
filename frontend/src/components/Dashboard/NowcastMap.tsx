import React, { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import { useNowcastStore } from '../../store/useNowcastStore';
import { getNowcast, getAlerts } from '../../lib/api';
import {
  type WeatherAlert,
  type RiskLevel,
  RISK_LEVEL_CONFIG,
} from '../../types/nowcast';
import { AlertTriangle, Shield, Zap, CloudLightning, X } from 'lucide-react';

// India center
const MAP_CENTER = [20.5937, 78.9629] as [number, number];
const ZOOM = 5;

/**
 * Demo alerts for development. In production these come from
 * the `/api/v1/alerts/active` endpoint and WebSocket pushes.
 */
const DEMO_ALERTS: WeatherAlert[] = [
  {
    id: 'alert-001',
    title: 'Severe Thunderstorm Warning',
    description: 'Intense convective activity detected. Large hail and damaging winds expected.',
    riskLevel: 'critical',
    latitude: 26.8467,
    longitude: 80.9462,
    radius_km: 60,
    issuedAt: new Date().toISOString(),
    validUntil: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    eventType: 'THUNDERSTORM',
    probability: 0.92,
  },
  {
    id: 'alert-002',
    title: 'Lightning Activity — High Risk',
    description: 'Cloud-to-ground lightning frequency exceeding 50 strokes/min within the zone.',
    riskLevel: 'high',
    latitude: 28.6139,
    longitude: 77.209,
    radius_km: 45,
    issuedAt: new Date().toISOString(),
    validUntil: new Date(Date.now() + 90 * 60 * 1000).toISOString(),
    eventType: 'EXTREME_LIGHTNING',
    probability: 0.78,
  },
  {
    id: 'alert-003',
    title: 'Thunderstorm Watch',
    description: 'Atmospheric conditions favorable for isolated storm development.',
    riskLevel: 'medium',
    latitude: 22.5726,
    longitude: 88.3639,
    radius_km: 80,
    issuedAt: new Date().toISOString(),
    validUntil: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    eventType: 'THUNDERSTORM',
    probability: 0.55,
  },
  {
    id: 'alert-004',
    title: 'Low Risk Advisory',
    description: 'Minor instability detected. No immediate threat but monitoring advised.',
    riskLevel: 'low',
    latitude: 18.5204,
    longitude: 73.8567,
    radius_km: 50,
    issuedAt: new Date().toISOString(),
    validUntil: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
    eventType: 'THUNDERSTORM',
    probability: 0.25,
  },
];

/** Resolve the icon component by event type. */
function getEventIcon(eventType: string) {
  switch (eventType) {
    case 'EXTREME_LIGHTNING':
      return <Zap className="w-4 h-4" />;
    case 'HAILSTORM':
    case 'SQUALL':
      return <CloudLightning className="w-4 h-4" />;
    default:
      return <AlertTriangle className="w-4 h-4" />;
  }
}

/** Format a relative time string from an ISO timestamp. */
function formatRelativeTime(iso: string): string {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff <= 0) return 'Expired';
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 60) return `${minutes}m remaining`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${minutes % 60}m remaining`;
}

/** Fit the map to show all alert and cell markers. */
function MapUpdater({ cells, alerts }: { cells: any[]; alerts: WeatherAlert[] }) {
  const map = useMap();
  useEffect(() => {
    const points: [number, number][] = [
      ...cells.map((c: any) => [c.center.lat, c.center.lon] as [number, number]),
      ...alerts.map((a) => [a.latitude, a.longitude] as [number, number]),
    ];
    if (points.length > 0) {
      // Optionally auto-fit bounds
    }
  }, [cells, alerts, map]);
  return null;
}


// ────────────────────────────────────────────────────────────────
//  NowcastMap – primary export
// ────────────────────────────────────────────────────────────────
export function NowcastMap() {
  const { cells, setNowcastData, alerts, setAlerts } = useNowcastStore();
  const [loading, setLoading] = useState(true);
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const data = await getNowcast();
        setNowcastData(data);
      } catch (err) {
        console.error('Failed to fetch initial nowcast', err);
      }

      try {
        const alertData = await getAlerts();
        if (alertData?.features?.length) {
          setAlerts(
            alertData.features.map((f: any) => ({
              id: f.properties.id,
              title: f.properties.title ?? 'Weather Alert',
              description: f.properties.description ?? '',
              riskLevel: mapSeverityToRisk(f.properties.severity_level),
              latitude: f.geometry.coordinates[1],
              longitude: f.geometry.coordinates[0],
              radius_km: f.properties.radius_km ?? 50,
              issuedAt: f.properties.issued_at,
              validUntil: f.properties.valid_until,
              eventType: f.properties.event_type ?? 'THUNDERSTORM',
              probability: f.properties.probability ?? 0.5,
            })),
          );
        }
      } catch {
        // Fallback to demo alerts
        setAlerts(DEMO_ALERTS);
      }

      setLoading(false);
    };
    fetchInitial();

    // TODO: Connect WebSocket for real-time updates
  }, [setNowcastData]);

  const visibleAlerts = useMemo(
    () => alerts.filter((a) => !dismissedAlerts.has(a.id)),
    [alerts, dismissedAlerts],
  );

  const handleFocusAlert = (_alert: WeatherAlert) => {
    // Could pan the map to the alert location here
  };

  return (
    <div className="h-full w-full bg-nowcast-bg relative">
      <MapContainer
        center={MAP_CENTER}
        zoom={ZOOM}
        className="h-full w-full z-0"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />

        {/* ── Storm Cells ── */}
        {cells.map((cell) => (
          <Circle
            key={cell.cell_id}
            center={[cell.center.lat, cell.center.lon]}
            radius={cell.radius_km * 1000}
            pathOptions={{
              color: cell.severity === 'severe' ? '#FF1744' : '#FFAA00',
              fillColor: cell.severity === 'severe' ? '#FF1744' : '#FFAA00',
              fillOpacity: 0.4,
            }}
          >
            <Popup className="nowcast-popup">
              <div className="font-sans">
                <h3 className="font-bold text-slate-800">Storm Cell {cell.cell_id}</h3>
                <p className="text-sm">
                  Severity: <span className="uppercase font-semibold">{cell.severity}</span>
                </p>
                <p className="text-sm">Probability: {(cell.probability * 100).toFixed(0)}%</p>
              </div>
            </Popup>
          </Circle>
        ))}

        {/* ── Warning Alert Zones ── */}
        {visibleAlerts.map((alert) => {
          const cfg = RISK_LEVEL_CONFIG[alert.riskLevel];
          return (
            <React.Fragment key={alert.id}>
              {/* Outer glow ring for high/critical */}
              {(alert.riskLevel === 'critical' || alert.riskLevel === 'high') && (
                <Circle
                  center={[alert.latitude, alert.longitude]}
                  radius={alert.radius_km * 1000 * 1.3}
                  pathOptions={{
                    color: cfg.color,
                    fillColor: cfg.fillColor,
                    fillOpacity: 0.05,
                    weight: 1,
                    dashArray: '8 4',
                  }}
                />
              )}
              {/* Primary alert zone */}
              <Circle
                center={[alert.latitude, alert.longitude]}
                radius={alert.radius_km * 1000}
                pathOptions={{
                  color: cfg.color,
                  fillColor: cfg.fillColor,
                  fillOpacity: cfg.fillOpacity,
                  weight: 2,
                }}
              >
                <Popup>
                  <div className="font-sans min-w-[200px]">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="flex items-center justify-center w-6 h-6 rounded text-white text-sm"
                        style={{ backgroundColor: cfg.color }}
                      >
                        {cfg.icon}
                      </span>
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: cfg.color }}
                        >
                          {cfg.label} Risk
                        </span>
                        <h3 className="font-bold text-slate-800 text-sm leading-tight">
                          {alert.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">{alert.description}</p>
                    <div className="flex justify-between text-xs text-slate-500 border-t pt-2">
                      <span>Prob: <b>{(alert.probability * 100).toFixed(0)}%</b></span>
                      <span>{formatRelativeTime(alert.validUntil)}</span>
                    </div>
                  </div>
                </Popup>
              </Circle>
              {/* Center marker dot */}
              <Circle
                center={[alert.latitude, alert.longitude]}
                radius={5000}
                pathOptions={{
                  color: cfg.color,
                  fillColor: cfg.color,
                  fillOpacity: 0.9,
                  weight: 0,
                }}
              />
            </React.Fragment>
          );
        })}

        <MapUpdater cells={cells} alerts={visibleAlerts} />
      </MapContainer>

      {/* ── Risk Legend ── */}
      <div className="absolute bottom-4 right-4 z-[500] bg-nowcast-sidebar/90 backdrop-blur-md border border-nowcast-border rounded-lg p-3 shadow-lg">
        <div className="text-[10px] font-semibold text-nowcast-textMuted uppercase tracking-wider mb-2">
        <div className="flex flex-col gap-1.5">
          {(['low', 'medium', 'high', 'critical'] as RiskLevel[]).map((level) => {
            const cfg = RISK_LEVEL_CONFIG[level];
            const count = visibleAlerts.filter((a) => a.riskLevel === level).length;
            return (
              <div key={level} className="flex items-center gap-2 text-xs">
                <div
                  className="w-3 h-3 rounded-full border"
                  style={{ backgroundColor: cfg.fillColor, borderColor: cfg.color, opacity: count > 0 ? 1 : 0.3 }}
                />
                <span className={count > 0 ? 'text-nowcast-text font-medium' : 'text-nowcast-textMuted'}>
                  {cfg.label}
                </span>
                {count > 0 && (
                  <span className={`ml-auto font-bold ${cfg.textClass}`}>{count}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Loading Overlay ── */}
      {loading && (
        <div className="absolute inset-0 z-[600] flex items-center justify-center bg-nowcast-bg/60 backdrop-blur-sm">
          <div className="rounded-lg bg-nowcast-sidebar p-4 shadow-xl border border-nowcast-border text-nowcast-text flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-nowcast-accent border-t-transparent rounded-full animate-spin" />
            Connecting to Nowcast stream...
          </div>
        </div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
//  Helpers
// ────────────────────────────────────────────────────────────────

/** Maps backend severity strings to the 4-tier risk enum. */
function mapSeverityToRisk(severity?: string): RiskLevel {
  switch (severity?.toUpperCase()) {
    case 'WARNING':
      return 'critical';
    case 'WATCH':
      return 'high';
    case 'ADVISORY':
      return 'medium';
    default:
      return 'low';
  }
}
