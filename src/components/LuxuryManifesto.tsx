'use client';

import { motion } from 'framer-motion';

interface ManifestoItem {
  title: string;
  description: string;
  icon: string;
}

const manifestoItems: ManifestoItem[] = [
  {
    title: 'Autenticidad',
    description: 'Experiencias genuinas que te conectan con la esencia de Sri Lanka, lejos de los circuitos turísticos convencionales.',
    icon: '🌟'
  },
  {
    title: 'Accesibilidad',
    description: 'Lujo redefinido: experiencias premium a precios que no comprometen tu presupuesto ni tus expectativas.',
    icon: '💎'
  },
  {
    title: 'Sostenibilidad',
    description: 'Compromiso con el medio ambiente y las comunidades locales, asegurando que tu viaje tenga un impacto positivo.',
    icon: '🌱'
  },
  {
    title: 'Personalización',
    description: 'Cada experiencia se adapta a tus preferencias, creando un viaje único y memorable.',
    icon: '✨'
  }
];

export default function LuxuryManifesto() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-6">
            Nuestro Manifesto de Lujo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Redefinimos el concepto de lujo en Sri Lanka, combinando experiencias auténticas con un servicio excepcional a precios accesibles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {manifestoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-playfair mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 