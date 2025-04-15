'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    titulo: 'Los 5 Mejores Retiros de Yoga en Sri Lanka',
    extracto: 'Descubre los lugares más especiales para reconectar con tu ser interior mientras disfrutas de la serenidad de la isla.',
    imagen: '/images/blog/yoga-retreats.jpg',
    categoria: 'Wellness',
    fecha: '15 Mar 2024',
    tiempo: '5 min'
  },
  {
    id: 2,
    titulo: 'Guía Completa del Safari en Yala',
    extracto: 'Todo lo que necesitas saber para vivir una experiencia inolvidable observando la vida salvaje en su hábitat natural.',
    imagen: '/images/blog/yala-safari.jpg',
    categoria: 'Aventura',
    fecha: '12 Mar 2024',
    tiempo: '7 min'
  },
  {
    id: 3,
    titulo: 'Secretos de la Gastronomía Cingalesa',
    extracto: 'Un viaje a través de los sabores, aromas y tradiciones culinarias que hacen única la cocina de Sri Lanka.',
    imagen: '/images/blog/cuisine.jpg',
    categoria: 'Cultura',
    fecha: '10 Mar 2024',
    tiempo: '6 min'
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-coconut-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
            Inspírate para tu Próxima Aventura
          </h2>
          <p className="text-elephant-gray/80 text-lg">
            Descubre historias, consejos y secretos sobre Sri Lanka
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.imagen}
                  alt={post.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tropical-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.categoria}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-elephant-gray/60 mb-3">
                  <span>{post.fecha}</span>
                  <span className="mx-2">•</span>
                  <span>{post.tiempo} lectura</span>
                </div>

                <h3 className="font-playfair text-xl text-elephant-gray mb-3">
                  {post.titulo}
                </h3>

                <p className="text-elephant-gray/80 mb-4">
                  {post.extracto}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-tropical-green font-semibold hover:text-opacity-80 transition-colors"
                >
                  Leer más
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center bg-tropical-green text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Ver Todos los Artículos
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 