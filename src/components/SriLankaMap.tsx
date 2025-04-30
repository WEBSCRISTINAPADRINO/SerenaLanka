'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const SriLankaMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapContainer.current || map.current) return;

    // Configurar el icono por defecto
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/map/marker-icon-2x.png',
      iconUrl: '/images/map/marker-icon.png',
      shadowUrl: '/images/map/marker-shadow.png',
    });

    // Inicializar el mapa
    map.current = L.map(mapContainer.current, {
      center: [7.8731, 80.7718], // Centro de Sri Lanka
      zoom: 8,
      minZoom: 7,
      maxZoom: 12
    });

    // Añadir capa de mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.current);

    // Definir destinos principales
    const destinations = [
      { name: 'Colombo', coordinates: [6.9271, 79.8528], region: 'Costa Oeste', description: 'Capital cosmopolita con mezcla de modernidad y tradición' },
      { name: 'Galle', coordinates: [6.0535, 80.2170], region: 'Costa Sur', description: 'Ciudad fortificada colonial con hermosas playas' },
      { name: 'Kandy', coordinates: [7.2833, 80.6333], region: 'Montañas', description: 'Ciudad sagrada, hogar del Templo del Diente de Buda' },
      { name: 'Trincomalee', coordinates: [8.5874, 81.2335], region: 'Costa Este', description: 'Playas vírgenes y aguas cristalinas' },
      { name: 'Sigiriya', coordinates: [7.9570, 80.7603], region: 'Cultural', description: 'Antigua fortaleza en roca con frescos milenarios' },
      { name: 'Ella', coordinates: [6.8667, 81.0466], region: 'Montañas', description: 'Pueblo pintoresco rodeado de plantaciones de té' },
      { name: 'Mirissa', coordinates: [5.9483, 80.4718], region: 'Costa Sur', description: 'Paraíso costero famoso por el avistamiento de ballenas' },
      { name: 'Dambulla', coordinates: [7.8675, 80.6517], region: 'Cultural', description: 'Templos cueva con estatuas y pinturas budistas' },
      { name: 'Nuwara Eliya', coordinates: [6.9497, 80.7891], region: 'Montañas', description: 'La "Pequeña Inglaterra" de Sri Lanka' },
      { name: 'Yala', coordinates: [6.3706, 81.5159], region: 'Naturaleza', description: 'Parque Nacional famoso por sus leopardos' }
    ];

    // Añadir marcadores con popups personalizados
    destinations.forEach((destination) => {
      const marker = L.marker(destination.coordinates as [number, number])
        .bindPopup(`
          <div class="p-3">
            <h3 class="text-lg font-bold text-tropical-green mb-1">${destination.name}</h3>
            <p class="text-sm font-medium text-elephant-gray mb-1">${destination.region}</p>
            <p class="text-sm text-elephant-gray">${destination.description}</p>
          </div>
        `, {
          maxWidth: 300,
          className: 'custom-popup'
        })
        .addTo(map.current!);

      // Añadir hover effect
      marker.on('mouseover', function(e) {
        this.openPopup();
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
        }
        .custom-popup .leaflet-popup-tip-container {
          margin-top: -1px;
        }
      `}</style>
    </div>
  );
};

export default SriLankaMap; 