export interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  slug: string;
  affiliateLink: string;
  price: string;
  bestTime: string;
  emotion: string;
}

export const regions: Region[] = [
  {
    id: 'costa-norte',
    name: 'Costa Norte',
    description: 'Descubre el auténtico Sri Lanka en sus playas vírgenes y cultura única',
    image: 'https://images.unsplash.com/photo-1590123717596-9da01772cc6b?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Trincomalee - Bahía natural y playas paradisíacas',
      'Jaffna - Cultura tamil y templos hindúes',
      'Kalpitiya - Delfines y deportes acuáticos',
      'Isla de Mannar - Historia y vida salvaje',
      'Nilaveli - Playas vírgenes de arena blanca'
    ],
    slug: 'costa-norte',
    affiliateLink: 'https://www.booking.com/region/lk/northern-province.html',
    price: 'Desde $60/noche',
    bestTime: 'Mayo a Septiembre',
    emotion: 'Autenticidad y descubrimiento'
  },
  {
    id: 'costa-sur',
    name: 'Costa Sur',
    description: 'Playas paradisíacas y resorts de lujo',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    highlights: ['Galle', 'Mirissa', 'Unawatuna', 'Weligama', 'Tangalle'],
    slug: 'costa-sur',
    affiliateLink: 'https://www.booking.com/region/lk/southern-province.html',
    price: 'Desde $100/noche',
    bestTime: 'Diciembre a Abril',
    emotion: 'Relajación y aventura'
  },
  {
    id: 'costa-este',
    name: 'Costa Este',
    description: 'Aguas cristalinas y arrecifes de coral',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Trincomalee', 'Arugam Bay', 'Pasikuda', 'Batticaloa', 'Nilaveli'],
    slug: 'costa-este',
    affiliateLink: 'https://www.booking.com/region/lk/eastern-province.html',
    price: 'Desde $80/noche',
    bestTime: 'Mayo a Septiembre',
    emotion: 'Paz y descubrimiento'
  },
  {
    id: 'montanas',
    name: 'Montañas',
    description: 'Plantaciones de té y senderos de montaña',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Nuwara Eliya', 'Ella', 'Kandy', 'Haputale', 'Adam\'s Peak'],
    slug: 'montanas',
    affiliateLink: 'https://www.booking.com/region/lk/central-province.html',
    price: 'Desde $70/noche',
    bestTime: 'Todo el año',
    emotion: 'Tranquilidad y naturaleza'
  },
  {
    id: 'templos-budistas',
    name: 'Templos Budistas',
    description: 'Descubre la espiritualidad y la arquitectura sagrada',
    image: 'https://images.unsplash.com/photo-1625736300986-175f1f1ea714?auto=format&fit=crop&w=800&q=80',
    highlights: ['Templo del Diente de Buda', 'Dambulla', 'Mihintale', 'Polonnaruwa', 'Anuradhapura'],
    slug: 'templos-budistas',
    affiliateLink: 'https://www.booking.com/landmark/lk/temple-of-the-tooth.html',
    price: 'Desde $50/noche',
    bestTime: 'Todo el año',
    emotion: 'Espiritualidad y cultura'
  },
  {
    id: 'ciudades-historicas',
    name: 'Ciudades Históricas',
    description: 'Descubre las joyas arquitectónicas y culturales de Sri Lanka, desde antiguas capitales reales hasta ciudades coloniales perfectamente preservadas.',
    image: '/images/destinations/ciudades-historicas.jpg',
    highlights: [
      'Anuradhapura - Primera capital antigua con estupas monumentales',
      'Polonnaruwa - Ruinas medievales y estatuas de Buda',
      'Kandy - Última capital real y hogar del Templo del Diente',
      'Galle - Ciudad fortificada colonial holandesa',
      'Sigiriya - Palacio en la roca y frescos antiguos'
    ],
    slug: 'ciudades-historicas',
    affiliateLink: 'https://www.booking.com/region/lk/cultural-triangle.html',
    price: '€80-150 por noche en hoteles boutique históricos',
    bestTime: 'De diciembre a abril, durante la estación seca',
    emotion: 'Historia y descubrimiento'
  }
]; 