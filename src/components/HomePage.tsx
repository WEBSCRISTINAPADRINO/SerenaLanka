'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/common/Hero';
import ImageGallery from '@/components/common/ImageGallery';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import Newsletter from '@/components/Newsletter';
import LuxuryManifesto from '@/components/LuxuryManifesto';
import RegionsExplorer from '@/components/common/RegionsExplorer';
import TravelerProfiles from '@/components/TravelerProfiles';
import VerifiedExperiences from '@/components/VerifiedExperiences';
import CustomItinerary from '@/components/CustomItinerary';
import RecommendedProducts from '@/components/RecommendedProducts';
import { yalaImages } from '@/config/images';
import { Region, TravelerProfile, VerifiedExperience, Image } from '@/types/components';

// Datos de las regiones
const regions: Region[] = [
  {
    id: 'costa-sur',
    name: 'Costa Sur',
    description: 'Playas paradisíacas y resorts de lujo',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    highlights: ['Galle', 'Mirissa', 'Unawatuna'],
    slug: 'costa-sur',
    affiliateLink: 'https://www.booking.com/region/lk/southern-province.html',
    price: 'Desde $100/noche',
    bestTime: 'Diciembre a Abril',
    emotion: 'Relajación y aventura'
  },
  {
    id: 'costa-este',
    name: 'Costa Este',
    description: 'Aguas cristalinas y arrecifes de coral',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Trincomalee', 'Arugam Bay', 'Pasikuda'],
    slug: 'costa-este',
    affiliateLink: 'https://www.booking.com/region/lk/eastern-province.html',
    price: 'Desde $80/noche',
    bestTime: 'Mayo a Septiembre',
    emotion: 'Paz y descubrimiento'
  },
  {
    id: 'montanas',
    name: 'Montañas',
    description: 'Plantaciones de té y senderos de montaña',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Nuwara Eliya', 'Ella', 'Kandy'],
    slug: 'montanas',
    affiliateLink: 'https://www.booking.com/region/lk/central-province.html',
    price: 'Desde $70/noche',
    bestTime: 'Todo el año',
    emotion: 'Tranquilidad y naturaleza'
  }
];

// Datos de perfiles de viajeros
const travelerProfiles: TravelerProfile[] = [
  {
    id: 'aventurero',
    title: 'El Aventurero',
    description: 'Para quienes buscan experiencias que desafíen sus límites y enriquezcan su espíritu. Desde surf de clase mundial hasta senderismo en montañas místicas, cada día trae una nueva aventura que transforma.',
    image: yalaImages.experiencias[0].src,
    affiliateLink: 'https://www.booking.com/hotels/lk/adventure.es.html',
    activities: ['Surf', 'Senderismo', 'Buceo', 'Escalada']
  },
  {
    id: 'bienestar',
    title: 'El Buscador de Bienestar',
    description: 'Para quienes buscan reconectar con su ser interior a través de la espiritualidad y el bienestar. Retiros de yoga, spas ayurvédicos y meditación en templos milenarios te esperan.',
    image: yalaImages.experiencias[1].src,
    affiliateLink: 'https://www.booking.com/hotels/lk/wellness.es.html',
    activities: ['Yoga', 'Meditación', 'Spa', 'Ayurveda']
  },
  {
    id: 'cultura',
    title: 'El Explorador Cultural',
    description: 'Para quienes buscan sumergirse en la rica herencia cultural de Sri Lanka. Templos antiguos, ceremonias tradicionales y gastronomía local te esperan para una experiencia inmersiva.',
    image: yalaImages.experiencias[2].src,
    affiliateLink: 'https://www.booking.com/hotels/lk/cultural.es.html',
    activities: ['Templos', 'Gastronomía', 'Arte', 'Historia']
  }
];

// Datos de experiencias verificadas
const verifiedExperiences: VerifiedExperience[] = [
  {
    id: 'safari',
    title: 'Safari en Yala',
    description: 'Vive la emoción de avistar leopardos, elefantes y cocodrilos en su hábitat natural. Una experiencia que te conectará con la naturaleza salvaje de Sri Lanka de una manera única y transformadora.',
    image: yalaImages.experiencias[0].src,
    affiliateLink: 'https://www.booking.com/activities/lk/yala-safari.es.html',
    price: 'Desde 75€',
    duration: '1 día',
    rating: 4.9
  },
  {
    id: 'yoga',
    title: 'Retiro de Yoga',
    description: 'Sumérgete en la práctica del yoga en un entorno natural incomparable. Con instructores certificados y un ambiente sereno, encontrarás la paz interior que buscas.',
    image: yalaImages.experiencias[1].src,
    affiliateLink: 'https://www.booking.com/activities/lk/yoga-retreat.es.html',
    price: 'Desde 120€',
    duration: '3 días',
    rating: 4.8
  }
];

// Convertir las imágenes de yalaImages.galeria al formato Image
const galleryImages: Image[] = [
  {
    src: '/images/gallery/temple.jpg',
    alt: 'Templo budista antiguo',
    width: 800,
    height: 600,
    filename: 'temple.jpg'
  },
  {
    src: '/images/gallery/beach.jpg',
    alt: 'Playa paradisíaca',
    width: 800,
    height: 600,
    filename: 'beach.jpg'
  },
  {
    src: '/images/gallery/tea.jpg',
    alt: 'Plantación de té',
    width: 800,
    height: 600,
    filename: 'tea.jpg'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Descubre el Lujo Accesible en Sri Lanka"
        subtitle="Experiencias únicas en destinos paradisíacos"
        backgroundImage="/images/hero/sri-lanka-hero.jpg"
        ctaText="Explora Destinos"
        ctaLink="/destinos"
      />
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-tropical-green"
          >
            Explora Nuestros Destinos
          </motion.h2>
          <RegionsExplorer regions={regions} />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-tropical-green"
          >
            Galería de Destinos
          </motion.h2>
          <ImageGallery 
            images={galleryImages}
            title="Galería de Destinos"
            description="Explora los lugares más hermosos de Sri Lanka"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage; 