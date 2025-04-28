'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

// Datos de los destinos
const destinos = [
  {
    id: 'costa-sur',
    nombre: 'Costa Sur',
    descripcion: 'Playas paradisíacas, surf y vida marina',
    imagen: '/images/destinos/costa-sur/hero.jpg',
    highlights: ['Galle', 'Mirissa', 'Unawatuna', 'Weligama'],
    slug: '/destinos/costa-sur'
  },
  {
    id: 'costa-este',
    nombre: 'Costa Este',
    descripcion: 'Playas vírgenes y cultura local',
    imagen: '/images/destinos/costa-este/hero.jpg',
    highlights: ['Trincomalee', 'Arugam Bay', 'Batticaloa', 'Pasikudah'],
    slug: '/destinos/costa-este'
  },
  {
    id: 'montanas',
    nombre: 'Montañas',
    descripcion: 'Plantaciones de té y naturaleza',
    imagen: '/images/destinos/montanas/hero.jpg',
    highlights: ['Ella', 'Nuwara Eliya', 'Kandy', 'Haputale'],
    slug: '/destinos/montanas'
  },
  {
    id: 'templos',
    nombre: 'Templos Budistas',
    descripcion: 'Espiritualidad y cultura milenaria',
    imagen: '/images/destinos/templos/hero.jpg',
    highlights: ['Anuradhapura', 'Polonnaruwa', 'Dambulla', 'Sigiriya'],
    slug: '/destinos/templos'
  },
  {
    id: 'ciudades',
    nombre: 'Ciudades Históricas',
    descripcion: 'Historia colonial y moderna',
    imagen: '/images/destinos/ciudades/hero.jpg',
    highlights: ['Colombo', 'Kandy', 'Galle', 'Jaffna'],
    slug: '/destinos/ciudades'
  }
];

export default function DestinosPage() {
  return (
    <main className="min-h-screen bg-coconut-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/images/destinations/hero.jpg"
          alt="Destinos en Sri Lanka"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-coconut-white">
          <h1 className="text-4xl md:text-6xl font-playfair mb-4">Destinos</h1>
          <p className="text-lg md:text-xl max-w-2xl text-center px-4">
            Descubre los lugares más increíbles de Sri Lanka
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Destinos', href: '/destinos' }
        ]}
      />

      {/* Grid de Destinos */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinos.map((destino) => (
            <motion.div
              key={destino.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Link href={destino.slug} className="block">
                <div className="relative h-48 md:h-64">
                  <Image
                    src={destino.imagen}
                    alt={destino.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-playfair text-elephant-gray mb-2">
                    {destino.nombre}
                  </h2>
                  <p className="text-gray-600 mb-4">{destino.descripcion}</p>
                  <div className="flex flex-wrap gap-2">
                    {destino.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-golden-sand/20 text-spice-red rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 