'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PlaceholderImage from '@/components/PlaceholderImage';

// Información sobre el Parque Nacional de Udawalawe
const parkInfo = {
  name: 'Parque Nacional de Udawalawe',
  description: 'El Parque Nacional de Udawalawe es uno de los mejores lugares de Sri Lanka para observar elefantes en su hábitat natural. Con una población de más de 500 elefantes, este parque ofrece una de las tasas de avistamiento más altas del país. El paisaje abierto del parque, con sus praderas y matorrales, facilita la observación de estos majestuosos animales.',
  bestTime: 'Todo el año, con mejor visibilidad durante la estación seca (de mayo a septiembre)',
  highlights: [
    'Gran población de elefantes',
    'Alta probabilidad de avistamiento',
    'Paisaje abierto y accesible',
    'Otras especies de vida silvestre',
    'Fácil acceso desde Colombo'
  ],
  image: '/images/experiencias/udawalawe-park.jpg'
};

// Información sobre el Orfanato de Elefantes
const orphanageInfo = {
  name: 'Orfanato de Elefantes de Udawalawe',
  description: 'El Orfanato de Elefantes de Udawalawe es un centro de rehabilitación para elefantes huérfanos. Fundado en 1995, este centro se encarga de cuidar y rehabilitar elefantes bebés que han perdido a sus madres, generalmente debido a la caza furtiva o accidentes. El orfanato ofrece a los visitantes la oportunidad de observar de cerca a estos jóvenes elefantes y aprender sobre los esfuerzos de conservación.',
  bestTime: 'Todo el año, con horarios de alimentación a las 9:00, 13:00 y 17:00',
  highlights: [
    'Observación de elefantes bebés',
    'Horarios de alimentación',
    'Programas educativos',
    'Centro de conservación',
    'Oportunidades fotográficas'
  ],
  image: '/images/experiencias/udawalawe-orphanage.jpg'
};

// Experiencias disponibles
const experiences = [
  {
    id: 'safari-udawalawe',
    name: 'Safari en el Parque Nacional de Udawalawe',
    description: 'Embárcate en un emocionante safari por el Parque Nacional de Udawalawe para observar elefantes y otra vida silvestre en su hábitat natural. Con un guía experto, explorarás las diferentes zonas del parque, aumentando tus posibilidades de avistamientos increíbles.',
    image: '/images/experiencias/safari-udawalawe.jpg',
    duration: '1 día',
    bestTime: 'Todo el año, con mejor visibilidad durante la estación seca (de mayo a septiembre)',
    highlights: [
      'Avistamiento de elefantes',
      'Guía experto en vida silvestre',
      'Vehículo 4x4 cómodo',
      'Otras especies de animales',
      'Paisajes impresionantes'
    ],
    affiliateLink: 'https://www.getyourguide.com/udawalawe-l97595/udawalawe-safari-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'visita-orphanage',
    name: 'Visita al Orfanato de Elefantes',
    description: 'Visita el Orfanato de Elefantes de Udawalawe para observar de cerca a los elefantes bebés y aprender sobre los esfuerzos de conservación. Podrás ver los horarios de alimentación, donde los elefantes jóvenes reciben sus biberones, y aprender sobre su rehabilitación.',
    image: '/images/experiencias/visita-orphanage.jpg',
    duration: '1 día',
    bestTime: 'Todo el año, con horarios de alimentación a las 9:00, 13:00 y 17:00',
    highlights: [
      'Observación de elefantes bebés',
      'Horarios de alimentación',
      'Guía informativo',
      'Centro de conservación',
      'Oportunidades fotográficas'
    ],
    affiliateLink: 'https://www.viator.com/Udawalawe-attractions/Elephant-Orphanage/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'safari-fotografia',
    name: 'Safari Fotográfico en Udawalawe',
    description: 'Únete a un safari fotográfico especializado en el Parque Nacional de Udawalawe, diseñado para capturar las mejores imágenes de elefantes y otra vida silvestre. Con un fotógrafo profesional como guía, aprenderás técnicas para fotografiar animales en su hábitat natural.',
    image: '/images/experiencias/safari-fotografia.jpg',
    duration: '1 día',
    bestTime: 'Todo el año, con mejor visibilidad durante la estación seca (de mayo a septiembre)',
    highlights: [
      'Guía fotógrafo profesional',
      'Equipo fotográfico disponible',
      'Ubicaciones estratégicas',
      'Consejos de fotografía',
      'Edición básica incluida'
    ],
    affiliateLink: 'https://www.getyourguide.com/udawalawe-l97595/photography-safari-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'experiencia-completa',
    name: 'Experiencia Completa de Elefantes',
    description: 'Disfruta de una experiencia completa con elefantes en Udawalawe, combinando un safari por el parque nacional con una visita al orfanato. Esta experiencia de día completo te permitirá observar elefantes tanto en su hábitat natural como en el centro de rehabilitación.',
    image: '/images/experiencias/experiencia-completa.jpg',
    duration: '1 día',
    bestTime: 'Todo el año',
    highlights: [
      'Safari por el parque nacional',
      'Visita al orfanato',
      'Guía experto',
      'Transporte incluido',
      'Almuerzo incluido'
    ],
    affiliateLink: 'https://www.viator.com/Udawalawe-attractions/Complete-Elephant-Experience/d5028-a12345',
    affiliatePlatform: 'Viator'
  },
  {
    id: 'safari-atardecer',
    name: 'Safari al Atardecer en Udawalawe',
    description: 'Experimenta la magia del Parque Nacional de Udawalawe durante el atardecer, cuando los elefantes y otra vida silvestre están más activos. Este safari especial te permitirá capturar impresionantes fotografías con la luz dorada del atardecer como telón de fondo.',
    image: '/images/experiencias/safari-atardecer.jpg',
    duration: '1 tarde',
    bestTime: 'Todo el año',
    highlights: [
      'Luz perfecta para fotografía',
      'Actividad animal al atardecer',
      'Guía experto',
      'Vehículo 4x4 cómodo',
      'Snacks y bebidas incluidos'
    ],
    affiliateLink: 'https://www.getyourguide.com/udawalawe-l97595/sunset-safari-tc24/',
    affiliatePlatform: 'GetYourGuide'
  },
  {
    id: 'voluntariado-orphanage',
    name: 'Programa de Voluntariado en el Orfanato',
    description: 'Participa en un programa de voluntariado en el Orfanato de Elefantes de Udawalawe, donde podrás contribuir directamente a los esfuerzos de conservación mientras aprendes sobre estos majestuosos animales. Este programa incluye tareas como preparar alimentos, limpiar instalaciones y ayudar en la rehabilitación de los elefantes.',
    image: '/images/experiencias/voluntariado-orphanage.jpg',
    duration: '1-2 semanas',
    bestTime: 'Todo el año',
    highlights: [
      'Experiencia práctica con elefantes',
      'Contribución a la conservación',
      'Alojamiento incluido',
      'Capacitación completa',
      'Certificado de voluntariado'
    ],
    affiliateLink: 'https://www.viator.com/Udawalawe-attractions/Volunteer-Program/d5028-a12345',
    affiliatePlatform: 'Viator'
  }
];

// Consejos para visitantes
const visitorTips = [
  {
    title: 'Mejor época para visitar',
    content: 'El Parque Nacional de Udawalawe se puede visitar durante todo el año, pero la mejor época para observar elefantes es durante la estación seca (de mayo a septiembre), cuando los animales se concentran alrededor de las fuentes de agua. Durante la estación húmeda (de octubre a abril), el parque está más verde y es más difícil ver a los animales debido a la vegetación densa.'
  },
  {
    title: 'Qué llevar',
    content: 'Para tu visita a Udawalawe, asegúrate de llevar ropa ligera y cómoda, protector solar, sombrero, gafas de sol, repelente de insectos, cámara fotográfica con zoom, binoculares y agua. Si visitas durante la estación húmeda, considera llevar un impermeable ligero.'
  },
  {
    title: 'Respeto por los animales',
    content: 'Recuerda que estás visitando el hogar de estos animales. Mantén una distancia respetuosa, no hagas ruidos fuertes, no tires basura y sigue siempre las instrucciones de tu guía. No intentes alimentar a los animales y evita usar flash en tu cámara, ya que puede asustarlos.'
  }
];

// Información sobre conservación
const conservationInfo = {
  title: 'Conservación de Elefantes en Sri Lanka',
  description: 'Sri Lanka alberga una de las mayores densidades de elefantes asiáticos del mundo, con una población estimada de 5,000-6,000 individuos. Sin embargo, estos majestuosos animales enfrentan numerosos desafíos, incluyendo la pérdida de hábitat debido a la expansión agrícola, conflictos con humanos y la caza furtiva.',
  challenges: [
    'Pérdida de hábitat debido a la expansión agrícola',
    'Conflictos entre humanos y elefantes',
    'Fragmentación de corredores migratorios',
    'Caza furtiva para marfil y carne',
    'Accidentes en carreteras y vías férreas'
  ],
  efforts: [
    'Establecimiento de parques nacionales y reservas',
    'Programas de rehabilitación para elefantes huérfanos',
    'Proyectos de mitigación de conflictos',
    'Educación y concienciación pública',
    'Investigación y monitoreo de poblaciones'
  ]
};

export default function ElefantesUdawalawePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <PlaceholderImage
          width={1920}
          height={1080}
          text="Experiencias con Elefantes en Udawalawe"
          bgColor="#000"
          textColor="#fff"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Experiencias con Elefantes en Udawalawe</h1>
            <p className="text-xl">Descubre la majestuosidad de los elefantes en su hábitat natural</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Experiencias', href: '/experiencias' },
            { label: 'Naturaleza', href: '/experiencias/naturaleza' },
            { label: 'Elefantes en Udawalawe', href: '/experiencias/elefantes-udawalawe' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre los Elefantes en Udawalawe</h2>
          <p className="text-elephant-gray/80 mb-4">
            Udawalawe es uno de los mejores lugares de Sri Lanka para observar elefantes en su hábitat natural. Con una población de más de 500 elefantes, 
            este parque nacional ofrece una de las tasas de avistamiento más altas del país. El paisaje abierto del parque, con sus praderas y matorrales, 
            facilita la observación de estos majestuosos animales.
          </p>
          <p className="text-elephant-gray/80">
            Además del parque nacional, Udawalawe alberga un orfanato de elefantes que se encarga de rehabilitar a elefantes bebés que han perdido a sus madres. 
            Visitar ambos lugares te permitirá tener una experiencia completa con estos increíbles animales, observándolos tanto en su hábitat natural como 
            en el centro de rehabilitación.
          </p>
        </div>
      </section>

      {/* Información del Parque */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <PlaceholderImage
              width={800}
              height={384}
              text="Parque Nacional de Udawalawe"
              bgColor="#f5f5f5"
              textColor="#2E7D32"
            />
          </div>
          <div>
            <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Parque Nacional de Udawalawe</h2>
            <p className="text-elephant-gray/70 mb-4">{parkInfo.description}</p>
            <div className="space-y-2">
              <p className="text-sm text-elephant-gray/60">
                <span className="font-semibold">Mejor época:</span> {parkInfo.bestTime}
              </p>
              <div>
                <p className="text-sm font-semibold text-elephant-gray/60">Destacados:</p>
                <ul className="list-disc list-inside text-sm text-elephant-gray/70">
                  {parkInfo.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información del Orfanato */}
      <section className="py-12 px-4 max-w-7xl mx-auto bg-elephant-gray/5">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <PlaceholderImage
                width={800}
                height={384}
                text="Orfanato de Elefantes de Udawalawe"
                bgColor="#f5f5f5"
                textColor="#2E7D32"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-playfair text-elephant-gray mb-4">{orphanageInfo.name}</h2>
            <p className="text-elephant-gray/70 mb-4">{orphanageInfo.description}</p>
            <div className="mb-4">
              <p className="text-sm text-elephant-gray/60">
                <span className="font-semibold">Mejor época:</span> {orphanageInfo.bestTime}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-elephant-gray/60 mb-2">Destacados:</p>
              <ul className="list-disc list-inside text-sm text-elephant-gray/70">
                {orphanageInfo.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencias Disponibles */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-playfair text-elephant-gray mb-8 text-center">Experiencias Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <PlaceholderImage
                  width={400}
                  height={192}
                  text={experience.name}
                  bgColor="#f5f5f5"
                  textColor="#2E7D32"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2 text-tropical-green">{experience.name}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Duración:</span> {experience.duration}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Mejor época:</span> {experience.bestTime}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-tropical-green">Lo más destacado:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {experience.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={`/experiencias/${experience.id}`}
                    className="inline-flex items-center px-4 py-2 bg-tropical-green text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Ver Detalles
                  </Link>
                  <a
                    href={experience.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-ocean-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Reservar en {experience.affiliatePlatform}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consejos para Visitantes */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-elephant-gray/5">
        <h2 className="text-3xl font-playfair text-center mb-6">Consejos para Visitantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visitorTips.map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-playfair mb-4">{tip.title}</h3>
              <p className="text-elephant-gray/70">{tip.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Información sobre Conservación */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">{conservationInfo.title}</h2>
          <p className="text-elephant-gray/80 mb-6">{conservationInfo.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-playfair mb-4">Desafíos</h3>
              <ul className="list-disc list-inside text-elephant-gray/70">
                {conservationInfo.challenges.map((challenge, index) => (
                  <li key={index} className="mb-2">{challenge}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-4">Esfuerzos de Conservación</h3>
              <ul className="list-disc list-inside text-elephant-gray/70">
                {conservationInfo.efforts.map((effort, index) => (
                  <li key={index} className="mb-2">{effort}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-elephant-gray/80 mb-4">
              Al visitar Udawalawe y participar en experiencias con elefantes, estás contribuyendo directamente a los esfuerzos de conservación. 
              Una parte de los ingresos generados por el turismo se destina a la protección de los elefantes y sus hábitats.
            </p>
            <Link
              href="/conservacion"
              className="inline-block bg-tropical-green text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
            >
              Aprende más sobre conservación
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-tropical-green text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-playfair mb-4">¿Listo para tu Experiencia con Elefantes?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Descubre la majestuosidad de los elefantes de Sri Lanka en Udawalawe con nuestras experiencias cuidadosamente 
            seleccionadas. Reserva ahora y comienza tu aventura con estos increíbles animales.
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