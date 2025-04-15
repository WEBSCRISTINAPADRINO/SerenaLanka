'use client';

import { motion } from 'framer-motion';
import AffiliateLink from './common/AffiliateLink';

const bookingOptions = [
  {
    title: 'Hoteles de Lujo',
    platform: 'booking',
    path: '/luxury/sri-lanka.html',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    )
  },
  {
    title: 'Resorts en la Playa',
    platform: 'agoda',
    path: '/beach-hotels/sri-lanka.html',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    )
  },
  {
    title: 'Villas Privadas',
    platform: 'booking',
    path: '/villas/sri-lanka.html',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    )
  }
];

const experienceOptions = [
  {
    title: 'Tours Culturales',
    platform: 'getyourguide',
    path: '/sri-lanka-l727/tours-culturales-tc27',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    )
  },
  {
    title: 'Aventuras',
    platform: 'klook',
    path: '/es-ES/experiences/tours-sri-lanka',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    )
  },
  {
    title: 'Retiros de Bienestar',
    platform: 'getyourguide',
    path: '/sri-lanka-l727/spa-y-bienestar-tc1026',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    )
  }
];

export default function CustomItinerary() {
  return (
    <section className="py-20 bg-elephant-gray/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
            Diseña tu Viaje Perfecto
          </h2>
          <p className="text-lg text-elephant-gray/80 max-w-2xl mx-auto">
            Combina el alojamiento ideal con experiencias únicas para crear
            un viaje que nunca olvidarás
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Alojamientos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="font-playfair text-2xl text-elephant-gray mb-6">
              Alojamientos Exclusivos
            </h3>
            <div className="space-y-4">
              {bookingOptions.map((option) => (
                <AffiliateLink
                  key={option.title}
                  platform={option.platform as any}
                  path={option.path}
                  className="flex items-center p-4 bg-elephant-gray/5 rounded-lg hover:bg-elephant-gray/10 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-tropical-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {option.icon}
                  </svg>
                  <span className="ml-3 text-elephant-gray">{option.title}</span>
                  <svg
                    className="w-5 h-5 ml-auto text-elephant-gray/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </AffiliateLink>
              ))}
            </div>
          </motion.div>

          {/* Experiencias */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="font-playfair text-2xl text-elephant-gray mb-6">
              Experiencias Únicas
            </h3>
            <div className="space-y-4">
              {experienceOptions.map((option) => (
                <AffiliateLink
                  key={option.title}
                  platform={option.platform as any}
                  path={option.path}
                  className="flex items-center p-4 bg-elephant-gray/5 rounded-lg hover:bg-elephant-gray/10 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-ocean-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {option.icon}
                  </svg>
                  <span className="ml-3 text-elephant-gray">{option.title}</span>
                  <svg
                    className="w-5 h-5 ml-auto text-elephant-gray/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </AffiliateLink>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vuelos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <AffiliateLink
            platform="aviator"
            path="/flights/to/sri-lanka"
            className="inline-flex items-center bg-sunset-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            <svg
              className="w-6 h-6 mr-2"
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
            Encuentra los Mejores Vuelos
          </AffiliateLink>
        </motion.div>
      </div>
    </section>
  );
} 