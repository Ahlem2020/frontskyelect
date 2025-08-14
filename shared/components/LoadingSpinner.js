import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'primary', 
  fullscreen = false,
  text = 'Loading...'
}) => {
  if (fullscreen) {
    return (
      <div 
        className="d-flex flex-column justify-content-center align-items-center position-fixed w-100 h-100" 
        style={{ 
          top: 0, 
          left: 0, 
          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
          zIndex: 9999,
          backdropFilter: 'blur(2px)'
        }}
      >
        <Spinner animation="border" variant={variant} size={size} />
        <p className="mt-3 text-muted">{text}</p>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-3">
      <Spinner animation="border" variant={variant} size={size} className="me-2" />
      <span>{text}</span>
    </div>
  );
};

export default LoadingSpinner;
