'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { lugaresCostaSur, LugarInteres } from '@/config/costa-sur-data';
import Image from 'next/image';

const tipos = [
  'Todos',
  'Ciudad',
  'Playa',
  'Naturaleza',
  'Templo',
  'Spa',
  'Actividad',
  'Gastronomía',
  'Alojamiento'
];

const CostaSurExplorer: React.FC = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos');
  const [lugarSeleccionado, setLugarSeleccionado] = useState<LugarInteres | null>(null);

  const lugaresFiltrados = tipoSeleccionado === 'Todos'
    ? lugaresCostaSur
    : lugaresCostaSur.filter(lugar => lugar.tipo === tipoSeleccionado);

  return (
    <div className="min-h-screen bg-coconut-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filtros */}
        <div className="mb-8">
          <h2 className="text-2xl font-playfair font-bold text-tropical-green mb-4">
            Explora la Costa Sur
          </h2>
          <div className="flex flex-wrap gap-2">
            {tipos.map(tipo => (
              <button
                key={tipo}
                onClick={() => setTipoSeleccionado(tipo)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${tipoSeleccionado === tipo
                    ? 'bg-tropical-green text-white'
                    : 'bg-gray-100 text-elephant-gray hover:bg-gray-200'
                  }`}
              >
                {tipo}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de lugares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lugaresFiltrados.map(lugar => (
            <motion.div
              key={lugar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setLugarSeleccionado(lugar)}
            >
              <div className="relative h-48">
                <Image
                  src={lugar.imagen}
                  alt={lugar.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-tropical-green">
                    {lugar.tipo}
                  </span>
                  <span className="text-sm text-elephant-gray">
                    {lugar.ciudad}
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-bold text-elephant-gray mb-2">
                  {lugar.nombre}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {lugar.descripcion}
                </p>
                {lugar.actividades && (
                  <div className="flex flex-wrap gap-2">
                    {lugar.actividades.slice(0, 3).map(actividad => (
                      <span
                        key={actividad}
                        className="px-2 py-1 bg-gray-100 text-xs rounded-full text-elephant-gray"
                      >
                        {actividad}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalle */}
        {lugarSeleccionado && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64">
                <Image
                  src={lugarSeleccionado.imagen}
                  alt={lugarSeleccionado.nombre}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setLugarSeleccionado(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                >
                  <svg className="w-6 h-6 text-elephant-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-tropical-green">
                    {lugarSeleccionado.tipo}
                  </span>
                  <span className="text-sm text-elephant-gray">
                    {lugarSeleccionado.ciudad}
                  </span>
                </div>
                <h2 className="text-3xl font-playfair font-bold text-elephant-gray mb-4">
                  {lugarSeleccionado.nombre}
                </h2>
                <p className="text-gray-600 mb-6">
                  {lugarSeleccionado.descripcion}
                </p>

                {lugarSeleccionado.mejorEpoca && (
                  <div className="mb-4">
                    <h3 className="font-bold text-elephant-gray mb-2">Mejor época</h3>
                    <p className="text-gray-600">{lugarSeleccionado.mejorEpoca}</p>
                  </div>
                )}

                {lugarSeleccionado.precio && (
                  <div className="mb-4">
                    <h3 className="font-bold text-elephant-gray mb-2">Precio</h3>
                    <p className="text-gray-600">{lugarSeleccionado.precio}</p>
                  </div>
                )}

                {lugarSeleccionado.actividades && (
                  <div className="mb-4">
                    <h3 className="font-bold text-elephant-gray mb-2">Actividades</h3>
                    <div className="flex flex-wrap gap-2">
                      {lugarSeleccionado.actividades.map(actividad => (
                        <span
                          key={actividad}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-elephant-gray"
                        >
                          {actividad}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {lugarSeleccionado.consejos && (
                  <div>
                    <h3 className="font-bold text-elephant-gray mb-2">Consejos</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {lugarSeleccionado.consejos.map(consejo => (
                        <li key={consejo}>{consejo}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostaSurExplorer; 