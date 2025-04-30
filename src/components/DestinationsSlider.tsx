'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface Destination {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  highlights: string[];
  bestTime?: string;
}

const destinations: Destination[] = [
  {
    id: 'costa-sur',
    title: 'Costa Sur',
    subtitle: 'Playas paradisíacas y resorts de lujo',
    image: '/images/destinations/costa-sur.jpg',
    href: '/destinos/costa-sur',
    highlights: ['Galle', 'Mirissa', 'Unawatuna'],
    bestTime: 'Diciembre a Abril'
  },
  {
    id: 'costa-este',
    title: 'Costa Este',
    subtitle: 'Aguas cristalinas y arrecifes de coral',
    image: '/images/destinations/costa-este.jpg',
    href: '/destinos/costa-este',
    highlights: ['Trincomalee', 'Arugam Bay', 'Pasikuda'],
    bestTime: 'Mayo a Septiembre'
  },
  {
    id: 'costa-norte',
    title: 'Costa Norte',
    subtitle: 'Historia colonial y playas vírgenes',
    image: '/images/destinations/costa-norte.jpg',
    href: '/destinos/costa-norte',
    highlights: ['Jaffna', 'Point Pedro', 'Delft Island'],
    bestTime: 'Mayo a Septiembre'
  },
  {
    id: 'costa-oeste',
    title: 'Costa Oeste',
    subtitle: 'Cultura, comercio y atardeceres',
    image: '/images/destinations/costa-oeste.jpg',
    href: '/destinos/costa-oeste',
    highlights: ['Negombo', 'Chilaw', 'Kalpitiya'],
    bestTime: 'Diciembre a Marzo'
  },
  {
    id: 'montanas',
    title: 'Montañas',
    subtitle: 'Plantaciones de té y senderos místicos',
    image: '/images/destinations/montanas.jpg',
    href: '/destinos/montanas',
    highlights: ['Nuwara Eliya', 'Ella', 'Kandy'],
    bestTime: 'Todo el año'
  },
  {
    id: 'templos',
    title: 'Templos Budistas',
    subtitle: 'Espiritualidad y cultura milenaria',
    image: '/images/destinations/templos.jpg',
    href: '/destinos/templos-budistas',
    highlights: ['Dambulla', 'Anuradhapura', 'Polonnaruwa'],
    bestTime: 'Todo el año'
  },
  {
    id: 'ciudades',
    title: 'Ciudades Históricas',
    subtitle: 'Historia viva y tradiciones',
    image: '/images/destinations/ciudades.jpg',
    href: '/destinos/ciudades-historicas',
    highlights: ['Colombo', 'Kandy', 'Galle Fort'],
    bestTime: 'Todo el año'
  }
];

const DestinationsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Número de tarjetas visibles a la vez

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= destinations.length - (itemsToShow - 1) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? destinations.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-playfair font-bold text-tropical-green text-center mb-12">
        Explora Nuestros Destinos
      </h2>
      
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 w-full z-10 px-4">
          <button
            onClick={prevSlide}
            className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Anterior destino"
          >
            <IoChevronBackOutline className="w-6 h-6 text-tropical-green" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Siguiente destino"
          >
            <IoChevronForwardOutline className="w-6 h-6 text-tropical-green" />
          </button>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `-${currentIndex * (100 / itemsToShow)}%`
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                className="relative flex-none w-[calc(100%/3-1rem)] h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-2">
                    {destination.subtitle}
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium">
                      Lugares destacados: {destination.highlights.join(' • ')}
                    </p>
                    {destination.bestTime && (
                      <p className="text-xs font-medium">
                        Mejor época: {destination.bestTime}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsSlider; 