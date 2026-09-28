import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, Database, Cpu, Globe } from 'lucide-react';

export function Architecture() {
  return (
    <div className="min-h-screen bg-nowcast-bg text-nowcast-text overflow-y-auto">
      {/* Navbar */}
      <nav className="border-b border-nowcast-card bg-nowcast-bg/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-nowcast-textMuted hover:text-nowcast-accent transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">System Architecture</h1>
        <p className="text-lg text-nowcast-textMuted mb-12">
          StormSight fuses multi-modal meteorological observations into a state-of-the-art Deep Learning pipeline (CNN + ConvLSTM) to predict severe thunderstorms and lightning up to 2 hours in advance.
        </p>

        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-nowcast-sidebar border border-nowcast-card rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold">1. Data Ingestion & Preprocessing</h2>
            </div>
            <p className="text-nowcast-textMuted mb-4 leading-relaxed">
              We ingest three primary modalities: Radar (Doppler Reflectivity), Satellite (INSAT-3D Infrared), and Lightning strikes (GLM/ILDN). Since each modality has different spatial and temporal resolutions, our Preprocessing Engine normalizes them onto a common 2-kilometer Cartesian grid (EPSG:32643) and synchronizes them into 15-minute time buckets.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-nowcast-sidebar border border-nowcast-card rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-semibold">2. Hybrid AI Fusion Model</h2>
            </div>
            <p className="text-nowcast-textMuted mb-4 leading-relaxed">
              The aligned multi-modal tensor is fed into our PyTorch-based Deep Learning model. The architecture uses a Convolutional Neural Network (CNN) encoder to extract spatial features (cloud structures) and a Convolutional Long Short-Term Memory (ConvLSTM) network to track temporal evolution (how the storm is growing and moving). 
            </p>
            <p className="text-nowcast-textMuted leading-relaxed">
              Unlike traditional optical-flow methods that merely advect existing storms in a straight line, our AI learns the non-linear physics of storm initiation and decay.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-nowcast-sidebar border border-nowcast-card rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-nowcast-accent/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-nowcast-accent" />
              </div>
              <h2 className="text-2xl font-semibold">3. Visualization & Dissemination</h2>
            </div>
            <p className="text-nowcast-textMuted mb-4 leading-relaxed">
              The model outputs a high-resolution spatial probability grid up to 2 hours into the future. Our FastAPI backend serves these probability fields and derived hazard polygons to this React frontend, built with Leaflet and WebGL. 
            </p>
            <p className="text-nowcast-textMuted leading-relaxed">
              This provides Air Traffic Controllers, Disaster Management authorities, and the general public with actionable, highly-localized early warnings.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
