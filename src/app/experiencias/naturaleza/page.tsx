'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Categorías de experiencias de naturaleza
const categories = [
  {
    id: 'safaris',
    name: 'Safaris',
    description: 'Explora los parques nacionales de Sri Lanka y observa elefantes, leopardos, cocodrilos y aves exóticas en su hábitat natural.',
    image: '/images/experiencias/categorias/safaris.jpg',
    experiences: [
      {
        id: 'safari-yala',
        name: 'Safari en Yala',
        description: 'Explora el Parque Nacional Yala, famoso por su alta densidad de leopardos y elefantes.',
        image: '/images/experiencias/safari-yala.jpg',
        duration: '1 día',
        bestTime: 'Febrero a Julio',
        highlights: ['Leopardos', 'Elefantes', 'Cocodrilos', 'Aves exóticas', 'Fotografía de naturaleza'],
        affiliateLink: 'https://www.getyourguide.com/yala-l97595/yala-safari-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'safari-udawalawe',
        name: 'Safari en Udawalawe',
        description: 'Visita el Parque Nacional Udawalawe, hogar de grandes manadas de elefantes y aves acuáticas.',
        image: '/images/experiencias/safari-udawalawe.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Elefantes', 'Búfalos de agua', 'Aves acuáticas', 'Fotografía de naturaleza', 'Guía especializado'],
        affiliateLink: 'https://www.viator.com/Udawalawe-attractions/Udawalawe-National-Park/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'safari-mirissa',
        name: 'Safari en Mirissa',
        description: 'Explora la rica biodiversidad de la región de Mirissa, incluyendo aves tropicales y pequeños mamíferos.',
        image: '/images/experiencias/safari-mirissa.jpg',
        duration: '1 día',
        bestTime: 'Diciembre a Abril',
        highlights: ['Aves tropicales', 'Mamíferos pequeños', 'Vegetación exuberante', 'Fotografía de naturaleza', 'Guía local'],
        affiliateLink: 'https://www.getyourguide.com/mirissa-l97595/mirissa-wildlife-tour-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'ballenas',
    name: 'Avistamiento de Ballenas',
    description: 'Embárcate en aventuras marinas para ver ballenas azules, jorobadas y delfines en su hábitat natural.',
    image: '/images/experiencias/categorias/ballenas.jpg',
    experiences: [
      {
        id: 'ballenas-mirissa',
        name: 'Avistamiento de Ballenas en Mirissa',
        description: 'Navega por las aguas de Mirissa para ver ballenas azules, jorobadas y delfines en su hábitat natural.',
        image: '/images/experiencias/ballenas-mirissa.jpg',
        duration: '1 día',
        bestTime: 'Diciembre a Abril',
        highlights: ['Ballenas azules', 'Ballenas jorobadas', 'Delfines', 'Fotografía marina', 'Guía especializado'],
        affiliateLink: 'https://www.getyourguide.com/mirissa-l97595/whale-watching-tours-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'ballenas-trincomalee',
        name: 'Avistamiento de Ballenas en Trincomalee',
        description: 'Explora las aguas de Trincomalee para ver ballenas y delfines en su hábitat natural.',
        image: '/images/experiencias/ballenas-trincomalee.jpg',
        duration: '1 día',
        bestTime: 'Junio a Septiembre',
        highlights: ['Ballenas azules', 'Ballenas jorobadas', 'Delfines', 'Fotografía marina', 'Guía especializado'],
        affiliateLink: 'https://www.viator.com/Trincomalee-attractions/Whale-Watching/d5028-a12345',
        affiliatePlatform: 'Viator'
      }
    ]
  },
  {
    id: 'aves',
    name: 'Observación de Aves',
    description: 'Descubre la rica biodiversidad de aves de Sri Lanka, incluyendo especies endémicas y migratorias.',
    image: '/images/experiencias/categorias/aves.jpg',
    experiences: [
      {
        id: 'aves-kandy',
        name: 'Observación de Aves en Kandy',
        description: 'Explora los bosques y jardines de Kandy para observar aves tropicales y especies endémicas.',
        image: '/images/experiencias/aves-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Aves tropicales', 'Especies endémicas', 'Fotografía de naturaleza', 'Guía especializado', 'Equipo de observación'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/bird-watching-tour-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'aves-mannar',
        name: 'Observación de Aves en Mannar',
        description: 'Descubre la rica biodiversidad de aves en la isla de Mannar, incluyendo especies migratorias y endémicas.',
        image: '/images/experiencias/aves-mannar.jpg',
        duration: '1 día',
        bestTime: 'Octubre a Marzo',
        highlights: ['Aves migratorias', 'Aves acuáticas', 'Flamencos', 'Fotografía de naturaleza', 'Guía especializado'],
        affiliateLink: 'https://www.viator.com/Mannar-attractions/Bird-Watching/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'aves-sinharaja',
        name: 'Observación de Aves en Sinharaja',
        description: 'Explora el bosque lluvioso de Sinharaja, hogar de numerosas especies endémicas de aves.',
        image: '/images/experiencias/aves-sinharaja.jpg',
        duration: '1-2 días',
        bestTime: 'Diciembre a Abril',
        highlights: ['Aves endémicas', 'Bosque lluvioso', 'Fotografía de naturaleza', 'Guía especializado', 'Equipo de observación'],
        affiliateLink: 'https://www.getyourguide.com/sinharaja-l97595/bird-watching-tour-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'tortugas',
    name: 'Tortugas Marinas',
    description: 'Observa y protege las tortugas marinas en las playas de Sri Lanka, donde vienen a desovar.',
    image: '/images/experiencias/categorias/tortugas.jpg',
    experiences: [
      {
        id: 'tortugas-rekawa',
        name: 'Tortugas en Rekawa',
        description: 'Visita la playa de Rekawa para ver tortugas marinas desovando y protegiendo sus huevos.',
        image: '/images/experiencias/tortugas-rekawa.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Tortugas marinas', 'Desove', 'Conservación', 'Fotografía nocturna', 'Guía especializado'],
        affiliateLink: 'https://www.getyourguide.com/rekawa-l97595/turtle-watching-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'tortugas-nilaveli',
        name: 'Nado con Tortugas en Nilaveli',
        description: 'Nada junto a tortugas marinas en su hábitat natural, una experiencia inolvidable y respetuosa con el medio ambiente.',
        image: '/images/experiencias/tortugas-nilaveli.jpg',
        duration: '1 día',
        bestTime: 'Abril a Septiembre',
        highlights: ['Tortugas marinas', 'Snorkel', 'Conservación marina', 'Guía especializado', 'Fotografía submarina'],
        affiliateLink: 'https://www.viator.com/Trincomalee-attractions/Turtle-Swimming/d5028-a12345',
        affiliatePlatform: 'Viator'
      }
    ]
  },
  {
    id: 'cocodrilos',
    name: 'Cocodrilos',
    description: 'Observa cocodrilos en su hábitat natural en los ríos y lagunas de Sri Lanka.',
    image: '/images/experiencias/categorias/cocodrilos.jpg',
    experiences: [
      {
        id: 'cocodrilos-bentota',
        name: 'Safari de Cocodrilos en Bentota',
        description: 'Navega por el río Bentota para observar cocodrilos en su hábitat natural.',
        image: '/images/experiencias/cocodrilos-bentota.jpg',
        duration: '1 día',
        bestTime: 'Diciembre a Abril',
        highlights: ['Cocodrilos', 'Aves acuáticas', 'Paisajes fluviales', 'Fotografía de naturaleza', 'Guía especializado'],
        affiliateLink: 'https://www.getyourguide.com/bentota-l97595/crocodile-safari-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'cocodrilos-yala',
        name: 'Cocodrilos en Yala',
        description: 'Observa cocodrilos en los lagos y ríos del Parque Nacional Yala durante un safari.',
        image: '/images/experiencias/cocodrilos-yala.jpg',
        duration: '1 día',
        bestTime: 'Febrero a Julio',
        highlights: ['Cocodrilos', 'Otros animales salvajes', 'Paisajes naturales', 'Fotografía de naturaleza', 'Guía especializado'],
        affiliateLink: 'https://www.viator.com/Yala-attractions/Yala-Safari-with-Crocodiles/d5028-a12345',
        affiliatePlatform: 'Viator'
      }
    ]
  },
  {
    id: 'serpientes',
    name: 'Granjas de Serpientes',
    description: 'Visita granjas de serpientes para aprender sobre estas fascinantes criaturas y su importancia en la cultura de Sri Lanka.',
    image: '/images/experiencias/categorias/serpientes.jpg',
    experiences: [
      {
        id: 'serpientes-galle',
        name: 'Granja de Serpientes de Galle',
        description: 'Visita la granja de serpientes de Galle para aprender sobre diferentes especies y su importancia en la medicina tradicional.',
        image: '/images/experiencias/serpientes-galle.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Diferentes especies de serpientes', 'Demostraciones', 'Información educativa', 'Fotografía', 'Guía especializado'],
        affiliateLink: 'https://www.getyourguide.com/galle-l97595/snake-farm-tour-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'serpientes-colombo',
        name: 'Granja de Serpientes de Colombo',
        description: 'Explora la granja de serpientes de Colombo para ver especies raras y aprender sobre su conservación.',
        image: '/images/experiencias/serpientes-colombo.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Especies raras', 'Demostraciones', 'Información educativa', 'Fotografía', 'Guía especializado'],
        affiliateLink: 'https://www.viator.com/Colombo-attractions/Snake-Farm/d5028-a12345',
        affiliatePlatform: 'Viator'
      }
    ]
  }
];

export default function NaturalezaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/experiencias/naturaleza-hero.jpg"
          alt="Experiencias de Naturaleza en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Experiencias de Naturaleza</h1>
            <p className="text-xl">Descubre la rica biodiversidad y vida silvestre de Sri Lanka</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Experiencias', href: '/experiencias' },
            { label: 'Naturaleza', href: '/experiencias/naturaleza' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre las Experiencias de Naturaleza</h2>
          <p className="text-elephant-gray/80 mb-4">
            Sri Lanka es un paraíso para los amantes de la naturaleza y la vida silvestre. Con una biodiversidad 
            excepcional, el país alberga numerosas especies endémicas y es un destino ideal para safaris, 
            avistamiento de ballenas, observación de aves y más.
          </p>
          <p className="text-elephant-gray/80">
            Desde los densos bosques lluviosos hasta las playas vírgenes, cada región ofrece experiencias 
            únicas para conectarse con la naturaleza. Nuestras experiencias están diseñadas para ser 
            respetuosas con el medio ambiente y contribuir a la conservación de la vida silvestre local.
          </p>
        </div>
      </section>

      {/* Categorías y Experiencias */}
      {categories.map((category) => (
        <section key={category.id} className="py-16 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/3">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-playfair text-elephant-gray mb-4">{category.name}</h2>
              <p className="text-elephant-gray/70">{category.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.experiences.map((experience) => (
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
      ))}

      {/* Consejos para Viajeros */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-elephant-gray/5">
        <h2 className="text-3xl font-playfair text-center mb-6">Consejos para Viajeros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Mejor Época para Visitar</h3>
            <p className="text-elephant-gray/70 mb-4">
              La mejor época para las experiencias de naturaleza varía según la región y la actividad. 
              En general, la estación seca (diciembre a abril en el sur y oeste, abril a septiembre en el este) 
              ofrece las mejores condiciones para la observación de vida silvestre.
            </p>
            <Link
              href="/consejos/mejor-epoca"
              className="text-tropical-green hover:underline"
            >
              Ver calendario detallado →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Equipo Recomendado</h3>
            <p className="text-elephant-gray/70 mb-4">
              Para las experiencias de naturaleza, recomendamos llevar ropa cómoda y ligera, protector solar, 
              repelente de insectos, y una cámara con buen zoom para fotografiar la vida silvestre. 
              Para actividades acuáticas, trae tu propio equipo de snorkel si lo tienes.
            </p>
            <Link
              href="/consejos/equipo"
              className="text-tropical-green hover:underline"
            >
              Ver lista completa →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Conservación y Ética</h3>
            <p className="text-elephant-gray/70 mb-4">
              Es importante respetar la vida silvestre y su hábitat. Mantén una distancia segura, no alimentes 
              a los animales, y sigue siempre las instrucciones de los guías. Tu comportamiento responsable 
              ayuda a proteger estos ecosistemas para las generaciones futuras.
            </p>
            <Link
              href="/consejos/conservacion"
              className="text-tropical-green hover:underline"
            >
              Ver guía de buenas prácticas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-tropical-green text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-playfair mb-4">¿Listo para tu Aventura en la Naturaleza?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Descubre la increíble biodiversidad de Sri Lanka con nuestras experiencias de naturaleza 
            cuidadosamente seleccionadas. Reserva ahora y crea recuerdos inolvidables.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-tropical-green px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contactar para Reservas
          </Link>
        </div>
      </section>
    </div>
  );
} 