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

// Get auth token from localStorage
export const getAuthToken = () => {
  const user = localStorage.getItem('chat-user');
  if (user) {
    try {
      const parsed = JSON.parse(user);
      return parsed.token;
    } catch {
      return null;
    }
  }
  return null;
};

// Get auth headers for API requests
export const getAuthHeaders = () => {
  const token = getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

// Common fetch options for API calls
export const fetchOptions = {
  credentials: 'include',
};

export default BACKEND_URL;
