'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonios = [
  {
    id: 1,
    nombre: 'María González',
    origen: 'España',
    texto: 'Nunca imaginé que podría disfrutar de tanto lujo a un precio tan accesible. Los retiros de yoga y los spas ayurvédicos superaron todas mis expectativas. ¡Una experiencia transformadora!',
    imagen: '/images/testimonials/maria.jpg',
    rating: 5,
    experiencia: 'Retiro de Yoga en Kandy'
  },
  {
    id: 2,
    nombre: 'Carlos Ruiz',
    origen: 'México',
    texto: 'El safari en Yala fue increíble, pero lo que más me impresionó fue la calidad del alojamiento y el servicio. Sentirse como un rey sin arruinarse es posible en Sri Lanka.',
    imagen: '/images/testimonials/carlos.jpg',
    rating: 5,
    experiencia: 'Safari en Yala'
  },
  {
    id: 3,
    nombre: 'Ana Silva',
    origen: 'Argentina',
    texto: 'Las playas de Mirissa son un paraíso, y poder nadar con ballenas azules fue simplemente mágico. La relación calidad-precio de los hoteles boutique es inmejorable.',
    imagen: '/images/testimonials/ana.jpg',
    rating: 5,
    experiencia: 'Avistamiento de Ballenas'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-golden-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
            Experiencias que Transforman
          </h2>
          <p className="text-elephant-gray/80 text-lg max-w-2xl mx-auto">
            Descubre cómo otros viajeros han vivido el lujo accesible en Sri Lanka
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-elephant-gray">
                    {testimonio.nombre}
                  </h3>
                  <p className="text-elephant-gray/60 text-sm">
                    {testimonio.origen}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-sunset-orange"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-tropical-green">
                  {testimonio.experiencia}
                </span>
              </div>

              <p className="text-elephant-gray/80 italic">
                "{testimonio.texto}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="bg-tropical-green text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Ver Más Testimonios
          </button>
        </motion.div>
      </div>
    </section>
  );
} 