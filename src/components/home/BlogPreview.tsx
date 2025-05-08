'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
    image: '/images/blog/camera.jpg',
    date: '5 Marzo 2024',
    readTime: '6 min',
    category: 'Fotografía'
  }
  */
];

export default function BlogPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Descubre Sri Lanka
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Historias, consejos y experiencias para inspirar tu próximo viaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-tropical-green hover:text-tropical-green/80 transition-colors"
                >
                  Leer más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-tropical-green text-white rounded-full hover:bg-tropical-green/90 transition-colors"
          >
            Ver todos los artículos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 