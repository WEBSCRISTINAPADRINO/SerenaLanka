'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PlaceholderImage from '@/components/PlaceholderImage';

// Categorías de experiencias gastronómicas
const categories = [
  {
    id: 'cocina-local',
    name: 'Cocina Local',
    description: 'Descubre la rica tradición culinaria de Sri Lanka, con sus sabores intensos, especias aromáticas y técnicas de cocina tradicionales que se han transmitido de generación en generación.',
    image: '/images/experiencias/categorias/cocina-local.jpg',
    experiences: [
      {
        id: 'cena-familia-colombo',
        name: 'Cena con Familia Local en Colombo',
        description: 'Disfruta de una auténtica cena casera con una familia local en Colombo, aprendiendo sobre sus tradiciones culinarias mientras compartes una deliciosa comida.',
        image: '/images/experiencias/cena-familia-colombo.jpg',
        duration: '1 noche',
        bestTime: 'Todo el año',
        highlights: ['Platos caseros tradicionales', 'Conversación con la familia', 'Aprendizaje cultural', 'Recetas auténticas', 'Experiencia íntima'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/local-family-dinner-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'cocina-tradicional-kandy',
        name: 'Taller de Cocina Tradicional en Kandy',
        description: 'Aprende a preparar platos tradicionales de Sri Lanka en un taller práctico en Kandy, con un chef local que te enseñará los secretos de la cocina cingalesa.',
        image: '/images/experiencias/cocina-tradicional-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Ingredientes locales', 'Técnicas tradicionales', 'Recetas auténticas', 'Chef local experto', 'Degustación incluida'],
        affiliateLink: 'https://www.viator.com/Kandy-attractions/Traditional-Cooking/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'almuerzo-pescadores-negombo',
        name: 'Almuerzo con Pescadores en Negombo',
        description: 'Únete a los pescadores locales en Negombo para un almuerzo fresco con pescado recién capturado, preparado según sus métodos tradicionales.',
        image: '/images/experiencias/almuerzo-pescadores-negombo.jpg',
        duration: '1 día',
        bestTime: 'Todo el año, especialmente de octubre a abril',
        highlights: ['Pescado fresco', 'Preparación tradicional', 'Vistas al mar', 'Conversación con pescadores', 'Experiencia auténtica'],
        affiliateLink: 'https://www.getyourguide.com/negombo-l97595/fishermen-lunch-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'especias',
    name: 'Especias y Plantaciones',
    description: 'Explora el mundo de las especias de Sri Lanka, desde visitas a plantaciones hasta talleres sobre cómo utilizar estas preciadas hierbas y condimentos en la cocina.',
    image: '/images/experiencias/categorias/especias.jpg',
    experiences: [
      {
        id: 'plantacion-especias-kandy',
        name: 'Visita a Plantación de Especias en Kandy',
        description: 'Recorre una plantación de especias en Kandy, donde aprenderás sobre el cultivo y uso de canela, cardamomo, pimienta y otras especias locales.',
        image: '/images/experiencias/plantacion-especias-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Plantación de especias', 'Demostración de cultivo', 'Degustación de especias', 'Guía experto', 'Productos para comprar'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/spice-plantation-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'taller-especias-galle',
        name: 'Taller de Especias en Galle',
        description: 'Participa en un taller práctico sobre especias en Galle, aprendiendo a identificar, combinar y utilizar las especias de Sri Lanka en la cocina.',
        image: '/images/experiencias/taller-especias-galle.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Identificación de especias', 'Combinaciones tradicionales', 'Recetas con especias', 'Experto en especias', 'Kit de especias incluido'],
        affiliateLink: 'https://www.viator.com/Galle-attractions/Spice-Workshop/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'cena-especiada-colombo',
        name: 'Cena Especiada en Colombo',
        description: 'Disfruta de una cena especial en Colombo, donde cada plato está preparado para destacar las diferentes especias de Sri Lanka, con explicaciones detalladas.',
        image: '/images/experiencias/cena-especiada-colombo.jpg',
        duration: '1 noche',
        bestTime: 'Todo el año',
        highlights: ['Platos especiados', 'Explicaciones de ingredientes', 'Chef especializado', 'Ambiente elegante', 'Experiencia educativa'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/spiced-dinner-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'te',
    name: 'Experiencias con Té',
    description: 'Descubre el mundo del té de Sri Lanka, desde visitas a plantaciones en las montañas hasta catas y talleres sobre la preparación del té perfecto.',
    image: '/images/experiencias/categorias/te.jpg',
    experiences: [
      {
        id: 'plantacion-te-nuwareliya',
        name: 'Visita a Plantación de Té en Nuwara Eliya',
        description: 'Explora una plantación de té en las frescas montañas de Nuwara Eliya, donde aprenderás sobre el proceso de cultivo y producción del té de Sri Lanka.',
        image: '/images/experiencias/plantacion-te-nuwareliya.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Plantación de té', 'Proceso de producción', 'Cata de tés', 'Vistas panorámicas', 'Guía experto'],
        affiliateLink: 'https://www.getyourguide.com/nuwara-eliya-l97595/tea-plantation-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'cata-te-kandy',
        name: 'Cata de Tés en Kandy',
        description: 'Participa en una experiencia de cata de tés en Kandy, donde probarás diferentes variedades de té de Sri Lanka y aprenderás a apreciar sus matices.',
        image: '/images/experiencias/cata-te-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Cata de tés', 'Explicaciones detalladas', 'Snacks complementarios', 'Experto en té', 'Tés para comprar'],
        affiliateLink: 'https://www.viator.com/Kandy-attractions/Tea-Tasting/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'almuerzo-te-colombo',
        name: 'Almuerzo con Té en Colombo',
        description: 'Disfruta de un elegante almuerzo con té en Colombo, donde cada plato está diseñado para complementar diferentes variedades de té de Sri Lanka.',
        image: '/images/experiencias/almuerzo-te-colombo.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Almuerzo elegante', 'Maridaje de té y comida', 'Ambiente refinado', 'Experto en té', 'Experiencia completa'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/tea-lunch-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'street-food',
    name: 'Street Food',
    description: 'Explora la vibrante escena de street food de Sri Lanka, desde mercados locales hasta puestos callejeros que ofrecen deliciosos platos tradicionales.',
    image: '/images/experiencias/categorias/street-food.jpg',
    experiences: [
      {
        id: 'tour-street-food-colombo',
        name: 'Tour de Street Food en Colombo',
        description: 'Únete a un tour guiado por los mejores puestos de street food en Colombo, probando platos locales mientras aprendes sobre la cultura culinaria de la ciudad.',
        image: '/images/experiencias/tour-street-food-colombo.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Puestos locales', 'Platos auténticos', 'Guía experto', 'Historia culinaria', 'Experiencia cultural'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/street-food-tour-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'mercado-pettah-colombo',
        name: 'Exploración del Mercado de Pettah en Colombo',
        description: 'Recorre el bullicioso mercado de Pettah en Colombo, descubriendo ingredientes locales, especias y snacks tradicionales en un ambiente auténtico.',
        image: '/images/experiencias/mercado-pettah-colombo.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Mercado local', 'Ingredientes frescos', 'Snacks tradicionales', 'Guía local', 'Experiencia auténtica'],
        affiliateLink: 'https://www.viator.com/Colombo-attractions/Pettah-Market/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'street-food-galle',
        name: 'Street Food en Galle',
        description: 'Descubre la escena de street food en Galle, probando platos locales mientras exploras las calles históricas de esta encantadora ciudad costera.',
        image: '/images/experiencias/street-food-galle.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Platos locales', 'Calles históricas', 'Guía experto', 'Historia culinaria', 'Experiencia cultural'],
        affiliateLink: 'https://www.getyourguide.com/galle-l97595/street-food-galle-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'cocina-fusion',
    name: 'Cocina Fusión',
    description: 'Explora la innovadora escena culinaria de Sri Lanka, donde chefs creativos combinan técnicas y sabores tradicionales con influencias internacionales.',
    image: '/images/experiencias/categorias/cocina-fusion.jpg',
    experiences: [
      {
        id: 'cena-fusion-colombo',
        name: 'Cena de Fusión en Colombo',
        description: 'Disfruta de una cena de fusión en Colombo, donde un chef innovador combina sabores tradicionales de Sri Lanka con técnicas culinarias modernas.',
        image: '/images/experiencias/cena-fusion-colombo.jpg',
        duration: '1 noche',
        bestTime: 'Todo el año',
        highlights: ['Platos innovadores', 'Chef reconocido', 'Ambiente moderno', 'Explicaciones detalladas', 'Experiencia gastronómica'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/fusion-dinner-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'taller-fusion-kandy',
        name: 'Taller de Cocina Fusión en Kandy',
        description: 'Participa en un taller de cocina fusión en Kandy, aprendiendo a combinar ingredientes y técnicas de Sri Lanka con influencias internacionales.',
        image: '/images/experiencias/taller-fusion-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Técnicas de fusión', 'Ingredientes locales e internacionales', 'Chef experto', 'Recetas innovadoras', 'Degustación incluida'],
        affiliateLink: 'https://www.viator.com/Kandy-attractions/Fusion-Cooking/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'brunch-fusion-galle',
        name: 'Brunch de Fusión en Galle',
        description: 'Disfruta de un brunch de fusión en Galle, con platos que combinan sabores locales con influencias internacionales en un ambiente elegante.',
        image: '/images/experiencias/brunch-fusion-galle.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Platos de fusión', 'Ambiente elegante', 'Chef innovador', 'Explicaciones detalladas', 'Experiencia gastronómica'],
        affiliateLink: 'https://www.getyourguide.com/galle-l97595/fusion-brunch-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'cocina-ayurveda',
    name: 'Cocina Ayurvédica',
    description: 'Descubre los principios de la cocina ayurvédica de Sri Lanka, que combina sabores y nutrición para promover el bienestar y el equilibrio del cuerpo.',
    image: '/images/experiencias/categorias/cocina-ayurveda.jpg',
    experiences: [
      {
        id: 'taller-ayurveda-bentota',
        name: 'Taller de Cocina Ayurvédica en Bentota',
        description: 'Aprende los principios de la cocina ayurvédica en un taller práctico en Bentota, con un chef especializado en esta antigua ciencia de la vida.',
        image: '/images/experiencias/taller-ayurveda-bentota.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Principios ayurvédicos', 'Ingredientes medicinales', 'Recetas saludables', 'Chef especializado', 'Degustación incluida'],
        affiliateLink: 'https://www.getyourguide.com/bentota-l97595/ayurvedic-cooking-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'cena-ayurveda-colombo',
        name: 'Cena Ayurvédica en Colombo',
        description: 'Disfruta de una cena ayurvédica en Colombo, con platos diseñados según los principios de esta antigua ciencia para promover el bienestar.',
        image: '/images/experiencias/cena-ayurveda-colombo.jpg',
        duration: '1 noche',
        bestTime: 'Todo el año',
        highlights: ['Platos ayurvédicos', 'Explicaciones nutricionales', 'Chef especializado', 'Ambiente tranquilo', 'Experiencia educativa'],
        affiliateLink: 'https://www.viator.com/Colombo-attractions/Ayurvedic-Dinner/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'retiro-cocina-ayurveda-kandy',
        name: 'Retiro de Cocina Ayurvédica en Kandy',
        description: 'Participa en un retiro de cocina ayurvédica en Kandy, donde aprenderás a preparar platos saludables mientras te sumerges en los principios del Ayurveda.',
        image: '/images/experiencias/retiro-cocina-ayurveda-kandy.jpg',
        duration: '3-5 días',
        bestTime: 'Todo el año',
        highlights: ['Talleres diarios', 'Consultas ayurvédicas', 'Ingredientes medicinales', 'Chef especializado', 'Programa completo'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/ayurvedic-cooking-retreat-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  }
];

export default function GastronomiaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <PlaceholderImage
          width={1920}
          height={1080}
          text="Experiencias Gastronómicas en Sri Lanka"
          bgColor="#000"
          textColor="#fff"
        />
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Experiencias', href: '/experiencias' },
            { label: 'Gastronomía', href: '/experiencias/gastronomia' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre las Experiencias Gastronómicas</h2>
          <p className="text-elephant-gray/80 mb-4">
            La gastronomía de Sri Lanka es una vibrante fusión de sabores, especias y técnicas culinarias que reflejan la rica historia y 
            diversidad cultural del país. Desde platos tradicionales preparados en hogares locales hasta innovadoras creaciones de chefs 
            contemporáneos, la escena culinaria de Sri Lanka ofrece experiencias para todos los gustos.
          </p>
          <p className="text-elephant-gray/80">
            Nuestras experiencias gastronómicas te permiten sumergirte en la cultura culinaria de Sri Lanka, aprendiendo sobre ingredientes 
            locales, técnicas tradicionales y la importancia de la comida en la vida cotidiana. Ya sea participando en talleres de cocina, 
            explorando mercados locales o disfrutando de cenas especiales, cada experiencia te acercará a la auténtica cocina de Sri Lanka.
          </p>
        </div>
      </section>

      {/* Categorías y Experiencias */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-playfair mb-8 text-tropical-green"
          >
            {category.name}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.experiences.map((experience, index) => (
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
                  <h3 className="text-xl font-playfair mb-2 text-tropical-green">
                    {experience.name}
                  </h3>
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
      ))}

      {/* Consejos para Viajeros */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-elephant-gray/5">
        <h2 className="text-3xl font-playfair text-center mb-6">Consejos para tu Experiencia Gastronómica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Platos Imprescindibles</h3>
            <p className="text-elephant-gray/70 mb-4">
              Durante tu viaje a Sri Lanka, no te pierdas platos tradicionales como el arroz y curry, el hopper (una especie de crepe), 
              el kottu roti (pan picado con verduras y carne), y el lamprais (arroz con carne envuelto en hoja de plátano). Cada región 
              tiene sus especialidades, así que pregunta a los locales por sus recomendaciones.
            </p>
            <Link
              href="/consejos/platos-imprescindibles"
              className="text-tropical-green hover:underline"
            >
              Ver lista completa →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Etiqueta en la Mesa</h3>
            <p className="text-elephant-gray/70 mb-4">
              En Sri Lanka, es común comer con la mano derecha, especialmente en entornos informales. Si te invitan a cenar en una casa 
              local, es una buena práctica llevar un pequeño regalo. Recuerda que los platos suelen ser picantes, así que no dudes en 
              pedir que ajusten el nivel de picante según tus preferencias.
            </p>
            <Link
              href="/consejos/etiqueta-mesa"
              className="text-tropical-green hover:underline"
            >
              Ver más consejos →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Compras Culinarias</h3>
            <p className="text-elephant-gray/70 mb-4">
              Si quieres llevarte sabores de Sri Lanka a casa, considera comprar especias, té, coco rallado, curry en polvo y otros 
              ingredientes secos. Los mercados locales y las tiendas especializadas son los mejores lugares para encontrar productos 
              auténticos. Recuerda verificar las regulaciones de importación de tu país antes de comprar productos alimenticios.
            </p>
            <Link
              href="/consejos/compras-culinarias"
              className="text-tropical-green hover:underline"
            >
              Ver guía de compras →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-tropical-green text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-playfair mb-4">¿Listo para tu Experiencia Gastronómica?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Descubre los sabores y aromas de Sri Lanka con nuestras experiencias gastronómicas cuidadosamente 
            seleccionadas. Reserva ahora y comienza tu viaje culinario por este fascinante país.
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