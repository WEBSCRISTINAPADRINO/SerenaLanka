'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Datos de los destinos de la zona central
const destinations = [
  {
    id: 'kandy',
    name: 'Kandy',
    description: 'Ciudad cultural y espiritual con el famoso Templo del Diente y el lago de Kandy.',
    image: '/images/destinos/zona-central/kandy.jpg',
    highlights: ['Templo del Diente', 'Lago de Kandy', 'Jardines Botánicos de Peradeniya'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Cultura budista', 'Danzas tradicionales', 'Artesanía local']
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    description: 'Conocida como "Pequeña Inglaterra", famosa por sus plantaciones de té y clima fresco.',
    image: '/images/destinos/zona-central/nuwara-eliya.jpg',
    highlights: ['Plantaciones de té', 'Parque Victoria', 'Lago Gregory'],
    bestTime: 'Marzo a Mayo',
    experiences: ['Visitas a plantaciones de té', 'Senderismo', 'Golf']
  },
  {
    id: 'ella',
    name: 'Ella',
    description: 'Pintoresco pueblo de montaña con impresionantes vistas y rutas de senderismo.',
    image: '/images/destinos/zona-central/ella.jpg',
    highlights: ['Pequeño Pico de Adán', 'Puente de los Nueve Arcos', 'Tren de Ella'],
    bestTime: 'Enero a Abril',
    experiences: ['Senderismo', 'Fotografía', 'Cultura local']
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    description: 'Antigua fortaleza y palacio real construido sobre una roca gigante.',
    image: '/images/destinos/zona-central/sigiriya.jpg',
    highlights: ['Roca de Sigiriya', 'Jardines de agua', 'Pinturas rupestres'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Historia antigua', 'Arqueología', 'Fotografía']
  },
  {
    id: 'polonnaruwa',
    name: 'Polonnaruwa',
    description: 'Ciudad antigua con ruinas bien conservadas de la civilización cingalesa.',
    image: '/images/destinos/zona-central/polonnaruwa.jpg',
    highlights: ['Ciudadela real', 'Templos budistas', 'Estatuas de Buda'],
    bestTime: 'Diciembre a Marzo',
    experiences: ['Historia antigua', 'Arqueología', 'Cultura budista']
  }
];

// Experiencias de naturaleza y cultura local
const natureExperiences = [
  {
    id: 'plantacion-te',
    name: 'Visita a Plantación de Té',
    description: 'Explora las famosas plantaciones de té de Sri Lanka, aprende sobre el proceso de cultivo y degusta diferentes variedades.',
    image: '/images/experiencias/plantacion-te.jpg',
    duration: 'Medio día',
    bestTime: 'Todo el año',
    highlights: ['Cultivo de té', 'Proceso de elaboración', 'Cata de té', 'Vistas panorámicas', 'Fotografía'],
    affiliateLink: 'https://www.getyourguide.com/nuwara-eliya-l97595/tea-plantation-tours-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'trekking-adams-peak',
    name: 'Trekking al Pico de Adán',
    description: 'Sube al sagrado Pico de Adán, una montaña con forma de huella que es importante para budistas, hindúes, musulmanes y cristianos.',
    image: '/images/experiencias/adams-peak.jpg',
    duration: '1 día',
    bestTime: 'Diciembre a Mayo',
    highlights: ['Amanecer desde la cima', 'Vistas panorámicas', 'Cultura espiritual', 'Fotografía', 'Ejercicio'],
    affiliateLink: 'https://www.viator.com/Sri-Lanka-attractions/Adams-Peak/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'tren-ella',
    name: 'Viaje en Tren de Ella',
    description: 'Disfruta de uno de los viajes en tren más pintorescos del mundo, atravesando plantaciones de té y montañas.',
    image: '/images/experiencias/tren-ella.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Vistas panorámicas', 'Plantaciones de té', 'Puente de los Nueve Arcos', 'Fotografía', 'Experiencia local'],
    affiliateLink: 'https://www.getyourguide.com/kandy-l97595/ella-train-tour-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'templo-diente',
    name: 'Ceremonia del Templo del Diente',
    description: 'Asiste a la ceremonia diaria en el Templo del Diente de Buda, uno de los lugares más sagrados de Sri Lanka.',
    image: '/images/experiencias/templo-diente.jpg',
    duration: 'Medio día',
    bestTime: 'Todo el año',
    highlights: ['Ceremonia budista', 'Arquitectura tradicional', 'Cultura local', 'Fotografía', 'Historia'],
    affiliateLink: 'https://www.viator.com/Kandy-attractions/Temple-of-the-Sacred-Tooth-Relic/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'cultura-kandyan',
    name: 'Show de Danzas Kandyanas',
    description: 'Disfruta de un espectáculo de danzas tradicionales de Kandy, incluyendo la famosa danza del fuego.',
    image: '/images/experiencias/danzas-kandyanas.jpg',
    duration: '1 noche',
    bestTime: 'Todo el año',
    highlights: ['Danzas tradicionales', 'Música local', 'Trajes coloridos', 'Danza del fuego', 'Cultura cingalesa'],
    affiliateLink: 'https://www.getyourguide.com/kandy-l97595/kandyan-dance-show-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'senderismo-horton',
    name: 'Senderismo en las Llanuras de Horton',
    description: 'Explora las llanuras de Horton, un parque nacional de gran altitud con paisajes únicos y especies endémicas.',
    image: '/images/experiencias/horton-plains.jpg',
    duration: '1 día',
    bestTime: 'Febrero a Mayo',
    highlights: ['Fin del mundo', 'Cascada de Baker', 'Especies endémicas', 'Paisajes de montaña', 'Fotografía'],
    affiliateLink: 'https://www.viator.com/Nuwara-Eliya-attractions/Horton-Plains-National-Park/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'cultura-village',
    name: 'Experiencia en Aldea Tradicional',
    description: 'Visita una aldea tradicional cingalesa y aprende sobre su forma de vida, agricultura y artesanía.',
    image: '/images/experiencias/aldea-tradicional.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Agricultura tradicional', 'Artesanía local', 'Comida casera', 'Interacción con familias', 'Fotografía documental'],
    affiliateLink: 'https://www.airbnb.es/experiences/345678',
    affiliatePlatform: 'Airbnb Experiences'
  },
  {
    id: 'yoga-meditacion',
    name: 'Retiro de Yoga y Meditación',
    description: 'Participa en un retiro de yoga y meditación en las serenas montañas de Sri Lanka, con instructores expertos.',
    image: '/images/experiencias/yoga-meditacion.jpg',
    duration: '3-7 días',
    bestTime: 'Todo el año',
    highlights: ['Clases de yoga', 'Sesiones de meditación', 'Comida saludable', 'Masajes ayurvédicos', 'Entorno natural'],
    affiliateLink: 'https://www.bookyogaretreats.com/sri-lanka/yoga-retreats',
    affiliatePlatform: 'BookYogaRetreats'
  }
];

export default function ZonaCentralPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/destinations/central-highlands.jpg"
          alt="Zona Central de Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Zona Central de Sri Lanka</h1>
            <p className="text-xl">Montañas, plantaciones de té y templos budistas</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Destinos', href: '/destinos' },
            { label: 'Zona Central', href: '/destinos/zona-central' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre la Zona Central</h2>
          <p className="text-elephant-gray/80 mb-4">
            La zona central de Sri Lanka es famosa por sus impresionantes montañas, extensas plantaciones de té y 
            antiguos templos budistas. Esta región ofrece una combinación perfecta de naturaleza, cultura y espiritualidad.
          </p>
          <p className="text-elephant-gray/80">
            La mejor época para visitar la zona central es de diciembre a marzo, durante la estación seca. 
            Durante estos meses, podrás disfrutar de días soleados y noches frescas, perfectos para 
            explorar las montañas y realizar actividades al aire libre.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-playfair text-center mb-12">Destinos en la Zona Central</h2>
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
          Descubre las experiencias más auténticas y memorables que la zona central de Sri Lanka tiene para ofrecer. 
          Desde visitas a plantaciones de té y trekking en montañas hasta inmersiones en la cultura budista.
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
          <h2 className="text-3xl font-playfair text-center mb-12">Mapa de la Zona Central</h2>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126845.53999999999!2d80.6337!3d7.2906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1647887654321!5m2!1ses!2ses" 
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