export type MeditacionImage = {
  id: string;
  url: string;
  title: string;
  description: string;
  location: string;
};

export const meditacionImages: MeditacionImage[] = [
  {
    id: 'meditacion-1',
    url: '/images/wellness/meditacion/templo-meditacion.jpg',
    title: 'Templo de Meditación',
    description: 'Medita en antiguos templos budistas con siglos de historia',
    location: 'Kandy'
  },
  {
    id: 'meditacion-2',
    url: '/images/wellness/meditacion/retiro-naturaleza.jpg',
    title: 'Retiro en la Naturaleza',
    description: 'Conecta con la naturaleza en retiros de silencio',
    location: 'Nuwara Eliya'
  },
  {
    id: 'meditacion-3',
    url: '/images/wellness/meditacion/meditacion-guiada.jpg',
    title: 'Meditación Guiada',
    description: 'Aprende técnicas de meditación con monjes experimentados',
    location: 'Colombo'
  },
  {
    id: 'meditacion-4',
    url: '/images/wellness/meditacion/mindfulness.jpg',
    title: 'Práctica de Mindfulness',
    description: 'Desarrolla la atención plena en entornos únicos',
    location: 'Galle'
  },
  {
    id: 'meditacion-5',
    url: '/images/wellness/meditacion/meditacion-amanecer.jpg',
    title: 'Meditación al Amanecer',
    description: 'Comienza el día con meditación en lugares sagrados',
    location: 'Anuradhapura'
  },
  {
    id: 'meditacion-6',
    url: '/images/wellness/meditacion/retiro-silencio.jpg',
    title: 'Retiro de Silencio',
    description: 'Profundiza en tu práctica en retiros de varios días',
    location: 'Dambulla'
  }
]; 