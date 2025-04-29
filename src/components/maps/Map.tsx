'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  location: string;
  zoom?: number;
  apiKey: string;
}

const Map: React.FC<MapProps> = ({ location, zoom = 15, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return;

      const loader = new Loader({
        apiKey: apiKey,
        version: "weekly"
      });

      try {
        const google = await loader.load();
        const geocoder = new google.maps.Geocoder();
        
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === 'OK' && results && results[0] && mapRef.current) {
            const position = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            };

            const map = new google.maps.Map(mapRef.current, {
              center: position,
              zoom: zoom,
              mapTypeControl: false,
              fullscreenControl: false,
              streetViewControl: false
            });

            new google.maps.Marker({
              position: position,
              map: map,
              title: location
            });

            googleMapRef.current = map;
          }
        });
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, [location, zoom, apiKey]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-lg"
    />
  );
};

export default Map; 