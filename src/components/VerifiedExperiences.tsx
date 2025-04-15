'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { VerifiedExperiencesProps } from '@/types/components';

export default function VerifiedExperiences({ experiences }: VerifiedExperiencesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair text-center mb-16"
        >
          Experiencias Verificadas
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 text-tropical-green px-3 py-1 rounded-full text-sm font-semibold">
                  {experience.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-playfair">{experience.title}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-semibold">{experience.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{experience.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">
                    Duración: {experience.duration}
                  </span>
                </div>
                
                <Link 
                  href={experience.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tropical-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors w-full text-center"
                >
                  Reservar Experiencia
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 