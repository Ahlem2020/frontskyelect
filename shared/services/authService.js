import { API_ENDPOINTS } from '../config/api';

class AuthService {
  constructor() {
    this.baseURL = 'http://localhost:5000/api/Auth';
  }

  async login(credentials) {
    try {
      const response = await fetch(`${this.baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      // Clone response for error handling
      const responseClone = response.clone();
      
      // Try to parse the JSON response
      let data;
      try {
        data = await response.json();
      } catch (error) {
        try {
          const text = await responseClone.text();
          console.error('Error parsing login response as JSON:', error, 'Response text:', text);
          return { 
            success: false, 
            error: text || 'The server returned an invalid response. Please try again.' 
          };
        } catch (textError) {
          console.error('Error reading login response text:', textError);
          return { 
            success: false, 
            error: 'Could not read server response. Please try again.' 
          };
        }
      }

      if (response.ok) {
        // Check if user has 2FA enabled
        if (data.requiresTwoFactor) {
          // User has 2FA enabled, return partial success requiring 2FA
          return {
            success: true,
            requiresTwoFA: true,
            data: {
              username: data.username,
              email: data.email,
              message: data.message || '2FA verification required'
            }
          };
        } else {
          // User doesn't have 2FA, complete login immediately
          localStorage.setItem('authToken', data.token);
          
          // Create user object from the response data
          const userData = {
            username: data.username,
            email: data.email,
            role: data.role,
            roles: data.roles || [],
            isActive: data.isActive,
            twoFactorEnabled: data.twoFactorEnabled || false,
            createdAt: data.createdAt,
            loginCount: data.loginCount,
            lastLogin: data.lastLogin
          };
          
          localStorage.setItem('user', JSON.stringify(userData));
          return { 
            success: true, 
            requiresTwoFA: false,
            data 
          };
        }
      } else {
        return { success: false, error: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      
      // Check for network/CORS issues
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        return { 
          success: false, 
          error: 'Cannot connect to server. Please check if the server is running at http://localhost:5000' 
        };
      }
      
      return { 
        success: false, 
        error: 'Network error. Please check if the server is running and try again.' 
      };
    }
  }

  async verifyTwoFA(verificationCode, pendingLoginData) {
    try {
      if (!verificationCode || verificationCode.length !== 6) {
        return { success: false, error: 'Please enter a valid 6-digit verification code' };
      }

      if (!pendingLoginData || !pendingLoginData.username) {
        return { success: false, error: 'Invalid session. Please try logging in again.' };
      }

      // Use the correct endpoint for 2FA verification
      console.log('Sending 2FA verification request:', {
        url: `${this.baseURL}/verify-2fa`,
        payload: {
          username: pendingLoginData.username,
          twoFactorCode: verificationCode
        }
      });
      
      // First get the response as text to check if it's valid JSON
      const response = await fetch(`${this.baseURL}/verify-2fa`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          username: pendingLoginData.username,
          twoFactorCode: verificationCode
        }),
      });

      console.log('2FA response status:', response.status);
      
      // Get response as text first
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      // Try to parse as JSON if possible
      let data;
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch (e) {
        console.log('Response is not valid JSON, using as plain text error');
        // If it's not valid JSON, use the text as error message
        data = { message: responseText };
      }

      if (response.ok) {
        // Complete the login process
        localStorage.setItem('authToken', data.token);
        
        const userData = {
          username: data.username,
          email: data.email,
          role: data.role,
          roles: data.roles || [],
          isActive: data.isActive,
          twoFactorEnabled: data.twoFactorEnabled || true, // Must be true if they got to 2FA step
          createdAt: data.createdAt,
          loginCount: data.loginCount,
          lastLogin: data.lastLogin
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true, data };
      } else {
        // Handle error response
        const errorMessage = data.message || responseText || '2FA verification failed';
        
        // Log additional details to help diagnose the issue
        console.error('2FA verification failed:', {
          status: response.status,
          statusText: response.statusText,
          errorMessage
        });
        
        return { 
          success: false, 
          error: errorMessage
        };
      }
    } catch (error) {
      console.error('2FA verification error:', error);
      
      // If it's a SyntaxError (JSON parsing error), provide a more specific message
      if (error instanceof SyntaxError) {
        return { 
          success: false, 
          error: 'The server returned an invalid response. Please try again or contact support.' 
        };
      }
      
      return { 
        success: false, 
        error: 'Network error during 2FA verification. Please try again.' 
      };
    }
  }

  async register(userData) {
    try {
      const response = await fetch(`${this.baseURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.message || 'Registration failed' };
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Network error. Please check if the server is running.' 
      };
    }
  }

  async logout() {
    try {
      const token = localStorage.getItem('authToken');
      
      if (token) {
        // Optional: Call logout endpoint if it exists
        await fetch(`${this.baseURL}/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.log('Logout API call failed, continuing with local cleanup');
    } finally {
      // Always clear local storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  }

  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    if (!token || token === 'undefined' || token === 'null') {
      return false;
    }
    return !!token;
  }

  getToken() {
    const token = localStorage.getItem('authToken');
    if (!token || token === 'undefined' || token === 'null') {
      return null;
    }
    return token;
  }

  getUser() {
    const user = localStorage.getItem('user');
    if (!user || user === 'undefined' || user === 'null') {
      return null;
    }
    try {
      const userData = JSON.parse(user);
      
      // Enhance user data with defaults if not present
      const enhancedUser = {
        // Core user data
        username: userData.username || 'user',
        email: userData.email || '',
        roles: userData.roles || [],
        
        // Extended profile data with defaults
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        phone: userData.phone || '',
        bio: userData.bio || '',
        avatar: userData.avatar || '',
        
        // Account status
        isActive: userData.isActive !== undefined ? userData.isActive : true,
        twoFactorEnabled: userData.twoFactorEnabled || false,
        
        // Timestamps with defaults
        createdAt: userData.createdAt || new Date().toISOString(),
        updatedAt: userData.updatedAt || new Date().toISOString(),
        lastLogin: userData.lastLogin || new Date().toISOString(),
        
        // Activity data
        loginCount: userData.loginCount || Math.floor(Math.random() * 50) + 1,
        
        // Determine role from roles array
        role: this.getPrimaryRole(userData.roles)
      };
      
      return enhancedUser;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      // Clear invalid data
      localStorage.removeItem('user');
      return null;
    }
  }

  // Helper method to get primary role
  getPrimaryRole(roles) {
    if (!roles || !Array.isArray(roles) || roles.length === 0) {
      return 'user';
    }
    
    // Priority order: superadmin > admin > operator > user
    if (roles.includes('superadmin')) return 'superadmin';
    if (roles.includes('admin')) return 'admin';
    if (roles.includes('operator')) return 'operator';
    return roles[0] || 'user';
  }

  // Development helper method to create a demo user
  createDemoUser() {
    const demoUser = {
      username: 'admin_demo',
      email: 'admin@electiongabon.com',
      firstName: 'Jean',
      lastName: 'Administrateur',
      phone: '+241 07 89 12 34',
      bio: 'Administrateur principal du système de gestion électorale du Gabon.',
      avatar: '',
      roles: ['admin'],
      isActive: true,
      twoFactorEnabled: true,
      createdAt: '2024-01-10T10:00:00.000Z',
      updatedAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      loginCount: 156
    };
    
    localStorage.setItem('user', JSON.stringify(demoUser));
    localStorage.setItem('authToken', 'demo-token-12345');
    return demoUser;
  }

  // Check if user has a specific role
  hasRole(role) {
    const user = this.getUser();
    console.log('hasRole check:', { role, user, userRoles: user?.roles });
    return user && user.roles && user.roles.includes(role);
  }

  // Check if user is super admin
  isSuperAdmin() {
    const result = this.hasRole('superadmin');
    console.log('isSuperAdmin check:', result);
    return result;
  }

  // Check if user is admin (either admin or super admin)
  isAdmin() {
    return this.hasRole('admin') || this.hasRole('superadmin');
  }

  // Profile management methods
  async updateProfile(profileData) {
    try {
      const response = await fetch(`${this.baseURL}/profile`, {
        method: 'PUT',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(profileData),
      });

      const data = await response.json();

      if (response.ok) {
        // Update stored user data
        localStorage.setItem('user', JSON.stringify(data.user));
        return { success: true, data };
      } else {
        return { success: false, error: data.message || 'Profile update failed' };
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Failed to update profile. Please try again.' 
      };
    }
  }

  // 2FA management methods
  async get2FAStatus() {
    try {
      // Check if user is authenticated first
      if (!this.getToken()) {
        return { success: false, error: 'User not authenticated. Please log in first.' };
      }

      console.log('Fetching 2FA status from:', `${this.baseURL}/2fa/status`);
      
      const response = await fetch(`${this.baseURL}/2fa/status`, {
        headers: this.getAuthHeaders(),
      });

      console.log('2FA Status Response:', response.status, response.statusText);

      if (!response.ok) {
        if (response.status === 401) {
          return { success: false, error: 'Authentication required. Please log in again.' };
        } else if (response.status === 404) {
          return { success: false, error: '2FA endpoint not found. Please check server implementation.' };
        } else if (response.status === 500) {
          return { success: false, error: 'Server error. Please try again later.' };
        }
      }

      const data = await response.json();
      console.log('2FA Status Data:', data);
      
      return response.ok ? { success: true, data } : { success: false, error: data.message || 'Failed to get 2FA status' };
    } catch (error) {
      console.error('Get 2FA status error:', error);
      
      // Handle network errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return { 
          success: false, 
          error: 'Cannot connect to server. Please ensure the backend server at localhost:5000 is running.' 
        };
      }
      
      return { success: false, error: `Failed to get 2FA status: ${error.message}` };
    }
  }

  async generate2FASecret() {
    try {
      // Check if user is authenticated first
      if (!this.getToken()) {
        return { success: false, error: 'User not authenticated. Please log in first.' };
      }

      console.log('Generating 2FA secret from:', `${this.baseURL}/2fa/generate`);
      
      const response = await fetch(`${this.baseURL}/2fa/generate`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
      });

      console.log('Generate 2FA Response:', response.status, response.statusText);

      if (!response.ok) {
        if (response.status === 401) {
          return { success: false, error: 'Authentication required. Please log in again.' };
        } else if (response.status === 404) {
          return { success: false, error: '2FA generate endpoint not found. Please check server implementation.' };
        }
      }

      const data = await response.json();
      console.log('Generate 2FA Data:', data);
      
      // If QR code is missing but we have the secret, we can still proceed
      if (response.ok && data.secret && !data.qrCode) {
        console.warn('QR code missing from server response, but secret is available');
        return { 
          success: true, 
          data: { 
            ...data,
            // Return null for qrCode so UI can handle this case
            qrCode: null
          } 
        };
      }
      
      return response.ok ? { success: true, data } : { success: false, error: data.message || 'Failed to generate 2FA secret' };
    } catch (error) {
      console.error('Generate 2FA secret error:', error);
      
      // Handle network errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return { 
          success: false, 
          error: 'Cannot connect to server. Please ensure the backend server at localhost:5000 is running.' 
        };
      }
      
      return { success: false, error: `Failed to generate 2FA secret: ${error.message}` };
    }
  }

  async enable2FA(verificationCode) {
    try {
      // Check if user is authenticated first
      if (!this.getToken()) {
        return { success: false, error: 'User not authenticated. Please log in first.' };
      }

      if (!verificationCode || verificationCode.trim() === '') {
        return { success: false, error: 'Verification code is required.' };
      }

      console.log('Enabling 2FA at:', `${this.baseURL}/2fa/enable`);
      
      const response = await fetch(`${this.baseURL}/2fa/enable`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ verificationCode }),
      });

      console.log('Enable 2FA Response:', response.status, response.statusText);

      if (!response.ok) {
        if (response.status === 401) {
          return { success: false, error: 'Authentication required. Please log in again.' };
        } else if (response.status === 400) {
          const errorData = await response.json().catch(() => ({}));
          return { success: false, error: errorData.message || 'Invalid verification code.' };
        } else if (response.status === 404) {
          return { success: false, error: '2FA enable endpoint not found. Please check server implementation.' };
        }
      }

      const data = await response.json();
      console.log('Enable 2FA Data:', data);
      
      if (response.ok) {
        // Update user data in localStorage
        const user = this.getUser();
        if (user) {
          user.twoFactorEnabled = true;
          localStorage.setItem('user', JSON.stringify(user));
        }
        return { success: true, data };
      } else {
        return { success: false, error: data.message || 'Failed to enable 2FA' };
      }
    } catch (error) {
      console.error('Enable 2FA error:', error);
      
      // Handle network errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return { 
          success: false, 
          error: 'Cannot connect to server. Please ensure the backend server at localhost:5000 is running.' 
        };
      }
      
      return { success: false, error: `Failed to enable 2FA: ${error.message}` };
    }
  }

  async disable2FA(verificationCode) {
    try {
      const response = await fetch(`${this.baseURL}/2fa/disable`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ verificationCode }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Update user data in localStorage
        const user = this.getUser();
        if (user) {
          user.twoFactorEnabled = false;
          localStorage.setItem('user', JSON.stringify(user));
        }
        return { success: true, data };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error('Disable 2FA error:', error);
      return { success: false, error: 'Failed to disable 2FA' };
    }
  }

  // Clean up invalid localStorage data
  cleanupInvalidData() {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    
    if (token === 'undefined' || token === 'null') {
      localStorage.removeItem('authToken');
    }
    
    if (user === 'undefined' || user === 'null') {
      localStorage.removeItem('user');
    }
  }

  // Helper method to add auth headers to requests
  getAuthHeaders() {
    const token = this.getToken();
    return token ? {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    } : {
      'Content-Type': 'application/json',
    };
  }
}

const authService = new AuthService();
export default authService;
