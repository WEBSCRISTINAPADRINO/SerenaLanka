export interface MeditacionImage {
  id: string;
  url: string;
  title: string;
  description: string;
  location: string;
}

export const meditacionImages: MeditacionImage[] = [
  {
    id: '1',
    url: '/images/wellness/meditacion/retiro-silencio.jpg',
    title: 'Retiro de Silencio',
    description: 'Sumérgete en un profundo retiro de silencio en los templos antiguos de Sri Lanka',
    location: 'Kandy, Sri Lanka'
  },
  {
    id: '2',
    url: '/images/wellness/meditacion/meditacion-guiada.jpg',
    title: 'Meditación Guiada',
    description: 'Aprende técnicas de meditación con maestros locales experimentados',
    location: 'Colombo, Sri Lanka'
  },
  {
    id: '3',
    url: '/images/wellness/meditacion/templo-meditacion.jpg',
    title: 'Meditación en Templos',
    description: 'Experimenta la meditación en templos budistas históricos',
    location: 'Anuradhapura, Sri Lanka'
  },
  {
    id: '4',
    url: '/images/wellness/meditacion/retiro-naturaleza.jpg',
    title: 'Retiro en la Naturaleza',
    description: 'Conecta con la naturaleza en nuestros retiros de meditación en la selva',
    location: 'Sinharaja, Sri Lanka'
  },
  {
    id: '5',
    url: '/images/wellness/meditacion/meditacion-amanecer.jpg',
    title: 'Meditación al Amanecer',
    description: 'Comienza tu día con meditación al amanecer frente al océano',
    location: 'Mirissa, Sri Lanka'
  },
  {
    id: '6',
    url: '/images/wellness/meditacion/mindfulness.jpg',
    title: 'Mindfulness',
    description: 'Practica mindfulness en entornos naturales y pacíficos',
    location: 'Nuwara Eliya, Sri Lanka'
  }
]; 