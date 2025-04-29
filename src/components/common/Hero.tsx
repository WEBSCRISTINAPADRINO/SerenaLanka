'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  backgroundImage,
  ctaText,
  ctaLink
}) => {
  // Usar una imagen de Unsplash temporalmente
  const defaultBackgroundImage = "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80";
  
  return (
    <section className="relative h-[80vh] w-full">
      {imageSrc && imageAlt && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage || defaultBackgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-coconut-white px-4">
        <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-center max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-xl md:text-2xl font-lato mb-8 text-center max-w-2xl">
            {subtitle}
          </h2>
        )}
        {description && (
          <p className="text-lg md:text-xl max-w-2xl text-center mb-8">
            {description}
          </p>
        )}
        {ctaText && ctaLink && (
          <a 
            href={ctaLink} 
            className="mt-6 px-8 py-4 bg-golden-sand text-elephant-gray font-bold rounded-full shadow-lg hover:bg-sunset-orange hover:text-coconut-white transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero; 