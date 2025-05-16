export interface LugarInteres {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  ciudad: string;
  imagen: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
  precio?: string;
  mejorEpoca?: string;
  duracion?: string;
  actividades?: string[];
  consejos?: string[];
}

export const lugaresCostaSur: LugarInteres[] = [
  {
    id: 'galle',
    nombre: 'Fuerte de Galle',
    descripcion: 'Ciudad fortificada del siglo XVI, Patrimonio de la Humanidad por la UNESCO. Mezcla perfecta de arquitectura colonial holandesa y británica.',
    tipo: 'Ciudad Histórica',
    ciudad: 'Galle',
    imagen: '/images/destinos/costa-sur/galle-fort.jpg',
    coordenadas: { lat: 6.0535, lng: 80.2210 },
    actividades: ['Exploración de templos', 'Shopping', 'Gastronomía local'],
    consejos: ['Visitar al atardecer', 'Recorrer las murallas', 'Explorar las calles coloniales']
  },
  {
    id: 'mirissa',
    nombre: 'Playa de Mirissa',
    descripcion: 'Famosa por el avistamiento de ballenas y delfines. Playa de arena dorada con palmeras y aguas cristalinas.',
    tipo: 'Playa',
    ciudad: 'Mirissa',
    imagen: '/images/destinos/costa-sur/mirissa.jpg',
    coordenadas: { lat: 5.9439, lng: 80.4583 },
    actividades: ['Avistamiento de ballenas', 'Surf', 'Snorkel', 'Paseos en barco']
  },
  {
    id: 'unawatuna',
    nombre: 'Bahía de Unawatuna',
    descripcion: 'Playa en forma de media luna con aguas tranquilas, perfecta para familias y snorkel.',
    tipo: 'Playa',
    ciudad: 'Unawatuna',
    imagen: '/images/destinos/costa-sur/unawatuna.jpg',
    coordenadas: { lat: 6.0167, lng: 80.2500 },
    actividades: ['Snorkel', 'Buceo', 'Kayak', 'Yoga']
  },
  {
    id: 'weligama',
    nombre: 'Playa de Weligama',
    descripcion: 'Famosa por el surf y sus palmeras inclinadas. Playa larga y arenosa con aguas ideales para principiantes.',
    tipo: 'Playa',
    ciudad: 'Weligama',
    imagen: '/images/destinos/costa-sur/weligama.jpg',
    coordenadas: { lat: 5.9667, lng: 80.4167 },
    actividades: ['Surf', 'Clases de surf', 'Pesca', 'Paseos en barco']
  },
  {
    id: 'tangalle',
    nombre: 'Playa de Tangalle',
    descripcion: 'Playa virgen con aguas profundas y rocas, ideal para quienes buscan tranquilidad.',
    tipo: 'Playa',
    ciudad: 'Tangalle',
    imagen: '/images/destinos/costa-sur/tangalle.jpg',
    coordenadas: { lat: 6.0167, lng: 80.7833 },
    actividades: ['Pesca', 'Snorkel', 'Paseos en barco', 'Observación de aves']
  }
  // ...añade más lugares siguiendo este formato...
];
