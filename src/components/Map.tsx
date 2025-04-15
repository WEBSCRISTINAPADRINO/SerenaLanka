'use client';
import { useEffect, useRef } from 'react';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markers?: Array<{
    position: {
      lat: number;
      lng: number;
    };
    title?: string;
  }>;
}

export default function Map({ center, zoom = 12, markers = [] }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    // Cargar el script de Google Maps si no está cargado
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      // Limpiar marcadores al desmontar
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current || !window.google) return;

    // Crear el mapa
    const map = new google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffffff' }, { lightness: 17 }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 18 }]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 16 }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#dedede' }, { lightness: 21 }]
        }
      ]
    });

    mapInstanceRef.current = map;

    // Añadir marcadores
    markers.forEach(markerData => {
      const marker = new google.maps.Marker({
        position: markerData.position,
        map,
        title: markerData.title
      });
      markersRef.current.push(marker);
    });
  };

  return (
    <div 
      ref={mapRef} 
      className="w-full h-64 md:h-96 rounded-lg shadow-md"
    />
  );
} 