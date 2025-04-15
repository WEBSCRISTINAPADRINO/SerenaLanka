'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa';

interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  groupSize: string;
  rating: number;
  link: string;
  highlights: string[];
}

interface VerifiedExperiencesProps {
  experiences: Experience[];
}

export default function VerifiedExperiences({ experiences }: VerifiedExperiencesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-6">
            Experiencias Verificadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre experiencias únicas seleccionadas y verificadas por nuestros expertos locales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-semibold">{experience.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair mb-3">{experience.title}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaCheckCircle className="text-tropical-green mr-2" />
                    <span>{experience.price}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="text-tropical-green mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="text-tropical-green mr-2" />
                    <span>{experience.groupSize}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Lo que incluye:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {experience.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={experience.link}
                  className="inline-block w-full text-center bg-tropical-green text-white px-6 py-3 rounded-full hover:bg-tropical-green/90 transition-colors"
                >
                  Reservar experiencia
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 