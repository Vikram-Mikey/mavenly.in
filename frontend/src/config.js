// config.js
// Set your backend API base URL here for deployment
// Use environment variable if available, else fallback to local

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export default API_BASE_URL;
