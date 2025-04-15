'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stories = [
  {
    title: "El Despertar",
    description: "Cada amanecer es una invitación a descubrir una nueva faceta de ti misma. Los primeros rayos del sol danzan sobre la sabana mientras los leopardos regresan de su caza nocturna.",
    image: "/images/stories/despertar.jpg"
  },
  {
    title: "La Conexión",
    description: "En el silencio de tu villa, entre el susurro de las hojas y el canto de las aves exóticas, encuentras ese espacio sagrado donde el lujo exterior se funde con tu riqueza interior.",
    image: "/images/stories/conexion.jpg"
  },
  {
    title: "La Transformación",
    description: "No es solo un viaje físico, es un peregrinaje del alma. Cada experiencia está diseñada para despertar tus sentidos y recordarte la magia que llevas dentro.",
    image: "/images/stories/transformacion.jpg"
  }
];

export default function TransformationStory() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
          Tu Historia de Transformación
        </h2>
        <p className="text-elephant-gray/80 max-w-2xl mx-auto">
          En Wild Leopard Retreat, cada momento es una página en blanco 
          esperando a ser escrita con tus propias experiencias transformadoras.
        </p>
      </div>

      <div className="space-y-16">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8`}
          >
            <div className="flex-1">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="font-playfair text-2xl text-elephant-gray">
                {story.title}
              </h3>
              <p className="text-elephant-gray/80 leading-relaxed">
                {story.description}
              </p>
              <div className="w-16 h-1 bg-golden-sand/20" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-golden-sand/5 rounded-lg text-center"
      >
        <p className="font-playfair text-xl text-elephant-gray mb-4">
          "Aquí no vienes solo a alojarte. 
          Vienes a sentirte parte de algo salvaje y sagrado."
        </p>
        <p className="text-elephant-gray/60 italic">
          - El espíritu de Wild Leopard Retreat
        </p>
      </motion.div>
    </section>
  );
} 