'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  markers?: {
    position: {
      lat: number;
      lng: number;
    };
    title: string;
  }[];
}

export default function Map({ center, zoom, markers = [] }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowsRef = useRef<google.maps.InfoWindow[]>([]);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      if (mapRef.current) {
        // Crear el mapa
        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          styles: [
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#424242' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#1976D2' }]
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#F5DEB3' }]
            }
          ]
        });

        mapInstanceRef.current = map;

        // Limpiar marcadores y ventanas de información anteriores
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];
        infoWindowsRef.current = [];

        // Añadir nuevos marcadores
        markers.forEach(markerData => {
          const marker = new google.maps.Marker({
            position: markerData.position,
            map,
            title: markerData.title,
            animation: google.maps.Animation.DROP
          });

          // Añadir ventana de información
          const infoWindow = new google.maps.InfoWindow({
            content: `<div class="p-2"><h3 class="font-playfair text-lg">${markerData.title}</h3></div>`
          });

          // Guardar la ventana de información en la referencia
          infoWindowsRef.current.push(infoWindow);

          // Añadir el evento de clic al marcador usando google.maps.event
          google.maps.event.addListener(marker, 'click', () => {
            // Cerrar todas las ventanas de información abiertas
            infoWindowsRef.current.forEach(window => window.close());
            // Abrir la ventana de información para este marcador
            infoWindow.open({
              map: map,
              anchor: marker
            });
          });

          markersRef.current.push(marker);
        });
      }
    });
  }, [center, zoom, markers]);

  return <div ref={mapRef} className="w-full h-full" />;
} 