'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const regions = [
  {
    id: 'sur',
    name: 'Sur',
    emoji: '🧘',
    description: 'Playas de arena dorada donde aprender surf o practicar yoga al amanecer. Safaris en Yala con avistamiento de leopardos. Lujo escondido en villas con vistas al Índico.',
    image: '/images/regions/south.jpg',
    color: 'bg-ocean-blue'
  },
  {
    id: 'este',
    name: 'Este',
    emoji: '🐘',
    description: 'Playas vírgenes, snorkel con tortugas, conexión con la calma. Cultura tamil viva, mercados auténticos. Amaneceres de fuego, soledad transformadora.',
    image: '/images/regions/east.jpg',
    color: 'bg-tropical-green'
  },
  {
    id: 'centro',
    name: 'Centro',
    emoji: '🌿',
    description: 'Montañas cubiertas de té, templos en cuevas, trenes panorámicos. Retiros espirituales, meditación, senderismo por la niebla. Lujo emocional y silencio profundo.',
    image: '/images/regions/center.jpg',
    color: 'bg-golden-sand'
  },
  {
    id: 'oeste',
    name: 'Oeste',
    emoji: '🐳',
    description: 'Vida vibrante en Negombo o Colombo, entre modernidad y raíces. Ballenas, cocoteros, playas salvajes. Hoteles boutique, cenas elegantes, atardeceres de postal.',
    image: '/images/regions/west.jpg',
    color: 'bg-sunset-orange'
  },
  {
    id: 'norte',
    name: 'Norte',
    emoji: '🕌',
    description: 'Autenticidad tamil, historia profunda. Paisajes culturales aún intactos. Menos turismo, más verdad.',
    image: '/images/regions/north.jpg',
    color: 'bg-lotus-pink'
  }
];

export default function ExploreRegions() {
  const [activeRegion, setActiveRegion] = useState(regions[0]);

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
            Explora Sri Lanka por zonas
          </h2>
          <p className="text-elephant-gray/80 text-lg max-w-2xl mx-auto">
            Cada zona de Sri Lanka es un universo.
            Algunas te invitan a mirar fuera.
            Otras, a mirar dentro.
            Todas, a sentir con intensidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mapa interactivo */}
          <div className="relative aspect-[4/3] bg-coconut-white rounded-lg shadow-xl overflow-hidden">
            <img
              src="/images/regions/map.jpg"
              alt="Mapa de Sri Lanka"
              className="w-full h-full object-cover"
            />
            {/* Aquí irían los puntos interactivos del mapa */}
          </div>

          {/* Selector de regiones y descripción */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-4">
              {regions.map((region) => (
                <motion.button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-300 ${
                    activeRegion.id === region.id
                      ? `${region.color} text-coconut-white`
                      : 'bg-elephant-gray/10 text-elephant-gray hover:bg-elephant-gray/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{region.emoji}</span>
                  <span className="font-medium">{region.name}</span>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeRegion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-coconut-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-playfair text-2xl text-elephant-gray mb-4 flex items-center gap-2">
                <span>{activeRegion.emoji}</span>
                {activeRegion.name}
              </h3>
              <p className="text-elephant-gray/80 leading-relaxed">
                {activeRegion.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 px-6 py-3 rounded-full text-coconut-white ${activeRegion.color}`}
              >
                Descubre más
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 