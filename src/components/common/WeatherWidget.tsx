'use client';

import React, { useEffect, useState } from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiThunderstorm } from 'react-icons/wi';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

interface WeatherWidgetProps {
  latitude: number;
  longitude: number;
  location: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ latitude, longitude, location }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
        );
        const data = await response.json();
        
        setWeather({
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].main,
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed)
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <WiDaySunny className="w-12 h-12 text-yellow-500" />;
      case 'rain':
        return <WiRain className="w-12 h-12 text-blue-500" />;
      case 'clouds':
        return <WiCloudy className="w-12 h-12 text-gray-500" />;
      case 'thunderstorm':
        return <WiThunderstorm className="w-12 h-12 text-gray-700" />;
      default:
        return <WiDaySunny className="w-12 h-12 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-12 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-playfair mb-4">Clima en {location}</h3>
      <div className="flex items-center justify-between mb-4">
        {getWeatherIcon(weather.condition)}
        <span className="text-3xl font-bold">{weather.temperature}°C</span>
      </div>
      <div className="space-y-2 text-gray-600">
        <p>Condición: {weather.condition}</p>
        <p>Humedad: {weather.humidity}%</p>
        <p>Viento: {weather.windSpeed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherWidget; 