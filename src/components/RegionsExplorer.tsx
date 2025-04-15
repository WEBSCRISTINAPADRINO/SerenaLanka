'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights?: string[];
  slug: string;
}

interface RegionsExplorerProps {
  regions: Region[];
  className?: string;
}

const RegionsExplorer: React.FC<RegionsExplorerProps> = ({ regions, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {regions.map((region) => (
        <motion.div
          key={region.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48">
            <Image
              src={region.image}
              alt={region.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-tropical-green mb-2">{region.name}</h3>
            <p className="text-gray-600 mb-4">{region.description}</p>
            {region.highlights && region.highlights.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Destacados:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {region.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            <Link
              href={`/destinos/${region.slug}`}
              className="inline-block bg-tropical-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Explorar {region.name}
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RegionsExplorer; 