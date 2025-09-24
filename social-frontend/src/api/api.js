import axios from 'axios';

// Prefer relative base URL so Vite dev proxy handles it in development
// and the same code works in production behind the same origin.
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '',
});

export default api;
