export interface WellnessImage {
  id: string;
  url: string;
  title: string;
  description: string;
  location: string;
}

export const wellnessImages = {
  yoga: [
    {
      id: 'yoga-1',
      url: '/images/wellness/yoga/yoga-beach.jpg',
      title: 'Yoga al Amanecer',
      description: 'Clases de yoga al amanecer en la playa de Unawatuna',
      location: 'Unawatuna, Costa Sur'
    },
    {
      id: 'yoga-2',
      url: '/images/wellness/yoga/yoga-temple.jpg',
      title: 'Yoga en Templo',
      description: 'Meditación y yoga en templos antiguos',
      location: 'Kandy, Región Central'
    }
  ],
  meditacion: [
    {
      id: 'meditacion-1',
      url: '/images/wellness/meditacion/meditation-mountain.jpg',
      title: 'Meditación en Montañas',
      description: 'Retiros de meditación en las montañas de Sri Lanka',
      location: 'Ella, Región Central'
    }
  ],
  ayurveda: [
    {
      id: 'ayurveda-1',
      url: '/images/wellness/ayurveda/spa-treatment.jpg',
      title: 'Tratamientos Ayurveda',
      description: 'Masajes y tratamientos tradicionales ayurvédicos',
      location: 'Colombo, Costa Oeste'
    }
  ],
  nutricion: [
    {
      id: 'nutricion-1',
      url: '/images/wellness/nutricion/ayurvedic-food.jpg',
      title: 'Cocina Ayurveda',
      description: 'Talleres de cocina y nutrición ayurvédica',
      location: 'Galle, Costa Sur'
    }
  ]
}; 