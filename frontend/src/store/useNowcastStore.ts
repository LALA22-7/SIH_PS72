import { create } from 'zustand';

interface NowcastState {
  cells: any[];
  alerts: any[];
  timestamp: string | null;
  setNowcastData: (data: any) => void;
  setAlerts: (alerts: any[]) => void;
}

export const useNowcastStore = create<NowcastState>((set) => ({
  cells: [],
  alerts: [],
  timestamp: null,
  setNowcastData: (data) => set({ cells: data.cells, timestamp: data.issued_at }),
  setAlerts: (alerts) => set({ alerts }),
}));
