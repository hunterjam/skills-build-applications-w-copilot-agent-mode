// API Configuration for OctoFit Tracker
// Dynamically determines the correct API URL based on environment

const getApiUrl = () => {
  // Check if we're in a Codespace environment
  const hostname = window.location.hostname;
  
  if (hostname.includes('app.github.dev')) {
    // Extract the codespace name and construct the backend URL
    // Frontend: codespace-name-3000.app.github.dev
    // Backend: codespace-name-8000.app.github.dev
    const backendHostname = hostname.replace('-3000.', '-8000.');
    return `https://${backendHostname}`;
  }
  
  // Use environment variable if set, otherwise default to localhost
  return process.env.REACT_APP_API_URL || 'http://localhost:8000';
};

export const API_URL = getApiUrl();
export default API_URL;
