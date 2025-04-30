'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { meditacionImages, type MeditacionImage } from '@/config/meditacion-images';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function MeditacionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={meditacionImages[0].url}
          alt="Retiro de Meditación en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6">
            Meditación en Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">
            Encuentra tu paz interior en los lugares más sagrados de Sri Lanka
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-coconut-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Wellness', href: '/wellness' },
              { label: 'Meditación', href: '/wellness/meditacion' }
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
                Descubre la Meditación en Sri Lanka
              </h2>
              <p className="text-lg text-elephant-gray">
                Sri Lanka, cuna del budismo Theravada, ofrece un entorno único para 
                profundizar en tu práctica de meditación. Desde antiguos templos hasta 
                retiros en la naturaleza, encontrarás el espacio perfecto para cultivar 
                la paz interior y la claridad mental.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-elephant-gray">Experiencias Destacadas:</h3>
                <ul className="list-disc list-inside space-y-2 text-elephant-gray">
                  <li>Retiros de silencio en templos budistas</li>
                  <li>Meditación guiada por monjes experimentados</li>
                  <li>Prácticas de mindfulness en la naturaleza</li>
                  <li>Meditación al amanecer en lugares sagrados</li>
                  <li>Retiros de varios días en la selva</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-elephant-gray"><strong>Mejor época:</strong> Todo el año</p>
                <p className="text-elephant-gray"><strong>Precio medio:</strong> Desde $40/día</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-100 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-playfair font-bold text-tropical-green mb-4">
                Reserva tu Retiro
              </h3>
              <p className="text-elephant-gray mb-6">
                Encuentra los mejores retiros de meditación en Sri Lanka, desde experiencias 
                de un día hasta programas intensivos de varias semanas. Alojamiento, 
                comidas y guía espiritual incluidas.
              </p>
              <a
                href="https://www.dhamma.org/en/schedules/schasia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-golden-sand text-elephant-gray px-6 py-3 rounded-full
                         font-bold hover:bg-sunset-orange hover:text-white transition-all duration-300"
              >
                Ver retiros disponibles
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-12 text-center">
            Experiencias de Meditación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meditacionImages.map((image: MeditacionImage) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-80 rounded-lg overflow-hidden group"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                  <p className="text-xs mt-2 opacity-75">Ubicación: {image.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-16 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-12 text-center">
            Beneficios de la Meditación
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Físicos</h3>
              <ul className="space-y-2 text-elephant-gray">
                <li>• Reduce la presión arterial</li>
                <li>• Mejora el sistema inmunológico</li>
                <li>• Disminuye el dolor crónico</li>
                <li>• Mejora la calidad del sueño</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Mentales</h3>
              <ul className="space-y-2 text-elephant-gray">
                <li>• Reduce el estrés y la ansiedad</li>
                <li>• Mejora la concentración</li>
                <li>• Aumenta la claridad mental</li>
                <li>• Desarrolla la resiliencia</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Espirituales</h3>
              <ul className="space-y-2 text-elephant-gray">
                <li>• Profundiza la conexión interior</li>
                <li>• Cultiva la compasión</li>
                <li>• Desarrolla la sabiduría</li>
                <li>• Fomenta la paz interior</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 