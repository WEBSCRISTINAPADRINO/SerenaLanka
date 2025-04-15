export const hotelSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Wild Leopard Retreat Yala',
  description: 'Un santuario de lujo consciente en el corazón del Parque Nacional de Yala, donde cada experiencia está diseñada para transformar y elevar tu espíritu.',
  url: 'https://srilanka-luxury.com/destinos/yala/wild-leopard-retreat',
  telephone: '+94 77 123 4567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kirinda Road',
    addressLocality: 'Yala',
    addressRegion: 'Southern Province',
    postalCode: '82000',
    addressCountry: 'LK'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.3106,
    longitude: 81.3683
  },
  priceRange: '$$$',
  starRating: {
    '@type': 'Rating',
    ratingValue: '5'
  },
  amenityFeature: [
    {
      '@type': 'LocationFeature',
      name: 'Piscina Infinita Privada',
      value: true
    },
    {
      '@type': 'LocationFeature',
      name: 'Safari Privado',
      value: true
    },
    {
      '@type': 'LocationFeature',
      name: 'Spa Ayurvédico',
      value: true
    },
    {
      '@type': 'LocationFeature',
      name: 'Restaurante Gourmet',
      value: true
    }
  ],
  image: [
    'https://srilanka-luxury.com/images/wild-leopard-retreat/villa-exterior.jpg',
    'https://srilanka-luxury.com/images/wild-leopard-retreat/safari-experience.jpg',
    'https://srilanka-luxury.com/images/wild-leopard-retreat/infinity-pool.jpg'
  ],
  offers: {
    '@type': 'Offer',
    availability: 'LimitedAvailability',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: '850',
      maxPrice: '1500',
      priceCurrency: 'EUR'
    }
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Isabella Martinez'
      },
      reviewBody: 'Una experiencia transformadora que va más allá del lujo tradicional. Ver un leopardo desde mi piscina infinita mientras sorbía té de Ceilán fue un momento que vivirá para siempre en mi memoria.'
    }
  ]
}; 