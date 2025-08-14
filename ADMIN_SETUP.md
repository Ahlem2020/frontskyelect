# Admin Access Setup

This document explains how the super admin role system works in the Election Gabon application.

## Overview

The application now supports role-based access control with the following roles:
- `user` - Regular users (default)
- `admin` - Administrative users
- `super admin` - Super administrators with full system access

## Admin Dashboard Access

The admin dashboard is available at `/admin` and is restricted to users with the `super admin` role.

### Features:
- User management interface
- System statistics
- User role management
- System information display

## Authentication System

### Role-Based Authentication
- `withRoleAuth(Component, requiredRole)` - General role-based authentication wrapper
- `withSuperAdminAuth(Component)` - Convenience wrapper for super admin-only pages

### Navigation
The sidebar navigation automatically filters menu items based on user roles:
- Admin menu section only appears for super admin users
- Individual menu items can have role requirements

## Setting Up the First Superadmin

Since user registration defaults to the 'user' role, you'll need to manually create the first super admin user. Here are a few approaches:

### Option 1: Database Direct Update
Directly update the user record in your database to add 'super admin' to the roles array.

### Option 2: Temporary Admin Creation Page
Create a temporary page that allows upgrading a user to super admin (remove after first setup).

### Option 3: Environment-Based Admin
Add logic to automatically grant super admin rights to users with specific usernames/emails (configured via environment variables).

## File Structure

```
pages/
  admin.js                          # Main admin dashboard page
  unauthorized.js                   # Unauthorized access page

shared/
  components/
    auth/
      withRoleAuth.js              # Role-based authentication wrapper
  services/
    authService.js                 # Enhanced with role checking methods
  layout-components/
    sidebar/
      nav.js                       # Updated with admin menu section
      sidebar.js                   # Enhanced with role-based filtering
```

## API Integration

The admin dashboard includes placeholder API calls for:
- Fetching user lists
- Updating user status
- Managing user roles

These should be connected to your backend API endpoints:
- `GET /api/admin/users` - Get all users
- `POST /api/admin/users/{id}/toggle-status` - Toggle user active status
- `PUT /api/admin/users/{id}/role` - Update user role

## Security Considerations

1. **Server-side Validation**: Always validate user roles on the server side
2. **JWT Token**: Ensure the JWT token includes role information
3. **API Endpoints**: Protect admin API endpoints with proper role checking
4. **Session Management**: Implement proper session timeout and refresh

## Testing

To test the admin functionality:
1. Create a user account through normal registration
2. Manually update the user's roles in the database to include 'super admin'
3. Sign in with that account
4. Navigate to `/admin` to access the admin dashboard

## Troubleshooting

### Admin Menu Not Showing
- Check that the user's JWT token includes the correct roles
- Verify that localStorage contains the user object with roles
- Ensure the sidebar component is properly filtering menu items

### Access Denied on /admin
- Verify the user has 'super admin' role in their user object
- Check that the authentication wrapper is working correctly
- Ensure the user is properly authenticated
