/** Risk levels for weather alerts, ordered by severity. */
export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

/** A single weather warning alert with geolocation and risk classification. */
export interface WeatherAlert {
  id: string;
  title: string;
  description: string;
  riskLevel: RiskLevel;
  latitude: number;
  longitude: number;
  radius_km: number;
  issuedAt: string;
  validUntil: string;
  eventType: 'THUNDERSTORM' | 'EXTREME_LIGHTNING' | 'HAILSTORM' | 'SQUALL';
  probability: number;
}

/** Visual configuration for each risk level. */
export interface RiskLevelConfig {
  label: string;
  color: string;
  fillColor: string;
  fillOpacity: number;
  icon: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
}

/** Map from risk level to its visual config. */
export const RISK_LEVEL_CONFIG: Record<RiskLevel, RiskLevelConfig> = {
  low: {
    label: 'Low',
    color: '#00E676',
    fillColor: '#00E676',
    fillOpacity: 0.15,
    icon: '✓',
    bgClass: 'bg-nowcast-riskLow/10',
    textClass: 'text-nowcast-riskLow',
    borderClass: 'border-nowcast-riskLow/30',
  },
  medium: {
    label: 'Medium',
    color: '#FFAA00',
    fillColor: '#FFAA00',
    fillOpacity: 0.2,
    icon: '⚠',
    bgClass: 'bg-nowcast-riskMedium/10',
    textClass: 'text-nowcast-riskMedium',
    borderClass: 'border-nowcast-riskMedium/30',
  },
  high: {
    label: 'High',
    color: '#FF6D00',
    fillColor: '#FF6D00',
    fillOpacity: 0.3,
    icon: '⚡',
    bgClass: 'bg-nowcast-riskHigh/10',
    textClass: 'text-nowcast-riskHigh',
    borderClass: 'border-nowcast-riskHigh/30',
  },
  critical: {
    label: 'Critical',
    color: '#FF1744',
    fillColor: '#FF1744',
    fillOpacity: 0.4,
    icon: '🔴',
    bgClass: 'bg-nowcast-riskCritical/10',
    textClass: 'text-nowcast-riskCritical',
    borderClass: 'border-nowcast-riskCritical/30',
  },
};
