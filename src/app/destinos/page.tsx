'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Datos de las regiones
const regions = [
  {
    id: 'costa-sur',
    name: 'Costa Sur',
    description: 'Playas paradisíacas y resorts de lujo',
    image: '/images/destinations/south-coast.jpg',
    highlights: ['Mirissa', 'Unawatuna', 'Tangalle'],
    bestTime: 'Noviembre a Abril',
    experiences: ['Surf', 'Avistamiento de ballenas', 'Relax en la playa']
  },
  {
    id: 'costa-este',
    name: 'Costa Este',
    description: 'Playas vírgenes y cultura local',
    image: '/images/destinations/east-coast.jpg',
    highlights: ['Trincomalee', 'Arugam Bay', 'Pasikuda'],
    bestTime: 'Mayo a Septiembre',
    experiences: ['Surf', 'Buceo', 'Cultura local']
  },
  {
    id: 'montanas',
    name: 'Montañas',
    description: 'Paisajes verdes y plantaciones de té',
    image: '/images/destinations/mountains.jpg',
    highlights: ['Ella', 'Nuwara Eliya', 'Horton Plains'],
    bestTime: 'Todo el año',
    experiences: ['Trekking', 'Plantaciones de té', 'Vistas panorámicas']
  },
  {
    id: 'templos',
    name: 'Templos Budistas',
    description: 'Sitios espirituales y culturales',
    image: '/images/destinations/temples.jpg',
    highlights: ['Kandy', 'Anuradhapura', 'Polonnaruwa'],
    bestTime: 'Todo el año',
    experiences: ['Cultura budista', 'Arquitectura histórica', 'Meditación']
  },
  {
    id: 'ciudades',
    name: 'Ciudades Históricas',
    description: 'Centros culturales y comerciales',
    image: '/images/destinations/cities.jpg',
    highlights: ['Colombo', 'Galle Fort', 'Jaffna'],
    bestTime: 'Todo el año',
    experiences: ['Compras', 'Gastronomía', 'Historia']
  }
];

// Destacados por temporada
const seasonalHighlights = {
  summer: {
    title: 'Verano (Marzo - Mayo)',
    destinations: ['Arugam Bay', 'Pasikuda', 'Trincomalee'],
    activities: ['Surf', 'Buceo', 'Relax en la playa']
  },
  monsoon: {
    title: 'Monzón (Mayo - Septiembre)',
    destinations: ['Colombo', 'Kandy', 'Ella'],
    activities: ['Trekking', 'Cultura local', 'Plantaciones de té']
  },
  winter: {
    title: 'Invierno (Diciembre - Febrero)',
    destinations: ['Mirissa', 'Unawatuna', 'Tangalle'],
    activities: ['Avistamiento de ballenas', 'Surf', 'Relax']
  }
};

export default function DestinosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/destinations/hero.jpg"
          alt="Destinos en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Destinos en Sri Lanka</h1>
            <p className="text-xl">Descubre los lugares más mágicos de la isla</p>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Explora por Región</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Mejor época:</span> {region.bestTime}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Experiencias:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {region.experiences.map((exp, index) => (
                        <li key={index}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href={`/destinos/${region.id}`}
                  className="mt-4 inline-block bg-tropical-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Explorar {region.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Destacados por Temporada</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(seasonalHighlights).map(([season, data]) => (
              <motion.div
                key={season}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">{data.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700">Destinos recomendados:</p>
                    <ul className="list-disc list-inside text-gray-600">
                      {data.destinations.map((dest, index) => (
                        <li key={index}>{dest}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Actividades:</p>
                    <ul className="list-disc list-inside text-gray-600">
                      {data.activities.map((act, index) => (
                        <li key={index}>{act}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 