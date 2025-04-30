'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { costaOesteImages } from '@/config/costa-oeste-images';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function CostaOestePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={costaOesteImages[0].url}
          alt="Costa Oeste de Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6">
            Costa Oeste
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">
            Descubre las joyas escondidas de la costa occidental de Sri Lanka
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
              { label: 'Costa Oeste', href: '/destinos/costa-oeste' }
            ]}
          />
        </div>
      </div>

      {/* Descripción General */}
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
                Explora la Costa Oeste
              </h2>
              <p className="text-lg text-elephant-gray">
                La costa occidental de Sri Lanka combina la modernidad de Colombo con 
                el encanto de pueblos pesqueros tradicionales, playas vírgenes y una 
                rica vida silvestre. Desde el bullicio de la capital hasta la serenidad 
                de Kalpitiya, cada destino ofrece una experiencia única.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-elephant-gray">Destacados:</h3>
                <ul className="list-disc list-inside space-y-2 text-elephant-gray">
                  <li>Arquitectura colonial y moderna en Colombo</li>
                  <li>Mercados de pescado tradicionales en Negombo</li>
                  <li>Kitesurf y deportes acuáticos en Kalpitiya</li>
                  <li>Templos budistas ancestrales en Chilaw</li>
                  <li>Observación de aves en las lagunas de Puttalam</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-100 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-playfair font-bold text-tropical-green mb-4">
                Información Práctica
              </h3>
              <div className="space-y-4 text-elephant-gray">
                <div>
                  <h4 className="font-bold">Mejor época para visitar:</h4>
                  <p>De diciembre a abril (temporada seca)</p>
                </div>
                <div>
                  <h4 className="font-bold">Cómo llegar:</h4>
                  <p>Vuelos internacionales al Aeropuerto de Bandaranaike (CMB)</p>
                </div>
                <div>
                  <h4 className="font-bold">Duración recomendada:</h4>
                  <p>5-7 días para explorar la región</p>
                </div>
                <div>
                  <h4 className="font-bold">Alojamiento:</h4>
                  <p>Desde hoteles boutique hasta resorts de lujo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-12 text-center">
            Destinos de la Costa Oeste
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costaOesteImages.map((destino) => (
              <motion.div
                key={destino.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-80 rounded-lg overflow-hidden group"
              >
                <Image
                  src={destino.url}
                  alt={destino.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{destino.title}</h3>
                  <p className="text-sm">{destino.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 