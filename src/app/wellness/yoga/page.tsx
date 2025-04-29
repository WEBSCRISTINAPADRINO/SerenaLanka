'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { yogaImages, type YogaImage } from '@/config/yoga-images';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function YogaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={yogaImages[0].url}
          alt="Retiro de Yoga en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6">
            Retiros de Yoga
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">
            Encuentra tu paz interior en los mejores centros de yoga de Sri Lanka
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
              { label: 'Yoga', href: '/wellness/yoga' }
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
                Descubre el Yoga en Sri Lanka
              </h2>
              <p className="text-lg text-elephant-gray">
                Sri Lanka, con su rica herencia espiritual y entornos naturales impresionantes, 
                es el destino perfecto para profundizar en tu práctica de yoga. Desde retiros 
                en las montañas hasta sesiones de meditación frente al mar, encontrarás el 
                ambiente ideal para reconectar con tu ser interior.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-elephant-gray">Experiencias Destacadas:</h3>
                <ul className="list-disc list-inside space-y-2 text-elephant-gray">
                  <li>Clases de yoga al amanecer en la playa</li>
                  <li>Retiros espirituales en antiguos templos</li>
                  <li>Meditación guiada por maestros locales</li>
                  <li>Talleres de filosofía yoga y ayurveda</li>
                  <li>Sesiones de yoga adaptadas a todos los niveles</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-elephant-gray"><strong>Mejor época:</strong> Todo el año</p>
                <p className="text-elephant-gray"><strong>Precio medio:</strong> Desde $50/día</p>
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
                Encuentra los mejores retiros de yoga en Sri Lanka, desde experiencias 
                de un día hasta programas intensivos de varias semanas. Alojamiento, 
                comidas y clases incluidas.
              </p>
              <a
                href="https://www.bookyogaretreats.com/all/d/asia-and-oceania/sri-lanka"
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
            Experiencias de Yoga
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yogaImages.map((image: YogaImage) => (
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
            Beneficios de Nuestros Retiros
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Cuerpo</h3>
              <ul className="space-y-2 text-elephant-gray">
                <li>• Mejora la flexibilidad y fuerza</li>
                <li>• Equilibra el sistema nervioso</li>
                <li>• Aumenta la energía vital</li>
                <li>• Mejora la postura</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Mente</h3>
              <ul className="space-y-2 text-elephant-gray">
                <li>• Reduce el estrés y la ansiedad</li>
                <li>• Mejora la concentración</li>
                <li>• Aumenta la claridad mental</li>
                <li>• Promueve el pensamiento positivo</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Espíritu</h3>
              <ul className="space-y-2 text-elephant-gray">
                <li>• Profundiza la conexión interior</li>
                <li>• Desarrolla la consciencia</li>
                <li>• Fomenta la paz interior</li>
                <li>• Cultiva la compasión</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 