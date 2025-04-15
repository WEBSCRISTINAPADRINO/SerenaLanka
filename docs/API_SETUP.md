# Configuración de APIs Esenciales

Este documento detalla la implementación de las APIs esenciales para la web de turismo de lujo accesible en Sri Lanka, centralizadas en `src/config/apis.ts`.

## Google Maps Platform

### Uso
- Mapa interactivo con puntos de interés
- Visualización de regiones turísticas
- Integración con enlaces de afiliados para hoteles

### API Key
```typescript
// Configuración en .env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_de_google_maps
```

### Servicios Activados
- Maps JavaScript API
- Places API
- Geocoding API
- Directions API

### Configuración
```typescript
// src/config/apis.ts
export const googleMapsConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  region: 'LK',
  language: 'es',
  libraries: ['places', 'geometry'],
  defaultCenter: { lat: 7.8731, lng: 80.7718 }, // Centro de Sri Lanka
  defaultZoom: 8,
  styles: [
    // Estilos personalizados para el mapa
    // ...
  ]
};
```

### Componente de Mapa Mejorado
El componente `MapComponent` ha sido optimizado con las siguientes mejoras:

#### 1. Optimización de Rendimiento
- Uso de `useCallback` para memoizar funciones y evitar recreaciones innecesarias
- Separación de la lógica en funciones específicas para mejor mantenibilidad
- Uso de `Image` de Next.js para optimización de imágenes

#### 2. Manejo de Errores Robusto
- Sistema de reintentos con contador (máximo 3 intentos)
- Mensajes de error descriptivos y amigables
- Feedback visual durante la carga y errores
- Limpieza adecuada de recursos en caso de error

#### 3. Accesibilidad Mejorada
- Atributos ARIA para todos los elementos interactivos
- Soporte completo para navegación por teclado
- Roles semánticos para diálogos y listas
- Etiquetas descriptivas para todos los elementos

#### 4. Experiencia de Usuario
- Animaciones suaves para los marcadores
- Mejor manejo de gestos en dispositivos móviles
- Feedback visual durante la carga
- Botón de reintento con contador de intentos

#### 5. Robustez
- Mejor manejo de recursos y limpieza
- Prevención de memory leaks
- Manejo de casos donde las imágenes no cargan
- Verificaciones de montaje/desmontaje de componentes

#### 6. Estructura de Código
- Funciones separadas para responsabilidades específicas
- Mejor organización del código
- Comentarios explicativos en secciones clave

## OpenWeather API

### Uso
- Información meteorológica para destinos turísticos
- Previsiones para planificación de viajes

### API Key
```typescript
// Configuración en .env.local
NEXT_PUBLIC_OPENWEATHER_API_KEY=tu_api_key_de_openweather
```

### Endpoints Utilizados
- Current Weather Data
- 5 Day / 3 Hour Forecast

### Configuración
```typescript
// src/config/apis.ts
export const weatherConfig = {
  apiKey: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
  baseUrl: 'https://api.openweathermap.org/data/2.5',
  units: 'metric',
  language: 'es',
  locations: [
    {
      lat: 6.9271,
      lng: 79.8612,
      name: 'Colombo',
      description: 'Capital comercial de Sri Lanka'
    },
    // Más ubicaciones...
  ],
  updateInterval: 30 * 60 * 1000, // 30 minutos
  cacheExpiry: 60 * 60 * 1000 // 1 hora
};
```

## Componentes que Utilizan estas APIs

### MapComponent
```typescript
// src/components/maps/MapComponent.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { googleMapsConfig, pointsOfInterest } from '@/config/apis';
import AffiliateLink from '../common/AffiliateLink';
import Image from 'next/image';

// Interfaz para el mapa con métodos específicos
interface MapWithMethods extends google.maps.Map {
  setCenter: (center: google.maps.LatLngLiteral) => void;
  setZoom: (zoom: number) => void;
}

export default function MapComponent({ region, className = '' }: MapComponentProps) {
  // Implementación completa con todas las mejoras mencionadas
  // ...
}
```

### WeatherWidget
```typescript
// src/components/weather/WeatherWidget.tsx
import { useState, useEffect } from 'react';
import { weatherConfig } from '@/config/apis';

export default function WeatherWidget({ location, className = '' }: WeatherWidgetProps) {
  // Implementación del widget de clima
  // ...
}
```

## Variables de Entorno Requeridas
```bash
# .env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_de_google_maps
NEXT_PUBLIC_OPENWEATHER_API_KEY=tu_api_key_de_openweather
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development
```

## Implementación

### Caché de Datos Meteorológicos
```typescript
// Implementación de caché para datos meteorológicos
const weatherCache = new Map();

function getCachedWeather(location: string) {
  const cached = weatherCache.get(location);
  if (cached && Date.now() - cached.timestamp < weatherConfig.cacheExpiry) {
    return cached.data;
  }
  return null;
}

function setCachedWeather(location: string, data: any) {
  weatherCache.set(location, {
    data,
    timestamp: Date.now()
  });
}
```

### Optimización de Carga de Mapas
```typescript
// Carga diferida de la API de Google Maps
const loader = new Loader({
  apiKey: googleMapsConfig.apiKey as string,
  version: 'weekly',
  libraries: ['places', 'geometry']
});

// Uso en componentes
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
```

## Manejo de Errores
```typescript
// Estrategia de reintentos para APIs
const maxRetries = 3;
const [retryCount, setRetryCount] = useState(0);

const handleRetry = useCallback(() => {
  if (retryCount < maxRetries) {
    setError(null);
    setIsLoading(true);
    initializeMap();
  } else {
    setError('No se pudo cargar después de varios intentos. Por favor, recarga la página o contacta con soporte.');
  }
}, [retryCount, initializeMap]);
```

## Próximos Pasos

1. **Implementar APIs Adicionales**
   - Integración con servicios de reserva de vuelos
   - APIs de eventos y actividades locales
   - Servicios de traducción para contenido multilingüe

2. **Mejorar Rendimiento**
   - Implementar estrategias de precarga para mapas
   - Optimizar el tamaño de las solicitudes a la API
   - Mejorar la estrategia de caché

3. **Monitoreo de Uso**
   - Implementar sistema de alertas para cuotas de API
   - Monitorear costos de uso de APIs
   - Analizar patrones de uso para optimización

## Mantenimiento

- Revisar cuotas de API mensualmente
- Actualizar claves de API cuando sea necesario
- Verificar cambios en las APIs de terceros
- Mantener documentación actualizada con cambios 