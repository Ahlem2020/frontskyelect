import authService from '../services/authService';

// Middleware to add auth headers to API requests
export const apiMiddleware = {
  async request(url, options = {}) {
    const headers = {
      ...authService.getAuthHeaders(),
      ...options.headers,
    };

    const config = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
      
      // Handle unauthorized responses
      if (response.status === 401) {
        authService.logout();
        window.location.href = '/components/authentication/signin';
        throw new Error('Unauthorized - redirecting to login');
      }

      return response;
    } catch (error) {
      throw error;
    }
  },

  async get(url, options = {}) {
    return this.request(url, { ...options, method: 'GET' });
  },

  async post(url, data, options = {}) {
    return this.request(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async put(url, data, options = {}) {
    return this.request(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async delete(url, options = {}) {
    return this.request(url, { ...options, method: 'DELETE' });
  },
};
