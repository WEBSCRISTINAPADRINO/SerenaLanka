export interface YogaImage {
  id: string;
  title: string;
  description: string;
  url: string;
  credit: string;
  location: string;
}

export const yogaImages: YogaImage[] = [
  {
    id: 'yoga-beach',
    title: 'Yoga en la Playa',
    description: 'Práctica de yoga al amanecer frente al océano Índico',
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    credit: 'Alexa West',
    location: 'Mirissa, Sri Lanka'
  },
  {
    id: 'meditation-temple',
    title: 'Meditación en el Templo',
    description: 'Sesión de meditación guiada en un antiguo templo budista',
    url: 'https://images.unsplash.com/photo-1545389336-cf090694435e',
    credit: 'Marcus Ng',
    location: 'Kandy, Sri Lanka'
  },
  {
    id: 'yoga-retreat',
    title: 'Retiro de Yoga',
    description: 'Centro de retiro espiritual rodeado de naturaleza',
    url: 'https://images.unsplash.com/photo-1593810450967-f9c42742e326',
    credit: 'Amelia Thompson',
    location: 'Ella, Sri Lanka'
  },
  {
    id: 'sunrise-yoga',
    title: 'Yoga al Amanecer',
    description: 'Práctica matutina con vistas a las montañas',
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    credit: 'Samuel Green',
    location: 'Nuwara Eliya, Sri Lanka'
  },
  {
    id: 'wellness-center',
    title: 'Centro de Bienestar',
    description: 'Instalaciones modernas para la práctica de yoga y meditación',
    url: 'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3',
    credit: 'Lisa Wang',
    location: 'Unawatuna, Sri Lanka'
  }
]; 