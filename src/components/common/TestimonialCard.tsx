'use client';

import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  imageSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  comment,
  date,
  imageSrc
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-golden-sand flex items-center justify-center">
              <span className="text-elephant-gray text-xl font-bold">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-playfair text-lg text-elephant-gray">{name}</h4>
          <p className="text-sm text-elephant-gray/70">{location}</p>
        </div>
      </div>

      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-elephant-gray/70">{date}</span>
      </div>

      <p className="text-elephant-gray leading-relaxed">{comment}</p>
    </div>
  );
};

export default TestimonialCard; 