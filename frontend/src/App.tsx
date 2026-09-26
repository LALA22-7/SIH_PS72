import React from 'react'
import { NowcastMap } from './components/Dashboard/NowcastMap'
import { Activity, CloudLightning, ShieldAlert } from 'lucide-react'

function App() {
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-nowcast-card px-6">
        <div className="flex items-center gap-2">
          <CloudLightning className="h-6 w-6 text-nowcast-accent" />
          <h1 className="text-xl font-bold tracking-tight">StormSight PS072</h1>
          <span className="ml-2 rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
            NOWCASTING
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            System Live
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Alerts & Metrics */}
        <aside className="w-80 border-r border-slate-800 bg-nowcast-card/50 p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <ShieldAlert className="h-4 w-4 text-nowcast-warning" />
              Active Alerts
            </h2>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <p>Waiting for ML predictions...</p>
              {/* Alert cards will go here */}
            </div>
          </div>
          
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <Activity className="h-4 w-4 text-nowcast-accent" />
              Ingestion Status
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Radar (DWR)</span>
                <span className="text-emerald-400">Syncing</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Satellite (INSAT)</span>
                <span className="text-slate-500">Awaiting</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Lightning (ILDN)</span>
                <span className="text-emerald-400">Syncing</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Center - Map Viewer */}
        <section className="relative flex-1">
          <NowcastMap />
        </section>
      </main>
    </div>
  )
}

export default App
