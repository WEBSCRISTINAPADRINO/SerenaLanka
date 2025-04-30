export interface NutricionImage {
  id: string;
  url: string;
  title: string;
  description: string;
  location: string;
}

export const nutricionImages: NutricionImage[] = [
  {
    id: '1',
    url: '/images/wellness/nutricion/cocina-ayurveda.jpg',
    title: 'Cocina Ayurveda',
    description: 'Descubre los secretos de la cocina ayurvédica tradicional',
    location: 'Colombo, Sri Lanka'
  },
  {
    id: '2',
    url: '/images/wellness/nutricion/mercado-local.jpg',
    title: 'Mercados Locales',
    description: 'Explora los coloridos mercados locales y sus ingredientes frescos',
    location: 'Galle, Sri Lanka'
  },
  {
    id: '3',
    url: '/images/wellness/nutricion/curso-cocina.jpg',
    title: 'Cursos de Cocina',
    description: 'Aprende a preparar platos tradicionales con chefs locales',
    location: 'Kandy, Sri Lanka'
  },
  {
    id: '4',
    url: '/images/wellness/nutricion/desayuno-sano.jpg',
    title: 'Desayunos Saludables',
    description: 'Comienza el día con desayunos nutritivos y energéticos',
    location: 'Mirissa, Sri Lanka'
  },
  {
    id: '5',
    url: '/images/wellness/nutricion/plato-tradicional.jpg',
    title: 'Platos Tradicionales',
    description: 'Disfruta de la auténtica cocina cingalesa',
    location: 'Anuradhapura, Sri Lanka'
  },
  {
    id: '6',
    url: '/images/wellness/nutricion/superfoods.jpg',
    title: 'Superalimentos',
    description: 'Descubre los superalimentos locales de Sri Lanka',
    location: 'Nuwara Eliya, Sri Lanka'
  }
]; 