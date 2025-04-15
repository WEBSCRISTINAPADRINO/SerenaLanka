'use client';

import { motion } from 'framer-motion';
import AffiliateLink from './common/AffiliateLink';

const recommendedProducts = [
  {
    id: 1,
    title: 'Equipo Esencial para Sri Lanka',
    description: 'Todo lo que necesitas para tu aventura tropical',
    image: '/images/products/travel-gear.jpg',
    platform: 'amazon',
    path: '/s?k=equipo+viaje+tropical',
    categories: [
      { name: 'Mochilas Impermeables', path: '/s?k=mochila+impermeable+viaje' },
      { name: 'Ropa Tropical', path: '/s?k=ropa+tropical+viaje' },
      { name: 'Protección Solar', path: '/s?k=proteccion+solar+tropical' }
    ]
  },
  {
    id: 2,
    title: 'Fotografía y Documentación',
    description: 'Captura tus momentos inolvidables',
    image: '/images/products/camera-gear.jpg',
    platform: 'amazon',
    path: '/s?k=camara+viaje',
    categories: [
      { name: 'Cámaras Compactas', path: '/s?k=camara+compacta+viaje' },
      { name: 'GoPro y Accesorios', path: '/s?k=gopro+accesorios' },
      { name: 'Drones de Viaje', path: '/s?k=drone+viaje' }
    ]
  },
  {
    id: 3,
    title: 'Bienestar y Salud',
    description: 'Mantente saludable durante tu viaje',
    image: '/images/products/wellness-gear.jpg',
    platform: 'amazon',
    path: '/s?k=salud+viaje+tropical',
    categories: [
      { name: 'Repelente Natural', path: '/s?k=repelente+natural+mosquitos' },
      { name: 'Botiquín de Viaje', path: '/s?k=botiquin+viaje+tropical' },
      { name: 'Accesorios Yoga', path: '/s?k=accesorios+yoga+viaje' }
    ]
  }
] as const;

export default function RecommendedProducts() {
  return (
    <section className="py-20 bg-elephant-gray/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
            Equípate para tu Aventura
          </h2>
          <p className="text-elephant-gray/80 text-lg">
            Productos seleccionados para hacer tu viaje más cómodo y memorable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl text-elephant-gray mb-2">
                  {product.title}
                </h3>
                <p className="text-elephant-gray/80 text-sm mb-4">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.categories.map((category) => (
                    <li key={category.path}>
                      <AffiliateLink
                        platform="amazon"
                        path={category.path}
                        className="text-ocean-blue hover:text-ocean-blue/80 transition-colors text-sm flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        {category.name}
                      </AffiliateLink>
                    </li>
                  ))}
                </ul>

                <AffiliateLink
                  platform="amazon"
                  path={product.path}
                  className="block text-center bg-tropical-green text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Ver Todo {product.title}
                </AffiliateLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 