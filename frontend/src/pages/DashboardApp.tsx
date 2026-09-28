import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { DashboardView } from '../components/Dashboard/DashboardView';
import { ForecastTimelineView } from '../components/Dashboard/ForecastTimelineView';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen w-full bg-nowcast-bg overflow-hidden text-nowcast-text font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 h-full min-w-0">
        <Topbar />
        <main className="flex-1 overflow-hidden relative">
           {activeTab === 'dashboard' && <DashboardView />}
           {activeTab === 'timeline' && <ForecastTimelineView />}
           {activeTab !== 'dashboard' && activeTab !== 'timeline' && (
             <div className="flex items-center justify-center h-full text-nowcast-textMuted">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} view is under construction.
             </div>
           )}
        </main>
      </div>
    </div>
  );
}

export default App;
