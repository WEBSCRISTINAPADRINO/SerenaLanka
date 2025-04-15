'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const heroImages = [
  {
    src: '/images/hero/meditation.jpg',
    alt: 'Mujer meditando al amanecer en la playa',
    quote: "En el silencio, encuentras tu voz más auténtica",
    overlay: "bg-gradient-to-b from-elephant-gray/20 to-elephant-gray/60",
    cta: "Retiros de lujo desde 1.200€"
  },
  {
    src: '/images/hero/infinity-pool.jpg',
    alt: 'Pareja en piscina infinita frente a la selva',
    quote: "Donde el horizonte se funde con tus sueños",
    overlay: "bg-gradient-to-b from-elephant-gray/10 to-elephant-gray/50",
    cta: "Villas privadas desde 250€/noche"
  },
  {
    src: '/images/hero/safari.jpg',
    alt: 'Familia en jeep saludando a un elefante',
    quote: "Momentos que transforman vidas enteras",
    overlay: "bg-gradient-to-b from-elephant-gray/30 to-elephant-gray/70",
    cta: "Safaris exclusivos desde 180€"
  }
];

export default function HomeHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Imágenes de fondo con transición */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 2 }}
        >
          <div className={`absolute inset-0 ${image.overlay} backdrop-blur-[1px] z-10`} />
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center z-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === currentImage ? 1 : 0, y: index === currentImage ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-coconut-white text-lg md:text-xl italic font-light max-w-2xl mx-auto leading-relaxed mb-4"
            >
              "{image.quote}"
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === currentImage ? 1 : 0, y: index === currentImage ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-coconut-white text-sm md:text-base font-medium tracking-wide"
            >
              {image.cta}
            </motion.p>
          </div>
        </motion.div>
      ))}

      {/* Contenido del hero */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <span className="text-coconut-white/90 text-lg md:text-xl font-light tracking-wider uppercase">
            Descubre
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-playfair text-6xl md:text-7xl lg:text-8xl text-coconut-white mb-8 leading-tight"
        >
          Sri Lanka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-xl md:text-2xl lg:text-3xl text-coconut-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
        >
          Un país que acaricia tus sentidos, despierta tu espíritu y te regala momentos que transformarán tu forma de ver el mundo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-tropical-green text-coconut-white rounded-full text-lg font-medium tracking-wide hover:bg-tropical-green/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Descubre tu próxima aventura
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-coconut-white/10 backdrop-blur-sm text-coconut-white rounded-full text-lg font-medium tracking-wide hover:bg-coconut-white/20 transition-all duration-300 border border-coconut-white/30 shadow-lg hover:shadow-xl"
          >
            Diseña tu experiencia única
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-12 flex flex-wrap justify-center gap-8 items-center"
        >
          <div className="flex items-center gap-2 text-coconut-white/80">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm">4.9/5 en Tripadvisor</span>
          </div>
          <div className="flex items-center gap-2 text-coconut-white/80">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-sm">+10.000 viajeros felices</span>
          </div>
          <div className="flex items-center gap-2 text-coconut-white/80">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="text-sm">Garantía de mejor precio</span>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-coconut-white"
      >
        <div className="animate-bounce">
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
} 