'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

// Datos de ejemplo (en una aplicación real, esto vendría de una API o base de datos)
const destinos = [
  {
    id: 1,
    nombre: 'Unawatuna',
    descripcion: 'Playa paradisíaca con aguas cristalinas',
    imagen: '/images/destinos/unawatuna.jpg',
    etiquetas: ['playa', 'snorkel', 'relax']
  },
  {
    id: 2,
    nombre: 'Sigiriya',
    descripcion: 'Antigua fortaleza en la roca',
    imagen: '/images/destinos/sigiriya.jpg',
    etiquetas: ['historia', 'cultura', 'unesco']
  },
  {
    id: 3,
    nombre: 'Ella',
    descripcion: 'Pueblo montañoso con vistas espectaculares',
    imagen: '/images/destinos/ella.jpg',
    etiquetas: ['montaña', 'trekking', 'naturaleza']
  }
];

export default function BuscarPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  // Búsqueda simple (en una aplicación real, esto sería más sofisticado)
  const resultados = searchQuery 
    ? destinos.filter(destino => 
        destino.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destino.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destino.etiquetas.some(etiqueta => etiqueta.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <main className="min-h-screen">
      <div className="bg-coconut-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Buscar', href: '/buscar' }
            ]}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-playfair font-bold text-tropical-green mb-6">
          Resultados de búsqueda
        </h1>
        {searchQuery ? (
          <p className="text-elephant-gray mb-4">
            Mostrando resultados para: {searchQuery}
          </p>
        ) : (
          <p className="text-elephant-gray mb-4">
            Usa la barra de búsqueda para encontrar contenido
          </p>
        )}

        {resultados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultados.map(destino => (
              <Link href={`/destinos/${destino.nombre.toLowerCase()}`} key={destino.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={destino.imagen}
                      alt={destino.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-playfair font-bold text-tropical-green mb-2">
                      {destino.nombre}
                    </h2>
                    <p className="text-elephant-gray mb-2">{destino.descripcion}</p>
                    <div className="flex flex-wrap gap-2">
                      {destino.etiquetas.map(etiqueta => (
                        <span
                          key={etiqueta}
                          className="px-2 py-1 bg-golden-sand text-sm text-elephant-gray rounded-full"
                        >
                          {etiqueta}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-playfair text-tropical-green mb-4">
              No se encontraron resultados
            </h2>
            <p className="text-elephant-gray mb-4">
              Lo sentimos, no encontramos resultados para "{searchQuery}". Intenta con otros términos o explora nuestras categorías.
            </p>
            <Link 
              href="/destinos"
              className="inline-block bg-golden-sand text-elephant-gray px-6 py-2 rounded-full font-bold hover:bg-sunset-orange hover:text-white transition-all duration-300"
            >
              Explorar destinos
            </Link>
          </div>
        ) : null}
      </div>
    </main>
  );
} 