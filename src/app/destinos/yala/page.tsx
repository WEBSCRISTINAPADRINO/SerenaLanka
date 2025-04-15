import { Metadata } from 'next';
import Hero from '@/components/common/Hero';
import ImageGallery from '@/components/common/ImageGallery';
import Map from '@/components/common/Map';
import WeatherWidget from '@/components/common/WeatherWidget';
import TestimonialCard from '@/components/common/TestimonialCard';
import FAQAccordion from '@/components/common/FAQAccordion';
import AffiliateLinks from '@/components/common/AffiliateLinks';
import { affiliateLinks } from '@/config/affiliateLinks';

// Datos verificados de Yala
const yalaData = {
  name: 'Yala',
  location: 'Sureste de Sri Lanka',
  coordinates: {
    lat: 6.3833,
    lng: 81.4833
  },
  bestTimeToVisit: 'Febrero a julio',
  closedSeason: 'Septiembre a octubre (parcialmente)',
  travelTime: {
    fromColombo: '5-6 horas en coche',
    fromGalle: '3-4 horas en coche'
  },
  uniqueFeatures: [
    'Mayor concentración de leopardos del mundo',
    'Mezcla única de selva, costa y lagunas',
    'Biodiversidad excepcional',
    'Paisajes espectaculares al amanecer y atardecer'
  ],
  experiences: [
    {
      title: 'Safari Privado',
      description: 'Explora el parque con un guía experto en un vehículo exclusivo para ti y tus acompañantes.',
      image: '/images/destinos/yala/safari.jpg',
      duration: '4-6 horas',
      price: 'Desde 150€ por persona'
    },
    {
      title: 'Fotografía de Naturaleza',
      description: 'Captura momentos únicos con un fotógrafo profesional especializado en vida salvaje.',
      image: '/images/destinos/yala/fotografia.jpg',
      duration: '6-8 horas',
      price: 'Desde 200€ por persona'
    },
    {
      title: 'Picnic Gourmet en la Sabana',
      description: 'Disfruta de una experiencia culinaria única en medio de la naturaleza salvaje.',
      image: '/images/destinos/yala/picnic.jpg',
      duration: '3-4 horas',
      price: 'Desde 120€ por persona'
    },
    {
      title: 'Amanecer en la Selva',
      description: 'Observa cómo la naturaleza despierta con los primeros rayos de sol.',
      image: '/images/destinos/yala/amanecer.jpg',
      duration: '3-4 horas',
      price: 'Desde 100€ por persona'
    }
  ],
  faqs: [
    {
      question: '¿Se puede visitar Yala con niños?',
      answer: 'Sí, Yala es adecuado para familias con niños mayores de 6 años. Los safaris privados permiten adaptar la experiencia a las necesidades de los más pequeños, con paradas frecuentes y explicaciones adaptadas.'
    },
    {
      question: '¿Es seguro visitar Yala?',
      answer: 'Sí, los safaris se realizan en vehículos especiales con guías expertos que conocen el comportamiento de los animales. Es importante seguir siempre las instrucciones del guía y mantener una distancia segura con la fauna salvaje.'
    },
    {
      question: '¿Qué ropa se recomienda llevar a Yala?',
      answer: 'Se recomienda ropa ligera y cómoda en tonos neutros (beige, verde oliva, marrón). Es importante llevar sombrero, protector solar y repelente de insectos. Durante los safaris de madrugada, puede hacer fresco, por lo que se recomienda llevar una chaqueta ligera.'
    },
    {
      question: '¿Se puede visitar Yala todo el año?',
      answer: 'El parque está abierto todo el año, excepto durante septiembre y octubre, cuando permanece cerrado parcialmente debido a la sequía. La mejor época para visitar es de febrero a julio, cuando la vegetación es menos densa y hay más probabilidades de avistar leopardos.'
    },
    {
      question: '¿Se requiere un guía oficial para visitar Yala?',
      answer: 'Sí, es obligatorio realizar los safaris con un guía oficial autorizado por el Departamento de Vida Silvestre de Sri Lanka. Todos nuestros safaris incluyen guías expertos con amplia experiencia en la zona.'
    }
  ],
  testimonials: [
    {
      name: 'María García',
      location: 'Madrid, España',
      text: 'Yala superó todas mis expectativas. Ver un leopardo en libertad, a escasos metros de nuestro vehículo, fue una experiencia que me dejó sin aliento. El guía era increíblemente conocedor y nos ayudó a entender cada comportamiento animal.',
      image: '/images/testimonials/maria.jpg',
      experience: 'Safari Privado en Yala'
    },
    {
      name: 'Carlos Rodríguez',
      location: 'Barcelona, España',
      text: 'El amanecer en Yala es algo que nunca olvidaré. Los colores del cielo, los sonidos de la selva despertando, y luego ver una familia de elefantes cruzando el camino frente a nosotros. Una experiencia transformadora.',
      image: '/images/testimonials/carlos.jpg',
      experience: 'Amanecer en la Selva'
    },
    {
      name: 'Laura Martínez',
      location: 'Valencia, España',
      text: 'El picnic gourmet en medio de la sabana fue el punto culminante de nuestro viaje. Comer platos locales exquisitos mientras observábamos aves exóticas y escuchábamos los sonidos de la naturaleza fue simplemente mágico.',
      image: '/images/testimonials/laura.jpg',
      experience: 'Picnic Gourmet en la Sabana'
    }
  ],
  sustainability: {
    title: 'Compromiso con la conservación',
    description: 'En Yala, la conservación es una prioridad. El parque nacional protege hábitats críticos para especies en peligro como el leopardo de Sri Lanka, el elefante asiático y el cocodrilo de estuario. Nuestros tours siguen estrictas pautas de sostenibilidad para minimizar el impacto en el medio ambiente.',
    practices: [
      'Respeto por la distancia mínima con los animales',
      'Uso de vehículos con bajo impacto ambiental',
      'Apoyo a proyectos locales de conservación',
      'Educación sobre la importancia de la biodiversidad'
    ]
  }
};

// Imágenes para la galería
const galleryImages = [
  {
    src: '/images/destinos/yala/leopardo.jpg',
    alt: 'Leopardo en Yala',
    width: 800,
    height: 600,
    filename: 'leopardo.jpg'
  },
  {
    src: '/images/destinos/yala/elefantes.jpg',
    alt: 'Elefantes en Yala',
    width: 800,
    height: 600,
    filename: 'elefantes.jpg'
  },
  {
    src: '/images/destinos/yala/paisaje.jpg',
    alt: 'Paisaje de Yala',
    width: 800,
    height: 600,
    filename: 'paisaje.jpg'
  },
  {
    src: '/images/destinos/yala/amanecer.jpg',
    alt: 'Amanecer en Yala',
    width: 800,
    height: 600,
    filename: 'amanecer.jpg'
  },
  {
    src: '/images/destinos/yala/aves.jpg',
    alt: 'Aves en Yala',
    width: 800,
    height: 600,
    filename: 'aves.jpg'
  },
  {
    src: '/images/destinos/yala/laguna.jpg',
    alt: 'Laguna en Yala',
    width: 800,
    height: 600,
    filename: 'laguna.jpg'
  }
];

export default function YalaPage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Yala: Donde la naturaleza ruge y el alma respira"
        subtitle="El corazón salvaje de Sri Lanka. Safaris de lujo, paisajes sin igual y experiencias inolvidables."
        backgroundImage="/images/destinos/yala/hero.jpg"
        ctaText="Descubre Yala"
        ctaLink="#experiencias"
        overlayOpacity={0.4}
      />

      {/* Ubicación y Contexto */}
      <section className="py-16 bg-coconut-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl text-elephant-gray mb-6">
                ¿Dónde está Yala?
              </h2>
              <p className="text-elephant-gray/80 mb-6 leading-relaxed">
                Ubicado en el sureste de Sri Lanka, Yala es el parque nacional más famoso del país. 
                A unas {yalaData.travelTime.fromColombo} de Colombo y bordeando el océano Índico, 
                este santuario salvaje ofrece una de las mayores concentraciones de leopardos del mundo.
              </p>
              <p className="text-elephant-gray/80 leading-relaxed">
                Con una extensión de casi 1.000 km², Yala combina hábitats diversos que van desde 
                densas selvas hasta playas vírgenes, creando un ecosistema único que alberga una 
                extraordinaria biodiversidad.
              </p>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Map
                center={yalaData.coordinates}
                zoom={10}
                markers={[
                  {
                    position: yalaData.coordinates,
                    title: 'Parque Nacional de Yala'
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué Yala es único? */}
      <section className="py-16 bg-elephant-gray/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
              ¿Por qué Yala es único?
            </h2>
            <p className="text-elephant-gray/70 max-w-3xl mx-auto">
              Aquí la tierra late con fuerza, los cielos arden al anochecer y cada sonido es un recordatorio de que estás vivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yalaData.uniqueFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-coconut-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-tropical-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg 
                    className="w-6 h-6 text-tropical-green" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl text-elephant-gray mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Visual */}
      <section className="py-16 bg-coconut-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
              La magia visual de Yala
            </h2>
            <p className="text-elephant-gray/70 max-w-3xl mx-auto">
              Cada rincón de Yala cuenta una historia. Déjate llevar por la belleza salvaje de este paraíso natural.
            </p>
          </div>

          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Experiencias Únicas */}
      <section id="experiencias" className="py-16 bg-elephant-gray/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
              Experiencias únicas en Yala
            </h2>
            <p className="text-elephant-gray/70 max-w-3xl mx-auto">
              Vive momentos que transformarán tu forma de ver la naturaleza y te conectarán con tu esencia más salvaje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {yalaData.experiences.map((experience, index) => (
              <div 
                key={index}
                className="bg-coconut-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 relative">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl text-elephant-gray mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-elephant-gray/70 mb-4">
                    {experience.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-elephant-gray/60">
                    <span>{experience.duration}</span>
                    <span>{experience.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mejor época para visitar */}
      <section className="py-16 bg-coconut-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl text-elephant-gray mb-6">
                Mejor época para visitar
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-tropical-green/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg 
                      className="w-5 h-5 text-tropical-green" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-elephant-gray mb-1">
                      Época ideal: {yalaData.bestTimeToVisit}
                    </h3>
                    <p className="text-elephant-gray/70">
                      Durante estos meses, la vegetación es menos densa y hay más probabilidades de avistar leopardos y otros animales salvajes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-tropical-green/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg 
                      className="w-5 h-5 text-tropical-green" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-elephant-gray mb-1">
                      Temporada de cierre: {yalaData.closedSeason}
                    </h3>
                    <p className="text-elephant-gray/70">
                      El parque permanece parcialmente cerrado durante estos meses debido a la sequía. Es importante planificar tu visita fuera de este período.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-tropical-green/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg 
                      className="w-5 h-5 text-tropical-green" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-elephant-gray mb-1">
                      Clima ideal para combinar con playa
                    </h3>
                    <p className="text-elephant-gray/70">
                      El clima cálido y seco de Yala durante la temporada ideal lo convierte en un destino perfecto para combinar con una estancia en las playas del sur de Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <WeatherWidget location="Yala" />
            </div>
          </div>
        </div>
      </section>

      {/* Cómo llegar a Yala */}
      <section className="py-16 bg-elephant-gray/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
              Cómo llegar a Yala
            </h2>
            <p className="text-elephant-gray/70 max-w-3xl mx-auto">
              Planifica tu viaje a este paraíso salvaje con las opciones de transporte más convenientes para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-coconut-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-tropical-green/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-6 h-6 text-tropical-green" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" 
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-elephant-gray mb-2">
                Desde Colombo
              </h3>
              <p className="text-elephant-gray/70 mb-4">
                {yalaData.travelTime.fromColombo} en coche privado con conductor. También existe la opción de vuelo interno a Hambantota (1h) seguido de un traslado de 1h a Yala.
              </p>
            </div>
            <div className="bg-coconut-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-tropical-green/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-6 h-6 text-tropical-green" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-elephant-gray mb-2">
                Desde Galle o Mirissa
              </h3>
              <p className="text-elephant-gray/70 mb-4">
                {yalaData.travelTime.fromGalle} en coche privado con conductor. Una ruta escénica que te permitirá disfrutar de los paisajes del sur de Sri Lanka.
              </p>
            </div>
            <div className="bg-coconut-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-tropical-green/10 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-6 h-6 text-tropical-green" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-elephant-gray mb-2">
                Opción Premium
              </h3>
              <p className="text-elephant-gray/70 mb-4">
                Para viajeros que buscan una experiencia exclusiva, ofrecemos traslados en helicóptero desde Colombo (45min) o desde la costa sur (20min).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sostenibilidad y conservación */}
      <section className="py-16 bg-coconut-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
              {yalaData.sustainability.title}
            </h2>
            <p className="text-elephant-gray/70 max-w-3xl mx-auto">
              {yalaData.sustainability.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yalaData.sustainability.practices.map((practice, index) => (
              <div 
                key={index}
                className="bg-elephant-gray/5 p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-tropical-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg 
                    className="w-6 h-6 text-tropical-green" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                    />
                  </svg>
                </div>
                <p className="text-elephant-gray/80">
                  {practice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-elephant-gray/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
              Experiencias transformadoras
            </h2>
            <p className="text-elephant-gray/70 max-w-3xl mx-auto">
              Descubre cómo Yala ha impactado a otros viajeros que, como tú, buscaban algo más que un simple safari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yalaData.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                image={testimonial.image}
                experience={testimonial.experience}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-16 bg-coconut-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-elephant-gray/70 max-w-3xl mx-auto">
              Todo lo que necesitas saber para planificar tu experiencia en Yala.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={yalaData.faqs} />
          </div>
        </div>
      </section>

      {/* Sección de Afiliados */}
      <AffiliateLinks
        title="Reserva con nuestros partners"
        subtitle="Encuentra las mejores ofertas y experiencias a través de nuestros partners de confianza"
        links={[
          ...affiliateLinks.hotels,
          ...affiliateLinks.experiences,
          ...affiliateLinks.flights
        ]}
      />

      {/* Sección de Productos Recomendados */}
      <AffiliateLinks
        title="Equípate para tu aventura"
        subtitle="Productos seleccionados para hacer tu experiencia en Yala aún más especial"
        links={affiliateLinks.products}
      />

      {/* CTA Final */}
      <section className="py-16 bg-tropical-green text-coconut-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Incluye Yala en tu ruta exclusiva por Sri Lanka
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Solicita tu experiencia personalizada y descubre cómo podemos crear el viaje perfecto para ti.
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-coconut-white text-tropical-green px-8 py-3 rounded-md font-medium hover:bg-coconut-white/90 transition-colors"
          >
            Solicitar itinerario personalizado
          </a>
        </div>
      </section>
    </main>
  );
} 