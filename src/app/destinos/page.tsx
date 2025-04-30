'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

const destinos = [
  {
    id: 'costa-oeste',
    title: 'Costa Oeste',
    description: 'Desde la moderna Colombo hasta las playas de Negombo y Kalpitiya',
    image: '/images/destinos/costa-oeste/colombo-1.jpg',
    href: '/destinos/costa-oeste'
  },
  {
    id: 'costa-sur',
    title: 'Costa Sur',
    description: 'Playas paradisíacas y las mejores olas para el surf',
    image: '/images/destinos/costa-sur/hero.jpg',
    href: '/destinos/costa-sur'
  },
  {
    id: 'costa-este',
    title: 'Costa Este',
    description: 'Cultura, tradiciones y playas vírgenes',
    image: '/images/destinos/costa-este/hero.jpg',
    href: '/destinos/costa-este'
  },
  {
    id: 'montanas',
    title: 'Montañas',
    description: 'Naturaleza exuberante y plantaciones de té',
    image: '/images/destinos/montanas/hero.jpg',
    href: '/destinos/montanas'
  },
  {
    id: 'templos',
    title: 'Templos Budistas',
    description: 'Espiritualidad y arquitectura milenaria',
    image: '/images/destinos/templos/hero.jpg',
    href: '/destinos/templos'
  }
];

export default function DestinosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/destinos/hero.jpg"
          alt="Destinos en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-center mb-6">
            Destinos
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">
            Explora los rincones más fascinantes de Sri Lanka
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-coconut-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Destinos', href: '/destinos' }
            ]}
          />
        </div>
      </div>

      {/* Destinos Grid */}
      <section className="py-16 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinos.map((destino, index) => (
              <motion.div
                key={destino.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={destino.href} className="block group">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={destino.image}
                      alt={destino.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-playfair font-bold mb-2">
                        {destino.title}
                      </h2>
                      <p className="text-sm opacity-90">{destino.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 