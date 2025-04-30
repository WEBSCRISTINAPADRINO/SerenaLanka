'use client';

import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const SriLankaMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Importar Leaflet solo en el cliente
    const L = require('leaflet');
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    // Inicializar el mapa
    map.current = L.map(mapContainer.current).setView([7.8731, 80.7718], 7);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.current);

    // Añadir marcadores
    const destinations = [
      { name: 'Galle', coordinates: [6.0535, 80.2170], region: 'Costa Sur' },
      { name: 'Mirissa', coordinates: [5.9483, 80.4718], region: 'Costa Sur' },
      { name: 'Trincomalee', coordinates: [8.5874, 81.2335], region: 'Costa Este' },
      { name: 'Arugam Bay', coordinates: [6.8395, 81.8309], region: 'Costa Este' },
      { name: 'Jaffna', coordinates: [9.6615, 80.0074], region: 'Costa Norte' },
      { name: 'Negombo', coordinates: [7.2083, 79.8358], region: 'Costa Oeste' },
      { name: 'Nuwara Eliya', coordinates: [6.9497, 80.7891], region: 'Montañas' },
      { name: 'Kandy', coordinates: [7.2833, 80.6333], region: 'Montañas' },
      { name: 'Dambulla', coordinates: [7.8675, 80.6517], region: 'Templos' },
      { name: 'Colombo', coordinates: [6.9271, 79.8528], region: 'Ciudades' }
    ];

    destinations.forEach((destination) => {
      const marker = L.marker(destination.coordinates).addTo(map.current);
      marker.bindPopup(`
        <div class="p-2">
          <h3 class="font-bold text-sm">${destination.name}</h3>
          <p class="text-xs">${destination.region}</p>
        </div>
      `);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default SriLankaMap; 