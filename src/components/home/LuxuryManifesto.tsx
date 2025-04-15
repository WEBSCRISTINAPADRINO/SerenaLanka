'use client';

import { motion } from 'framer-motion';

const luxuryStatements = [
  {
    text: "El lujo de dormir entre selva y estrellas",
    subtext: "Donde el silencio tiene voz propia",
    image: "/images/home/luxury-jungle.jpg"
  },
  {
    text: "El lujo de una sonrisa local que lo dice todo",
    subtext: "Conexiones que trascienden el lenguaje",
    image: "/images/home/luxury-smile.jpg"
  },
  {
    text: "El lujo de surfear solo en una playa infinita",
    subtext: "Cuando el océano es tu único testigo",
    image: "/images/home/luxury-surf.jpg"
  },
  {
    text: "El lujo de compartir un safari con tu hijo y ver sus ojos brillar",
    subtext: "Memorias que se convierten en tesoros familiares",
    image: "/images/home/luxury-safari.jpg"
  },
  {
    text: "El lujo de no tener prisa, de volver a ti",
    subtext: "El regalo más valioso: tu tiempo",
    image: "/images/home/luxury-meditation.jpg"
  }
];

export default function LuxuryManifesto() {
  return (
    <section className="py-20 bg-coconut-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
            ¿Qué entendemos por lujo?
          </h2>
          <p className="text-elephant-gray/70 text-lg max-w-2xl mx-auto italic">
            El verdadero lujo no se compra, se siente. Se vive. Se recuerda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {luxuryStatements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-elephant-gray/30 group-hover:bg-elephant-gray/20 transition-colors duration-300" />
                <img
                  src={statement.image}
                  alt={statement.text}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <p className="text-coconut-white text-xl md:text-2xl font-playfair text-center leading-tight mb-2">
                    {statement.text}
                  </p>
                  <p className="text-coconut-white/80 text-sm md:text-base font-light italic text-center">
                    {statement.subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-elephant-gray/80 text-lg md:text-xl leading-relaxed">
            A veces el lujo es un hotel extraordinario.
            <br />
            Otras, una experiencia sagrada, natural, silenciosa, transformadora.
            <br />
            Y muchas veces, es ambas cosas a la vez.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-tropical-green text-coconut-white rounded-full text-lg font-medium tracking-wide hover:bg-tropical-green/90 transition-colors duration-300"
          >
            Descubre tu definición de lujo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 