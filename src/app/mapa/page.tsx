'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SriLankaOutlineMap from '@/components/SriLankaOutlineMap';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

const categories = [
  {
    id: 'cities',
    name: 'Ciudades',
    icon: '🏙️',
    places: [
      { name: 'Colombo', image: '/images/destinos/costa-oeste/colombo-1.jpg', href: '/destinos/costa-oeste' },
      { name: 'Kandy', image: '/images/destinos/montanas/kandy-1.jpg', href: '/destinos/montanas' },
      { name: 'Galle', image: '/images/destinos/costa-sur/galle-1.jpg', href: '/destinos/costa-sur' }
    ]
  },
  {
    id: 'beaches',
    name: 'Playas',
    icon: '🏖️',
    places: [
      { name: 'Mirissa', image: '/images/destinos/costa-sur/mirissa-1.jpg', href: '/destinos/costa-sur' },
      { name: 'Trincomalee', image: '/images/destinos/costa-este/trincomalee-1.jpg', href: '/destinos/costa-este' },
      { name: 'Unawatuna', image: '/images/destinos/costa-sur/unawatuna-1.jpg', href: '/destinos/costa-sur' }
    ]
  },
  {
    id: 'nature',
    name: 'Naturaleza',
    icon: '🌿',
    places: [
      { name: 'Yala', image: '/images/experiencias/safari-1.jpg', href: '/experiencias/naturaleza' },
      { name: 'Sigiriya', image: '/images/destinos/cultural/sigiriya-1.jpg', href: '/destinos/cultural' },
      { name: 'Ella', image: '/images/destinos/montanas/ella-1.jpg', href: '/destinos/montanas' }
    ]
  },
  {
    id: 'culture',
    name: 'Cultura',
    icon: '🛕',
    places: [
      { name: 'Templo del Diente', image: '/images/destinos/templos/tooth-temple-1.jpg', href: '/destinos/templos-budistas' },
      { name: 'Anuradhapura', image: '/images/destinos/cultural/anuradhapura-1.jpg', href: '/destinos/ciudades-historicas' },
      { name: 'Polonnaruwa', image: '/images/destinos/cultural/polonnaruwa-1.jpg', href: '/destinos/ciudades-historicas' }
    ]
  }
];

export default function MapaPage() {
  return (
    <main className="min-h-screen bg-coconut-white">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Inicio', href: '/' },
                { label: 'Explora Sri Lanka', href: '/mapa' }
              ]}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-tropical-green mb-6 text-center">
            Explora Sri Lanka
          </h1>
          <p className="text-lg text-elephant-gray mb-12 max-w-2xl mx-auto text-center">
            Descubre los tesoros escondidos de la Perla del Índico a través de nuestro mapa interactivo
          </p>
        </div>
      </section>

      {/* Mapa Interactivo */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <SriLankaOutlineMap />
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {categories.map((category) => (
            <div key={category.id} className="mb-16">
              <h2 className="text-2xl font-playfair font-bold text-tropical-green mb-8 flex items-center">
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.places.map((place) => (
                  <Link 
                    key={place.name} 
                    href={place.href}
                    className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                  >
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-playfair font-bold text-white">
                        {place.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 