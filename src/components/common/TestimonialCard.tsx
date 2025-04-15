import { motion } from 'framer-motion';
import Image from 'next/image';

export interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  image: string;
  experience?: string;
}

export default function TestimonialCard({ name, location, text, image, experience }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-coconut-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-elephant-gray">{name}</h3>
          <p className="text-sm text-elephant-gray/60">{location}</p>
        </div>
      </div>
      <p className="text-elephant-gray/80 mb-4 italic">"{text}"</p>
      {experience && (
        <div className="text-sm text-tropical-green font-medium">
          {experience}
        </div>
      )}
    </motion.div>
  );
} 