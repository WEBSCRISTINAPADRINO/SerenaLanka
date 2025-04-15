'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ImageGalleryProps, Image as ImageType } from '@/types/components';

export default function ImageGallery({ images: providedImages, query, limit = 6 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [images, setImages] = useState<ImageType[]>(providedImages || []);
  const [loading, setLoading] = useState(!providedImages && !!query);

  useEffect(() => {
    // Si se proporciona una consulta y no hay imágenes, buscar imágenes
    if (query && !providedImages) {
      const fetchImages = async () => {
        try {
          setLoading(true);
          // Aquí podrías implementar una llamada a una API para buscar imágenes
          // Por ahora, usamos imágenes de ejemplo
          const mockImages: ImageType[] = Array.from({ length: limit }, (_, i) => ({
            src: `https://source.unsplash.com/random/800x600/?${encodeURIComponent(query)}&sig=${i}`,
            alt: `${query} - imagen ${i + 1}`,
            width: 800,
            height: 600,
            filename: `image-${i + 1}.jpg`
          }));
          
          setImages(mockImages);
        } catch (error) {
          console.error('Error al cargar imágenes:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchImages();
    }
  }, [query, limit, providedImages]);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16">
            Galería de Imágenes
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tropical-green"></div>
          </div>
        </div>
      </section>
    );
  }

  if (images.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16">
            Galería de Imágenes
          </h2>
          <p className="text-center text-gray-500">No se encontraron imágenes.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair text-center mb-16"
        >
          Galería de Imágenes
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.filename}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-64 cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl w-full h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 