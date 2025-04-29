'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { regions, type Region } from '@/config/data';
import { costaNorteImages, type CostaNorteImage } from '@/config/costa-norte-images';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function CostaNortePage() {
  const region = regions.find((r: Region) => r.id === 'costa-norte');

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-elephant-gray">Región no encontrada</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
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

      {/* Breadcrumbs */}
      <div className="bg-coconut-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Destinos', href: '/destinos' },
              { label: region.name, href: `/destinos/costa-norte` }
            ]}
          />
        </div>
      </div>

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
                Descubre la Costa Norte
              </h2>
              <p className="text-lg text-elephant-gray">
                La Costa Norte de Sri Lanka es un tesoro por descubrir, donde la autenticidad 
                y la belleza natural se fusionan con una rica herencia cultural. Desde las 
                magníficas playas de Trincomalee hasta los históricos templos de Jaffna, 
                esta región ofrece una experiencia única lejos del turismo masivo.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-elephant-gray">Destacados:</h3>
                <ul className="list-disc list-inside space-y-2 text-elephant-gray">
                  {region.highlights.map((highlight: string) => (
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
                Encuentra alojamientos auténticos en la Costa Norte de Sri Lanka, 
                desde hoteles boutique con vistas al mar hasta guest houses tradicionales 
                gestionadas por familias locales.
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

      {/* Galería de Imágenes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-12 text-center">
            Explora la Costa Norte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costaNorteImages.map((image: CostaNorteImage) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-80 rounded-lg overflow-hidden group"
              >
                <Image
                  src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                  <p className="text-xs mt-2 opacity-75">Foto por: {image.credit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 