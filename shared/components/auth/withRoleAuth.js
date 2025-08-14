import { useRouter } from 'next/router';
import { useEffect } from 'react';
import authService from '../../services/authService';

export default function withRoleAuth(Component, requiredRole = null) {
    function ProtectedRoute(props) {
        const router = useRouter();

        useEffect(() => {
            // Clean up any invalid localStorage data first
            authService.cleanupInvalidData();
            
            // Check for authentication first
            const token = localStorage.getItem('authToken');
            const isAuthenticated = token ? true : false;
            console.log('=== withRoleAuth: Starting authorization check ===');
            console.log('withRoleAuth: Token exists:', !!token);
            console.log('withRoleAuth: Required role:', requiredRole);

            if (!isAuthenticated) {
                console.log('withRoleAuth: User not authenticated, redirecting to login');
                router.replace("/components/authentication/signin");
                return;
            }

            // If a specific role is required, check user's role
            if (requiredRole) {
                // Cleanup invalid data first
                authService.cleanupInvalidData();
                
                const user = authService.getUser();
                console.log('withRoleAuth: Full user object:', user);
                console.log('withRoleAuth: User roles (raw):', user?.roles);
                console.log('withRoleAuth: User roles type:', typeof user?.roles);
                console.log('withRoleAuth: User roles is array:', Array.isArray(user?.roles));
                
                if (user?.roles) {
                    console.log('withRoleAuth: Individual roles:');
                    user.roles.forEach((role, index) => {
                        console.log(`  Role ${index}: "${role}" (type: ${typeof role})`);
                    });
                }
                
                console.log('withRoleAuth: Required role:', `"${requiredRole}"`);
                console.log('withRoleAuth: Required role type:', typeof requiredRole);
                
                // Test both authService and manual check
                const hasRoleService = authService.hasRole(requiredRole);
                const hasRoleManual = user?.roles?.includes(requiredRole);
                
                console.log('withRoleAuth: authService.hasRole() result:', hasRoleService);
                console.log('withRoleAuth: Manual roles.includes() check:', hasRoleManual);
                
                if (!user || !user.roles || !user.roles.includes(requiredRole)) {
                    console.log('withRoleAuth: ❌ AUTHORIZATION FAILED - User does not have required role');
                    console.log('withRoleAuth: Redirecting to unauthorized page');
                    // Redirect to unauthorized page
                    router.replace("/unauthorized");
                    return;
                }
                
                console.log('withRoleAuth: ✅ AUTHORIZATION SUCCESS - Access granted');
            }
        }, [router]);

        return <Component {...props} />;
    }

    // Preserve the layout property and other static properties
    ProtectedRoute.layout = Component.layout;
    
    // Copy any other static properties from the original component
    Object.keys(Component).forEach(key => {
        if (typeof Component[key] !== 'function') {
            ProtectedRoute[key] = Component[key];
        }
    });

    return ProtectedRoute;
}

// Convenience function for super admin only pages
export function withSuperAdminAuth(Component) {
    return withRoleAuth(Component, 'superadmin');
}
