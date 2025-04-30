'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { meditacionImages, type MeditacionImage } from '../../../config/meditacion-images';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function MeditacionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={meditacionImages[0].url}
          alt="Meditación en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6">
            Meditación
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
                El Arte de la Meditación
              </h2>
              <p className="text-lg text-elephant-gray">
                Sri Lanka, cuna del budismo Theravada, ofrece algunos de los 
                entornos más propicios para la meditación. Desde antiguos templos 
                hasta retiros en la naturaleza, encontrarás el espacio perfecto 
                para profundizar en tu práctica meditativa.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-elephant-gray">Experiencias Destacadas:</h3>
                <ul className="list-disc list-inside space-y-2 text-elephant-gray">
                  <li>Meditación guiada en templos budistas</li>
                  <li>Retiros de silencio en la naturaleza</li>
                  <li>Prácticas de mindfulness en entornos únicos</li>
                  <li>Talleres de meditación con monjes</li>
                  <li>Meditación al amanecer en lugares sagrados</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-elephant-gray"><strong>Duración recomendada:</strong> Mínimo 3 días</p>
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
                Reserva tu Experiencia
              </h3>
              <p className="text-elephant-gray mb-6">
                Descubre los mejores lugares para meditar en Sri Lanka, desde 
                templos antiguos hasta retiros en la naturaleza. Todos nuestros 
                guías son practicantes experimentados y los lugares están 
                cuidadosamente seleccionados para ofrecerte la mejor experiencia.
              </p>
              <a
                href="https://www.serenalanka.com/contacto"
                className="inline-block bg-golden-sand text-elephant-gray px-6 py-3 rounded-full
                         font-bold hover:bg-sunset-orange hover:text-white transition-all duration-300"
              >
                Consultar disponibilidad
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-12 text-center">
            Lugares para Meditar
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
            Beneficios de la Meditación
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Mente</h3>
              <ul className="space-y-2 text-elephant-gray">
                <li>• Reduce el estrés y la ansiedad</li>
                <li>• Mejora la concentración</li>
                <li>• Aumenta la claridad mental</li>
                <li>• Desarrolla la consciencia</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Cuerpo</h3>
              <ul className="space-y-2 text-elephant-gray">
                <li>• Reduce la presión arterial</li>
                <li>• Mejora el sistema inmunológico</li>
                <li>• Alivia tensiones musculares</li>
                <li>• Promueve un sueño reparador</li>
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
                <li>• Cultiva la compasión</li>
                <li>• Desarrolla la paciencia</li>
                <li>• Fomenta la paz interior</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 