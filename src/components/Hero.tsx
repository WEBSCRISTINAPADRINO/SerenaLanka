'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteImages } from '@/config/images';

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  height?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image = siteImages.hero.main.src,
  height = 'h-[70vh]',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className={`relative ${height} flex items-center justify-center ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={imageError ? siteImages.default.src : image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-elephant-gray/40" />
      </div>
      <div className="relative text-center text-coconut-white z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mb-8"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero; 