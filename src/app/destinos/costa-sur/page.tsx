'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import WeatherWidget from '@/components/common/WeatherWidget';
import Map from '@/components/common/Map';
import ImageGallery from '@/components/common/ImageGallery';
import ExperienceCard from '@/components/common/ExperienceCard';
import FAQAccordion from '@/components/common/FAQAccordion';
import AffiliateLinks from '@/components/common/AffiliateLinks';
import Image from 'next/image';

// Datos de la región
const regionData = {
  name: 'Costa Sur',
  description: 'Un paraíso tropical donde las playas doradas se encuentran con el azul cristalino del océano Índico. Hogar de antiguas fortalezas coloniales, vida marina espectacular y la mejor gastronomía costera de Sri Lanka.',
  coordinates: { lat: 6.0535, lng: 80.2210 }, // Coordenadas de Galle
  weatherCity: 'Galle',
  highlights: [
    {
      title: 'Galle',
      description: 'Ciudad fortificada Patrimonio de la UNESCO con arquitectura colonial y ambiente bohemio.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1920&h=1080'
    },
    {
      title: 'Mirissa',
      description: 'El mejor lugar para avistar ballenas azules y delfines en su hábitat natural.',
      image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=1920&h=1080'
    },
    {
      title: 'Unawatuna',
      description: 'Playas paradisíacas perfectas para el snorkel y la vida nocturna.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1920&h=1080'
    },
    {
      title: 'Weligama',
      description: 'El spot ideal para aprender surf con instructores expertos.',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1920&h=1080'
    }
  ],
  experiences: [
    {
      title: 'Safari de Ballenas',
      description: 'Observa las majestuosas ballenas azules y cachalotes en su hábitat natural.',
      duration: '4-5 horas',
      price: 'Desde $45',
      image: 'https://images.unsplash.com/photo-1570484035997-b8568da05e39?auto=format&fit=crop&q=80&w=1920&h=1080',
      includes: ['Guía experto', 'Desayuno', 'Equipo de seguridad', 'Traslados desde el hotel'],
      bestTime: 'Noviembre a Abril'
    },
    {
      title: 'Clases de Surf',
      description: 'Aprende a surfear en las mejores playas para principiantes del mundo.',
      duration: '2 horas',
      price: 'Desde $25',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1920&h=1080',
      includes: ['Instructor certificado', 'Equipo completo', 'Seguro', 'Fotos'],
      bestTime: 'Todo el año'
    },
    {
      title: 'Tour Gastronómico',
      description: 'Descubre los secretos de la cocina de Sri Lanka con chefs locales.',
      duration: '3 horas',
      price: 'Desde $35',
      image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=1920&h=1080',
      includes: ['Chef local', 'Ingredientes', 'Recetario', 'Degustación'],
      bestTime: 'Todo el año'
    }
  ],
  faqs: [
    {
      question: '¿Cuál es la mejor época para visitar la Costa Sur?',
      answer: 'La mejor época es de noviembre a abril, durante la estación seca. Los meses de diciembre a marzo son ideales para el avistamiento de ballenas.'
    },
    {
      question: '¿Cómo llegar desde el aeropuerto de Colombo?',
      answer: 'Puedes llegar en tren (4-5 horas, muy pintoresco), taxi privado (2.5 horas) o autobús (3-4 horas). Recomendamos el taxi privado por comodidad y el tren por la experiencia.'
    },
    {
      question: '¿Es seguro nadar en las playas?',
      answer: 'La mayoría de las playas son seguras para nadar, especialmente Unawatuna y Mirissa. Sin embargo, siempre verifica las condiciones locales y respeta las banderas de advertencia.'
    }
  ],
  galleryImages: [
    {
      url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1920&h=1080',
      alt: 'Fuerte de Galle al atardecer',
      caption: 'El histórico Fuerte de Galle iluminado por el atardecer'
    },
    {
      url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1920&h=1080',
      alt: 'Vida en la playa',
      caption: 'Palmeras y aguas cristalinas en Unawatuna'
    },
    {
      url: 'https://images.unsplash.com/photo-1570484035997-b8568da05e39?auto=format&fit=crop&q=80&w=1920&h=1080',
      alt: 'Avistamiento de ballenas',
      caption: 'Ballena azul emergiendo en las aguas de Mirissa'
    },
    {
      url: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=1920&h=1080',
      alt: 'Gastronomía local',
      caption: 'Frescos mariscos preparados al estilo local'
    },
    {
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1920&h=1080',
      alt: 'Surf en Weligama',
      caption: 'Surfistas al atardecer en la bahía de Weligama'
    }
  ]
};

export default function CostaSurPage() {
  return (
    <main className="min-h-screen bg-coconut-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625126590447-cb769384e1f3?auto=format&fit=crop&q=80"
            alt="Costa Sur de Sri Lanka"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="relative z-10 text-center text-coconut-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            {regionData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl"
          >
            {regionData.description}
          </motion.p>
        </div>
      </section>

      {/* Weather and Map Section */}
      <section className="py-12 md:py-20 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <WeatherWidget 
                location={regionData.weatherCity}
                latitude={regionData.coordinates.lat}
                longitude={regionData.coordinates.lng}
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 min-h-[300px]">
              <Map
                center={regionData.coordinates}
                zoom={11}
                markers={[
                  {
                    position: regionData.coordinates,
                    title: regionData.name
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl text-elephant-gray text-center mb-12"
          >
            Descubre la Costa Sur
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {regionData.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-coconut-white">
                  <h3 className="font-playfair text-2xl mb-2">{highlight.title}</h3>
                  <p className="text-sm md:text-base opacity-90">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ImageGallery 
        images={regionData.galleryImages.map(img => ({
          src: img.url,
          alt: img.alt,
          width: 800,
          height: 600,
          filename: img.url.split('/').pop() || 'image.jpg'
        }))} 
        title="Galería de la Costa Sur"
        description="Descubre la belleza de la Costa Sur de Sri Lanka a través de estas imágenes"
      />

      {/* Experiences Section */}
      <section className="py-12 md:py-20 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl text-elephant-gray text-center mb-12"
          >
            Experiencias Únicas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regionData.experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-elephant-gray mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-elephant-gray/80 mb-4">
                    {experience.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-elephant-gray/60 mb-4">
                    <span>{experience.duration}</span>
                    <span className="font-medium text-tropical-green">{experience.price}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-elephant-gray">Incluye:</p>
                    <ul className="text-sm text-elephant-gray/80 space-y-1">
                      {experience.includes.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl text-elephant-gray text-center mb-16"
          >
            Preguntas Frecuentes
          </motion.h2>
          <FAQAccordion faqs={regionData.faqs} />
        </div>
      </section>

      {/* Affiliate Links Section */}
      <section className="py-20 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl text-elephant-gray text-center mb-16"
          >
            Dónde Alojarte
          </motion.h2>
          <AffiliateLinks
            title="Hoteles Recomendados"
            subtitle="Selección de los mejores alojamientos en la Costa Sur, con precios exclusivos para nuestros lectores"
            links={[
              {
                platform: "Booking.com",
                url: "https://www.booking.com/region/lk/southern-province.html",
                logo: "/images/affiliates/booking.png",
                description: "Las mejores ofertas en hoteles de lujo y boutique",
                commission: "4%"
              },
              {
                platform: "Agoda",
                url: "https://www.agoda.com/region/southern-province-lk.html",
                logo: "/images/affiliates/agoda.png",
                description: "Descuentos especiales en resorts de playa",
                commission: "5%"
              },
              {
                platform: "Hotels.com",
                url: "https://www.hotels.com/search/sri-lanka/southern-province",
                logo: "/images/affiliates/hotels.png",
                description: "Acumula noches gratis en hoteles selectos",
                commission: "3.5%"
              }
            ]}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
            ¿Listo para explorar la Costa Sur?
          </h2>
          <p className="text-elephant-gray/80 mb-8">
            Déjanos ayudarte a crear un itinerario personalizado que incluya todas estas experiencias
            y más.
          </p>
          <Link href="/planifica">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-tropical-green text-coconut-white px-8 py-4 rounded-full text-lg font-medium hover:bg-tropical-green/90 transition-colors duration-300"
            >
              Planifica tu viaje
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
} 