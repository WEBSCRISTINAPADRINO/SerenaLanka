'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Datos de los destinos de la zona este
const destinations = [
  {
    id: 'trincomalee',
    name: 'Trincomalee',
    description: 'Ciudad portuaria con hermosas playas, lagunas y rica historia naval.',
    image: '/images/destinos/zona-este/trincomalee.jpg',
    highlights: ['Playa de Nilaveli', 'Fuerte Frederick', 'Templo Koneswaram'],
    bestTime: 'Abril a Septiembre',
    experiences: ['Buceo', 'Avistamiento de ballenas', 'Historia colonial']
  },
  {
    id: 'arugam-bay',
    name: 'Arugam Bay',
    description: 'Paraíso para surfistas con algunas de las mejores olas del mundo.',
    image: '/images/destinos/zona-este/arugam-bay.jpg',
    highlights: ['Surf', 'Playa de arena dorada', 'Laguna de Pottuvil'],
    bestTime: 'Abril a Septiembre',
    experiences: ['Surf', 'Observación de aves', 'Pesca local']
  },
  {
    id: 'pasikuda',
    name: 'Pasikuda',
    description: 'Playa de arena blanca con aguas cristalinas y arrecifes de coral.',
    image: '/images/destinos/zona-este/pasikuda.jpg',
    highlights: ['Playa virgen', 'Snorkel', 'Puesta de sol'],
    bestTime: 'Abril a Septiembre',
    experiences: ['Snorkel', 'Relax', 'Fotografía']
  },
  {
    id: 'batticaloa',
    name: 'Batticaloa',
    description: 'Ciudad histórica con lagunas, fortalezas coloniales y rica cultura local.',
    image: '/images/destinos/zona-este/batticaloa.jpg',
    highlights: ['Laguna de Batticaloa', 'Fuerte de Batticaloa', 'Iglesia holandesa'],
    bestTime: 'Abril a Septiembre',
    experiences: ['Historia colonial', 'Cultura local', 'Paseos en barco']
  },
  {
    id: 'kalkudah',
    name: 'Kalkudah',
    description: 'Playa virgen con aguas cristalinas y ambiente tranquilo.',
    image: '/images/destinos/zona-este/kalkudah.jpg',
    highlights: ['Playa virgen', 'Aguas cristalinas', 'Atardeceres'],
    bestTime: 'Abril a Septiembre',
    experiences: ['Relax', 'Fotografía', 'Naturaleza']
  }
];

// Experiencias de naturaleza y cultura local
const natureExperiences = [
  {
    id: 'avistamiento-ballenas',
    name: 'Avistamiento de Ballenas en Trincomalee',
    description: 'Embárcate en una aventura para ver ballenas azules, jorobadas y delfines en su hábitat natural.',
    image: '/images/experiencias/ballenas-trincomalee.jpg',
    duration: '1 día',
    bestTime: 'Junio a Septiembre',
    highlights: ['Ballenas azules', 'Ballenas jorobadas', 'Delfines', 'Fotografía marina', 'Guía especializado'],
    affiliateLink: 'https://www.getyourguide.com/trincomalee-l97595/whale-watching-tours-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'buceo-nilaveli',
    name: 'Buceo en Nilaveli',
    description: 'Explora los vibrantes arrecifes de coral y la rica vida marina de las aguas de Trincomalee.',
    image: '/images/experiencias/buceo-nilaveli.jpg',
    duration: '1 día',
    bestTime: 'Abril a Septiembre',
    highlights: ['Arrecifes de coral', 'Peces tropicales', 'Tortugas marinas', 'Equipo profesional', 'Instructor certificado'],
    affiliateLink: 'https://www.viator.com/Trincomalee-attractions/Nilaveli-Diving/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'surf-arugam',
    name: 'Surf en Arugam Bay',
    description: 'Aprende a surfear en una de las mejores playas del mundo para este deporte, con instructores profesionales.',
    image: '/images/experiencias/surf-arugam.jpg',
    duration: '1-7 días',
    bestTime: 'Abril a Septiembre',
    highlights: ['Clases para principiantes', 'Equipo incluido', 'Instructores certificados', 'Videos de análisis', 'Fotografía de acción'],
    affiliateLink: 'https://www.getyourguide.com/arugam-bay-l97595/surfing-lessons-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'snorkel-pasikuda',
    name: 'Snorkel en Pasikuda',
    description: 'Descubre el mundo submarino de Pasikuda con sus coloridos arrecifes y peces tropicales.',
    image: '/images/experiencias/snorkel-pasikuda.jpg',
    duration: '1 día',
    bestTime: 'Abril a Septiembre',
    highlights: ['Arrecifes de coral', 'Peces tropicales', 'Equipo incluido', 'Guía local', 'Fotografía submarina'],
    affiliateLink: 'https://www.viator.com/Trincomalee-attractions/Pasikuda-Snorkeling/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'paseo-laguna',
    name: 'Paseo en Barco por la Laguna de Batticaloa',
    description: 'Navega por la hermosa laguna de Batticaloa, observando aves y la vida local a orillas del agua.',
    image: '/images/experiencias/laguna-batticaloa.jpg',
    duration: '1 día',
    bestTime: 'Abril a Septiembre',
    highlights: ['Observación de aves', 'Paisajes naturales', 'Cultura local', 'Atardecer', 'Fotografía'],
    affiliateLink: 'https://www.getyourguide.com/batticaloa-l97595/batticaloa-lagoon-tour-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'cultura-pescadores',
    name: 'Vida de los Pescadores de Kalkudah',
    description: 'Únete a los pescadores locales para experimentar su forma de vida tradicional y técnicas de pesca únicas.',
    image: '/images/experiencias/pescadores-kalkudah.jpg',
    duration: '1 día',
    bestTime: 'Abril a Septiembre',
    highlights: ['Pesca tradicional', 'Preparación de pescado', 'Comida local', 'Interacción con familias', 'Fotografía documental'],
    affiliateLink: 'https://www.airbnb.es/experiences/123456',
    affiliatePlatform: 'Airbnb Experiences'
  },
  {
    id: 'nado-tortugas',
    name: 'Nado con Tortugas en Nilaveli',
    description: 'Nada junto a tortugas marinas en su hábitat natural, una experiencia inolvidable y respetuosa con el medio ambiente.',
    image: '/images/experiencias/tortugas-nilaveli.jpg',
    duration: '1 día',
    bestTime: 'Abril a Septiembre',
    highlights: ['Tortugas marinas', 'Snorkel', 'Conservación marina', 'Guía especializado', 'Fotografía submarina'],
    affiliateLink: 'https://www.viator.com/Trincomalee-attractions/Turtle-Swimming/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'cultura-tamil',
    name: 'Experiencia Cultural Tamil',
    description: 'Sumérgete en la rica cultura tamil del este de Sri Lanka con familias locales y aprende sobre sus tradiciones.',
    image: '/images/experiencias/cultura-tamil-este.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: ['Cocina tamil', 'Artesanía local', 'Música tradicional', 'Interacción con familias', 'Fotografía documental'],
    affiliateLink: 'https://www.airbnb.es/experiences/567890',
    affiliatePlatform: 'Airbnb Experiences'
  }
];

export default function ZonaEstePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/destinations/east-region.jpg"
          alt="Zona Este de Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Zona Este de Sri Lanka</h1>
            <p className="text-xl">Playas vírgenes, lagunas y avistamiento de ballenas</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Destinos', href: '/destinos' },
            { label: 'Zona Este', href: '/destinos/zona-este' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre la Zona Este</h2>
          <p className="text-elephant-gray/80 mb-4">
            La zona este de Sri Lanka es famosa por sus playas vírgenes, lagunas cristalinas y excelentes 
            oportunidades para el avistamiento de ballenas. Esta región menos turística ofrece una 
            experiencia auténtica y relajante.
          </p>
          <p className="text-elephant-gray/80">
            La mejor época para visitar la zona este es de abril a septiembre, durante la estación seca. 
            Durante estos meses, podrás disfrutar de días soleados y aguas tranquilas, perfectos para 
            actividades acuáticas y exploración.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-playfair text-center mb-12">Destinos en la Zona Este</h2>
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
          Descubre las experiencias más auténticas y memorables que la zona este de Sri Lanka tiene para ofrecer. 
          Desde avistamiento de ballenas y buceo hasta surf y cultura local.
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
          <h2 className="text-3xl font-playfair text-center mb-12">Mapa de la Zona Este</h2>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126845.53999999999!2d81.2333!3d8.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1647887654321!5m2!1ses!2ses" 
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