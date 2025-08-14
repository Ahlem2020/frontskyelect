import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PerformanceMonitor = () => {
  const router = useRouter();

  useEffect(() => {
    // Monitor Core Web Vitals
    const reportWebVitals = (metric) => {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${metric.name}: ${metric.value}`);
      }
      
      // You can send these metrics to an analytics service
      // Example: analytics.track(metric.name, metric.value);
    };

    // Monitor route changes
    const handleRouteChange = (url) => {
      const navigationStart = performance.now();
      
      router.events.on('routeChangeComplete', () => {
        const navigationEnd = performance.now();
        const navigationTime = navigationEnd - navigationStart;
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`Navigation to ${url} took ${navigationTime}ms`);
        }
      });
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // Cleanup
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
