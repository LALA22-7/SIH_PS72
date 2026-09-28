import React, { useMemo } from 'react';
import { Cloud, Zap, AlertTriangle, MapPin, Settings2, Plus, Minus, Layers } from 'lucide-react';
import { NowcastMap } from './NowcastMap';
import { useNowcastStore } from '../../store/useNowcastStore';
import { RISK_LEVEL_CONFIG, type RiskLevel } from '../../types/nowcast';

function formatRelativeTime(iso: string): string {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff <= 0) return 'Expired';
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 60) return `${minutes}m remaining`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${minutes % 60}m remaining`;
}

export function DashboardView() {
  const { alerts } = useNowcastStore();
  
  const sortedAlerts = useMemo(() => {
    const order: Record<RiskLevel, number> = { critical: 0, high: 1, medium: 2, low: 3 };
    return [...alerts].sort((a, b) => order[a.riskLevel] - order[b.riskLevel]);
  }, [alerts]);

  return (
    <div className="flex flex-col h-full gap-4 p-4 overflow-y-auto">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-4 gap-4 shrink-0">
        <div className="bg-nowcast-sidebar border border-nowcast-card rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-nowcast-textMuted font-medium uppercase tracking-wider">Active Thunderstorm Cells</span>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">12</span>
            <span className="text-sm font-medium text-nowcast-success flex items-center">↑ 3</span>
          </div>
          <span className="text-xs text-nowcast-textMuted mt-1">vs previous hour</span>
        </div>

        <div className="bg-nowcast-sidebar border border-nowcast-card rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-nowcast-accent" />
              <span className="text-xs text-nowcast-textMuted font-medium uppercase tracking-wider">Lightning Events</span>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">2,184</span>
            <span className="text-sm font-medium text-nowcast-danger flex items-center">↑ 18%</span>
          </div>
          <span className="text-xs text-nowcast-textMuted mt-1">last 1 hour</span>
        </div>

        <div className="bg-nowcast-sidebar border border-nowcast-card rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-nowcast-danger" />
              <span className="text-xs text-nowcast-textMuted font-medium uppercase tracking-wider">High Risk Areas</span>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">5</span>
          </div>
          <span className="text-xs text-nowcast-textMuted mt-1">&gt; 70% probability</span>
        </div>

        <div className="bg-nowcast-sidebar border border-nowcast-card rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-nowcast-textMuted font-medium uppercase tracking-wider">Coverage Area</span>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-xl font-bold">North India</span>
          </div>
          <span className="text-xs text-nowcast-textMuted mt-1">(Demo Region)</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex gap-4 flex-1 min-h-[500px]">
        {/* Map Section */}
        <div className="flex-1 bg-nowcast-sidebar border border-nowcast-card rounded-xl overflow-hidden relative flex flex-col">
          {/* Map Tabs */}
          <div className="flex items-center gap-2 p-3 bg-nowcast-sidebar border-b border-nowcast-card shrink-0 z-10 relative">
            <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-nowcast-accent/10 text-nowcast-accent border border-nowcast-accent/20 transition-colors">
              Thunderstorm Probability
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-nowcast-textMuted hover:bg-nowcast-card transition-colors border border-transparent">
              Lightning Probability
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-nowcast-textMuted hover:bg-nowcast-card transition-colors border border-transparent">
              Composite View
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-nowcast-textMuted hover:bg-nowcast-card transition-colors border border-transparent">
              Observations
            </button>
          </div>
          
          <div className="flex-1 relative">
            <NowcastMap />
            
            {/* Overlay UI on top of Map */}
            <div className="absolute top-4 right-4 z-[400] bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded text-xs border border-white/10 shadow-lg">
              Valid Time: 14:45 UTC (+15 min)
            </div>

            {/* Map controls */}
            <div className="absolute top-4 left-4 z-[400] flex flex-col gap-2">
               <div className="flex flex-col bg-nowcast-sidebar/90 backdrop-blur-md border border-nowcast-card rounded-md shadow-lg overflow-hidden">
                 <button className="p-2 hover:bg-nowcast-card transition-colors border-b border-nowcast-card"><Plus className="w-4 h-4 text-nowcast-text" /></button>
                 <button className="p-2 hover:bg-nowcast-card transition-colors"><Minus className="w-4 h-4 text-nowcast-text" /></button>
               </div>
               <button className="p-2 bg-nowcast-sidebar/90 backdrop-blur-md border border-nowcast-card rounded-md hover:bg-nowcast-card transition-colors shadow-lg">
                 <Layers className="w-4 h-4 text-nowcast-text" />
               </button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-[400] bg-nowcast-sidebar/90 backdrop-blur-md border border-nowcast-card rounded-lg p-3 shadow-lg w-64">
              <div className="text-xs font-medium text-nowcast-text mb-2">Thunderstorm Probability (%)</div>
              <div className="h-3 w-full rounded-sm bg-gradient-to-r from-[#170B3B] via-[#85165E] to-[#FCA311]"></div>
              <div className="flex justify-between text-[10px] text-nowcast-textMuted mt-1">
                <span>0</span>
                <span>20</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Warnings Panel */}
        <div className="w-80 bg-nowcast-sidebar border border-nowcast-card rounded-xl p-5 flex flex-col gap-4 shrink-0 overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-nowcast-text flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-nowcast-warning" />
              Active Warnings
            </h3>
            <span className="bg-nowcast-card text-xs font-medium px-2 py-0.5 rounded-full border border-nowcast-border">
              {alerts.length} Total
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {sortedAlerts.length === 0 ? (
              <div className="text-sm text-nowcast-textMuted text-center py-8">
                No active warnings in this region.
              </div>
            ) : (
              sortedAlerts.map((alert) => {
                const cfg = RISK_LEVEL_CONFIG[alert.riskLevel];
                return (
                  <div
                    key={alert.id}
                    className={`
                      flex flex-col gap-1.5 p-3 rounded-lg border
                      shadow-sm ${cfg.bgClass} ${cfg.borderClass}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold uppercase tracking-wider ${cfg.textClass}`}>
                          {cfg.label} Risk
                        </span>
                      </div>
                      <span className="text-[10px] text-nowcast-textMuted font-medium">
                        {formatRelativeTime(alert.validUntil)}
                      </span>
                    </div>
                    
                    <p className="text-sm font-bold text-nowcast-text leading-tight mt-1">
                      {alert.title}
                    </p>
                    <p className="text-xs text-nowcast-textMuted line-clamp-2 leading-relaxed">
                      {alert.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-nowcast-card/50">
                      <span className="text-xs text-nowcast-textMuted">Thunderstorm Probability</span>
                      <span className={`text-xs font-bold ${cfg.textClass}`}>
                        {(alert.probability * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
