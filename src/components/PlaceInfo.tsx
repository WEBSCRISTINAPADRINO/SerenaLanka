'use client';
import { useState, useEffect } from 'react';
import { getPlaceInfo } from '@/config/api';

interface PlaceInfoProps {
  placeId: string;
}

export default function PlaceInfo({ placeId }: PlaceInfoProps) {
  const [place, setPlace] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaceInfo = async () => {
      try {
        setLoading(true);
        const data = await getPlaceInfo(placeId);
        if (data && data.result) {
          setPlace(data.result);
        } else {
          setError('No se pudo obtener información del lugar');
        }
      } catch (err) {
        setError('Error al cargar información del lugar');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaceInfo();
  }, [placeId]);

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-elephant-gray">Cargando información del lugar...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-spice-red">{error}</p>
      </div>
    );
  }

  if (!place) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-playfair text-tropical-green mb-2">{place.name}</h3>
      
      {place.photos && place.photos.length > 0 && (
        <div className="mb-4">
          <img 
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`}
            alt={place.name}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )}
      
      <div className="mb-2">
        <p className="text-sm text-elephant-gray">{place.formatted_address}</p>
      </div>
      
      {place.rating && (
        <div className="mb-2">
          <p className="text-sm text-elephant-gray">
            Valoración: {place.rating} ⭐ ({place.user_ratings_total} reseñas)
          </p>
        </div>
      )}
      
      {place.opening_hours && (
        <div className="mb-2">
          <p className="text-sm font-semibold text-elephant-gray">
            {place.opening_hours.open_now ? 'Abierto ahora' : 'Cerrado'}
          </p>
        </div>
      )}
      
      {place.website && (
        <div>
          <a 
            href={place.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ocean-blue text-sm hover:underline"
          >
            Visitar sitio web
          </a>
        </div>
      )}
    </div>
  );
} 