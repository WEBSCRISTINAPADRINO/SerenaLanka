'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Categorías de experiencias culturales
const categories = [
  {
    id: 'templos',
    name: 'Templos y Espiritualidad',
    description: 'Explora los templos budistas, hinduistas e islámicos de Sri Lanka y descubre la rica espiritualidad del país.',
    image: '/images/experiencias/categorias/templos.jpg',
    experiences: [
      {
        id: 'templo-diente',
        name: 'Templo del Diente de Buda',
        description: 'Visita el Templo del Diente de Buda en Kandy, uno de los lugares más sagrados del budismo.',
        image: '/images/experiencias/templo-diente.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Reliquia sagrada', 'Ceremonia de ofrenda', 'Arquitectura tradicional', 'Historia budista', 'Guía especializado'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/temple-of-the-sacred-tooth-relic-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'templo-nallur',
        name: 'Templo Nallur Kandaswamy',
        description: 'Explora el impresionante templo hinduista de Nallur en Jaffna, centro espiritual de la comunidad tamil.',
        image: '/images/experiencias/templo-nallur.jpg',
        duration: '1 día',
        bestTime: 'Todo el año, especialmente durante festivales',
        highlights: ['Arquitectura dravidiana', 'Festivales hinduistas', 'Rituales tradicionales', 'Historia tamil', 'Guía local'],
        affiliateLink: 'https://www.viator.com/Jaffna-attractions/Nallur-Kandaswamy-Temple/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'templo-gangaramaya',
        name: 'Templo Gangaramaya',
        description: 'Visita el Templo Gangaramaya en Colombo, un complejo budista que alberga un museo y una biblioteca.',
        image: '/images/experiencias/templo-gangaramaya.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Arquitectura budista', 'Museo de reliquias', 'Biblioteca budista', 'Ceremonias diarias', 'Guía especializado'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/gangaramaya-temple-tour-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'gastronomia',
    name: 'Gastronomía Local',
    description: 'Descubre la rica tradición culinaria de Sri Lanka, desde cocina casera hasta talleres de cocina y tours gastronómicos.',
    image: '/images/experiencias/categorias/gastronomia.jpg',
    experiences: [
      {
        id: 'cocina-kandy',
        name: 'Taller de Cocina en Kandy',
        description: 'Aprende a preparar platos tradicionales de Sri Lanka en un taller de cocina con una familia local en Kandy.',
        image: '/images/experiencias/cocina-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Cocina tradicional', 'Ingredientes locales', 'Técnicas de cocina', 'Comida casera', 'Experiencia familiar'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/cooking-class-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'gastronomia-jaffna',
        name: 'Tour Gastronómico de Jaffna',
        description: 'Explora la rica cocina tamil de Jaffna, incluyendo visitas a mercados locales y degustaciones de platos tradicionales.',
        image: '/images/experiencias/gastronomia-jaffna.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Cocina tamil', 'Mercados locales', 'Degustaciones', 'Historia culinaria', 'Guía local'],
        affiliateLink: 'https://www.viator.com/Jaffna-attractions/Food-Tour/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'cena-familia',
        name: 'Cena con Familia Local',
        description: 'Disfruta de una auténtica cena con una familia local en Colombo, conociendo sus tradiciones y costumbres.',
        image: '/images/experiencias/cena-familia.jpg',
        duration: '1 noche',
        bestTime: 'Todo el año',
        highlights: ['Cocina casera', 'Hospitalidad local', 'Conversación cultural', 'Tradiciones familiares', 'Experiencia auténtica'],
        affiliateLink: 'https://www.airbnb.com/experiences/12345',
        affiliatePlatform: 'Airbnb Experiences'
      }
    ]
  },
  {
    id: 'artesania',
    name: 'Artesanía y Talleres',
    description: 'Descubre las tradiciones artesanales de Sri Lanka, desde la fabricación de máscaras hasta la cerámica y los tejidos.',
    image: '/images/experiencias/categorias/artesania.jpg',
    experiences: [
      {
        id: 'mascaras-ambalangoda',
        name: 'Taller de Máscaras en Ambalangoda',
        description: 'Visita el Museo de Máscaras de Ambalangoda y participa en un taller para aprender sobre la fabricación de máscaras tradicionales.',
        image: '/images/experiencias/mascaras-ambalangoda.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Máscaras tradicionales', 'Técnicas de tallado', 'Historia cultural', 'Demostraciones', 'Taller práctico'],
        affiliateLink: 'https://www.getyourguide.com/ambalangoda-l97595/mask-museum-workshop-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'batik-kandy',
        name: 'Taller de Batik en Kandy',
        description: 'Aprende la técnica tradicional del batik en un taller en Kandy, creando tu propia pieza de arte textil.',
        image: '/images/experiencias/batik-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Técnica de batik', 'Diseño textil', 'Colores naturales', 'Arte tradicional', 'Creación personal'],
        affiliateLink: 'https://www.viator.com/Kandy-attractions/Batik-Workshop/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'ceramica-nuwareliya',
        name: 'Taller de Cerámica en Nuwara Eliya',
        description: 'Participa en un taller de cerámica en Nuwara Eliya, aprendiendo técnicas tradicionales de alfarería.',
        image: '/images/experiencias/ceramica-nuwareliya.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Técnicas de alfarería', 'Diseño de cerámica', 'Hornos tradicionales', 'Arte local', 'Creación personal'],
        affiliateLink: 'https://www.getyourguide.com/nuwara-eliya-l97595/pottery-workshop-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'festivales',
    name: 'Festivales y Celebraciones',
    description: 'Vive la experiencia de los coloridos festivales de Sri Lanka, desde el Esala Perahera hasta el Festival de Nallur.',
    image: '/images/experiencias/categorias/festivales.jpg',
    experiences: [
      {
        id: 'esala-perahera',
        name: 'Esala Perahera en Kandy',
        description: 'Asiste al grandioso festival Esala Perahera en Kandy, con desfiles de elefantes, bailarines y músicos tradicionales.',
        image: '/images/experiencias/esala-perahera.jpg',
        duration: '10 días (agosto)',
        bestTime: 'Agosto',
        highlights: ['Desfile de elefantes', 'Bailarines tradicionales', 'Músicos', 'Procesión del Diente de Buda', 'Celebración cultural'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/esala-perahera-festival-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'festival-nallur',
        name: 'Festival de Nallur en Jaffna',
        description: 'Vive la experiencia del Festival de Nallur en Jaffna, una celebración hinduista con procesiones y rituales tradicionales.',
        image: '/images/experiencias/festival-nallur.jpg',
        duration: '25 días (agosto-septiembre)',
        bestTime: 'Agosto-Septiembre',
        highlights: ['Procesiones religiosas', 'Rituales hinduistas', 'Decoraciones festivas', 'Comida tradicional', 'Celebración cultural'],
        affiliateLink: 'https://www.viator.com/Jaffna-attractions/Nallur-Festival/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'vesak-colombo',
        name: 'Festival Vesak en Colombo',
        description: 'Celebra el Festival Vesak en Colombo, conmemorando el nacimiento, iluminación y muerte de Buda con decoraciones de luces y ofrendas.',
        image: '/images/experiencias/vesak-colombo.jpg',
        duration: '3 días (mayo)',
        bestTime: 'Mayo',
        highlights: ['Decoraciones de luces', 'Ofrendas budistas', 'Procesiones', 'Comida tradicional', 'Celebración espiritual'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/vesak-festival-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'danza',
    name: 'Danza y Música Tradicional',
    description: 'Descubre las tradiciones de danza y música de Sri Lanka, desde espectáculos culturales hasta talleres de danza.',
    image: '/images/experiencias/categorias/danza.jpg',
    experiences: [
      {
        id: 'espectaculo-kandy',
        name: 'Espectáculo Cultural en Kandy',
        description: 'Disfruta de un espectáculo de danza y música tradicional en Kandy, con bailarines y músicos locales.',
        image: '/images/experiencias/espectaculo-kandy.jpg',
        duration: '1 noche',
        bestTime: 'Todo el año',
        highlights: ['Danza Kandyan', 'Música tradicional', 'Trajes coloridos', 'Ritmos locales', 'Espectáculo cultural'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/cultural-show-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'taller-danza-colombo',
        name: 'Taller de Danza en Colombo',
        description: 'Participa en un taller de danza tradicional en Colombo, aprendiendo movimientos básicos y la historia de la danza de Sri Lanka.',
        image: '/images/experiencias/taller-danza-colombo.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Danza tradicional', 'Movimientos básicos', 'Trajes tradicionales', 'Historia cultural', 'Experiencia práctica'],
        affiliateLink: 'https://www.viator.com/Colombo-attractions/Dance-Workshop/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'musica-batticaloa',
        name: 'Música Tradicional en Batticaloa',
        description: 'Descubre la rica tradición musical de Batticaloa, con demostraciones de instrumentos tradicionales y actuaciones locales.',
        image: '/images/experiencias/musica-batticaloa.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Instrumentos tradicionales', 'Música local', 'Demostraciones', 'Historia musical', 'Experiencia cultural'],
        affiliateLink: 'https://www.getyourguide.com/batticaloa-l97595/traditional-music-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'vida-local',
    name: 'Vida Local y Comunidades',
    description: 'Sumérgete en la vida cotidiana de las comunidades locales de Sri Lanka, desde aldeas de pescadores hasta plantaciones de té.',
    image: '/images/experiencias/categorias/vida-local.jpg',
    experiences: [
      {
        id: 'pescadores-negombo',
        name: 'Vida de los Pescadores en Negombo',
        description: 'Vive la experiencia de un día con los pescadores de Negombo, aprendiendo sobre sus técnicas tradicionales y estilo de vida.',
        image: '/images/experiencias/pescadores-negombo.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Técnicas de pesca', 'Barcos tradicionales', 'Mercado de pescado', 'Vida local', 'Experiencia auténtica'],
        affiliateLink: 'https://www.getyourguide.com/negombo-l97595/fishermen-village-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'plantacion-te-nuwareliya',
        name: 'Vida en Plantación de Té en Nuwara Eliya',
        description: 'Visita una plantación de té en Nuwara Eliya y aprende sobre el proceso de cultivo y producción del té de Sri Lanka.',
        image: '/images/experiencias/plantacion-te-nuwareliya.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Cultivo de té', 'Proceso de producción', 'Degustación de té', 'Paisajes montañosos', 'Experiencia local'],
        affiliateLink: 'https://www.viator.com/Nuwara-Eliya-attractions/Tea-Plantation-Tour/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'aldea-rural-anuradhapura',
        name: 'Vida Rural en Anuradhapura',
        description: 'Pasa un día en una aldea rural cerca de Anuradhapura, experimentando la vida cotidiana y las tradiciones locales.',
        image: '/images/experiencias/aldea-rural-anuradhapura.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Vida rural', 'Agricultura tradicional', 'Comida casera', 'Hospitalidad local', 'Experiencia auténtica'],
        affiliateLink: 'https://www.getyourguide.com/anuradhapura-l97595/rural-village-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  }
];

export default function CulturaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/experiencias/cultura-hero.jpg"
          alt="Experiencias Culturales en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Experiencias Culturales</h1>
            <p className="text-xl">Descubre la rica herencia cultural y tradiciones de Sri Lanka</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Experiencias', href: '/experiencias' },
            { label: 'Cultura', href: '/experiencias/cultura' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre las Experiencias Culturales</h2>
          <p className="text-elephant-gray/80 mb-4">
            Sri Lanka es un crisol de culturas, tradiciones y espiritualidad. Con una historia que se remonta a más de 2,500 años, 
            el país ha sido influenciado por diversas civilizaciones, desde los antiguos reinos cingaleses hasta las colonias 
            portuguesa, holandesa y británica.
          </p>
          <p className="text-elephant-gray/80">
            Nuestras experiencias culturales te permiten sumergirte en la rica herencia de Sri Lanka, desde visitas a templos 
            sagrados hasta talleres de cocina local, espectáculos de danza tradicional y encuentros con comunidades locales. 
            Cada experiencia está diseñada para ofrecerte una visión auténtica y profunda de la cultura de Sri Lanka.
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
            <h3 className="text-xl font-playfair mb-4">Respeto Cultural</h3>
            <p className="text-elephant-gray/70 mb-4">
              Es importante respetar las tradiciones y costumbres locales. En templos y lugares sagrados, 
              viste de manera modesta (cubriendo hombros y rodillas), quítate los zapatos antes de entrar, 
              y evita gestos que puedan considerarse irrespetuosos.
            </p>
            <Link
              href="/consejos/respeto-cultural"
              className="text-tropical-green hover:underline"
            >
              Ver guía completa →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Festivales y Calendario</h3>
            <p className="text-elephant-gray/70 mb-4">
              Sri Lanka celebra numerosos festivales religiosos y culturales a lo largo del año. 
              Planifica tu viaje para coincidir con festivales como el Esala Perahera en Kandy o 
              el Festival de Nallur en Jaffna para una experiencia cultural más rica.
            </p>
            <Link
              href="/consejos/calendario-festivales"
              className="text-tropical-green hover:underline"
            >
              Ver calendario de festivales →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Interacción con Locales</h3>
            <p className="text-elephant-gray/70 mb-4">
              Los habitantes de Sri Lanka son conocidos por su hospitalidad. Acepta invitaciones a té o 
              café, aprende algunas palabras en cingalés o tamil, y muestra interés en sus tradiciones. 
              Estas pequeñas interacciones pueden enriquecer significativamente tu experiencia.
            </p>
            <Link
              href="/consejos/interaccion-local"
              className="text-tropical-green hover:underline"
            >
              Ver consejos de interacción →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-tropical-green text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-playfair mb-4">¿Listo para tu Experiencia Cultural?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Descubre la rica herencia cultural de Sri Lanka con nuestras experiencias cuidadosamente 
            seleccionadas. Reserva ahora y crea recuerdos inolvidables.
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