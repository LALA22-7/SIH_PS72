import React from 'react';
import { Home, Map, Activity, Calendar, Bell, BarChart2, RotateCcw, Settings, ArrowLeft } from 'lucide-react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'nowcast', label: 'Nowcast Map', icon: Map },
  { id: 'observations', label: 'Observations', icon: Activity },
  { id: 'timeline', label: 'Forecast Timeline', icon: Calendar },
  { id: 'alerts', label: 'Alerts', icon: Bell },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  { id: 'replay', label: 'Historical Replay', icon: RotateCcw },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  return (
    <aside className="w-64 h-full bg-nowcast-sidebar border-r border-nowcast-card flex flex-col">
      <div className="flex items-center gap-3 p-6 mb-2">
        <div className="flex items-center justify-center w-8 h-8 rounded bg-nowcast-accent/10">
          <img src="/logo.png" alt="StormSight Logo" className="w-6 h-6 object-contain" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-nowcast-text font-bold text-lg leading-tight tracking-wide">StormSight</h1>
          <span className="text-nowcast-textMuted text-[10px] tracking-wider uppercase">Nowcasting for a Safer Tomorrow</span>
        </div>
      </div>
      
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        <Link 
          to="/"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 text-nowcast-textMuted hover:bg-nowcast-card hover:text-nowcast-text mb-4 border border-nowcast-card/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="text-[10px] font-semibold text-nowcast-textMuted uppercase tracking-wider px-3 mb-2 mt-4">Views</div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={clsx(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200",
                isActive 
                  ? "bg-nowcast-accent/10 text-nowcast-accent font-medium" 
                  : "text-nowcast-textMuted hover:bg-nowcast-card hover:text-nowcast-text"
              )}
            >
              <Icon className={clsx("w-4 h-4", isActive ? "text-nowcast-accent" : "")} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
