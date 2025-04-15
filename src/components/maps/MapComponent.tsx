'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { googleMapsConfig, pointsOfInterest } from '@/config/apis';
import AffiliateLink from '../common/AffiliateLink';
import Image from 'next/image';

interface MapComponentProps {
  region?: keyof typeof pointsOfInterest.regions;
  className?: string;
}

type Place = {
  name: string;
  lat: number;
  lng: number;
  description: string;
  image: string;
  bookingUrl: string;
};

// Definimos una interfaz para el mapa que incluya los métodos que necesitamos
interface MapWithMethods extends google.maps.Map {
  setCenter: (center: google.maps.LatLngLiteral) => void;
  setZoom: (zoom: number) => void;
}

export default function MapComponent({ region, className = '' }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<MapWithMethods | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  const selectedRegion = region 
    ? pointsOfInterest.regions[region]
    : {
        center: googleMapsConfig.defaultCenter,
        zoom: googleMapsConfig.defaultZoom,
        places: []
      };

  // Memoizamos la función de manejo de clics para evitar recreaciones innecesarias
  const handlePlaceClick = useCallback((place: Place) => {
    setSelectedPlace(place);
    if (map) {
      try {
        map.setCenter({ lat: place.lat, lng: place.lng });
        map.setZoom(14);
      } catch (e) {
        console.error('Error updating map position:', e);
      }
    }
  }, [map]);

  // Función para limpiar marcadores y listeners
  const cleanupMapResources = useCallback(() => {
    markers.forEach(marker => {
      try {
        marker.setMap(null);
      } catch (e) {
        console.error('Error removing marker:', e);
      }
    });
    
    if (map) {
      try {
        google.maps.event.clearInstanceListeners(map);
      } catch (e) {
        console.error('Error clearing map listeners:', e);
      }
    }
  }, [markers, map]);

  // Función para inicializar el mapa
  const initializeMap = useCallback(async () => {
    if (!mapRef.current) return;
    
    try {
      const loader = new Loader({
        apiKey: googleMapsConfig.apiKey as string,
        version: 'weekly',
        libraries: ['places', 'geometry']
      });

      await loader.load();
      
      if (!mapRef.current) return;
      
      // Creamos el mapa con un cast explícito a nuestro tipo personalizado
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: selectedRegion.center,
        zoom: selectedRegion.zoom,
        styles: googleMapsConfig.styles,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        gestureHandling: 'greedy', // Permite zoom con un solo dedo en móviles
      }) as MapWithMethods;

      setMap(mapInstance);
      setIsMapLoaded(true);
      setIsLoading(false);
      setError(null);

      // Añadir marcadores
      if (region) {
        const newMarkers = pointsOfInterest.regions[region].places.map((place) => {
          const marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: mapInstance,
            icon: {
              url: '/images/icons/marker.svg',
              scaledSize: new google.maps.Size(40, 40)
            },
            title: place.name, // Mejora la accesibilidad
            animation: google.maps.Animation.DROP // Añade una animación suave
          });

          // Usamos el método addListener de google.maps.event
          google.maps.event.addListener(marker, 'click', () => {
            handlePlaceClick(place);
          });

          return marker;
        });

        setMarkers(newMarkers);
      }
    } catch (err) {
      console.error('Error creating map:', err);
      setError('Error al crear el mapa. Por favor, intenta más tarde.');
      setIsLoading(false);
      
      // Incrementar contador de reintentos
      setRetryCount(prev => prev + 1);
    }
  }, [region, selectedRegion, handlePlaceClick]);

  // Efecto para inicializar el mapa
  useEffect(() => {
    let isMounted = true;
    
    if (isMounted) {
      initializeMap();
    }

    return () => {
      isMounted = false;
      cleanupMapResources();
    };
  }, [initializeMap, cleanupMapResources]);

  // Función para reintentar la carga del mapa
  const handleRetry = useCallback(() => {
    if (retryCount < maxRetries) {
      setError(null);
      setIsLoading(true);
      initializeMap();
    } else {
      setError('No se pudo cargar el mapa después de varios intentos. Por favor, recarga la página o contacta con soporte.');
    }
  }, [retryCount, initializeMap]);

  if (error) {
    return (
      <div className="bg-elephant-gray/5 rounded-lg p-8 text-center" role="alert" aria-live="polite">
        <p className="text-elephant-gray">{error}</p>
        {retryCount < maxRetries && (
          <button 
            onClick={handleRetry} 
            className="mt-4 px-4 py-2 bg-tropical-green text-white rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors"
            aria-label="Reintentar cargar el mapa"
          >
            Reintentar
          </button>
        )}
        <p className="mt-2 text-xs text-elephant-gray/60">
          Intento {retryCount} de {maxRetries}
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-elephant-gray/5 rounded-lg p-8 text-center" aria-live="polite">
        <div className="animate-pulse">
          <div className="h-64 bg-elephant-gray/20 rounded-lg"></div>
        </div>
        <p className="mt-2 text-sm text-elephant-gray/60">Cargando mapa...</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} aria-label="Mapa interactivo de Sri Lanka">
      <div 
        ref={mapRef} 
        className="w-full h-[500px] rounded-lg shadow-lg" 
        aria-label="Mapa de Google"
        tabIndex={0}
      />

      {selectedPlace && (
        <div 
          className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md max-w-xs"
          role="dialog"
          aria-labelledby="place-title"
          aria-describedby="place-description"
        >
          <button 
            onClick={() => setSelectedPlace(null)}
            className="absolute top-2 right-2 text-elephant-gray/60 hover:text-elephant-gray"
            aria-label="Cerrar información del lugar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="relative h-32 w-full mb-2">
            <Image
              src={selectedPlace.image}
              alt={`Imagen de ${selectedPlace.name}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 300px"
              onError={(e) => {
                // Fallback para imágenes que no cargan
                (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
              }}
            />
          </div>
          <h3 id="place-title" className="font-playfair text-lg text-elephant-gray mb-1">
            {selectedPlace.name}
          </h3>
          <p id="place-description" className="text-sm text-elephant-gray/80 mb-3">
            {selectedPlace.description}
          </p>
          <AffiliateLink
            platform="booking"
            path={selectedPlace.bookingUrl}
            className="block text-center bg-tropical-green text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors"
            aria-label={`Ver hoteles cercanos a ${selectedPlace.name}`}
          >
            Ver Hoteles Cercanos
          </AffiliateLink>
        </div>
      )}

      {/* Leyenda del mapa */}
      <div 
        className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md"
        role="complementary"
        aria-label="Leyenda del mapa"
      >
        <h4 className="font-playfair text-sm text-elephant-gray mb-2">
          Lugares de Interés
        </h4>
        <ul className="space-y-1" role="list">
          {region && pointsOfInterest.regions[region].places.map((place) => (
            <li
              key={place.name}
              className="text-xs text-elephant-gray/80 cursor-pointer hover:text-ocean-blue transition-colors"
              onClick={() => handlePlaceClick(place)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handlePlaceClick(place);
                }
              }}
            >
              {place.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 