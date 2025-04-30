'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: { x: number; y: number };
  href: string;
  region: string;
}

const locations: Location[] = [
  {
    id: 'colombo',
    name: 'Colombo',
    description: 'Capital cosmopolita con arquitectura colonial y moderna',
    coordinates: { x: 120, y: 280 },
    href: '/destinos/costa-oeste',
    region: 'Costa Oeste'
  },
  {
    id: 'galle',
    name: 'Galle',
    description: 'Ciudad histórica fortificada y playas paradisíacas',
    coordinates: { x: 110, y: 400 },
    href: '/destinos/costa-sur',
    region: 'Costa Sur'
  },
  {
    id: 'kandy',
    name: 'Kandy',
    description: 'Ciudad sagrada con el Templo del Diente de Buda',
    coordinates: { x: 200, y: 250 },
    href: '/destinos/montanas',
    region: 'Montañas'
  },
  {
    id: 'trincomalee',
    name: 'Trincomalee',
    description: 'Playas vírgenes y aguas cristalinas',
    coordinates: { x: 300, y: 180 },
    href: '/destinos/costa-este',
    region: 'Costa Este'
  },
  {
    id: 'jaffna',
    name: 'Jaffna',
    description: 'Rica cultura tamil y templos hindúes',
    coordinates: { x: 180, y: 80 },
    href: '/destinos/costa-norte',
    region: 'Costa Norte'
  }
];

const regions = [
  {
    id: 'costa-oeste',
    name: 'Costa Oeste',
    path: 'M 120 180 C 115 220, 110 260, 115 300 C 120 340, 130 380, 150 420',
    color: '#2E7D32'
  },
  {
    id: 'costa-sur',
    name: 'Costa Sur',
    path: 'M 150 420 C 180 440, 220 445, 260 430 C 300 415, 330 400, 350 380',
    color: '#1976D2'
  },
  {
    id: 'costa-este',
    name: 'Costa Este',
    path: 'M 350 380 C 360 340, 365 300, 370 260 C 375 220, 370 180, 360 140',
    color: '#FF5722'
  },
  {
    id: 'costa-norte',
    name: 'Costa Norte',
    path: 'M 360 140 C 320 120, 280 110, 240 110 C 200 110, 160 120, 120 180',
    color: '#E91E63'
  },
  {
    id: 'montanas',
    name: 'Región Montañosa',
    path: 'M 200 220 C 180 250, 190 280, 220 290 C 250 300, 280 280, 260 250 C 240 220, 220 220, 200 220',
    color: '#D32F2F'
  }
];

export default function SriLankaOutlineMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[3/4] max-w-3xl mx-auto bg-coconut-white rounded-xl shadow-lg p-8">
      <svg
        viewBox="0 0 500 600"
        className="w-full h-full"
      >
        {/* Regiones */}
        {regions.map((region) => (
          <Link key={region.id} href={`/destinos/${region.id}`}>
            <motion.path
              d={region.path}
              fill="none"
              stroke={hoveredRegion === region.id ? region.color : '#2E7D32'}
              strokeWidth={hoveredRegion === region.id ? "4" : "2"}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {hoveredRegion === region.id && (
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                className="text-xl font-playfair fill-elephant-gray"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {region.name}
              </motion.text>
            )}
          </Link>
        ))}

        {/* Ubicaciones */}
        {locations.map((location) => (
          <Link key={location.id} href={location.href}>
            <g
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              className="cursor-pointer"
            >
              <motion.circle
                cx={location.coordinates.x}
                cy={location.coordinates.y}
                r={hoveredLocation === location.id ? "8" : "6"}
                fill={hoveredLocation === location.id ? "#FF5722" : "#2E7D32"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {hoveredLocation === location.id && (
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <rect
                    x={location.coordinates.x + 10}
                    y={location.coordinates.y - 40}
                    width="160"
                    height="70"
                    rx="5"
                    fill="white"
                    stroke="#2E7D32"
                    strokeWidth="1"
                  />
                  <text
                    x={location.coordinates.x + 20}
                    y={location.coordinates.y - 20}
                    className="text-sm font-bold fill-tropical-green"
                  >
                    {location.name}
                  </text>
                  <text
                    x={location.coordinates.x + 20}
                    y={location.coordinates.y}
                    className="text-xs fill-elephant-gray"
                  >
                    {location.description}
                  </text>
                </motion.g>
              )}
            </g>
          </Link>
        ))}
      </svg>

      {/* Leyenda */}
      <div className="absolute bottom-4 left-4 bg-white/80 p-4 rounded-lg">
        <h3 className="text-sm font-bold text-elephant-gray mb-2">Regiones:</h3>
        <ul className="space-y-1">
          {regions.map((region) => (
            <li key={region.id} className="flex items-center text-sm">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: region.color }}
              />
              {region.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 