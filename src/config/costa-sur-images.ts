export interface CostaSurImage {
  id: string;
  title: string;
  description: string;
  url: string;
  credit: string;
  location: string;
}

export const costaSurImages: CostaSurImage[] = [
  {
    id: 'galle-fort',
    title: 'Fuerte de Galle al Atardecer',
    description: 'Vista panorámica del histórico Fuerte de Galle con el faro al atardecer',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    credit: 'Alex Boyd',
    location: 'Galle, Sri Lanka'
  },
  {
    id: 'mirissa-beach',
    title: 'Playa de Mirissa',
    description: 'Palmeras y aguas cristalinas en la idílica playa de Mirissa',
    url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe',
    credit: 'Philipp Kämmerer',
    location: 'Mirissa, Sri Lanka'
  },
  {
    id: 'unawatuna',
    title: 'Bahía de Unawatuna',
    description: 'Vista aérea de la bahía en forma de media luna de Unawatuna',
    url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    credit: 'Yousef Espanioly',
    location: 'Unawatuna, Sri Lanka'
  },
  {
    id: 'weligama-surfing',
    title: 'Surf en Weligama',
    description: 'Surfistas al atardecer en la famosa playa de Weligama',
    url: 'https://images.unsplash.com/photo-1583156340160-7867f31285d2',
    credit: 'Jeremy Bishop',
    location: 'Weligama, Sri Lanka'
  },
  {
    id: 'tangalle-luxury',
    title: 'Resort de Lujo en Tangalle',
    description: 'Piscina infinita con vistas al océano Índico en Tangalle',
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    credit: 'Ishan @seefromthesky',
    location: 'Tangalle, Sri Lanka'
  }
]; 