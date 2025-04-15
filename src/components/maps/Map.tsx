'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  location: string;
  latitude: number;
  longitude: number;
  zoom?: number;
}

export default function Map({
  location,
  latitude,
  longitude,
  zoom = 15
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
        libraries: ['places']
      });

      try {
        const google = await loader.load();
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        
        if (mapRef.current && !googleMapRef.current) {
          const mapOptions: google.maps.MapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom,
            mapTypeId: 'hybrid',
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
              // Más estilos personalizados...
            ],
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true
          };

          googleMapRef.current = new Map(mapRef.current, mapOptions);

          // Añadir marcador personalizado
          new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: googleMapRef.current,
            title: location,
            animation: google.maps.Animation.DROP,
            icon: {
              url: '/images/icons/marker.svg',
              scaledSize: new google.maps.Size(40, 40)
            }
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, [latitude, longitude, zoom, location]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
      <div
        ref={mapRef}
        className="absolute inset-0"
        aria-label={`Mapa mostrando la ubicación de ${location}`}
        role="application"
      />
    </div>
  );
} 