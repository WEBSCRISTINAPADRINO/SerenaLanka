export interface CostaNorteImage {
  id: string;
  title: string;
  description: string;
  url: string;
  credit: string;
  location: string;
}

export const costaNorteImages: CostaNorteImage[] = [
  {
    id: 'trincomalee-beach',
    title: 'Playa de Trincomalee',
    description: 'Aguas cristalinas y arena dorada en una de las bahías naturales más grandes del mundo',
    url: 'https://images.unsplash.com/photo-1590123717596-9da01772cc6b',
    credit: 'Sander Don',
    location: 'Trincomalee, Sri Lanka'
  },
  {
    id: 'jaffna-temple',
    title: 'Templo Nallur Kandaswamy',
    description: 'Majestuoso templo hindú con arquitectura dravidiana única',
    url: 'https://images.unsplash.com/photo-1582653792905-384828a7c2c9',
    credit: 'Lakshman Nadaraja',
    location: 'Jaffna, Sri Lanka'
  },
  {
    id: 'kalpitiya-dolphins',
    title: 'Delfines en Kalpitiya',
    description: 'Avistamiento de delfines en las aguas turquesas de Kalpitiya',
    url: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2',
    credit: 'Hasitha Kulasekera',
    location: 'Kalpitiya, Sri Lanka'
  },
  {
    id: 'mannar-island',
    title: 'Isla de Mannar',
    description: 'Paisajes vírgenes y vida salvaje en la histórica isla de Mannar',
    url: 'https://images.unsplash.com/photo-1589308431438-7f2c5c4c4b5a',
    credit: 'Dimuthu Silvester',
    location: 'Mannar Island, Sri Lanka'
  },
  {
    id: 'nilaveli-beach',
    title: 'Playa de Nilaveli',
    description: 'Paraíso tropical con aguas cristalinas y palmeras',
    url: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5',
    credit: 'Chaminda Silva',
    location: 'Nilaveli, Sri Lanka'
  }
]; 