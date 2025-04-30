'use client';

import React from 'react';
import SriLankaOutlineMap from '@/components/SriLankaOutlineMap';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function MapaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-coconut-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Inicio', href: '/' },
                { label: 'Mapa Interactivo', href: '/mapa' }
              ]}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-tropical-green mb-6 text-center">
            Mapa Interactivo de Sri Lanka
          </h1>
          <p className="text-lg text-elephant-gray mb-12 max-w-2xl mx-auto text-center">
            Explora las diferentes regiones de Sri Lanka. Selecciona una región para descubrir 
            sus destinos únicos, experiencias y lugares imprescindibles.
          </p>
          <div className="max-w-4xl mx-auto">
            <SriLankaOutlineMap />
          </div>
        </div>
      </section>
    </main>
  );
} 