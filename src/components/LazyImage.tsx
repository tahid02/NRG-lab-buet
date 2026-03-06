import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

/**
 * LazyImage - Image component with lazy loading using Intersection Observer
 * 
 * @param src - Image source URL
 * @param alt - Alt text for accessibility
 * @param className - CSS classes
 * @param placeholder - Optional placeholder component while loading
 * @param threshold - Intersection threshold (default: 0.1)
 * @param rootMargin - Intersection root margin (default: '50px')
 * 
 * @example
 * <LazyImage 
 *   src="https://example.com/image.jpg"
 *   alt="Description"
 *   className="w-full h-full object-cover"
 * />
 * 
 * @example with placeholder
 * <LazyImage 
 *   src="https://example.com/image.jpg"
 *   alt="Description"
 *   placeholder={<div className="animate-pulse bg-gray-200" />}
 *   className="w-full h-full object-cover"
 * />
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  placeholder = null,
  threshold = 0.1,
  rootMargin = '50px',
  ...props
}: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after visible
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error(`[LazyImage] Failed to load: ${src}`);
    setIsLoaded(true); // Show error state
  };

  return (
    <div className={className}>
      {isVisible ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      ) : (
        <div className="w-full h-full">
          {placeholder || (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
          )}
        </div>
      )}
    </div>
  );
}
