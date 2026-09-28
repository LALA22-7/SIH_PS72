import React from 'react';
import { Search, ChevronDown, Bell, User } from 'lucide-react';

export function Topbar() {
  return (
    <header className="h-16 border-b border-nowcast-card bg-nowcast-bg flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-nowcast-textMuted" />
          <input 
            type="text" 
            placeholder="Search location (city, district, state)..." 
            className="w-full bg-nowcast-card border border-nowcast-card rounded-md py-1.5 pl-9 pr-4 text-sm text-nowcast-text placeholder:text-nowcast-textMuted focus:outline-none focus:border-nowcast-accent/50 transition-colors"
          />
        </div>
        
        <div className="flex items-center gap-2 bg-nowcast-card border border-nowcast-card rounded-md px-3 py-1.5 cursor-pointer hover:border-nowcast-accent/50 transition-colors">
          <span className="text-sm text-nowcast-text">North India</span>
          <ChevronDown className="w-4 h-4 text-nowcast-textMuted" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-nowcast-textMuted">
          12 Nov 2026, 14:30 UTC
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1 bg-nowcast-success/10 border border-nowcast-success/20 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nowcast-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nowcast-success"></span>
          </span>
          <span className="text-xs font-medium text-nowcast-success">Live</span>
        </div>
        
        <button className="relative p-2 rounded-full hover:bg-nowcast-card transition-colors">
          <Bell className="w-5 h-5 text-nowcast-textMuted" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-nowcast-accent rounded-full border border-nowcast-bg"></span>
        </button>
        
        <div className="w-8 h-8 rounded-full bg-nowcast-accent/20 flex items-center justify-center border border-nowcast-accent/30 text-nowcast-accent font-medium text-sm">
          ST
        </div>
      </div>
    </header>
  );
}
