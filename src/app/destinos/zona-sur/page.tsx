'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Datos de los destinos de la zona sur
const destinations = [
  {
    id: 'galle',
    name: 'Galle',
    description: 'Ciudad histórica con una fortaleza colonial holandesa declarada Patrimonio de la Humanidad.',
    image: 'https://images.unsplash.com/photo-1586867791557-40b415a4dbe1?auto=format&fit=crop&q=80',
    highlights: ['Fortaleza de Galle', 'Faro de Galle', 'Playa de Unawatuna'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Historia colonial', 'Buceo', 'Cultura local']
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    description: 'Paraíso tropical con una de las mejores playas de Sri Lanka y avistamiento de ballenas.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80',
    highlights: ['Playa de Mirissa', 'Avistamiento de ballenas', 'Coconut Tree Hill'],
    bestTime: 'Diciembre a Abril',
    experiences: ['Avistamiento de ballenas', 'Surf', 'Relax en la playa']
  },
  {
    id: 'tangalle',
    name: 'Tangalle',
    description: 'Hermosa ciudad costera con playas vírgenes y lagunas naturales.',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80',
    highlights: ['Playa de Tangalle', 'Laguna de Rekawa', 'Templo budista'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Tortugas marinas', 'Paseos en barco', 'Cultura local']
  },
  {
    id: 'hambantota',
    name: 'Hambantota',
    description: 'Ciudad portuaria moderna con acceso a parques nacionales y playas.',
    image: 'https://images.unsplash.com/photo-1590418606746-018840f9cd0f?auto=format&fit=crop&q=80',
    highlights: ['Puerto de Hambantota', 'Parque Nacional Yala', 'Playa de Hambantota'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Safari', 'Deportes acuáticos', 'Pesca']
  },
  {
    id: 'matara',
    name: 'Matara',
    description: 'Ciudad histórica con una rica herencia colonial y hermosas playas.',
    image: 'https://images.unsplash.com/photo-1625736036341-0d1ff419f430?auto=format&fit=crop&q=80',
    highlights: ['Faro de Dondra', 'Fortaleza de Matara', 'Playa de Polhena'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Historia colonial', 'Snorkeling', 'Cultura local']
  }
];

// Experiencias de naturaleza y cultura local
const natureExperiences = [
  {
    id: 'yala-safari',
    name: 'Safari en Yala',
    description: 'Explora el Parque Nacional de Yala, hogar de leopardos, elefantes, cocodrilos y una rica biodiversidad.',
    image: 'https://images.unsplash.com/photo-1577724513556-7ce8c0c0c610?auto=format&fit=crop&q=80',
    duration: '1 día',
    bestTime: 'Febrero a Julio',
    highlights: ['Avistamiento de leopardos', 'Observación de elefantes', 'Cocodrilos en lagunas'],
    affiliateLink: 'https://www.getyourguide.com/yala-national-park-l97595/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'tortugas-rekawa',
    name: 'Tortugas en Rekawa',
    description: 'Visita la playa de Rekawa para ver tortugas marinas desovando en su hábitat natural.',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&q=80',
    duration: '1 noche',
    bestTime: 'Noviembre a Marzo',
    highlights: ['Tortugas verdes', 'Tortugas laúd', 'Conservación marina'],
    affiliateLink: 'https://www.viator.com/Tangalle-attractions/Rekawa-Turtle-Watch/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'cultura-local',
    name: 'Experiencia Cultural Local',
    description: 'Sumérgete en la cultura local con familias cingalesas.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Cocina local', 'Artesanía', 'Música tradicional'],
    affiliateLink: 'https://www.airbnb.es/experiences/123456',
    affiliatePlatform: 'Airbnb Experiences'
  },
  {
    id: 'ballenas-mirissa',
    name: 'Avistamiento de Ballenas en Mirissa',
    description: 'Embárcate en una aventura para ver ballenas azules y delfines.',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1b109?auto=format&fit=crop&q=80',
    duration: '1 día',
    bestTime: 'Diciembre a Abril',
    highlights: ['Ballenas azules', 'Ballenas jorobadas', 'Delfines'],
    affiliateLink: 'https://www.getyourguide.com/mirissa-l97595/whale-watching-tours-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'granja-serpientes',
    name: 'Granja de Serpientes de Galle',
    description: 'Visita una granja de serpientes donde podrás aprender sobre las diferentes especies de Sri Lanka y observar demostraciones de manejo seguro.',
    image: '/images/experiencias/granja-serpientes.jpg',
    duration: 'Medio día',
    bestTime: 'Todo el año',
    highlights: ['Cobras', 'Víboras', 'Pitones', 'Demostraciones de manejo', 'Información sobre antídotos'],
    affiliateLink: 'https://www.viator.com/Galle-attractions/Snake-Farm/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'delfines-unawatuna',
    name: 'Nado con Delfines en Unawatuna',
    description: 'Vive una experiencia única nadando con delfines en las cristalinas aguas de Unawatuna, una de las mejores playas de Sri Lanka.',
    image: '/images/experiencias/delfines-unawatuna.jpg',
    duration: '1 día',
    bestTime: 'Diciembre a Abril',
    highlights: ['Delfines nariz de botella', 'Delfines manchados', 'Snorkeling', 'Fotografía submarina', 'Guía especializado'],
    affiliateLink: 'https://www.getyourguide.com/unawatuna-l97595/dolphin-swimming-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'cocodrilos-bentota',
    name: 'Safari de Cocodrilos en Bentota',
    description: 'Navega por el río Bentota para observar cocodrilos en su hábitat natural, junto con aves exóticas y manglares.',
    image: '/images/experiencias/cocodrilos-bentota.jpg',
    duration: 'Medio día',
    bestTime: 'Todo el año',
    highlights: ['Cocodrilos de estuario', 'Aves acuáticas', 'Manglares', 'Fotografía de naturaleza', 'Guía local'],
    affiliateLink: 'https://www.viator.com/Bentota-attractions/Crocodile-Safari/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'cultura-pescadores',
    name: 'Vida de los Pescadores',
    description: 'Únete a los pescadores locales para experimentar su forma de vida tradicional, incluyendo la pesca con redes y la preparación del pescado.',
    image: '/images/experiencias/pescadores.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Pesca tradicional', 'Preparación de pescado', 'Comida local', 'Interacción con familias', 'Fotografía documental'],
    affiliateLink: 'https://www.airbnb.es/experiences/789012',
    affiliatePlatform: 'Airbnb Experiences'
  }
];

export default function ZonaSurPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1578662996442-48f1f1e5b89f?auto=format&fit=crop&q=80"
          alt="Zona Sur de Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Zona Sur de Sri Lanka</h1>
            <p className="text-xl">Playas paradisíacas, historia colonial y naturaleza exuberante</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Destinos', href: '/destinos' },
            { label: 'Zona Sur', href: '/destinos/zona-sur' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre la Zona Sur</h2>
          <p className="text-elephant-gray/80 mb-4">
            La zona sur de Sri Lanka es famosa por sus impresionantes playas, rica historia colonial y 
            abundante vida silvestre. Desde la histórica ciudad de Galle hasta las playas vírgenes de 
            Mirissa, esta región ofrece una combinación perfecta de cultura, naturaleza y relax.
          </p>
          <p className="text-elephant-gray/80">
            La mejor época para visitar la zona sur es de diciembre a marzo, durante la estación seca. 
            Durante estos meses, podrás disfrutar de días soleados y noches frescas, perfectos para 
            explorar las playas y realizar actividades al aire libre.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-playfair text-center mb-12">Destinos en la Zona Sur</h2>
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

      {/* Experiencias de Naturaleza y Cultura */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-elephant-gray/5">
        <h2 className="text-3xl font-playfair text-center mb-6">Experiencias Únicas</h2>
        <p className="text-center text-elephant-gray/70 mb-12 max-w-3xl mx-auto">
          Descubre las experiencias más auténticas y memorables que la zona sur de Sri Lanka tiene para ofrecer. 
          Desde safaris y avistamiento de ballenas hasta inmersiones culturales con comunidades locales.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {natureExperiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2">{experience.name}</h3>
                <p className="text-elephant-gray/70 mb-4">{experience.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-elephant-gray/60">
                    <span className="font-semibold">Duración:</span> {experience.duration}
                  </p>
                  <p className="text-sm text-elephant-gray/60">
                    <span className="font-semibold">Mejor época:</span> {experience.bestTime}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-elephant-gray/60">Destacados:</p>
                    <ul className="list-disc list-inside text-sm text-elephant-gray/70">
                      {experience.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Link
                    href={`/experiencias/${experience.id}`}
                    className="flex-1 text-center bg-tropical-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Ver Detalles
                  </Link>
                  <a
                    href={experience.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-ocean-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Reservar en {experience.affiliatePlatform}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mapa de la zona */}
      <section className="py-16 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12">Mapa de la Zona Sur</h2>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126845.53999999999!2d80.2177!3d6.0535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1647887654321!5m2!1ses!2ses" 
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