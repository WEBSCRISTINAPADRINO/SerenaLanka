'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

// Categorías de experiencias de wellness
const categories = [
  {
    id: 'yoga',
    name: 'Retiros de Yoga',
    description: 'Descubre la paz interior en los hermosos retiros de yoga de Sri Lanka, donde podrás practicar en entornos naturales y con instructores expertos.',
    image: '/images/experiencias/categorias/yoga.jpg',
    experiences: [
      {
        id: 'retiro-yoga-mirissa',
        name: 'Retiro de Yoga en Mirissa',
        description: 'Disfruta de un retiro de yoga junto a la playa en Mirissa, con clases diarias, meditación y alimentación saludable.',
        image: '/images/experiencias/retiro-yoga-mirissa.jpg',
        duration: '3-7 días',
        bestTime: 'Todo el año, especialmente de octubre a abril',
        highlights: ['Clases de yoga diarias', 'Meditación guiada', 'Alimentación saludable', 'Playa privada', 'Instructores certificados'],
        affiliateLink: 'https://www.getyourguide.com/mirissa-l97595/yoga-retreat-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'yoga-montanas-nuwareliya',
        name: 'Yoga en las Montañas de Nuwara Eliya',
        description: 'Practica yoga en las frescas montañas de Nuwara Eliya, rodeado de plantaciones de té y naturaleza exuberante.',
        image: '/images/experiencias/yoga-montanas-nuwareliya.jpg',
        duration: '1-5 días',
        bestTime: 'Todo el año',
        highlights: ['Clases de yoga al aire libre', 'Vistas panorámicas', 'Ambiente tranquilo', 'Instructores locales', 'Opción de alojamiento'],
        affiliateLink: 'https://www.viator.com/Nuwara-Eliya-attractions/Yoga-Mountains/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'retiro-yoga-ayurveda',
        name: 'Retiro de Yoga y Ayurveda en Unawatuna',
        description: 'Combina yoga y tratamientos ayurvédicos en un retiro holístico en Unawatuna, enfocado en el bienestar integral.',
        image: '/images/experiencias/retiro-yoga-ayurveda.jpg',
        duration: '5-14 días',
        bestTime: 'Todo el año',
        highlights: ['Yoga y meditación', 'Consultas ayurvédicas', 'Tratamientos personalizados', 'Alimentación ayurvédica', 'Programa completo de wellness'],
        affiliateLink: 'https://www.getyourguide.com/unawatuna-l97595/yoga-ayurveda-retreat-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda y Masajes',
    description: 'Experimenta la antigua ciencia de la vida con tratamientos ayurvédicos, masajes terapéuticos y consultas personalizadas en Sri Lanka.',
    image: '/images/experiencias/categorias/ayurveda.jpg',
    experiences: [
      {
        id: 'spa-ayurveda-colombo',
        name: 'Spa Ayurveda en Colombo',
        description: 'Disfruta de tratamientos ayurvédicos tradicionales en un lujoso spa en Colombo, con expertos en esta antigua ciencia de la vida.',
        image: '/images/experiencias/spa-ayurveda-colombo.jpg',
        duration: '1-3 horas',
        bestTime: 'Todo el año',
        highlights: ['Masajes ayurvédicos', 'Tratamientos faciales', 'Terapias corporales', 'Expertos certificados', 'Ambiente relajante'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/ayurveda-spa-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'retiro-ayurveda-bentota',
        name: 'Retiro Ayurveda en Bentota',
        description: 'Sumérgete en un programa completo de wellness ayurvédico en Bentota, con alojamiento, alimentación y tratamientos personalizados.',
        image: '/images/experiencias/retiro-ayurveda-bentota.jpg',
        duration: '7-21 días',
        bestTime: 'Todo el año',
        highlights: ['Consultas con doctores ayurvédicos', 'Tratamientos diarios', 'Alimentación personalizada', 'Yoga y meditación', 'Programa completo de desintoxicación'],
        affiliateLink: 'https://www.viator.com/Bentota-attractions/Ayurveda-Retreat/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'masaje-tradicional-kandy',
        name: 'Masaje Tradicional en Kandy',
        description: 'Experimenta el arte del masaje tradicional de Sri Lanka en un entorno tranquilo en Kandy, con técnicas transmitidas de generación en generación.',
        image: '/images/experiencias/masaje-tradicional-kandy.jpg',
        duration: '1-2 horas',
        bestTime: 'Todo el año',
        highlights: ['Técnicas tradicionales', 'Aceites naturales', 'Terapeutas expertos', 'Ambiente sereno', 'Beneficios terapéuticos'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/traditional-massage-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'meditacion',
    name: 'Meditación y Mindfulness',
    description: 'Descubre la paz interior a través de retiros de meditación, talleres de mindfulness y experiencias espirituales en Sri Lanka.',
    image: '/images/experiencias/categorias/meditacion.jpg',
    experiences: [
      {
        id: 'retiro-meditacion-dambulla',
        name: 'Retiro de Meditación en Dambulla',
        description: 'Participa en un retiro de meditación en las cuevas de Dambulla, un lugar sagrado con una rica historia espiritual.',
        image: '/images/experiencias/retiro-meditacion-dambulla.jpg',
        duration: '3-10 días',
        bestTime: 'Todo el año',
        highlights: ['Meditación guiada', 'Enseñanzas budistas', 'Ambiente sagrado', 'Instructores monásticos', 'Programa estructurado'],
        affiliateLink: 'https://www.getyourguide.com/dambulla-l97595/meditation-retreat-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'mindfulness-kandy',
        name: 'Taller de Mindfulness en Kandy',
        description: 'Aprende técnicas de mindfulness en un taller práctico en Kandy, con ejercicios para incorporar a tu vida diaria.',
        image: '/images/experiencias/mindfulness-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Técnicas de mindfulness', 'Ejercicios prácticos', 'Instructor certificado', 'Material de apoyo', 'Grupo reducido'],
        affiliateLink: 'https://www.viator.com/Kandy-attractions/Mindfulness-Workshop/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'meditacion-templo-anuradhapura',
        name: 'Meditación en el Templo de Anuradhapura',
        description: 'Practica la meditación en uno de los templos más antiguos de Sri Lanka, guiado por monjes budistas.',
        image: '/images/experiencias/meditacion-templo-anuradhapura.jpg',
        duration: '1-3 días',
        bestTime: 'Todo el año',
        highlights: ['Meditación con monjes', 'Historia budista', 'Ambiente espiritual', 'Enseñanzas tradicionales', 'Experiencia auténtica'],
        affiliateLink: 'https://www.getyourguide.com/anuradhapura-l97595/temple-meditation-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'nutricion',
    name: 'Nutrición Saludable',
    description: 'Descubre la rica tradición culinaria saludable de Sri Lanka, desde talleres de cocina ayurvédica hasta experiencias de alimentación consciente.',
    image: '/images/experiencias/categorias/nutricion.jpg',
    experiences: [
      {
        id: 'cocina-ayurveda-colombo',
        name: 'Taller de Cocina Ayurvédica en Colombo',
        description: 'Aprende a preparar platos ayurvédicos saludables en un taller práctico en Colombo, con un chef especializado.',
        image: '/images/experiencias/cocina-ayurveda-colombo.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Principios ayurvédicos', 'Recetas saludables', 'Ingredientes locales', 'Chef especializado', 'Degustación incluida'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/ayurvedic-cooking-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'alimentacion-consciente-kandy',
        name: 'Experiencia de Alimentación Consciente en Kandy',
        description: 'Participa en un taller de alimentación consciente en Kandy, aprendiendo a comer de manera más saludable y consciente.',
        image: '/images/experiencias/alimentacion-consciente-kandy.jpg',
        duration: '1 día',
        bestTime: 'Todo el año',
        highlights: ['Alimentación consciente', 'Nutrición básica', 'Ejercicios prácticos', 'Experto en nutrición', 'Material informativo'],
        affiliateLink: 'https://www.viator.com/Kandy-attractions/Mindful-Eating/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'cena-vegetariana-galle',
        name: 'Cena Vegetariana en Galle',
        description: 'Disfruta de una cena vegetariana tradicional en Galle, con platos preparados con ingredientes locales y orgánicos.',
        image: '/images/experiencias/cena-vegetariana-galle.jpg',
        duration: '1 noche',
        bestTime: 'Todo el año',
        highlights: ['Platos vegetarianos', 'Ingredientes orgánicos', 'Cocina tradicional', 'Ambiente acogedor', 'Explicaciones nutricionales'],
        affiliateLink: 'https://www.getyourguide.com/galle-l97595/vegetarian-dinner-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'spa',
    name: 'Spas y Bienestar',
    description: 'Relájate y recarga energías en los lujosos spas de Sri Lanka, con tratamientos que combinan técnicas tradicionales y modernas.',
    image: '/images/experiencias/categorias/spa.jpg',
    experiences: [
      {
        id: 'spa-lujo-colombo',
        name: 'Spa de Lujo en Colombo',
        description: 'Disfruta de tratamientos de spa de lujo en un hotel de 5 estrellas en Colombo, con una amplia gama de opciones de bienestar.',
        image: '/images/experiencias/spa-lujo-colombo.jpg',
        duration: '1-4 horas',
        bestTime: 'Todo el año',
        highlights: ['Tratamientos de lujo', 'Instalaciones premium', 'Terapeutas expertos', 'Productos de alta calidad', 'Experiencia completa'],
        affiliateLink: 'https://www.getyourguide.com/colombo-l97595/luxury-spa-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'spa-playa-mirissa',
        name: 'Spa junto a la Playa en Mirissa',
        description: 'Relájate en un spa junto a la playa en Mirissa, con tratamientos que incorporan elementos del mar y la naturaleza.',
        image: '/images/experiencias/spa-playa-mirissa.jpg',
        duration: '1-3 horas',
        bestTime: 'Todo el año, especialmente de octubre a abril',
        highlights: ['Tratamientos con algas', 'Masajes con conchas', 'Vistas al océano', 'Ambiente relajante', 'Productos naturales'],
        affiliateLink: 'https://www.viator.com/Mirissa-attractions/Beach-Spa/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'spa-montanas-nuwareliya',
        name: 'Spa en las Montañas de Nuwara Eliya',
        description: 'Experimenta un spa único en las frescas montañas de Nuwara Eliya, con tratamientos que aprovechan los beneficios del clima y la naturaleza local.',
        image: '/images/experiencias/spa-montanas-nuwareliya.jpg',
        duration: '1-3 horas',
        bestTime: 'Todo el año',
        highlights: ['Tratamientos con té', 'Masajes con piedras calientes', 'Vistas a las montañas', 'Ambiente tranquilo', 'Experiencia única'],
        affiliateLink: 'https://www.getyourguide.com/nuwara-eliya-l97595/mountain-spa-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  },
  {
    id: 'bienestar-integral',
    name: 'Bienestar Integral',
    description: 'Descubre programas completos de bienestar que combinan yoga, ayurveda, nutrición y mindfulness para una experiencia holística en Sri Lanka.',
    image: '/images/experiencias/categorias/bienestar-integral.jpg',
    experiences: [
      {
        id: 'programa-wellness-bentota',
        name: 'Programa de Wellness en Bentota',
        description: 'Participa en un programa completo de wellness en Bentota, diseñado para mejorar tu salud física, mental y espiritual.',
        image: '/images/experiencias/programa-wellness-bentota.jpg',
        duration: '7-14 días',
        bestTime: 'Todo el año',
        highlights: ['Yoga y meditación', 'Tratamientos ayurvédicos', 'Consultas nutricionales', 'Actividades al aire libre', 'Programa personalizado'],
        affiliateLink: 'https://www.getyourguide.com/bentota-l97595/wellness-program-tc24/',
        affiliatePlatform: 'GetYourGuide'
      },
      {
        id: 'retiro-detox-unawatuna',
        name: 'Retiro de Desintoxicación en Unawatuna',
        description: 'Únete a un retiro de desintoxicación en Unawatuna, enfocado en limpiar el cuerpo y la mente a través de diversos tratamientos y prácticas.',
        image: '/images/experiencias/retiro-detox-unawatuna.jpg',
        duration: '5-10 días',
        bestTime: 'Todo el año',
        highlights: ['Programa de desintoxicación', 'Alimentación limpia', 'Tratamientos corporales', 'Yoga y meditación', 'Resultados visibles'],
        affiliateLink: 'https://www.viator.com/Unawatuna-attractions/Detox-Retreat/d5028-a12345',
        affiliatePlatform: 'Viator'
      },
      {
        id: 'bienestar-mindfulness-kandy',
        name: 'Bienestar y Mindfulness en Kandy',
        description: 'Experimenta un programa de bienestar y mindfulness en Kandy, diseñado para reducir el estrés y mejorar tu calidad de vida.',
        image: '/images/experiencias/bienestar-mindfulness-kandy.jpg',
        duration: '3-7 días',
        bestTime: 'Todo el año',
        highlights: ['Técnicas de mindfulness', 'Yoga suave', 'Masajes terapéuticos', 'Talleres de bienestar', 'Ambiente sereno'],
        affiliateLink: 'https://www.getyourguide.com/kandy-l97595/wellness-mindfulness-tc24/',
        affiliatePlatform: 'GetYourGuide'
      }
    ]
  }
];

export default function WellnessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/experiencias/wellness-hero.jpg"
          alt="Experiencias de Wellness en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Experiencias de Wellness</h1>
            <p className="text-xl">Descubre la paz interior y el bienestar en Sri Lanka</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Experiencias', href: '/experiencias' },
            { label: 'Wellness', href: '/experiencias/wellness' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-elephant-gray/5 p-8 rounded-lg">
          <h2 className="text-3xl font-playfair text-elephant-gray mb-4">Sobre las Experiencias de Wellness</h2>
          <p className="text-elephant-gray/80 mb-4">
            Sri Lanka es un destino ideal para el bienestar y la relajación, con una rica tradición en prácticas holísticas como el Ayurveda, 
            el yoga y la meditación. El país ofrece una combinación única de entornos naturales serenos, desde playas tranquilas hasta 
            montañas frescas, que proporcionan el escenario perfecto para experiencias de wellness.
          </p>
          <p className="text-elephant-gray/80">
            Nuestras experiencias de wellness te permiten desconectar del estrés diario y reconectar con tu ser interior, a través de 
            retiros de yoga, tratamientos ayurvédicos, talleres de meditación y programas de bienestar integral. Cada experiencia está 
            diseñada para mejorar tu salud física, mental y espiritual, utilizando técnicas tradicionales y modernas.
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
        <h2 className="text-3xl font-playfair text-center mb-6">Consejos para tu Experiencia de Wellness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Preparación para Retiros</h3>
            <p className="text-elephant-gray/70 mb-4">
              Antes de un retiro de wellness, es recomendable preparar tu cuerpo y mente. Considera reducir el consumo de cafeína y alcohol, 
              dormir lo suficiente, y mantener una alimentación ligera los días previos. Lleva ropa cómoda y adecuada para las actividades planificadas.
            </p>
            <Link
              href="/consejos/preparacion-retiros"
              className="text-tropical-green hover:underline"
            >
              Ver guía completa →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Beneficios del Ayurveda</h3>
            <p className="text-elephant-gray/70 mb-4">
              El Ayurveda, la medicina tradicional de Sri Lanka, ofrece numerosos beneficios para la salud. Los tratamientos ayurvédicos pueden 
              ayudar a equilibrar el cuerpo, reducir el estrés, mejorar la digestión y promover el bienestar general. Consulta con un 
              especialista para un tratamiento personalizado.
            </p>
            <Link
              href="/consejos/beneficios-ayurveda"
              className="text-tropical-green hover:underline"
            >
              Ver más información →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-playfair mb-4">Mantenimiento del Bienestar</h3>
            <p className="text-elephant-gray/70 mb-4">
              Para mantener los beneficios de tu experiencia de wellness después de regresar a casa, incorpora prácticas diarias como 
              meditación, yoga, alimentación consciente y momentos de tranquilidad. Establece una rutina que te permita mantener el 
              equilibrio y el bienestar en tu vida cotidiana.
            </p>
            <Link
              href="/consejos/mantenimiento-bienestar"
              className="text-tropical-green hover:underline"
            >
              Ver consejos prácticos →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-tropical-green text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-playfair mb-4">¿Listo para tu Experiencia de Wellness?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Descubre la paz interior y el bienestar en Sri Lanka con nuestras experiencias cuidadosamente 
            seleccionadas. Reserva ahora y comienza tu viaje hacia una vida más equilibrada y saludable.
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