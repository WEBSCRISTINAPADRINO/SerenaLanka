'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TravelerProfilesProps } from '@/types/components';

export default function TravelerProfiles({ profiles }: TravelerProfilesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair text-center mb-16"
        >
          Encuentra Tu Perfil de Viajero
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={profile.image}
                  alt={profile.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair mb-3">{profile.title}</h3>
                <p className="text-gray-600 mb-6">{profile.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Actividades destacadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.activities.map((activity) => (
                      <span 
                        key={activity}
                        className="bg-tropical-green/10 text-tropical-green px-3 py-1 rounded-full text-sm"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={profile.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tropical-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Descubrir Experiencias
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 