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
import DestinationsSlider from '@/components/DestinationsSlider';
import TravelerProfiles from '@/components/TravelerProfiles';
import VerifiedExperiences from '@/components/VerifiedExperiences';
import CustomItinerary from '@/components/CustomItinerary';
import RecommendedProducts from '@/components/RecommendedProducts';
import { yalaImages } from '@/config/images';
import { Region, TravelerProfile, VerifiedExperience, Image } from '@/types/components';
import EpocaDelAnoSection from './home/EpocaDelAnoSection2';

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
    id: 'costa-oeste',
    name: 'Costa Oeste',
    description: 'Cultura, comercio y atardeceres',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Negombo', 'Chilaw', 'Kalpitiya'],
    slug: 'costa-oeste',
    affiliateLink: 'https://www.booking.com/region/lk/western-province.html',
    price: 'Desde $90/noche',
    bestTime: 'Diciembre a Marzo',
    emotion: 'Cultura y tradición'
  },
  {
    id: 'montanas',
    name: 'Montañas',
    description: 'Plantaciones de té y senderos de montaña',
    image: 'https://images.unsplash.com/photo-1578005343436-384a8426d8ed?auto=format&fit=crop&w=800&q=80',
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
const galleryImages: Image[] = yalaImages.galeria.map(img => ({
  src: img.src,
  alt: img.alt,
  width: img.width,
  height: img.height,
  filename: img.filename
}));

const HomePage: React.FC = () => {
  // Estado para la época seleccionada (en el futuro puede usarse para filtrar destinos, experiencias, etc.)
  const [epocaSeleccionada, setEpocaSeleccionada] = React.useState<string | null>(null);

  const handleSelectEpoca = (epoca: string) => {
    setEpocaSeleccionada(epoca);
    // Aquí puedes implementar la lógica de filtrado global
    console.log('Época seleccionada:', epoca);
  };

  return (
    <div className="min-h-screen">
      <Hero 
        title="Descubre el Lujo Accesible en Sri Lanka"
        subtitle="Experiencias únicas en destinos paradisíacos"
        backgroundImage="https://images.unsplash.com/photo-1578005343436-384a8426d8ed?auto=format&fit=crop&w=1920&q=80"
        ctaText="Explora Destinos"
        ctaLink="/destinos"
      />

      {/* Sección Época del Año */}
      <EpocaDelAnoSection onSelectEpoca={handleSelectEpoca} />
      
      <section className="py-20 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <DestinationsSlider />
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-tropical-green"
          >
            Galería de Destinos
          </motion.h2>
          <ImageGallery 
            images={galleryImages}
            title="Descubre Sri Lanka"
            description="Explora los lugares más hermosos de la perla del Índico"
          />
        </div>
      </section>

      <section className="py-20 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-tropical-green"
          >
            Experiencias Únicas
          </motion.h2>
          <VerifiedExperiences experiences={verifiedExperiences} />
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-tropical-green"
          >
            Tipos de Viajeros
          </motion.h2>
          <TravelerProfiles profiles={travelerProfiles} />
        </div>
      </section>

      <section className="py-20 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-tropical-green"
          >
            Planifica tu Viaje
          </motion.h2>
          <CustomItinerary />
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-tropical-green"
          >
            Productos Recomendados
          </motion.h2>
          <RecommendedProducts />
        </div>
      </section>

      <section className="py-20 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-tropical-green"
          >
            Testimonios
          </motion.h2>
          <Testimonials />
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-tropical-green"
          >
            Nuestro Blog
          </motion.h2>
          <BlogPreview />
        </div>
      </section>

      <section className="py-20 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto">
          <LuxuryManifesto />
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default HomePage; 