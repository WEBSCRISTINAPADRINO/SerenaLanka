import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

// Datos de ejemplo (en una aplicación real, esto vendría de una API o base de datos)
const destinos = [
  {
    id: 'unawatuna',
    nombre: 'Unawatuna',
    descripcion: 'Playa paradisíaca en la costa sur de Sri Lanka',
    imagen: '/images/hero-sri-lanka.jpg',
    categoria: 'Costa Sur',
    etiquetas: ['Playa', 'Buceo', 'Surf', 'Gastronomía']
  },
  {
    id: 'sigiriya',
    nombre: 'Sigiriya',
    descripcion: 'Antigua fortaleza y palacio real en la roca del león',
    imagen: '/images/hero-sri-lanka.jpg',
    categoria: 'Ciudades históricas',
    etiquetas: ['Historia', 'Arqueología', 'Vistas panorámicas', 'Cultura']
  },
  {
    id: 'ella',
    nombre: 'Ella',
    descripcion: 'Pueblo de montaña con vistas espectaculares y senderos de trekking',
    imagen: '/images/hero-sri-lanka.jpg',
    categoria: 'Montañas',
    etiquetas: ['Trekking', 'Té', 'Naturaleza', 'Fotografía']
  },
  {
    id: 'polonnaruwa',
    nombre: 'Polonnaruwa',
    descripcion: 'Ciudad antigua con ruinas bien conservadas de la civilización cingalesa',
    imagen: '/images/hero-sri-lanka.jpg',
    categoria: 'Ciudades históricas',
    etiquetas: ['Historia', 'Arqueología', 'Cultura', 'Fotografía']
  },
  {
    id: 'mirissa',
    nombre: 'Mirissa',
    descripcion: 'Playa tranquila famosa por el avistamiento de ballenas',
    imagen: '/images/hero-sri-lanka.jpg',
    categoria: 'Costa Sur',
    etiquetas: ['Playa', 'Ballenas', 'Surf', 'Relax']
  }
];

// Función para generar metadatos dinámicos
export async function generateMetadata({ searchParams }: { searchParams: { q: string } }): Promise<Metadata> {
  const query = searchParams.q || '';
  return {
    title: query ? `Resultados de búsqueda para "${query}" | Sri Lanka` : 'Búsqueda | Sri Lanka',
    description: `Resultados de búsqueda para "${query}" en nuestra guía de viajes a Sri Lanka.`,
  };
}

export default function BuscarPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || '';
  
  // Búsqueda simple (en una aplicación real, esto sería más sofisticado)
  const resultados = query 
    ? destinos.filter(destino => 
        destino.nombre.toLowerCase().includes(query.toLowerCase()) ||
        destino.descripcion.toLowerCase().includes(query.toLowerCase()) ||
        destino.etiquetas.some(etiqueta => etiqueta.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs 
        items={[
          { label: 'Búsqueda', href: '/buscar' }
        ]} 
      />
      
      <h1 className="text-4xl md:text-5xl font-playfair text-tropical-green mb-6">
        {query ? `Resultados para "${query}"` : 'Búsqueda'}
      </h1>
      
      {query && (
        <p className="text-elephant-gray mb-8">
          Se encontraron {resultados.length} resultados para "{query}"
        </p>
      )}
      
      {!query && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-playfair text-tropical-green mb-4">
            ¿Qué te gustaría descubrir en Sri Lanka?
          </h2>
          <p className="text-elephant-gray mb-4">
            Utiliza el buscador para encontrar destinos, experiencias, actividades y más.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-golden-sand p-4 rounded-lg">
              <h3 className="font-semibold text-elephant-gray mb-2">Destinos populares</h3>
              <ul className="text-sm text-elephant-gray space-y-1">
                <li>• Unawatuna</li>
                <li>• Sigiriya</li>
                <li>• Ella</li>
                <li>• Polonnaruwa</li>
              </ul>
            </div>
            <div className="bg-golden-sand p-4 rounded-lg">
              <h3 className="font-semibold text-elephant-gray mb-2">Actividades populares</h3>
              <ul className="text-sm text-elephant-gray space-y-1">
                <li>• Buceo</li>
                <li>• Trekking</li>
                <li>• Avistamiento de ballenas</li>
                <li>• Visita a templos</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {resultados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resultados.map((destino) => (
            <Link 
              href={`/destinos/${destino.id}`} 
              key={destino.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
                <div className="relative h-48">
                  <Image 
                    src={destino.imagen} 
                    alt={destino.nombre} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-playfair text-tropical-green mb-2">
                    {destino.nombre}
                  </h3>
                  <p className="text-elephant-gray text-sm mb-3">
                    {destino.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destino.etiquetas.map((etiqueta) => (
                      <span 
                        key={etiqueta}
                        className="bg-golden-sand text-elephant-gray px-2 py-1 rounded-full text-xs"
                      >
                        {etiqueta}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : query ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-playfair text-tropical-green mb-4">
            No se encontraron resultados
          </h2>
          <p className="text-elephant-gray mb-4">
            Lo sentimos, no encontramos resultados para "{query}". Intenta con otros términos o explora nuestras categorías.
          </p>
          <Link 
            href="/destinos" 
            className="inline-block bg-tropical-green text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Ver todos los destinos
          </Link>
        </div>
      ) : null}
    </div>
  );
} 