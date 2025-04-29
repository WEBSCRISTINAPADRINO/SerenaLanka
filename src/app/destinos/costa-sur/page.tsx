'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { regions } from '@/config/data';

export default function CostaSurPage() {
  const region = regions.find(r => r.id === 'costa-sur');

  if (!region) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={region.image}
          alt={region.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6">
            {region.name}
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">
            {region.description}
          </p>
        </div>
      </section>

      {/* Información Principal */}
      <section className="py-16 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-playfair font-bold text-tropical-green">
                Descubre {region.name}
              </h2>
              <p className="text-lg text-elephant-gray">
                La Costa Sur de Sri Lanka es un paraíso tropical donde las playas de arena dorada 
                se encuentran con las aguas cristalinas del Océano Índico. Aquí encontrarás una 
                perfecta mezcla de lujo accesible, cultura local y belleza natural.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-elephant-gray">Destacados:</h3>
                <ul className="list-disc list-inside space-y-2 text-elephant-gray">
                  {region.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-elephant-gray"><strong>Mejor época:</strong> {region.bestTime}</p>
                <p className="text-elephant-gray"><strong>Precio medio:</strong> {region.price}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-100 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-playfair font-bold text-tropical-green mb-4">
                Reserva tu estancia
              </h3>
              <p className="text-elephant-gray mb-6">
                Encuentra los mejores alojamientos en la Costa Sur de Sri Lanka, 
                desde boutique hotels hasta villas frente al mar.
              </p>
              <a
                href={region.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-golden-sand text-elephant-gray px-6 py-3 rounded-full
                         font-bold hover:bg-sunset-orange hover:text-white transition-all duration-300"
              >
                Ver alojamientos
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 