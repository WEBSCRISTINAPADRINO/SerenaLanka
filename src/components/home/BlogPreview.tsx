'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    title: "10 templos budistas que te harán parar y sentir",
    excerpt: "Descubre los templos más impactantes de Sri Lanka, donde la espiritualidad se encuentra con la arquitectura milenaria.",
    image: "/images/blog/temples.jpg",
    category: "Cultura y Espiritualidad",
    readTime: "8 min"
  },
  {
    title: "Guía definitiva para viajar solo por Sri Lanka",
    excerpt: "Todo lo que necesitas saber para una experiencia segura y transformadora en solitario.",
    image: "/images/blog/solo-travel.jpg",
    category: "Viajes en Solitario",
    readTime: "10 min"
  },
  {
    title: "Las playas secretas de Sri Lanka",
    excerpt: "Descubre las playas menos conocidas donde podrás surfear y meditar en completa tranquilidad.",
    image: "/images/blog/secret-beaches.jpg",
    category: "Playas y Naturaleza",
    readTime: "6 min"
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
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
            Inspiración para tu viaje
          </h2>
          <p className="text-elephant-gray/80 text-lg max-w-2xl mx-auto">
            Historias, guías y consejos para hacer de tu viaje una experiencia única
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <Link href="/blog/[slug]" className="block">
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elephant-gray/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-coconut-white text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-playfair text-xl text-elephant-gray mb-2 group-hover:text-tropical-green transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-elephant-gray/70 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-elephant-gray/60">
                    {post.readTime} de lectura
                  </span>
                  <span className="text-tropical-green group-hover:translate-x-1 transition-transform duration-300">
                    Leer más →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-tropical-green text-coconut-white rounded-full hover:bg-tropical-green/90 transition-colors duration-300"
          >
            Ver todos los artículos
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 