'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const destinations = [
  {
    id: 'costa-sur',
    title: 'DESCUBRE LA COSTA SUR',
    image: '/images/destinos/costa-sur/galle-1.jpg',
    href: '/destinos/costa-sur',
    description: 'Playas paradisíacas, fortalezas coloniales y avistamiento de ballenas'
  },
  {
    id: 'costa-este',
    title: 'EXPLORA LA COSTA ESTE',
    image: '/images/destinos/costa-este/trincomalee-1.jpg',
    href: '/destinos/costa-este',
    description: 'Aguas cristalinas y arrecifes de coral vírgenes'
  },
  {
    id: 'costa-norte',
    title: 'CONOCE LA COSTA NORTE',
    image: '/images/destinos/costa-norte/jaffna-1.jpg',
    href: '/destinos/costa-norte',
    description: 'Cultura tamil y templos milenarios'
  },
  {
    id: 'costa-oeste',
    title: 'VIVE LA COSTA OESTE',
    image: '/images/destinos/costa-oeste/colombo-1.jpg',
    href: '/destinos/costa-oeste',
    description: 'Modernidad y tradición en perfecta armonía'
  },
  {
    id: 'montanas',
    title: 'AVENTÚRATE EN LAS MONTAÑAS',
    image: '/images/destinos/montanas/ella-1.jpg',
    href: '/destinos/montanas',
    description: 'Plantaciones de té y paisajes de ensueño'
  }
];

const DestinationsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + destinations.length) % destinations.length);
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4 tracking-wider"
              >
                {destinations[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl max-w-2xl mb-8"
              >
                {destinations[currentIndex].description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href={destinations[currentIndex].href}
                  className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
                >
                  Explorar
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles de navegación */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full text-white transition-all z-10"
        onClick={() => paginate(-1)}
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full text-white transition-all z-10"
        onClick={() => paginate(1)}
      >
        <FiChevronRight size={24} />
      </button>

      {/* Indicadores de página */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {destinations.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationsSlider; 