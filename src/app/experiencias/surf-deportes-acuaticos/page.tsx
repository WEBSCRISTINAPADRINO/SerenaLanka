'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import PlaceholderImage from '@/components/PlaceholderImage';

interface SpotSurf {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  mejorEpoca: string;
  nivel: string;
  destacados: string[];
  experiencias: string[];
}

// Datos de spots de surf
const spotsSurf: SpotSurf[] = [
  {
    id: 1,
    nombre: 'Arugam Bay',
    descripcion: 'Considerado uno de los mejores spots de surf del mundo, Arugam Bay ofrece olas perfectas para surfistas de todos los niveles.',
    imagen: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De mayo a octubre',
    nivel: 'Todos los niveles',
    destacados: ['Olas largas y suaves', 'Escuelas de surf de calidad'],
    experiencias: ['Clases de surf para principiantes', 'Sesiones de surf guiadas']
  },
  {
    id: 2,
    nombre: 'Hikkaduwa',
    descripcion: 'Uno de los destinos de surf más antiguos de Sri Lanka, Hikkaduwa ofrece olas consistentes y un ambiente relajado.',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De noviembre a abril',
    nivel: 'Intermedio a avanzado',
    destacados: ['Olas consistentes todo el año', 'Arrecife de coral protegido'],
    experiencias: ['Clases de surf avanzadas', 'Sesiones de fotografía submarina']
  },
  {
    id: 3,
    nombre: 'Mirissa',
    descripcion: 'Una hermosa playa de arena blanca que ofrece excelentes condiciones para el surf, especialmente para principiantes.',
    imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De noviembre a abril',
    nivel: 'Principiante a intermedio',
    destacados: ['Playa de arena blanca', 'Olas suaves y consistentes'],
    experiencias: ['Clases de surf para familias', 'Sesiones de surf al atardecer']
  },
  {
    id: 4,
    nombre: 'Weligama',
    descripcion: 'Una bahía larga y protegida que ofrece condiciones ideales para principiantes y surfistas de nivel intermedio. Las olas son suaves y consistentes, y la playa es lo suficientemente larga para que todos encuentren su propio espacio. Weligama es especialmente popular entre los surfistas que buscan mejorar su técnica.',
    imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De noviembre a abril (temporada de monzón del noreste)',
    nivel: 'Principiante a intermedio',
    destacados: [
      'Bahía protegida',
      'Olas suaves y consistentes',
      'Escuelas de surf de calidad',
      'Alojamientos económicos',
      'Comida local auténtica'
    ],
    experiencias: [
      'Clases de surf intensivas',
      'Sesiones de surf en grupo',
      'Alquiler de tablas de surf',
      'Tour de pesca tradicional',
      'Visita a la isla de Taprobane'
    ]
  },
  {
    id: 5,
    nombre: 'Unawatuna',
    descripcion: 'Una hermosa playa en forma de media luna que ofrece excelentes condiciones para el surf, especialmente para principiantes. Las olas son suaves y la playa está protegida por un arrecife, creando un ambiente seguro para aprender. Unawatuna también es conocido por su vida nocturna y restaurantes junto a la playa.',
    imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De noviembre a abril (temporada de monzón del noreste)',
    nivel: 'Principiante',
    destacados: [
      'Playa en forma de media luna',
      'Olas suaves y seguras',
      'Vida nocturna animada',
      'Restaurantes internacionales',
      'Cerca de Galle Fort'
    ],
    experiencias: [
      'Clases de surf para principiantes',
      'Sesiones de surf en grupo',
      'Snorkeling en el arrecife',
      'Tour por Galle Fort',
      'Masajes en la playa'
    ]
  }
];

// Datos de deportes acuáticos
const deportesAcuaticos = [
  {
    id: 1,
    nombre: 'Buceo',
    descripcion: 'Sri Lanka ofrece excelentes sitios de buceo con arrecifes de coral, pecios históricos y una rica vida marina.',
    imagen: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De octubre a abril',
    nivel: 'Todos los niveles',
    destacados: ['Arrecifes de coral vírgenes', 'Pecios históricos'],
    experiencias: ['Curso de buceo PADI', 'Inmersiones guiadas']
  },
  {
    id: 2,
    nombre: 'Snorkeling',
    descripcion: 'Una actividad accesible para todos que permite explorar los coloridos arrecifes de coral y la vida marina de Sri Lanka.',
    imagen: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De octubre a abril',
    nivel: 'Todos los niveles',
    destacados: ['Arrecifes de coral accesibles', 'Vida marina colorida'],
    experiencias: ['Tour de snorkeling guiado', 'Snorkeling con tortugas']
  },
  {
    id: 3,
    nombre: 'Kitesurf',
    descripcion: 'Sri Lanka se está convirtiendo en un destino popular para el kitesurf, con vientos consistentes y aguas cálidas.',
    imagen: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De mayo a octubre',
    nivel: 'Principiante a avanzado',
    destacados: ['Vientos consistentes', 'Aguas cálidas y seguras'],
    experiencias: ['Curso de kitesurf para principiantes', 'Sesiones de kitesurf guiadas']
  },
  {
    id: 4,
    nombre: 'Paddleboarding',
    descripcion: 'Una actividad relajante que permite explorar las costas de Sri Lanka desde una perspectiva única. El paddleboarding es perfecto para todas las edades y niveles de condición física, y ofrece una excelente manera de disfrutar del paisaje costero y la vida marina.',
    imagen: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'Todo el año (mejor de octubre a abril)',
    nivel: 'Todos los niveles',
    destacados: [
      'Aguas tranquilas',
      'Vistas panorámicas',
      'Equipos de calidad',
      'Guías expertos',
      'Tours para familias'
    ],
    experiencias: [
      'Tour de paddleboarding guiado',
      'Paddleboarding al atardecer',
      'Paddleboarding con snorkeling',
      'Fotografía desde el paddleboard',
      'Paddleboarding en grupo'
    ]
  },
  {
    id: 5,
    nombre: 'Jet Ski',
    descripcion: 'Una actividad emocionante que permite explorar las costas de Sri Lanka a alta velocidad. El jet ski es perfecto para quienes buscan adrenalina y una perspectiva única de la costa, con opciones para principiantes y pilotos experimentados.',
    imagen: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    mejorEpoca: 'De octubre a abril (temporada seca)',
    nivel: 'Todos los niveles',
    destacados: [
      'Equipos modernos y seguros',
      'Instructores certificados',
      'Rutas personalizadas',
      'Vistas espectaculares',
      'Experiencias para grupos'
    ],
    experiencias: [
      'Tour de jet ski guiado',
      'Sesión de jet ski para principiantes',
      'Jet ski al atardecer',
      'Jet ski con parada para snorkeling',
      'Competición de jet ski'
    ]
  }
];

// Definir la interfaz para las experiencias combinadas
interface ExperienciaCombinada {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  duracion: string;
  nivel: string;
  destacados: string[];
  experiencias: string[];
}

// Experiencias combinadas
const experienciasCombinadas: ExperienciaCombinada[] = [
  {
    id: 1,
    nombre: 'Retiro de Surf y Yoga',
    descripcion: 'Combina la emoción del surf con la serenidad del yoga en un retiro completo.',
    imagen: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    duracion: '7 días',
    nivel: 'Todos los niveles',
    destacados: ['Clases de surf personalizadas', 'Sesiones de yoga diarias'],
    experiencias: ['Clases de surf en grupo', 'Sesiones de yoga al amanecer']
  },
  {
    id: 2,
    nombre: 'Tour de Deportes Acuáticos',
    descripcion: 'Un tour completo que te permitirá experimentar diferentes deportes acuáticos en las mejores ubicaciones.',
    imagen: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    duracion: '10 días',
    nivel: 'Principiante a intermedio',
    destacados: ['Múltiples deportes acuáticos', 'Instructores certificados'],
    experiencias: ['Clases de surf en diferentes spots', 'Snorkeling en arrecifes']
  },
  {
    id: 3,
    nombre: 'Aventura Acuática Familiar',
    descripcion: 'Un paquete diseñado especialmente para familias que quieren disfrutar de actividades acuáticas juntas. Incluye actividades adaptadas para diferentes edades y niveles, con énfasis en la seguridad y la diversión.',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    duracion: '5 días',
    nivel: 'Familiar',
    destacados: [
      'Actividades para todas las edades',
      'Instructores especializados en niños',
      'Equipos de seguridad',
      'Actividades educativas',
      'Alojamiento familiar'
    ],
    experiencias: [
      'Clases de surf para niños',
      'Snorkeling en familia',
      'Paddleboarding en grupo',
      'Talleres de conservación marina',
      'Barbacoa familiar'
    ]
  },
  {
    id: 4,
    nombre: 'Tour de Surf por Sri Lanka',
    descripcion: 'Un viaje épico que te llevará a los mejores spots de surf de Sri Lanka, desde la costa sur hasta la este. Perfecto para surfistas que quieren explorar diferentes olas y culturas locales.',
    imagen: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    duracion: '14 días',
    nivel: 'Intermedio a avanzado',
    destacados: [
      'Múltiples spots de surf',
      'Guías locales expertos',
      'Transporte privado',
      'Alojamiento en playa',
      'Experiencias culturales'
    ],
    experiencias: [
      'Surf en diferentes spots',
      'Visitas a templos budistas',
      'Tour por mercados locales',
      'Clases de cocina local',
      'Fiesta de despedida'
    ]
  }
];

export default function SurfDeportesAcuaticos() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1920&q=80"
            alt="Surf y Deportes Acuáticos en Sri Lanka"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Surf y Deportes Acuáticos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Descubre las mejores olas y experiencias acuáticas en Sri Lanka
          </motion.p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs
          items={[
            { label: 'Experiencias', href: '/experiencias' },
            { label: 'Surf y Deportes Acuáticos', href: '/experiencias/surf-deportes-acuaticos' }
          ]}
        />
      </div>

      {/* Introducción */}
      <section className="py-12 bg-golden-sand bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-ocean-blue mb-4">
                El Paraíso del Surf y los Deportes Acuáticos
              </h2>
              <p className="text-elephant-gray mb-4">
                Sri Lanka se ha convertido en uno de los destinos más populares para el surf y los deportes acuáticos, gracias a sus más de 1.300 kilómetros de costa, aguas cálidas y condiciones consistentes durante todo el año.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
                alt="Olas de Sri Lanka"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spots de Surf */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-ocean-blue mb-8 text-center">
            Mejores Spots de Surf
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spotsSurf.map((spot) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-[200px] md:h-[250px]">
                  <Image
                    src={spot.imagen}
                    alt={spot.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-ocean-blue mb-2">
                    {spot.nombre}
                  </h3>
                  <p className="text-elephant-gray mb-4">
                    {spot.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deportes Acuáticos */}
      <section className="py-16 bg-golden-sand bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-ocean-blue mb-8 text-center">
            Deportes Acuáticos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deportesAcuaticos.map((deporte) => (
              <motion.div
                key={deporte.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-[200px] md:h-[250px]">
                  <Image
                    src={deporte.imagen}
                    alt={deporte.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-ocean-blue mb-2">
                    {deporte.nombre}
                  </h3>
                  <p className="text-elephant-gray mb-4">
                    {deporte.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencias Combinadas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-ocean-blue mb-8 text-center">
            Experiencias Combinadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienciasCombinadas.map((experiencia) => (
              <motion.div
                key={experiencia.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-[250px] md:h-[300px]">
                  <Image
                    src={experiencia.imagen}
                    alt={experiencia.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-ocean-blue mb-2">
                    {experiencia.nombre}
                  </h3>
                  <p className="text-elephant-gray mb-4">
                    {experiencia.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 