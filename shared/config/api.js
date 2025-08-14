const dev = process.env.NODE_ENV !== "production";


export const API_BASE_URL = dev 
  ? "http://localhost:5000"  // Development - direct backend connection
  : "/api"; // Production - through nginx proxy

// API Endpoints
export const API_ENDPOINTS = {
  candidates: `${API_BASE_URL}/candidates`,
  candidatesStats: `${API_BASE_URL}/candidates/stats/perhours`, 
  offices: `${API_BASE_URL}/offices`,
  votes: `${API_BASE_URL}/votes`,
  auth: {
    login: `${API_BASE_URL}/api/Auth/login`,
    register: `${API_BASE_URL}/api/Auth/register`,
    logout: `${API_BASE_URL}/api/Auth/logout`,
  },
};

// Helper function to detect available API server
export const detectApiServer = async () => {
  if (!dev) {
    return API_BASE_URL; // Use production URL in production
  }

  const testPorts = [
    "http://localhost:5000",
    "https://localhost:7000", 
    "http://localhost:5001",
    "https://localhost:7001",
  ];

  for (const baseUrl of testPorts) {
    try {
      const response = await fetch(`${baseUrl}/candidates`, {
        method: 'HEAD', // Use HEAD to avoid downloading full response
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok || response.status === 405) { // 405 = Method Not Allowed but server is responding
        console.log(`API server detected at: ${baseUrl}`);
        return baseUrl;
      }
    } catch (error) {
      // Server not available on this port, try next
      continue;
    }
  }
  
  console.warn('No API server detected, falling back to default');
  return API_BASE_URL;
};

// Smart API client that auto-detects server
let detectedServerUrl = null;

export const getApiEndpoint = async (endpoint) => {
  if (!detectedServerUrl) {
    detectedServerUrl = await detectApiServer();
  }
  
  // Replace the base URL in the endpoint with the detected one
  return endpoint.replace(API_BASE_URL, detectedServerUrl);
};

// Enhanced fetchFromServer with auto-detection
export const fetchFromServer = async (url) => {
  try {
    // Auto-detect server if in development
 
    const response = await fetch(`http://localhost:5000/candidates`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
     if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error.message);
    throw error;
  }
};

// Helper function to fetch data with error handling
export const fetchWithErrorHandling = async (url) => {
  try {
    return await fetchFromServer(url);
  } catch (error) {
    // You can customize error handling here
    console.error('API Error:', error);
    throw new Error(`Unable to fetch data from server: ${error.message}`);
  }
};

// Utility function for POST requests
export const postToServer = async (url, data) => {
  try {
    // Auto-detect server if in development
 
    const response = await fetch(`http://localhost:5000/candidates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to post to ${url}:`, error.message);
    throw error;
  }
};

// Utility function for PUT requests
export const putToServer = async (url, data) => {
  try {
    // Auto-detect server if in development
 
    const response = await fetch(`http://localhost:5000/candidates`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to put to ${url}:`, error.message);
    throw error;
  }
};

// Utility function for DELETE requests
export const deleteFromServer = async (url) => {
  try {
    // Auto-detect server if in development
 
    const response = await fetch(`http://localhost:5000/candidates`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    
    // Some DELETE requests might not return content
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return { success: true };
  } catch (error) {
    console.error(`Failed to delete from ${url}:`, error.message);
    throw error;
  }
};
