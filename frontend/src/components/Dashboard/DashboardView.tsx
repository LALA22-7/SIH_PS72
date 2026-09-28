import React from 'react';
import { Cloud, Zap, AlertTriangle, MapPin, Settings2, Plus, Minus, Layers } from 'lucide-react';
import { NowcastMap } from './NowcastMap';

export function DashboardView() {
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

        {/* Right Details Panel */}
        <div className="w-80 bg-nowcast-sidebar border border-nowcast-card rounded-xl p-5 flex flex-col gap-6 shrink-0 overflow-y-auto">
          <div>
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-nowcast-text">Location Details</h3>
                <Settings2 className="w-4 h-4 text-nowcast-textMuted cursor-pointer hover:text-nowcast-text" />
             </div>
             <div className="flex items-center gap-2 mb-4">
               <MapPin className="w-5 h-5 text-nowcast-accent" />
               <span className="text-lg font-medium">Lucknow, UP</span>
             </div>
             <div className="flex rounded-md bg-nowcast-card p-1">
               <button className="flex-1 py-1 text-xs font-medium bg-nowcast-sidebar rounded shadow text-nowcast-text">Nowcast</button>
               <button className="flex-1 py-1 text-xs font-medium text-nowcast-textMuted hover:text-nowcast-text">Observations</button>
             </div>
          </div>

          <div>
             <h4 className="text-xs text-nowcast-textMuted font-medium mb-3">Thunderstorm Probability (Next 2 Hours)</h4>
             {/* Mock Chart */}
             <div className="h-32 w-full relative">
               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M0,80 Q20,60 40,20 T80,30 T100,50 L100,100 L0,100 Z" fill="url(#grad)" opacity="0.2" />
                 <path d="M0,80 Q20,60 40,20 T80,30 T100,50" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                 <defs>
                   <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
                     <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 <circle cx="0" cy="80" r="3" fill="#f59e0b" className="animate-pulse" />
                 <circle cx="20" cy="50" r="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
                 <circle cx="40" cy="20" r="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
                 <circle cx="60" cy="25" r="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
                 <circle cx="80" cy="30" r="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
                 <circle cx="100" cy="50" r="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
               </svg>
               <div className="absolute inset-0 flex flex-col justify-between text-[8px] text-nowcast-textMuted opacity-50 py-1 pointer-events-none">
                 <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
               </div>
               <div className="absolute -bottom-4 left-0 right-0 flex justify-between text-[8px] text-nowcast-textMuted pointer-events-none">
                 <span>Now</span><span>+15m</span><span>+30m</span><span>+60m</span><span>+90m</span><span>+120m</span>
               </div>
             </div>
          </div>

          <div className="mt-4 flex flex-col gap-4">
             <div className="flex items-center justify-between pb-3 border-b border-nowcast-card">
               <span className="text-sm text-nowcast-textMuted">Current Status</span>
               <span className="text-xs font-semibold px-2 py-1 rounded bg-nowcast-warning/10 text-nowcast-warning border border-nowcast-warning/20">MODERATE RISK</span>
             </div>
             <div className="flex items-center justify-between">
               <span className="text-sm text-nowcast-textMuted">Probability (Next 30 min)</span>
               <span className="text-sm font-bold text-nowcast-warning">68%</span>
             </div>
             <div className="flex items-center justify-between">
               <span className="text-sm text-nowcast-textMuted">Lightning Probability</span>
               <span className="text-sm font-bold text-nowcast-warning">52%</span>
             </div>
             <div className="flex items-center justify-between">
               <span className="text-sm text-nowcast-textMuted">Expected Onset</span>
               <span className="text-sm font-bold text-nowcast-danger">Within 30-60 min</span>
             </div>
             <div className="flex items-center justify-between pt-3 border-t border-nowcast-card">
               <span className="text-sm text-nowcast-textMuted">Suggested Action</span>
               <span className="text-sm font-medium text-nowcast-text">Monitor & Be Prepared</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
