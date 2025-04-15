import { Libraries } from '@react-google-maps/api';

// Configuración de Google Maps
export const googleMapsConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  region: 'LK', // Sri Lanka
  language: 'es', // Español
  libraries: ['places', 'geometry'] as const,
  defaultCenter: {
    lat: 7.8731,
    lng: 80.7718 // Centro de Sri Lanka
  },
  defaultZoom: 8,
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#1976D2' }]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{ color: '#2E7D32' }]
    }
  ] as google.maps.MapTypeStyle[]
} as const;

// Puntos de interés en Sri Lanka
export const pointsOfInterest = {
  regions: {
    southCoast: {
      center: { lat: 5.9549, lng: 80.4549 },
      zoom: 10,
      places: [
        {
          name: 'Galle Fort',
          lat: 6.0300,
          lng: 80.2167,
          description: 'Ciudad fortificada histórica del siglo XVI',
          image: '/images/destinations/galle-fort.jpg',
          bookingUrl: '/hotels/galle'
        },
        {
          name: 'Mirissa Beach',
          lat: 5.9483,
          lng: 80.4589,
          description: 'Playa paradisíaca para avistamiento de ballenas',
          image: '/images/destinations/mirissa-beach.jpg',
          bookingUrl: '/hotels/mirissa'
        },
        {
          name: 'Unawatuna',
          lat: 6.0174,
          lng: 80.2489,
          description: 'Bahía perfecta para snorkel y buceo',
          image: '/images/destinations/unawatuna.jpg',
          bookingUrl: '/hotels/unawatuna'
        }
      ]
    },
    centralHighlands: {
      center: { lat: 6.9271, lng: 80.7512 },
      zoom: 10,
      places: [
        {
          name: 'Templo del Diente de Buda',
          lat: 7.2936,
          lng: 80.6413,
          description: 'Templo sagrado en Kandy',
          image: '/images/destinations/temple-tooth.jpg',
          bookingUrl: '/hotels/kandy'
        },
        {
          name: 'Plantaciones de Té Nuwara Eliya',
          lat: 6.9497,
          lng: 80.7891,
          description: 'La pequeña Inglaterra de Sri Lanka',
          image: '/images/destinations/tea-plantations.jpg',
          bookingUrl: '/hotels/nuwara-eliya'
        }
      ]
    },
    culturalTriangle: {
      center: { lat: 7.9528, lng: 80.7542 },
      zoom: 9,
      places: [
        {
          name: 'Sigiriya',
          lat: 7.9570,
          lng: 80.7603,
          description: 'Fortaleza del León en la roca',
          image: '/images/destinations/sigiriya.jpg',
          bookingUrl: '/hotels/sigiriya'
        },
        {
          name: 'Polonnaruwa',
          lat: 7.9403,
          lng: 81.0188,
          description: 'Antigua ciudad real',
          image: '/images/destinations/polonnaruwa.jpg',
          bookingUrl: '/hotels/polonnaruwa'
        }
      ]
    }
  }
};

// Configuración de OpenWeather
export const weatherConfig = {
  apiKey: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
  baseUrl: 'https://api.openweathermap.org/data/2.5',
  units: 'metric',
  language: 'es',
  locations: {
    colombo: { 
      lat: 6.9271, 
      lng: 79.8612,
      name: 'Colombo',
      description: 'Capital comercial'
    },
    kandy: { 
      lat: 7.2906, 
      lng: 80.6337,
      name: 'Kandy',
      description: 'Ciudad sagrada budista'
    },
    galle: { 
      lat: 6.0535, 
      lng: 80.2210,
      name: 'Galle',
      description: 'Ciudad colonial costera'
    },
    mirissa: {
      lat: 5.9483,
      lng: 80.4589,
      name: 'Mirissa',
      description: 'Paraíso costero'
    },
    sigiriya: {
      lat: 7.9570,
      lng: 80.7603,
      name: 'Sigiriya',
      description: 'Fortaleza antigua'
    }
  },
  updateInterval: 1800000, // 30 minutos en milisegundos
  cacheExpiry: 3600000 // 1 hora en milisegundos
};

// Configuración de caché
export const cacheConfig = {
  weather: {
    ttl: 1800, // 30 minutos
    maxSize: 50 // máximo número de entradas
  },
  maps: {
    ttl: 86400, // 24 horas
    maxSize: 100
  }
};

// Configuración de manejo de errores
export const errorConfig = {
  retry: {
    maxAttempts: 3,
    delay: 1000 // milisegundos entre intentos
  },
  fallback: {
    weather: {
      enabled: true,
      defaultTemp: 27,
      defaultCondition: 'clear'
    },
    maps: {
      enabled: true,
      useStaticMap: true
    }
  }
}; 