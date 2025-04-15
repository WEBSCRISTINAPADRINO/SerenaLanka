'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Datos de los destinos de la zona oeste
const destinations = [
  {
    id: 'colombo',
    name: 'Colombo',
    description: 'La capital comercial de Sri Lanka, una vibrante mezcla de historia colonial y modernidad.',
    image: '/images/destinos/costa-oeste/colombo.jpg',
    highlights: ['Fort', 'Pettah', 'Galle Face Green'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Compras', 'Gastronomía', 'Cultura urbana']
  },
  {
    id: 'negombo',
    name: 'Negombo',
    description: 'Ciudad costera con una rica herencia colonial y excelentes playas.',
    image: '/images/destinos/costa-oeste/negombo.jpg',
    highlights: ['Playa de Negombo', 'Laguna de Negombo', 'Mercado de pescado'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Paseos en barco', 'Gastronomía local', 'Historia colonial']
  },
  {
    id: 'kalutara',
    name: 'Kalutara',
    description: 'Famosa por su templo budista y sus playas de arena dorada.',
    image: '/images/destinos/costa-oeste/kalutara.jpg',
    highlights: ['Templo de Kalutara', 'Playa de Kalutara', 'Jardines de especias'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Cultura budista', 'Relax en la playa', 'Jardines de especias']
  },
  {
    id: 'beruwala',
    name: 'Beruwala',
    description: 'Una de las primeras comunidades musulmanas de Sri Lanka con hermosas playas.',
    image: '/images/destinos/costa-oeste/beruwala.jpg',
    highlights: ['Playa de Beruwala', 'Mezquita Ketchimalai', 'Mercado flotante'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Cultura musulmana', 'Paseos en barco', 'Gastronomía local']
  },
  {
    id: 'aluthgama',
    name: 'Aluthgama',
    description: 'Pequeña ciudad costera con acceso a playas vírgenes y el río Bentota.',
    image: '/images/destinos/costa-oeste/aluthgama.jpg',
    highlights: ['Playa de Aluthgama', 'Río Bentota', 'Templo budista'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Deportes acuáticos', 'Paseos en barco', 'Cultura local']
  }
];

export default function ZonaOestePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/destinations/west-coast.jpg"
          alt="Zona Oeste de Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Zona Oeste de Sri Lanka</h1>
            <p className="text-xl">La puerta de entrada a la isla, donde la tradición se encuentra con la modernidad</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Destinos', href: '/destinos' },
            { label: 'Zona Oeste', href: '/destinos/zona-oeste' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre la Zona Oeste</h2>
          <p className="text-elephant-gray/80 mb-4">
            La zona oeste de Sri Lanka es la región más desarrollada del país y alberga la capital comercial, Colombo. 
            Esta área combina la rica historia colonial con la modernidad, ofreciendo una mezcla única de experiencias 
            culturales, gastronómicas y de entretenimiento.
          </p>
          <p className="text-elephant-gray/80">
            La mejor época para visitar la zona oeste es de diciembre a marzo, durante la estación seca. Durante estos meses, 
            podrás disfrutar de días soleados y noches frescas, perfectos para explorar la ciudad y sus alrededores.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-playfair text-center mb-12">Destinos en la Zona Oeste</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2">{destination.name}</h3>
                <p className="text-elephant-gray/70 mb-4">{destination.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-elephant-gray/60">
                    <span className="font-semibold">Mejor época:</span> {destination.bestTime}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-elephant-gray/60">Experiencias:</p>
                    <ul className="list-disc list-inside text-sm text-elephant-gray/70">
                      {destination.experiences.map((exp, index) => (
                        <li key={index}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href={`/destinos/${destination.id}`}
                  className="mt-4 inline-block bg-tropical-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Explorar {destination.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mapa de la zona */}
      <section className="py-16 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12">Mapa de la Zona Oeste</h2>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126845.53999999999!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1647887654321!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
} 