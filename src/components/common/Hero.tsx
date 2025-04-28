'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <section className="relative h-[60vh] w-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-coconut-white">
        <h1 className="text-4xl md:text-6xl font-playfair mb-4 text-center px-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center px-4">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero; 