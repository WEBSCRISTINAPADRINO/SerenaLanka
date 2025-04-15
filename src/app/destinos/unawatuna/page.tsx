import Image from 'next/image';
import WeatherWidget from '@/components/WeatherWidget';
import PlaceInfo from '@/components/PlaceInfo';
import ImageGallery from '@/components/ImageGallery';
import Map from '@/components/Map';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function UnawatunaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs 
        items={[
          { label: 'Destinos', href: '/destinos' },
          { label: 'Unawatuna', href: '/destinos/unawatuna' }
        ]} 
      />
      
      <h1 className="text-4xl md:text-5xl font-playfair text-tropical-green mb-6">
        Unawatuna, Sri Lanka
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="relative h-64 md:h-96">
              <Image 
                src="/images/hero-sri-lanka.jpg" 
                alt="Unawatuna Beach" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-playfair text-tropical-green mb-4">
                La joya de la costa sur
              </h2>
              <p className="text-elephant-gray mb-4">
                Unawatuna es una de las playas más famosas de Sri Lanka, conocida por su arena dorada, 
                aguas cristalinas y ambiente relajado. Esta hermosa bahía en forma de media luna ofrece 
                el equilibrio perfecto entre naturaleza y comodidades modernas.
              </p>
              <p className="text-elephant-gray mb-4">
                Con una rica historia que se remonta a la época colonial, Unawatuna ha evolucionado 
                hasta convertirse en un destino turístico de primer nivel, manteniendo su autenticidad 
                y encanto local.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-golden-sand text-elephant-gray px-3 py-1 rounded-full text-sm">
                  Playa
                </span>
                <span className="bg-golden-sand text-elephant-gray px-3 py-1 rounded-full text-sm">
                  Buceo
                </span>
                <span className="bg-golden-sand text-elephant-gray px-3 py-1 rounded-full text-sm">
                  Surf
                </span>
                <span className="bg-golden-sand text-elephant-gray px-3 py-1 rounded-full text-sm">
                  Gastronomía
                </span>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-playfair text-tropical-green mb-4">
            Galería de imágenes
          </h2>
          <ImageGallery query="unawatuna beach sri lanka" limit={6} />
        </div>
        
        <div className="space-y-6">
          <WeatherWidget city="Unawatuna" />
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-playfair text-tropical-green mb-2">
              Mejor época para visitar
            </h3>
            <p className="text-sm text-elephant-gray mb-2">
              La mejor época para visitar Unawatuna es entre noviembre y abril, 
              cuando el clima es seco y las condiciones para el buceo y el surf son óptimas.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-elephant-gray mb-1">Temporadas:</h4>
              <ul className="text-xs text-elephant-gray space-y-1">
                <li>• Temporada alta: Diciembre - Marzo</li>
                <li>• Temporada media: Abril, Noviembre</li>
                <li>• Temporada baja: Mayo - Octubre</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-playfair text-tropical-green mb-2">
              Actividades principales
            </h3>
            <ul className="text-sm text-elephant-gray space-y-2">
              <li>• Buceo en arrecifes de coral</li>
              <li>• Surf para principiantes</li>
              <li>• Paseos en barco para ver delfines</li>
              <li>• Visita al templo budista de Yatagala</li>
              <li>• Degustación de cocina local</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-playfair text-tropical-green mb-2">
              Ubicación
            </h3>
            <Map 
              center={{ lat: 6.0167, lng: 80.2500 }} 
              zoom={14}
              markers={[
                { 
                  position: { lat: 6.0167, lng: 80.2500 },
                  title: 'Unawatuna Beach'
                }
              ]}
            />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-playfair text-tropical-green mb-2">
              Hoteles recomendados
            </h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-semibold text-elephant-gray">Coco Bay Unawatuna</h4>
                <p className="text-xs text-elephant-gray mb-1">Hotel de lujo con vistas al mar</p>
                <a 
                  href="https://www.booking.com/hotel/lk/coco-bay-unawatuna.es.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ocean-blue text-xs hover:underline"
                >
                  Ver en Booking.com
                </a>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-semibold text-elephant-gray">Thaproban Beach House</h4>
                <p className="text-xs text-elephant-gray mb-1">Boutique hotel con ambiente local</p>
                <a 
                  href="https://www.booking.com/hotel/lk/thaproban-beach-house.es.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ocean-blue text-xs hover:underline"
                >
                  Ver en Booking.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-elephant-gray">Jungle Beach by Uga Escapes</h4>
                <p className="text-xs text-elephant-gray mb-1">Resort de lujo en la jungla</p>
                <a 
                  href="https://www.booking.com/hotel/lk/jungle-beach-by-uga-escapes.es.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ocean-blue text-xs hover:underline"
                >
                  Ver en Booking.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 