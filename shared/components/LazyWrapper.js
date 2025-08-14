import React, { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

const LazyWrapper = ({ 
  children, 
  fallback = null, 
  loadingText = 'Loading component...' 
}) => {
  const defaultFallback = <LoadingSpinner text={loadingText} />;
  
  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
};

export default LazyWrapper;
