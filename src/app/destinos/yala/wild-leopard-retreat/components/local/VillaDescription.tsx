'use client';

import { motion } from 'framer-motion';

const amenities = [
  {
    icon: "🏊‍♀️",
    title: "Piscina Infinita Privada",
    description: "Tu ventana personal a la sabana salvaje"
  },
  {
    icon: "🛁",
    title: "Baño al Aire Libre",
    description: "Conecta con la naturaleza en total privacidad"
  },
  {
    icon: "🍃",
    title: "Terraza de Meditación",
    description: "Tu espacio para el despertar diario"
  },
  {
    icon: "🫖",
    title: "Rincón del Té",
    description: "Selección de tés locales premium"
  },
  {
    icon: "🛏️",
    title: "Suite Principal",
    description: "Con vistas panorámicas a la sabana"
  },
  {
    icon: "📶",
    title: "WiFi de Alta Velocidad",
    description: "Mantente conectada cuando lo desees"
  }
];

export default function VillaDescription() {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="font-playfair text-3xl text-elephant-gray mb-6">
          Tu Villa: Un Abrazo entre Lujo y Naturaleza
        </h2>
        
        <p className="text-elephant-gray/80 leading-relaxed">
          Imagina un espacio donde los límites entre el interior y el exterior se desvanecen. 
          Donde cada detalle ha sido pensado para crear momentos de asombro y conexión profunda 
          con la naturaleza, sin renunciar al más exquisito confort.
        </p>
        
        <p className="text-elephant-gray/80 leading-relaxed">
          Tu villa de 200m² es más que un alojamiento de lujo: es un santuario personal 
          donde cada amanecer trae consigo la promesa de una nueva historia por descubrir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-golden-sand/5 rounded-lg border border-golden-sand/10"
          >
            <div className="text-3xl mb-2">
              {amenity.icon}
            </div>
            <h3 className="font-playfair text-lg text-elephant-gray mb-1">
              {amenity.title}
            </h3>
            <p className="text-elephant-gray/70 text-sm">
              {amenity.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-tropical-green/5 rounded-lg border border-tropical-green/10">
        <h3 className="font-playfair text-xl text-elephant-gray mb-4">
          Servicios Exclusivos
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center text-elephant-gray/80">
            <span className="mr-2">✨</span>
            Mayordomo personal 24/7
          </li>
          <li className="flex items-center text-elephant-gray/80">
            <span className="mr-2">🍽️</span>
            Chef privado bajo petición
          </li>
          <li className="flex items-center text-elephant-gray/80">
            <span className="mr-2">🧘‍♀️</span>
            Sesiones de yoga y meditación
          </li>
          <li className="flex items-center text-elephant-gray/80">
            <span className="mr-2">🚗</span>
            Transfers privados
          </li>
        </ul>
      </div>
    </div>
  );
} 