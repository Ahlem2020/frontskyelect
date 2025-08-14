import React, { useState } from 'react';
import Image from 'next/image';
import { Placeholder } from 'react-bootstrap';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'blur',
  blurDataURL,
  fill = false,
  sizes,
  style = {},
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-light d-flex align-items-center justify-content-center ${className}`}
        style={{ width, height, ...style }}
      >
        <span className="text-muted">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`position-relative ${className}`} style={fill ? {} : { width, height }}>
      {isLoading && (
        <Placeholder 
          as="div" 
          animation="glow" 
          className="position-absolute w-100 h-100"
          style={{ backgroundColor: '#f8f9fa' }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        style={{
          objectFit: 'cover',
          transition: 'opacity 0.3s ease',
          opacity: isLoading ? 0 : 1,
          ...style
        }}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
