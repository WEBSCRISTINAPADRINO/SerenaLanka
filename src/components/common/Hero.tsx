'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
  overlayOpacity?: number;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  overlayOpacity = 0.5
}: HeroProps) {
  return (
    <div className="relative h-screen">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` 
        }}
      />
      
      {/* Contenido */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-coconut-white mb-6">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-coconut-white/90 mb-10">
            {subtitle}
          </p>
          <Link 
            href={ctaLink}
            className="inline-block bg-tropical-green text-coconut-white px-8 py-3 rounded-md font-medium hover:bg-tropical-green/90 transition-colors"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 