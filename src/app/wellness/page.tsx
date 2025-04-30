'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

const wellnessCategories = [
  {
    id: 'yoga',
    title: 'Yoga',
    description: 'Descubre el poder transformador del yoga en los lugares más sagrados de Sri Lanka',
    image: '/images/wellness/yoga/yoga-hero.jpg',
    href: '/wellness/yoga'
  },
  {
    id: 'meditacion',
    title: 'Meditación',
    description: 'Encuentra tu paz interior en los templos y retiros de meditación',
    image: '/images/wellness/meditacion/retiro-silencio.jpg',
    href: '/wellness/meditacion'
  },
  {
    id: 'nutricion',
    title: 'Nutrición Ayurveda',
    description: 'Explora la sabiduría de la alimentación ayurvédica tradicional',
    image: '/images/wellness/nutricion/cocina-ayurveda.jpg',
    href: '/wellness/nutricion'
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
            Wellness en Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">
            Descubre el poder transformador de las prácticas ancestrales
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

      {/* Introducción */}
      <section className="py-16 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-6">
              Bienestar Integral en Sri Lanka
            </h2>
            <p className="text-lg text-elephant-gray">
              Sri Lanka es un destino único para el bienestar, donde las antiguas tradiciones 
              se encuentran con la naturaleza exuberante. Descubre cómo el yoga, la meditación 
              y la nutrición ayurvédica pueden transformar tu vida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-96 rounded-lg overflow-hidden group"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Link href={category.href}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-playfair font-bold mb-4">{category.title}</h3>
                    <p className="text-center">{category.description}</p>
                    <span className="mt-4 inline-block bg-golden-sand text-elephant-gray px-6 py-2 rounded-full font-bold">
                      Explorar
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-12 text-center">
            Beneficios del Wellness en Sri Lanka
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
              <h3 className="text-xl font-bold text-tropical-green mb-4">Mente</h3>
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
              <h3 className="text-xl font-bold text-tropical-green mb-4">Espíritu</h3>
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