'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

const wellnessExperiences = [
  {
    id: 'yoga',
    title: 'Yoga',
    description: 'Encuentra tu equilibrio interior con nuestras experiencias de yoga',
    image: '/images/wellness/yoga/hero.jpg',
    href: '/wellness/yoga'
  },
  {
    id: 'ayurveda',
    title: 'Ayurveda',
    description: 'Descubre la sabiduría milenaria de la medicina tradicional',
    image: '/images/wellness/ayurveda/ayurveda-spa.jpg',
    href: '/wellness/ayurveda'
  },
  {
    id: 'meditation',
    title: 'Meditación',
    description: 'Alcanza la paz mental en entornos únicos',
    image: '/images/wellness/meditation/hero.jpg',
    href: '/wellness/meditation'
  },
  {
    id: 'spa',
    title: 'Spa & Masajes',
    description: 'Relájate con tratamientos tradicionales y modernos',
    image: '/images/wellness/spa/hero.jpg',
    href: '/wellness/spa'
  }
];

export default function WellnessPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/wellness/wellness-hero.jpg"
          alt="Wellness en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6">
            Wellness
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">
            Experiencias de bienestar únicas en el paraíso
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-coconut-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Wellness', href: '/wellness' }
            ]}
          />
        </div>
      </div>

      {/* Experiencias de Wellness */}
      <section className="py-16 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green text-center mb-12">
            Experiencias de Bienestar
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {wellnessExperiences.map((experience) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <Link href={experience.href}>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                      <h3 className="text-3xl font-playfair font-bold mb-3">
                        {experience.title}
                      </h3>
                      <p className="text-lg opacity-90">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green text-center mb-12">
            ¿Por qué elegir Sri Lanka para tu retiro de bienestar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Tradición Milenaria</h3>
              <p className="text-elephant-gray">
                Sri Lanka es cuna de antiguas prácticas de bienestar, desde el Ayurveda 
                hasta la meditación budista, ofreciendo experiencias auténticas y transformadoras.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Entorno Natural</h3>
              <p className="text-elephant-gray">
                Desde playas paradisíacas hasta montañas serenas, cada ubicación 
                ofrece un escenario perfecto para reconectar con uno mismo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-tropical-green mb-4">Expertos Cualificados</h3>
              <p className="text-elephant-gray">
                Maestros de yoga, doctores ayurvédicos y terapeutas experimentados 
                te guiarán en tu viaje hacia el bienestar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 