'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder blur mientras carga */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-elephant-gray/10 animate-pulse"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}
      
      {/* Imagen principal */}
      <Image
        src={error ? '/images/placeholder.jpg' : src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        sizes={sizes}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
          ${className}
        `}
        onLoadingComplete={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
} 