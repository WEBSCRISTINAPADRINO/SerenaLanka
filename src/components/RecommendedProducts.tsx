'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiStar, FiTag } from 'react-icons/fi';
import AffiliateLink from './common/AffiliateLink';

type Platform = 'amazon' | 'booking' | 'getyourguide' | 'aviator' | 'agoda' | 'expedia' | 'klook';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  platform: Platform;
  path: string;
  rating: number;
  category: string;
}

const RecommendedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      title: 'Guía de Viaje Sri Lanka',
      description: 'La guía más completa con mapas detallados y consejos locales',
      price: '24.99€',
      image: '/images/products/guide-book.jpg',
      platform: 'amazon',
      path: '/s?k=guia+viaje+sri+lanka',
      rating: 4.8,
      category: 'Libros'
    },
    {
      id: 2,
      title: 'Repelente Natural',
      description: 'Repelente de mosquitos 100% natural, ideal para climas tropicales',
      price: '12.99€',
      image: '/images/products/repellent.jpg',
      platform: 'amazon',
      path: '/s?k=repelente+natural+mosquitos',
      rating: 4.5,
      category: 'Salud'
    },
    {
      id: 3,
      title: 'Cámara Impermeable',
      description: 'Cámara compacta resistente al agua para capturar tus aventuras',
      price: '89.99€',
      image: '/images/products/camera.jpg',
      platform: 'amazon',
      path: '/s?k=camara+impermeable+viaje',
      rating: 4.7,
      category: 'Electrónica'
    }
  ];

  return (
    <section className="py-20 bg-elephant-gray/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-4">
            Productos Recomendados
          </h2>
          <p className="text-elephant-gray max-w-2xl mx-auto">
            Descubre los productos esenciales para tu viaje a Sri Lanka, cuidadosamente seleccionados por nuestros expertos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: product.id * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-tropical-green text-white px-2 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-playfair font-bold text-elephant-gray">
                    {product.title}
                  </h3>
                  <div className="flex items-center text-golden-sand">
                    <FiStar className="mr-1" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-elephant-gray mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-tropical-green font-bold">
                    <FiTag className="mr-1" />
                    {product.price}
                  </div>
                  
                  <AffiliateLink
                    platform={product.platform}
                    path={product.path}
                    className="flex items-center bg-tropical-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    <FiShoppingBag className="mr-2" />
                    Comprar
                  </AffiliateLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts; 