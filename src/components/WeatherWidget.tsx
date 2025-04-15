'use client';
import { useState, useEffect } from 'react';
import { getWeather } from '@/config/api';

interface WeatherWidgetProps {
  city: string;
}

export default function WeatherWidget({ city }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getWeather(city);
        if (data && data.cod === 200) {
          setWeather(data);
        } else {
          setError('No se pudo obtener información del clima');
        }
      } catch (err) {
        setError('Error al cargar el clima');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-elephant-gray">Cargando información del clima...</p>
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

  if (!weather) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-playfair text-tropical-green mb-2">Clima en {city}</h3>
      <div className="flex items-center">
        <div className="mr-4">
          <img 
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description}
            className="w-16 h-16"
          />
        </div>
        <div>
          <p className="text-2xl font-bold text-elephant-gray">{Math.round(weather.main.temp)}°C</p>
          <p className="text-sm text-elephant-gray capitalize">{weather.weather[0].description}</p>
          <p className="text-xs text-elephant-gray">
            Humedad: {weather.main.humidity}% | Viento: {weather.wind.speed} m/s
          </p>
        </div>
      </div>
    </div>
  );
} 