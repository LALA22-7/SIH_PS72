import React from 'react';
import { NowcastMap } from './NowcastMap';

export function ForecastTimelineView() {
  return (
    <div className="flex flex-col h-full gap-4 p-4 overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-nowcast-text">Predicted evolution of thunderstorm and lightning over the next 2 hours</h2>
        <div className="flex bg-nowcast-sidebar border border-nowcast-card rounded-md p-1">
          <button className="px-4 py-1 text-xs font-medium bg-nowcast-accent/20 text-nowcast-accent rounded border border-nowcast-accent/30 shadow-sm">Thunderstorm</button>
          <button className="px-4 py-1 text-xs font-medium text-nowcast-textMuted hover:text-nowcast-text">Lightning</button>
          <button className="px-4 py-1 text-xs font-medium text-nowcast-textMuted hover:text-nowcast-text">Both</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1">
        {/* Map Grid */}
        {[
          { time: 'Now (14:30 UTC)' },
          { time: '+15 minutes (14:45 UTC)' },
          { time: '+30 minutes (15:00 UTC)' },
          { time: '+60 minutes (15:30 UTC)' },
          { time: '+90 minutes (16:00 UTC)' },
          { time: '+120 minutes (16:30 UTC)' }
        ].map((item, index) => (
          <div key={index} className="bg-nowcast-sidebar border border-nowcast-card rounded-xl overflow-hidden flex flex-col min-h-[250px]">
             <div className="bg-nowcast-sidebar p-2 border-b border-nowcast-card text-xs font-medium text-nowcast-text text-center">
               {item.time}
             </div>
             <div className="flex-1 relative pointer-events-none">
               <NowcastMap />
             </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-nowcast-sidebar border border-nowcast-card rounded-xl p-4 mt-2">
         <div className="w-64">
            <div className="text-xs font-medium text-nowcast-text mb-2">Thunderstorm Probability (%)</div>
            <div className="h-3 w-full rounded-sm bg-gradient-to-r from-[#170B3B] via-[#85165E] to-[#FCA311]"></div>
            <div className="flex justify-between text-[10px] text-nowcast-textMuted mt-1">
              <span>0</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span>
            </div>
         </div>
         <div className="flex-1 flex items-center justify-center gap-4 px-12">
            <button className="w-10 h-10 rounded-full bg-nowcast-accent/20 flex items-center justify-center text-nowcast-accent hover:bg-nowcast-accent/30 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
            <div className="flex-1 max-w-md h-1.5 bg-nowcast-card rounded-full relative">
               <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-nowcast-accent rounded-full"></div>
               <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-nowcast-accent shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
            </div>
            <span className="text-sm font-medium text-nowcast-text">14:30 UTC</span>
         </div>
         <div className="flex items-center gap-2 bg-nowcast-card px-3 py-1.5 rounded text-sm text-nowcast-textMuted cursor-pointer hover:text-nowcast-text">
            <span>2x</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
         </div>
      </div>
    </div>
  );
}
