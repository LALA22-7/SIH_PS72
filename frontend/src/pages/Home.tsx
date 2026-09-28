import React from 'react';
import { Link } from 'react-router-dom';
import { CloudLightning, ArrowRight, Shield, Activity, Map } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-nowcast-bg text-nowcast-text overflow-y-auto">
      {/* Navbar */}
      <nav className="border-b border-nowcast-card bg-nowcast-bg/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="StormSight" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight">StormSight</span>
          </div>
          <div className="flex gap-6 items-center text-sm font-medium">
            <Link to="/architecture" className="text-nowcast-textMuted hover:text-nowcast-accent transition-colors">Architecture</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-nowcast-textMuted hover:text-nowcast-accent transition-colors">GitHub</a>
            <Link to="/dashboard" className="px-4 py-2 rounded-md bg-nowcast-accent text-nowcast-bg hover:bg-nowcast-accentHover transition-colors flex items-center gap-2">
              Launch App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nowcast-card border border-nowcast-card/50 text-nowcast-accent text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-nowcast-accent animate-pulse"></span>
          SIH 2026 - PS26072
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-nowcast-accent to-red-500">Nowcasting</span>
        </h1>
        
        <p className="text-lg md:text-xl text-nowcast-textMuted max-w-2xl mb-12">
          Predicting highly localized, rapidly evolving thunderstorms and lightning strikes minutes before they happen using multi-modal AI fusion.
        </p>
        
        <div className="flex gap-4">
          <Link to="/dashboard" className="px-6 py-3 rounded-lg bg-nowcast-accent text-nowcast-bg font-semibold hover:bg-nowcast-accentHover transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2">
            Enter Dashboard
          </Link>
          <Link to="/architecture" className="px-6 py-3 rounded-lg bg-nowcast-card border border-nowcast-card hover:border-nowcast-accent/50 font-semibold transition-colors">
            Read Architecture
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 w-full text-left">
          <div className="bg-nowcast-sidebar border border-nowcast-card rounded-2xl p-8">
            <Activity className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Multi-Modal Fusion</h3>
            <p className="text-sm text-nowcast-textMuted leading-relaxed">
              Fuses historical Radar, Satellite, and Lightning data onto a unified 2km grid for comprehensive atmospheric analysis.
            </p>
          </div>
          <div className="bg-nowcast-sidebar border border-nowcast-card rounded-2xl p-8">
            <Shield className="w-8 h-8 text-nowcast-danger mb-4" />
            <h3 className="text-xl font-bold mb-2">Early Warning</h3>
            <p className="text-sm text-nowcast-textMuted leading-relaxed">
              Provides 0-2 hour actionable lead times for disaster management and aviation through high-resolution probability fields.
            </p>
          </div>
          <div className="bg-nowcast-sidebar border border-nowcast-card rounded-2xl p-8">
            <Map className="w-8 h-8 text-nowcast-success mb-4" />
            <h3 className="text-xl font-bold mb-2">ConvLSTM Engine</h3>
            <p className="text-sm text-nowcast-textMuted leading-relaxed">
              Leverages advanced spatiotemporal deep learning to learn the non-linear physics of storm initiation and decay.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
