'use client';

import { useState, useEffect } from 'react';
import { weatherConfig } from '@/config/apis';

interface WeatherData {
  temp: number;
  humidity: number;
  description: string;
  icon: string;
  location: string;
  locationDescription: string;
}

interface WeatherWidgetProps {
  location: keyof typeof weatherConfig.locations;
  className?: string;
}

export default function WeatherWidget({ location, className = '' }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const locationData = weatherConfig.locations[location];
        const response = await fetch(
          `${weatherConfig.baseUrl}/weather?` +
          `lat=${locationData.lat}&lon=${locationData.lng}&` +
          `units=${weatherConfig.units}&` +
          `lang=${weatherConfig.language}&` +
          `appid=${weatherConfig.apiKey}`
        );

        if (!response.ok) {
          throw new Error('Error al obtener datos del clima');
        }

        const data = await response.json();
        
        setWeather({
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          location: locationData.name,
          locationDescription: locationData.description
        });
        setLoading(false);
      } catch (err) {
        setError('No se pudo cargar la información del clima');
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Actualizar cada 30 minutos
    const interval = setInterval(fetchWeather, weatherConfig.updateInterval);
    
    return () => clearInterval(interval);
  }, [location]);

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-elephant-gray/20 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-elephant-gray/20 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-elephant-gray/20 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
        <p className="text-spice-red text-sm">{error}</p>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-playfair text-lg text-elephant-gray">
            {weather.location}
          </h3>
          <p className="text-sm text-elephant-gray/60">
            {weather.locationDescription}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          className="w-16 h-16"
        />
      </div>
      
      <div className="flex items-end gap-2 mb-2">
        <span className="font-playfair text-3xl text-elephant-gray">
          {weather.temp}°C
        </span>
        <span className="text-sm text-elephant-gray/80 capitalize mb-1">
          {weather.description}
        </span>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-elephant-gray/60">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        <span>Humedad: {weather.humidity}%</span>
      </div>

      <div className="mt-4 pt-4 border-t border-elephant-gray/10">
        <p className="text-xs text-elephant-gray/60">
          Última actualización: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
} 