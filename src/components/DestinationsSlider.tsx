'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const visibleCards = 3;
  const total = destinations.length;

  const getVisibleDestinations = () => {
    let start = currentIndex;
    let end = start + visibleCards;
    if (end > total) {
      return [...destinations.slice(start, total), ...destinations.slice(0, end - total)];
    }
    return destinations.slice(start, end);
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + total) % total);
  };

  return (
    <div className="relative w-full py-8 bg-coconut-white">
      <div className="flex items-center justify-center gap-6">
        {/* Flecha izquierda */}
        <button
          className="z-10 bg-white shadow-lg hover:bg-golden-sand/80 transition-colors rounded-full p-3 -ml-4"
          onClick={() => paginate(-1)}
          aria-label="Anterior"
        >
          <FiChevronLeft size={32} className="text-elephant-gray" />
        </button>
        {/* Cards tipo Australia */}
        <div className="flex gap-6 w-full max-w-6xl">
          {getVisibleDestinations().map((dest, idx) => (
            <Link
              href={dest.href}
              key={dest.id}
              className="group flex-1 rounded-3xl overflow-hidden shadow-xl relative min-h-[420px] max-w-[400px] flex flex-col justify-end bg-black"
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={idx === 1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <div className="relative z-20 p-6 flex flex-col justify-end h-full">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg uppercase tracking-tight text-left">
                  {dest.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        {/* Flecha derecha */}
        <button
          className="z-10 bg-white shadow-lg hover:bg-golden-sand/80 transition-colors rounded-full p-3 -mr-4"
          onClick={() => paginate(1)}
          aria-label="Siguiente"
        >
          <FiChevronRight size={32} className="text-elephant-gray" />
        </button>
      </div>
    </div>
  );
};

export default DestinationsSlider; 