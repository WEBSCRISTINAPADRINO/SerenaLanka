'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-[4/3] cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            {image.caption && (
              <div className="absolute inset-0 bg-elephant-gray/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                <p className="text-coconut-white p-4 font-playfair">
                  {image.caption}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-elephant-gray/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              
              {/* Navegación */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-coconut-white p-2 hover:bg-elephant-gray/50 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    selectedImage === 0 ? images.length - 1 : selectedImage - 1
                  );
                }}
                aria-label="Imagen anterior"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-coconut-white p-2 hover:bg-elephant-gray/50 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    selectedImage === images.length - 1 ? 0 : selectedImage + 1
                  );
                }}
                aria-label="Siguiente imagen"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Caption en lightbox */}
              {images[selectedImage].caption && (
                <div className="absolute bottom-0 inset-x-0 p-4 bg-elephant-gray/60 text-coconut-white text-center">
                  <p className="font-playfair">{images[selectedImage].caption}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 