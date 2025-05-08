import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'Guía de viaje Sri Lanka 2024',
    description: 'La guía más completa y actualizada para explorar la isla',
    image: '/images/products/guide-book.jpg',
    price: '24.99',
    rating: 4.8,
    reviews: 128
  },
  // Comentamos temporalmente las cards que causan errores 404
  /*
  {
    id: 2,
    title: 'Repelente natural de mosquitos',
    description: 'Protección efectiva y ecológica para tu viaje',
    image: '/images/products/repellent.jpg',
    price: '15.99',
    rating: 4.5,
    reviews: 89
  },
  {
    id: 3,
    title: 'Libro de cocina de Sri Lanka',
    description: 'Recetas auténticas para recrear los sabores de la isla',
    image: '/images/products/cuisine.jpg',
    price: '29.99',
    rating: 4.9,
    reviews: 156
  }
  */
];

export default function RecommendedProducts() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Productos Recomendados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para tu viaje a Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-tropical-green font-semibold text-lg">
                      ${product.price}
                    </span>
                    <div className="ml-4 flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <Link 
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-tropical-green hover:text-tropical-green/80 transition-colors"
                  >
                    Ver detalles
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-tropical-green text-white rounded-full hover:bg-tropical-green/90 transition-colors"
          >
            Ver todos los productos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 