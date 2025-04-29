'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  title?: string;
  description?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, description }) => {
  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold mb-4 text-elephant-gray">{title}</h2>
      )}
      {description && (
        <p className="text-lg mb-6 text-elephant-gray/80">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-coconut-white p-2 text-sm">
                {image.caption}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 