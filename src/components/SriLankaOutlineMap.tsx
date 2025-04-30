'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Region {
  id: string;
  name: string;
  path: string;
  href: string;
}

const regions: Region[] = [
  {
    id: 'costa-oeste',
    name: 'Costa Oeste',
    path: 'M 120 180 L 110 220 L 105 280 L 115 320 L 125 350 L 130 380 L 140 400 L 160 420 L 180 430 L 200 440',
    href: '/destinos/costa-oeste'
  },
  {
    id: 'costa-sur',
    name: 'Costa Sur',
    path: 'M 200 440 L 240 445 L 280 440 L 320 430 L 350 410 L 370 390',
    href: '/destinos/costa-sur'
  },
  {
    id: 'costa-este',
    name: 'Costa Este',
    path: 'M 370 390 L 380 350 L 385 300 L 390 250 L 385 200 L 375 150',
    href: '/destinos/costa-este'
  },
  {
    id: 'costa-norte',
    name: 'Costa Norte',
    path: 'M 375 150 L 340 130 L 300 120 L 250 115 L 200 120 L 150 130',
    href: '/destinos/costa-norte'
  },
  {
    id: 'montanas',
    name: 'Región Montañosa',
    path: 'M 200 250 Q 250 200 300 250 Q 250 300 200 250',
    href: '/destinos/montanas'
  }
];

export default function SriLankaOutlineMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {regions.map((region) => (
          <Link key={region.id} href={region.href}>
            <motion.path
              d={region.path}
              fill="none"
              strokeWidth={hoveredRegion === region.id ? "3" : "2"}
              stroke={hoveredRegion === region.id ? "#1976D2" : "#2E7D32"}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            />
            {hoveredRegion === region.id && (
              <motion.text
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                x="50%"
                y="50%"
                textAnchor="middle"
                className="text-lg font-playfair fill-elephant-gray"
              >
                {region.name}
              </motion.text>
            )}
          </Link>
        ))}
      </svg>
    </div>
  );
} 