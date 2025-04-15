'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Datos de los destinos de la zona norte
const destinations = [
  {
    id: 'jaffna',
    name: 'Jaffna',
    description: 'Capital cultural del norte, conocida por sus templos hindúes y rica herencia tamil.',
    image: '/images/destinos/zona-norte/jaffna.jpg',
    highlights: ['Templo Nallur Kandaswamy', 'Fortaleza de Jaffna', 'Isla de Nainativu'],
    bestTime: 'Febrero a Septiembre',
    experiences: ['Cultura tamil', 'Gastronomía local', 'Historia colonial']
  },
  {
    id: 'templos-antiguos',
    name: 'Templos Antiguos',
    description: 'Conjunto de templos budistas e hindúes de los siglos VII al XII con impresionante arquitectura.',
    image: '/images/destinos/zona-norte/templos-antiguos.jpg',
    highlights: ['Templo de la Cueva', 'Templo de la Roca', 'Templo del Trono'],
    bestTime: 'Febrero a Septiembre',
    experiences: ['Historia antigua', 'Arquitectura', 'Espiritualidad']
  },
  {
    id: 'mannar',
    name: 'Mannar',
    description: 'Isla histórica con playas vírgenes, faros antiguos y rica biodiversidad.',
    image: '/images/destinos/zona-norte/mannar.jpg',
    highlights: ['Faro de Mannar', 'Puente de Adam', 'Playa de Talaimannar'],
    bestTime: 'Febrero a Septiembre',
    experiences: ['Historia colonial', 'Observación de aves', 'Playas vírgenes']
  },
  {
    id: 'vavuniya',
    name: 'Vavuniya',
    description: 'Ciudad estratégica con acceso a parques nacionales y sitios históricos.',
    image: '/images/destinos/zona-norte/vavuniya.jpg',
    highlights: ['Parque Nacional Madhu', 'Templo Madhu', 'Lago Vavuniya'],
    bestTime: 'Febrero a Septiembre',
    experiences: ['Naturaleza', 'Peregrinación', 'Cultura local']
  },
  {
    id: 'kilinochchi',
    name: 'Kilinochchi',
    description: 'Región agrícola con rica historia local y cultura tamil.',
    image: '/images/destinos/zona-norte/kilinochchi.jpg',
    highlights: ['Agricultura local', 'Cultura tamil', 'Historia reciente'],
    bestTime: 'Febrero a Septiembre',
    experiences: ['Cultura local', 'Agricultura', 'Historia']
  }
];

// Experiencias de naturaleza y cultura local
const natureExperiences = [
  {
    id: 'templo-nallur',
    name: 'Festival del Templo Nallur',
    description: 'Vive la experiencia del famoso festival hindú del templo Nallur Kandaswamy, con procesiones, música y danzas tradicionales.',
    image: '/images/experiencias/festival-nallur.jpg',
    duration: '1 día',
    bestTime: 'Julio a Agosto',
    highlights: ['Procesiones religiosas', 'Música tradicional', 'Danzas tamil', 'Gastronomía local', 'Fotografía cultural'],
    affiliateLink: 'https://www.getyourguide.com/jaffna-l97595/nallur-temple-festival-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'isla-nainativu',
    name: 'Visita a la Isla de Nainativu',
    description: 'Explora la sagrada isla de Nainativu, hogar de templos budistas e hindúes y rica historia espiritual.',
    image: '/images/experiencias/nainativu.jpg',
    duration: '1 día',
    bestTime: 'Febrero a Septiembre',
    highlights: ['Templo Nagapooshani Amman', 'Templo budista', 'Peregrinación', 'Fotografía', 'Cultura local'],
    affiliateLink: 'https://www.viator.com/Jaffna-attractions/Nainativu-Island/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'observacion-aves',
    name: 'Observación de Aves en Mannar',
    description: 'Descubre la rica biodiversidad de aves en la isla de Mannar, incluyendo especies migratorias y endémicas.',
    image: '/images/experiencias/aves-mannar.jpg',
    duration: '1 día',
    bestTime: 'Octubre a Marzo',
    highlights: ['Aves migratorias', 'Aves acuáticas', 'Flamencos', 'Fotografía de naturaleza', 'Guía especializado'],
    affiliateLink: 'https://www.getyourguide.com/mannar-l97595/bird-watching-tours-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'cultura-tamil',
    name: 'Experiencia Cultural Tamil',
    description: 'Sumérgete en la rica cultura tamil con familias locales y aprende sobre sus tradiciones, cocina y artesanía.',
    image: '/images/experiencias/cultura-tamil.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Cocina tamil', 'Artesanía local', 'Música tradicional', 'Interacción con familias', 'Fotografía documental'],
    affiliateLink: 'https://www.airbnb.es/experiences/567890',
    affiliatePlatform: 'Airbnb Experiences'
  },
  {
    id: 'puente-adam',
    name: 'Exploración del Puente de Adam',
    description: 'Visita el legendario Puente de Adam, una cadena de bancos de arena que conecta Sri Lanka con la India.',
    image: '/images/experiencias/puente-adam.jpg',
    duration: '1 día',
    bestTime: 'Febrero a Septiembre',
    highlights: ['Vistas aéreas', 'Historia legendaria', 'Fotografía', 'Paisajes únicos', 'Guía local'],
    affiliateLink: 'https://www.viator.com/Mannar-attractions/Adams-Bridge/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'templo-madhu',
    name: 'Peregrinación al Templo Madhu',
    description: 'Visita el famoso santuario de peregrinación de Madhu, importante para católicos y budistas por igual.',
    image: '/images/experiencias/templo-madhu.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Santuario religioso', 'Historia colonial', 'Arquitectura única', 'Peregrinación', 'Cultura local'],
    affiliateLink: 'https://www.getyourguide.com/vavuniya-l97595/madhu-church-tour-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'cultura-pescadores',
    name: 'Vida de los Pescadores de Jaffna',
    description: 'Únete a los pescadores locales de Jaffna para experimentar su forma de vida tradicional y técnicas de pesca únicas.',
    image: '/images/experiencias/pescadores-jaffna.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Pesca tradicional', 'Preparación de pescado', 'Comida local', 'Interacción con familias', 'Fotografía documental'],
    affiliateLink: 'https://www.airbnb.es/experiences/123456',
    affiliatePlatform: 'Airbnb Experiences'
  },
  {
    id: 'gastronomia-jaffna',
    name: 'Tour Gastronómico de Jaffna',
    description: 'Descubre la rica gastronomía tamil de Jaffna, con sus especias, curries y platos tradicionales.',
    image: '/images/experiencias/gastronomia-jaffna.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Cocina tamil', 'Mercados locales', 'Taller de cocina', 'Degustación', 'Historia culinaria'],
    affiliateLink: 'https://www.getyourguide.com/jaffna-l97595/jaffna-food-tour-tc24/',
    affiliatePlatform: 'GetYourGuide'
  }
];

export default function ZonaNortePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/destinations/north-region.jpg"
          alt="Zona Norte de Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Zona Norte de Sri Lanka</h1>
            <p className="text-xl">Templos antiguos, cultura tamil y paisajes únicos</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Destinos', href: '/destinos' },
            { label: 'Zona Norte', href: '/destinos/zona-norte' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre la Zona Norte</h2>
          <p className="text-elephant-gray/80 mb-4">
            La zona norte de Sri Lanka es famosa por sus antiguos templos, rica cultura tamil y paisajes únicos. 
            Esta región ofrece una experiencia auténtica y menos turística que otras partes del país.
          </p>
          <p className="text-elephant-gray/80">
            La mejor época para visitar la zona norte es de febrero a septiembre, durante la estación seca. 
            Durante estos meses, podrás disfrutar de días soleados y noches frescas, perfectos para 
            explorar los templos y realizar actividades al aire libre.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-playfair text-center mb-12">Destinos en la Zona Norte</h2>
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
          Descubre las experiencias más auténticas y memorables que la zona norte de Sri Lanka tiene para ofrecer. 
          Desde festivales hindúes y templos antiguos hasta inmersiones en la cultura tamil.
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
          <h2 className="text-3xl font-playfair text-center mb-12">Mapa de la Zona Norte</h2>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126845.53999999999!2d80.0167!3d9.6615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1647887654321!5m2!1ses!2ses" 
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