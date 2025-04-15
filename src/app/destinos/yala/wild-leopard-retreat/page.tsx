'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/common/Hero';
import ImageGallery from '@/components/common/ImageGallery';
import Map from '@/components/common/Map';
import WeatherWidget from '@/components/common/WeatherWidget';
import TestimonialCard from '@/components/common/TestimonialCard';
import ExperienceCard from '@/components/common/ExperienceCard';
import FAQAccordion from '@/components/common/FAQAccordion';
import BookingWidget from '@/components/common/BookingWidget';
import AffiliateLinks from '@/components/common/AffiliateLinks';
import { affiliateLinks } from '@/config/affiliateLinks';

// Datos verificados del hotel
const hotelData = {
  name: "Wild Leopard Retreat",
  location: "Parque Nacional de Yala, Sri Lanka",
  coordinates: { lat: 6.3833, lng: 81.4833 },
  description: "Un exclusivo refugio de lujo en el corazón del Parque Nacional de Yala, donde la naturaleza salvaje se encuentra con el confort más refinado.",
  amenities: [
    "Villas con piscina privada",
    "Safari privado al amanecer",
    "Restaurante gourmet",
    "Spa al aire libre",
    "WiFi en áreas comunes",
    "Aire acondicionado",
    "Productos orgánicos locales"
  ],
  experiences: [
    {
      title: "Safari Privado al Amanecer",
      description: "Explora el Parque Nacional de Yala con un guía naturalista experto en un vehículo 4x4 exclusivo para ti.",
      duration: "3-4 horas",
      price: "Desde 150€",
      image: "/images/experiences/safari-yala.jpg",
      includes: ["Guía naturalista certificado", "Vehículo 4x4 privado", "Desayuno en la naturaleza", "Binoculares"]
    },
    {
      title: "Masaje Ayurvédico al Aire Libre",
      description: "Déjate mimar con un masaje tradicional ayurvédico mientras escuchas los sonidos de la selva.",
      duration: "1-2 horas",
      price: "Desde 80€",
      image: "/images/experiences/masaje-yala.jpg",
      includes: ["Terapeuta certificado", "Aceites orgánicos locales", "Té de hierbas", "Vista a la jungla"]
    },
    {
      title: "Cena bajo las Estrellas",
      description: "Disfruta de una cena gourmet con ingredientes locales mientras las estrellas iluminan el cielo de Yala.",
      duration: "2-3 horas",
      price: "Desde 120€",
      image: "/images/experiences/cena-yala.jpg",
      includes: ["Menú degustación", "Vinos seleccionados", "Chef personal", "Ambientación con velas"]
    }
  ],
  testimonials: [
    {
      name: "Isabella Martínez",
      location: "Madrid, España",
      text: "Nunca olvidaré el momento en que un leopardo pasó junto a nuestra villa mientras cenábamos. No es solo un hotel, es una experiencia que transforma.",
      image: "/images/testimonials/isabella.jpg",
      experience: "Safari y alojamiento"
    },
    {
      name: "Carlos Rodríguez",
      location: "Barcelona, España",
      text: "La combinación de lujo y naturaleza salvaje es perfecta. El personal está atento a cada detalle y las experiencias son inolvidables.",
      image: "/images/testimonials/carlos.jpg",
      experience: "Estancia completa"
    },
    {
      name: "Laura Sánchez",
      location: "Valencia, España",
      text: "El safari privado al amanecer fue el punto álgido de nuestro viaje. Ver un leopardo en su hábitat natural es una experiencia que te cambia.",
      image: "/images/testimonials/laura.jpg",
      experience: "Safari privado"
    }
  ],
  faqs: [
    {
      question: "¿Es adecuado para familias con niños?",
      answer: "Sí, aceptamos niños a partir de 6 años. Ofrecemos actividades especiales para familias y los guías están acostumbrados a trabajar con niños."
    },
    {
      question: "¿Hay señal de móvil y WiFi?",
      answer: "El WiFi está disponible en las áreas comunes. La señal de móvil puede ser intermitente debido a nuestra ubicación remota, lo que forma parte de la experiencia de desconexión."
    },
    {
      question: "¿Qué tipo de ropa necesito para el safari?",
      answer: "Recomendamos ropa cómoda en tonos neutros (beige, verde oliva, marrón), sombrero, protector solar y calzado cerrado. Proporcionamos chaquetas ligeras para las mañanas frescas."
    },
    {
      question: "¿Se puede reservar toda la propiedad en exclusiva?",
      answer: "Sí, ofrecemos la opción de reserva exclusiva para grupos de hasta 10 personas. Contacta con nosotros para más detalles y disponibilidad."
    }
  ]
};

export default function WildLeopardRetreat() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Duerme donde cazan los leopardos. Despierta con la selva a tus pies."
        subtitle="Bienvenido a Wild Leopard Retreat, un exclusivo refugio de lujo en el corazón del Parque Nacional de Yala."
        backgroundImage="/images/hotels/wild-leopard-retreat-hero.jpg"
        ctaText="Consulta disponibilidad"
        ctaLink="#booking"
        overlayOpacity={0.6}
      />

      {/* Propuesta de valor */}
      <section className="py-16 bg-coconut-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
              Aquí no vienes solo a alojarte
            </h2>
            <p className="text-elephant-gray/80 text-lg max-w-3xl mx-auto">
              Vienes a sentirte parte de algo salvaje y sagrado, donde cada momento es una oportunidad para reconectar con tu esencia más auténtica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-coconut-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 text-tropical-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-elephant-gray mb-2">Safari privado al amanecer</h3>
              <p className="text-elephant-gray/70">
                Explora el Parque Nacional de Yala con un guía naturalista experto en un vehículo 4x4 exclusivo para ti.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-coconut-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 text-tropical-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-elephant-gray mb-2">Villas con piscina privada</h3>
              <p className="text-elephant-gray/70">
                Disfruta de tu espacio privado con vistas panorámicas a la jungla y una piscina para refrescarte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-coconut-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 text-tropical-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-elephant-gray mb-2">Gastronomía local gourmet</h3>
              <p className="text-elephant-gray/70">
                Saborea la auténtica cocina ceilandesa con ingredientes frescos y locales, servida bajo las estrellas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galería visual */}
      <section className="py-16 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
              Un refugio donde la naturaleza y el lujo se funden
            </h2>
            <p className="text-elephant-gray/80 text-lg max-w-3xl mx-auto">
              Déjate seducir por la belleza salvaje de Yala mientras disfrutas del confort más refinado.
            </p>
          </motion.div>

          <ImageGallery
            images={[
              {
                src: "/images/hotels/wild-leopard-retreat-1.jpg",
                alt: "Vista exterior de Wild Leopard Retreat",
                width: 1200,
                height: 800,
                filename: "wild-leopard-retreat-1.jpg"
              },
              {
                src: "/images/hotels/wild-leopard-retreat-2.jpg",
                alt: "Habitación de lujo con vistas a la selva",
                width: 1200,
                height: 800,
                filename: "wild-leopard-retreat-2.jpg"
              },
              {
                src: "/images/hotels/wild-leopard-retreat-3.jpg",
                alt: "Piscina privada con vistas al parque",
                width: 1200,
                height: 800,
                filename: "wild-leopard-retreat-3.jpg"
              },
              {
                src: "/images/hotels/wild-leopard-retreat-4.jpg",
                alt: "Restaurante al aire libre",
                width: 1200,
                height: 800,
                filename: "wild-leopard-retreat-4.jpg"
              },
              {
                src: "/images/hotels/wild-leopard-retreat-5.jpg",
                alt: "Spa con tratamientos ayurvédicos",
                width: 1200,
                height: 800,
                filename: "wild-leopard-retreat-5.jpg"
              },
              {
                src: "/images/hotels/wild-leopard-retreat-6.jpg",
                alt: "Safari privado al amanecer",
                width: 1200,
                height: 800,
                filename: "wild-leopard-retreat-6.jpg"
              }
            ]}
          />
        </div>
      </section>

      {/* Tu villa */}
      <section className="py-16 bg-coconut-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
                Tu villa: lujo salvaje y privacidad absoluta
              </h2>
              <p className="text-elephant-gray/80 text-lg mb-6">
                Imagina despertar con el rugido lejano de un leopardo, o ducharte al aire libre mientras un pavo real pasea entre los árboles. Nuestras villas están diseñadas para ofrecerte la máxima privacidad y confort, sin renunciar a la conexión con la naturaleza.
              </p>
              <ul className="space-y-3 mb-8">
                {hotelData.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-tropical-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-elephant-gray/80">{amenity}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#booking"
                className="inline-block px-8 py-3 bg-tropical-green text-coconut-white rounded-full hover:bg-tropical-green/90 transition-colors duration-300"
              >
                Quiero ver la villa
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/hotels/wild-leopard-retreat-villa.jpg"
                alt="Villa con piscina privada en Wild Leopard Retreat"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiencias */}
      <section className="py-16 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
              La experiencia completa: mucho más que dormir
            </h2>
            <p className="text-elephant-gray/80 text-lg max-w-3xl mx-auto">
              Cada momento en Wild Leopard Retreat está diseñado para crear recuerdos imborrables y experiencias transformadoras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelData.experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                description={experience.description}
                duration={experience.duration}
                price={experience.price}
                image={experience.image}
                includes={experience.includes}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-coconut-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
              Experiencias que transforman
            </h2>
            <p className="text-elephant-gray/80 text-lg max-w-3xl mx-auto">
              Descubre lo que otros viajeros han vivido en Wild Leopard Retreat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelData.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
                Ubicación e inspiración natural
              </h2>
              <p className="text-elephant-gray/80 text-lg mb-6">
                Ubicados a solo 10 minutos de la entrada principal del Parque Nacional de Yala, entre la costa salvaje y la sabana misteriosa. Nuestro refugio está estratégicamente situado para ofrecerte la mejor experiencia de safari y naturaleza.
              </p>
              <div className="mb-6">
                <h3 className="font-playfair text-xl text-elephant-gray mb-2">Cómo llegar</h3>
                <p className="text-elephant-gray/80 mb-4">
                  Ofrecemos transfer privado desde el aeropuerto o tu hotel anterior. Para viajeros que buscan una experiencia aún más exclusiva, disponemos de opciones de helicóptero desde Colombo.
                </p>
                <p className="text-elephant-gray/80 italic">
                  "Nos encargamos de todo. Tú solo trae las ganas de dejarte sorprender."
                </p>
              </div>
              <div className="mb-6">
                <h3 className="font-playfair text-xl text-elephant-gray mb-2">Compromiso con la sostenibilidad</h3>
                <p className="text-elephant-gray/80">
                  Utilizamos materiales locales, energía solar y colaboramos con las comunidades cercanas. Tu viaje también cuida el mundo que estás conociendo.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <Map
                center={hotelData.coordinates}
                zoom={12}
                markers={[
                  {
                    position: hotelData.coordinates,
                    title: hotelData.name
                  }
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-coconut-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
              Preguntas frecuentes
            </h2>
            <p className="text-elephant-gray/80 text-lg max-w-3xl mx-auto">
              Todo lo que necesitas saber para planificar tu experiencia en Wild Leopard Retreat.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={hotelData.faqs} />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 bg-elephant-gray/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
                ¿Estás listo para conectar con lo salvaje?
              </h2>
              <p className="text-elephant-gray/80 text-lg mb-6">
                Consulta la disponibilidad y reserva tu experiencia transformadora en Wild Leopard Retreat. Solo 5 villas disponibles, con fechas limitadas durante la temporada de leopardos (febrero-julio).
              </p>
              <div className="flex items-center mb-6">
                <WeatherWidget location="Yala" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-coconut-white p-8 rounded-lg shadow-xl"
            >
              <BookingWidget
                title="Consulta disponibilidad"
                subtitle="Solicita una reserva personalizada"
                buttonText="Enviar consulta"
                successMessage="¡Gracias! Nos pondremos en contacto contigo pronto."
              />
            </motion.div>
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
        subtitle="Productos seleccionados para hacer tu experiencia en Sri Lanka aún más especial"
        links={affiliateLinks.products}
      />
    </main>
  );
} 