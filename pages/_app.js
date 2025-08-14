import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import '../public/assets/css/style.css'
import '../styles/globals.scss'
import LoadingSpinner from '../shared/components/LoadingSpinner';

// Lazy load layouts for better performance
const Contentlayout = dynamic(
  () => import('../shared/layout-components/layout/content-layout'),
  { 
    ssr: false,
    loading: () => <LoadingSpinner fullscreen text="Loading layout..." />
  }
);

const Landingpagelayout = dynamic(
  () => import('../shared/layout-components/layout/landingpage-layout'),
  { 
    ssr: false,
    loading: () => <LoadingSpinner fullscreen text="Loading page..." />
  }
);

const Switcherlayout = dynamic(
  () => import('../shared/layout-components/layout/switcher-layout'),
  { 
    ssr: false,
    loading: () => <LoadingSpinner fullscreen text="Loading switcher..." />
  }
);

const Authenticationlayout = dynamic(
  () => import('../shared/layout-components/layout/authentication-layout'),
  { 
    ssr: false,
    loading: () => <LoadingSpinner fullscreen text="Loading authentication..." />
  }
);

const layouts = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Switcherlayout: Switcherlayout,
  Authenticationlayout: Authenticationlayout,
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      // Only show loading for actual route changes, not initial load
      if (url !== router.asPath) {
        setLoading(true);
      }
    };
    
    const handleComplete = () => {
      setLoading(false);
    };

    const handleError = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  // Only show loading overlay during route changes
  if (loading) {
    return <LoadingSpinner fullscreen text="Loading page..." />;
  }

  const Layout = layouts[Component.layout] || ((pageProps) => <Component>{pageProps}</Component>);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
