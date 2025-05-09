'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Guía completa para tu safari en Yala',
    excerpt: 'Todo lo que necesitas saber para vivir la mejor experiencia de safari en Sri Lanka',
    image: '/images/blog/yala-safari.jpg',
    date: '15 Marzo 2024',
    readTime: '5 min',
    category: 'Naturaleza'
  },
  // Comentamos temporalmente las cards que causan errores 404
  /*
  {
    id: 2,
    title: 'Los mejores retiros de yoga en Sri Lanka',
    excerpt: 'Descubre los lugares más espirituales para practicar yoga en la isla',
    image: '/images/blog/yoga-retreats.jpg',
    date: '10 Marzo 2024',
    readTime: '4 min',
    category: 'Wellness'
  },
  {
    id: 3,
    title: 'Fotografía en Sri Lanka: Guía para principiantes',
    excerpt: 'Consejos y lugares imprescindibles para capturar la esencia de Sri Lanka',
    image: '/images/blog/cuisine.jpg',
    date: '5 Marzo 2024',
    readTime: '6 min',
    category: 'Fotografía'
  }
  */
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
          {blogPosts.map((post, index) => (
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
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tropical-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-elephant-gray/60 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} lectura</span>
                </div>

                <h3 className="font-playfair text-xl text-elephant-gray mb-3">
                  {post.title}
                </h3>

                <p className="text-elephant-gray/80 mb-4">
                  {post.excerpt}
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