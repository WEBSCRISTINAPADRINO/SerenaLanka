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
    id: 'costa-sur',
    name: 'Costa Sur',
    description: 'Playas paradisíacas y resorts de lujo',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    highlights: ['Galle', 'Mirissa', 'Unawatuna'],
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
    highlights: ['Trincomalee', 'Arugam Bay', 'Pasikuda'],
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
    highlights: ['Nuwara Eliya', 'Ella', 'Kandy'],
    slug: 'montanas',
    affiliateLink: 'https://www.booking.com/region/lk/central-province.html',
    price: 'Desde $70/noche',
    bestTime: 'Todo el año',
    emotion: 'Tranquilidad y naturaleza'
  }
]; 