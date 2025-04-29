'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6 leading-tight">
          {title}
        </h1>
        <h2 className="text-xl md:text-3xl font-lato text-center mb-8 max-w-3xl">
          {subtitle}
        </h2>
        {description && (
          <p className="text-lg md:text-xl text-center mb-12 max-w-2xl">
            {description}
          </p>
        )}
        <Link 
          href={ctaLink}
          className="inline-block px-8 py-4 text-lg font-bold bg-golden-sand text-elephant-gray rounded-full 
                   transform transition-all duration-300 hover:scale-105 hover:bg-sunset-orange hover:text-white
                   shadow-lg hover:shadow-xl"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default Hero; 