'use client';

import { motion } from 'framer-motion';

const profiles = [
  {
    title: "En soledad",
    subtitle: "Para reencontrarte, inspirarte, reiniciarte",
    image: "/images/profiles/solo.jpg",
    experiences: [
      "Retiros de yoga y meditación",
      "Safaris fotográficos privados",
      "Clases de cocina local",
      "Playas secretas para surfear"
    ],
    quote: "El viaje solitario es el más transformador de todos"
  },
  {
    title: "En pareja",
    subtitle: "Para regalaros conexión, silencio y asombro compartido",
    image: "/images/profiles/couple.jpg",
    experiences: [
      "Cenas románticas bajo las estrellas",
      "Masajes ayurvédicos en pareja",
      "Atardeceres en villas privadas",
      "Aventuras exclusivas en la selva"
    ],
    quote: "Compartir el asombro profundiza el amor"
  },
  {
    title: "En familia",
    subtitle: "Para vivir aventuras, emociones y memorias que no se borran",
    image: "/images/profiles/family.jpg",
    experiences: [
      "Safaris educativos con guías expertos",
      "Talleres de artesanía local",
      "Snorkel con tortugas",
      "Picnics en plantaciones de té"
    ],
    quote: "Las experiencias compartidas crean vínculos inquebrantables"
  }
];

export default function TravelerProfiles() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
            ¿Cómo viajas tú?
          </h2>
          <p className="text-elephant-gray/80 text-lg max-w-2xl mx-auto">
            El viaje perfecto no es uno solo.
            Es el que se adapta a tu forma de vivir, de sentir y de soñar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-elephant-gray/40 group-hover:bg-elephant-gray/30 transition-colors duration-300" />
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-elephant-gray/80 to-transparent">
                  <h3 className="font-playfair text-2xl text-coconut-white mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-coconut-white/90">
                    {profile.subtitle}
                  </p>
                </div>
              </div>

              <div className="bg-coconut-white p-6 rounded-lg shadow-md">
                <p className="text-elephant-gray/70 italic text-center mb-6 font-light">
                  "{profile.quote}"
                </p>

                <ul className="space-y-3">
                  {profile.experiences.map((experience, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                      className="flex items-center gap-3 text-elephant-gray/80"
                    >
                      <span className="text-tropical-green">✦</span>
                      {experience}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-3 w-full rounded-full bg-tropical-green text-coconut-white hover:bg-tropical-green/90 transition-colors duration-300"
                >
                  Descubre más
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 