// API configuration for production deployment
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

// Helper function to get the full API URL
export const getApiUrl = (endpoint) => {
  // In development, use relative paths (proxy handles it)
  // In production, use the full backend URL
  if (import.meta.env.PROD && BACKEND_URL) {
    return `${BACKEND_URL}${endpoint}`;
  }
  return endpoint;
};

// Common fetch options for API calls
export const fetchOptions = {
  credentials: 'include',
};

export default BACKEND_URL;
