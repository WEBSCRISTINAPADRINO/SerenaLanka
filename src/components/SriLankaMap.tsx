'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Coordenadas de los destinos principales
const destinations = [
  {
    name: 'Galle',
    coordinates: [80.2170, 6.0535],
    region: 'Costa Sur'
  },
  {
    name: 'Mirissa',
    coordinates: [80.4718, 5.9483],
    region: 'Costa Sur'
  },
  {
    name: 'Unawatuna',
    coordinates: [80.2494, 6.0174],
    region: 'Costa Sur'
  },
  {
    name: 'Trincomalee',
    coordinates: [81.2335, 8.5874],
    region: 'Costa Este'
  },
  {
    name: 'Arugam Bay',
    coordinates: [81.8309, 6.8395],
    region: 'Costa Este'
  },
  {
    name: 'Pasikuda',
    coordinates: [81.5730, 7.9288],
    region: 'Costa Este'
  },
  {
    name: 'Jaffna',
    coordinates: [80.0074, 9.6615],
    region: 'Costa Norte'
  },
  {
    name: 'Point Pedro',
    coordinates: [80.2333, 9.8167],
    region: 'Costa Norte'
  },
  {
    name: 'Negombo',
    coordinates: [79.8358, 7.2083],
    region: 'Costa Oeste'
  },
  {
    name: 'Chilaw',
    coordinates: [79.7953, 7.5757],
    region: 'Costa Oeste'
  },
  {
    name: 'Kalpitiya',
    coordinates: [79.7242, 8.2333],
    region: 'Costa Oeste'
  },
  {
    name: 'Nuwara Eliya',
    coordinates: [80.7891, 6.9497],
    region: 'Montañas'
  },
  {
    name: 'Ella',
    coordinates: [81.0461, 6.8667],
    region: 'Montañas'
  },
  {
    name: 'Kandy',
    coordinates: [80.6333, 7.2833],
    region: 'Montañas'
  },
  {
    name: 'Dambulla',
    coordinates: [80.6517, 7.8675],
    region: 'Templos'
  },
  {
    name: 'Anuradhapura',
    coordinates: [80.4131, 8.3114],
    region: 'Templos'
  },
  {
    name: 'Polonnaruwa',
    coordinates: [81.0000, 7.9403],
    region: 'Templos'
  },
  {
    name: 'Colombo',
    coordinates: [79.8528, 6.9271],
    region: 'Ciudades'
  }
];

const regionColors = {
  'Costa Sur': '#FF5722',
  'Costa Este': '#1976D2',
  'Costa Norte': '#9C27B0',
  'Costa Oeste': '#FFC107',
  'Montañas': '#2E7D32',
  'Templos': '#E91E63',
  'Ciudades': '#424242'
};

const SriLankaMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [80.7718, 7.8731], // Centro de Sri Lanka
      zoom: 7,
      minZoom: 6,
      maxZoom: 12
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on('load', () => {
      destinations.forEach((destination) => {
        // Crear un elemento personalizado para el marcador
        const marker = document.createElement('div');
        marker.className = 'destination-marker';
        marker.style.backgroundColor = regionColors[destination.region];
        
        // Añadir el marcador al mapa
        new mapboxgl.Marker(marker)
          .setLngLat(destination.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <h3 class="text-sm font-bold">${destination.name}</h3>
                <p class="text-xs">${destination.region}</p>
              `)
          )
          .addTo(map.current!);
      });
    });

    return () => map.current?.remove();
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-lg">
        <h4 className="text-sm font-bold mb-2">Regiones</h4>
        <div className="space-y-1">
          {Object.entries(regionColors).map(([region, color]) => (
            <div key={region} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: color }}
              />
              <span className="text-xs">{region}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SriLankaMap; 