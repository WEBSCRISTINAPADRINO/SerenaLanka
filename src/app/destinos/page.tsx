'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { regions } from '@/config/data';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function DestinosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80"
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

      {/* Regiones Grid */}
      <section className="py-16 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-playfair font-bold text-tropical-green mb-3">
                    {region.name}
                  </h2>
                  <p className="text-elephant-gray mb-4">
                    {region.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-elephant-gray"><strong>Mejor época:</strong> {region.bestTime}</p>
                    <p className="text-elephant-gray"><strong>Desde:</strong> {region.price}</p>
                  </div>
                  <Link
                    href={`/destinos/${region.slug}`}
                    className="inline-block bg-golden-sand text-elephant-gray px-6 py-3 rounded-full
                             font-bold hover:bg-sunset-orange hover:text-white transition-all duration-300"
                  >
                    Explorar {region.name}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 