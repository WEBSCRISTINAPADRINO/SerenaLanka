import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://srilanka-turismo.com';
  
  // Rutas principales
  const routes = [
    '',
    '/destinos',
    '/experiencias',
    '/wellness',
    '/planifica',
    '/sobre-nosotros',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Rutas de destinos
  const destinos = [
    'unawatuna',
    'sigiriya',
    'ella',
    'polonnaruwa',
    'mirissa',
    'kandy',
    'galle',
    'nuwara-eliya',
    'trincomalee',
    'anuradhapura',
  ].map((destino) => ({
    url: `${baseUrl}/destinos/${destino}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Rutas de experiencias
  const experiencias = [
    'safari',
    'surf',
    'ballenas',
    'tortugas',
    'cultura',
    'gastronomia',
    'trekking',
    'buceo',
  ].map((experiencia) => ({
    url: `${baseUrl}/experiencias/${experiencia}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Rutas de wellness
  const wellness = [
    'yoga',
    'ayurveda',
    'meditacion',
    'nutricion',
    'spa',
  ].map((item) => ({
    url: `${baseUrl}/wellness/${item}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...routes, ...destinos, ...experiencias, ...wellness];
} 