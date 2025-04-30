'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { nutricionImages, type NutricionImage } from '@/config/nutricion-images';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function NutricionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={nutricionImages[0].url}
          alt="Nutrición Ayurveda en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6">
            Nutrición Ayurveda
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">
            Descubre la sabiduría de la alimentación ayurvédica en Sri Lanka
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
              { label: 'Nutrición', href: '/wellness/nutricion' }
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
                Alimentación Consciente en Sri Lanka
              </h2>
              <p className="text-lg text-elephant-gray">
                Sri Lanka es un paraíso para los amantes de la comida saludable. 
                Descubre la rica tradición culinaria ayurvédica, los superalimentos 
                locales y la cocina tradicional que nutre tanto el cuerpo como el alma.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-elephant-gray">Experiencias Gastronómicas:</h3>
                <ul className="list-disc list-inside space-y-2 text-elephant-gray">
                  <li>Cursos de cocina ayurvédica</li>
                  <li>Visitas a mercados locales</li>
                  <li>Talleres de superalimentos</li>
                  <li>Menús personalizados según tu dosha</li>
                  <li>Desayunos saludables y energéticos</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-elephant-gray"><strong>Mejor época:</strong> Todo el año</p>
                <p className="text-elephant-gray"><strong>Precio medio:</strong> Desde $30/día</p>
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
                Explora el mundo de la nutrición ayurvédica en Sri Lanka. Desde 
                cursos de cocina hasta consultas nutricionales personalizadas, 
                encuentra la experiencia perfecta para ti.
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
            Experiencias Gastronómicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutricionImages.map((image: NutricionImage) => (
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
            Beneficios de la Nutrición Ayurveda
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
                <li>• Mejora la digestión</li>
                <li>• Aumenta la energía vital</li>
                <li>• Fortalece el sistema inmunológico</li>
                <li>• Promueve un peso saludable</li>
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
                <li>• Mejora la claridad mental</li>
                <li>• Reduce el estrés</li>
                <li>• Aumenta la concentración</li>
                <li>• Promueve el equilibrio emocional</li>
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
                <li>• Conecta con la sabiduría ancestral</li>
                <li>• Cultiva la consciencia alimentaria</li>
                <li>• Promueve la armonía interior</li>
                <li>• Fomenta el respeto por la naturaleza</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 