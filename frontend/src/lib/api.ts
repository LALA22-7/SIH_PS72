import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getNowcast = async () => {
  const { data } = await api.get('/nowcast');
  return data;
};

export const getAlerts = async () => {
  const { data } = await api.get('/alerts/active');
  return data;
};

export default api;
