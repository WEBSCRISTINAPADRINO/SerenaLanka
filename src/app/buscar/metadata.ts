import { Metadata } from 'next';

export async function generateMetadata({ searchParams }: { searchParams: { q: string } }): Promise<Metadata> {
  const query = searchParams.q || '';
  return {
    title: query ? `Resultados de búsqueda para "${query}" | Sri Lanka` : 'Búsqueda | Sri Lanka',
    description: query 
      ? `Resultados de búsqueda para "${query}" en Sri Lanka. Encuentra destinos, experiencias y actividades.`
      : 'Busca destinos, experiencias, actividades y más en Sri Lanka.',
  };
} 