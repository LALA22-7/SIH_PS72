import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import { useNowcastStore } from '../../store/useNowcastStore';
import { getNowcast } from '../../lib/api';

// India center
const MAP_CENTER = [20.5937, 78.9629] as [number, number];
const ZOOM = 5;

function MapUpdater({ cells }: { cells: any[] }) {
  const map = useMap();
  useEffect(() => {
    if (cells.length > 0) {
      // Optional: fit bounds to cells
    }
  }, [cells, map]);
  return null;
}

export function NowcastMap() {
  const { cells, setNowcastData } = useNowcastStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const data = await getNowcast();
        setNowcastData(data);
      } catch (err) {
        console.error("Failed to fetch initial nowcast", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInitial();

    // TODO: Connect WebSocket for real-time updates
  }, [setNowcastData]);

  return (
    <div className="h-full w-full bg-slate-900">
      <MapContainer
        center={MAP_CENTER}
        zoom={ZOOM}
        className="h-full w-full z-0"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {cells.map((cell) => (
          <Circle
            key={cell.cell_id}
            center={[cell.center.lat, cell.center.lon]}
            radius={cell.radius_km * 1000}
            pathOptions={{
              color: cell.severity === 'severe' ? '#ef4444' : '#f59e0b',
              fillColor: cell.severity === 'severe' ? '#ef4444' : '#f59e0b',
              fillOpacity: 0.4,
            }}
          >
            <Popup className="nowcast-popup">
              <div className="font-sans">
                <h3 className="font-bold text-slate-800">Storm Cell {cell.cell_id}</h3>
                <p className="text-sm">Severity: <span className="uppercase font-semibold">{cell.severity}</span></p>
                <p className="text-sm">Probability: {(cell.probability * 100).toFixed(0)}%</p>
              </div>
            </Popup>
          </Circle>
        ))}
        
        <MapUpdater cells={cells} />
      </MapContainer>
      
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-nowcast-dark/50 backdrop-blur-sm">
          <div className="rounded-lg bg-slate-800 p-4 shadow-xl border border-slate-700 text-slate-200">
            Connecting to Nowcast stream...
          </div>
        </div>
      )}
    </div>
  );
}
