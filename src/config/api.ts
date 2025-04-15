// Configuración de APIs gratuitas
export const API_CONFIG = {
  // OpenWeather API - Clima
  openWeather: {
    baseUrl: 'https://api.openweathermap.org/data/2.5',
    apiKey: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '',
  },
  
  // Google Places API - Información de lugares
  googlePlaces: {
    baseUrl: 'https://maps.googleapis.com/maps/api/place',
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '',
  },
  
  // Unsplash API - Imágenes
  unsplash: {
    baseUrl: 'https://api.unsplash.com',
    apiKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY || '',
  },
  
  // Google Maps API - Mapas
  googleMaps: {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  }
};

// Función para obtener el clima de una ciudad
export async function getWeather(city: string) {
  try {
    const response = await fetch(
      `${API_CONFIG.openWeather.baseUrl}/weather?q=${city}&appid=${API_CONFIG.openWeather.apiKey}&units=metric&lang=es`
    );
    return await response.json();
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    return null;
  }
}

// Función para obtener información de un lugar
export async function getPlaceInfo(placeId: string) {
  try {
    const response = await fetch(
      `${API_CONFIG.googlePlaces.baseUrl}/details/json?place_id=${placeId}&key=${API_CONFIG.googlePlaces.apiKey}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error al obtener información del lugar:', error);
    return null;
  }
}

// Función para buscar imágenes de Unsplash
export async function searchImages(query: string) {
  try {
    const response = await fetch(
      `${API_CONFIG.unsplash.baseUrl}/search/photos?query=${query}&client_id=${API_CONFIG.unsplash.apiKey}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error al buscar imágenes:', error);
    return null;
  }
} 