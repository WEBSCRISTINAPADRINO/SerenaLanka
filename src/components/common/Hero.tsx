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
  return (
    <section className="relative h-[60vh] w-full">
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
      {backgroundImage && !imageSrc && (
        <div
          className="absolute inset-0 object-cover"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-coconut-white">
        <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-center px-4">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-2xl md:text-3xl font-lato mb-2 text-center px-4">{subtitle}</h2>
        )}
        {description && (
          <p className="text-lg md:text-xl max-w-2xl text-center px-4">{description}</p>
        )}
        {ctaText && ctaLink && (
          <a href={ctaLink} className="mt-6 px-6 py-3 bg-golden-sand text-elephant-gray font-bold rounded-full shadow-lg hover:bg-sunset-orange transition-colors">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero; 