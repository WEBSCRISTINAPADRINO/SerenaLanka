'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "María García",
    location: "Madrid, España",
    text: "En Yala, el silencio de la madrugada se rompió con el rugido de un leopardo. Ese momento, viendo el amanecer desde nuestra villa privada, cambió mi forma de ver la naturaleza.",
    image: "/images/testimonials/maria.jpg",
    experience: "Wild Leopard Retreat, Yala"
  },
  {
    name: "Carlos Rodríguez",
    location: "Barcelona, España",
    text: "Nadar con tortugas en Unawatuna fue mágico. Pero lo que realmente nos transformó fue compartir un té con una familia local en las plantaciones de Ella.",
    image: "/images/testimonials/carlos.jpg",
    experience: "Unawatuna Beach Resort"
  },
  {
    name: "Laura Martínez",
    location: "Valencia, España",
    text: "El retiro de yoga en las montañas de Kandy fue una experiencia que me ayudó a reconectar conmigo misma. Los monjes nos enseñaron que la paz verdadera viene de dentro.",
    image: "/images/testimonials/laura.jpg",
    experience: "Kandy Mountain Retreat"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-coconut-white to-golden-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
            Historias que inspiran
          </h2>
          <p className="text-elephant-gray/80 text-lg max-w-2xl mx-auto">
            Experiencias reales de viajeros que han descubierto la magia de Sri Lanka
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-coconut-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium text-elephant-gray">{testimonial.name}</h3>
                    <p className="text-sm text-elephant-gray/60">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-elephant-gray/80 italic mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-tropical-green">
                  {testimonial.experience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 