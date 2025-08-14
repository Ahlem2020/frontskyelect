import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function withAuth(Component) {
    function ProtectedRoute(props) {
        const router = useRouter();

        useEffect(() => {
            // Check for the token in localStorage
            const token = localStorage.getItem('authToken');
            const isAuthenticated = token ? true : false;

            if (!isAuthenticated) {
                router.replace("/components/authentication/signin");
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
