# Authentication System Documentation

## Overview
This authentication system provides login and signup functionality that connects to your backend API at `http://localhost:5000/api/Auth/`.

## Pages Created/Updated

### 1. Sign In Page (`/components/authentication/signin`)
- **File**: `pages/components/authentication/signin.js`
- **API Endpoint**: `POST http://localhost:5000/api/Auth/login`
- **Required Fields**: `username`, `password`
- **Features**:
  - Form validation
  - Error handling
  - Loading states
  - Automatic redirect to dashboard on success
  - Link to signup page

### 2. Sign Up Page (`/components/authentication/signup`)
- **File**: `pages/components/authentication/signup.js`
- **API Endpoint**: `POST http://localhost:5000/api/Auth/register`
- **Required Fields**: `username`, `email`, `password`
- **Default Role**: `["user"]`
- **Features**:
  - Form validation
  - Success/error messaging
  - Automatic redirect to signin after successful registration

## Services and Utilities

### 1. AuthService (`shared/services/authService.js`)
Centralized authentication service that handles:
- Login/logout functionality
- Token management
- User data storage
- Authentication status checks

### 2. useAuth Hook (`shared/hooks/useAuth.js`)
React hook for authentication operations:
```javascript
const { logout, isAuthenticated, getUser, getToken } = useAuth();
```

### 3. AuthContext (`shared/context/AuthContext.js`)
React context for global authentication state management.

### 4. API Middleware (`shared/utils/apiMiddleware.js`)
Handles authenticated API requests with automatic token inclusion.

## Protected Routes

### withAuth HOC
- **Files**: `pages/withAuth.js` and `pages/components/data/withAuth.js`
- **Usage**: Wrap any component to make it require authentication
- **Redirect**: Unauthenticated users are redirected to `/components/authentication/signin`

Example usage:
```javascript
import withAuth from '../withAuth';

const Dashboard = () => {
  return <div>Protected Dashboard Content</div>;
};

export default withAuth(Dashboard);
```

## Routing Changes

### Default Landing Page
- **Index page** (`pages/index.js`) now redirects to `/components/authentication/signin` instead of `/lockscreen`
- **Header logout** (`shared/data/header/head.js`) now points to signin page

## API Configuration

### Backend Endpoints
- **Login**: `POST http://localhost:5000/api/Auth/login`
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- **Register**: `POST http://localhost:5000/api/Auth/register`
  ```json
  {
    "username": "super admin",
    "email": "admin@election.com",
    "password": "Admin123!",
    "roles": ["user"]
  }
  ```

### Expected Response Format
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "username",
    "email": "email@example.com",
    "roles": ["user"]
  }
}
```

## Local Storage
The system stores authentication data in localStorage:
- `authToken`: JWT token for API requests
- `user`: Serialized user object

## Getting Started

1. **Start your backend server** on `http://localhost:5000`
2. **Navigate to the app** - it will automatically redirect to the signin page
3. **Sign up** for a new account or **sign in** with existing credentials
4. **Access protected routes** - you'll be automatically redirected if not authenticated

## Error Handling
- Network errors are caught and displayed to users
- Invalid credentials show appropriate error messages
- Automatic logout on 401 responses from the API

## Security Features
- JWT token-based authentication
- Automatic token validation
- Protected route guards
- Secure logout with token cleanup
