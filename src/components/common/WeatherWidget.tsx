'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WeatherWidgetProps {
  location: string;
  latitude?: number;
  longitude?: number;
}

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

export default function WeatherWidget({ location, latitude = 6.3833, longitude = 81.4833 }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=es`
        );
        
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del clima');
        }
        
        const data = await response.json();
        
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed * 3.6) // Convertir m/s a km/h
        });
        
        setError(null);
      } catch (err) {
        setError('No se pudo cargar la información del clima');
        console.error('Error al obtener el clima:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Actualizar cada 30 minutos
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [latitude, longitude]);

  if (loading) {
    return (
      <div className="bg-coconut-white p-4 rounded-lg shadow-md flex items-center justify-center h-24">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-tropical-green"></div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-coconut-white p-4 rounded-lg shadow-md">
        <p className="text-elephant-gray/70 text-center">Información del clima no disponible</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-coconut-white p-4 rounded-lg shadow-md"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-playfair text-lg text-elephant-gray">Clima en {location}</h3>
        <span className="text-sm text-elephant-gray/60">
          {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            className="w-16 h-16"
          />
          <div>
            <p className="text-2xl font-bold text-elephant-gray">{weather.temp}°C</p>
            <p className="text-elephant-gray/70 capitalize">{weather.description}</p>
          </div>
        </div>
        
        <div className="text-right text-sm text-elephant-gray/70">
          <p>Humedad: {weather.humidity}%</p>
          <p>Viento: {weather.windSpeed} km/h</p>
        </div>
      </div>
    </motion.div>
  );
} 