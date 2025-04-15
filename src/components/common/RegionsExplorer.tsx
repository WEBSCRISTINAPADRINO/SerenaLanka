import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Region } from '@/types/components';

interface RegionsExplorerProps {
  regions: Region[];
}

const RegionsExplorer: React.FC<RegionsExplorerProps> = ({ regions }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-playfair text-center mb-12"
        >
          Explora Nuestros Destinos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/destinos/${region.slug}`}>
                <div className="relative h-64">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-2xl font-playfair text-white text-center px-4">
                      {region.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  {region.highlights && (
                    <ul className="list-disc list-inside text-sm text-gray-500">
                      {region.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsExplorer; 