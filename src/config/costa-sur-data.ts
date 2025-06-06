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
  // CIUDADES Y PUEBLOS
  {
    id: 'galle',
    nombre: 'Fuerte de Galle',
    descripcion: 'Ciudad fortificada del siglo XVI, Patrimonio de la Humanidad por la UNESCO. Mezcla perfecta de arquitectura colonial holandesa y británica.',
    tipo: 'Ciudad Histórica',
    ciudad: 'Galle',
    imagen: '/images/destinos/costa-sur/galle-fort.jpg',
    coordenadas: { lat: 6.0535, lng: 80.2210 },
    actividades: ['Exploración de templos', 'Shopping', 'Gastronomía local']
  },
  {
    id: 'matara',
    nombre: 'Matara',
    descripcion: 'Ciudad costera con rica historia colonial y hermosas playas. Conocida por su Fuerte holandés y su faro.',
    tipo: 'Ciudad',
    ciudad: 'Matara',
    imagen: '/images/destinos/costa-sur/matara.jpg',
    coordenadas: { lat: 5.9497, lng: 80.5491 },
    actividades: ['Fuerte holandés', 'Playa', 'Mercado local']
  },

  // PLAYAS
  {
    id: 'mirissa',
    nombre: 'Playa de Mirissa',
    descripcion: 'Famosa por el avistamiento de ballenas y delfines. Playa de arena dorada con palmeras y aguas cristalinas.',
    tipo: 'Playa',
    ciudad: 'Mirissa',
    imagen: '/images/destinos/costa-sur/mirissa.jpg',
    coordenadas: { lat: 5.9439, lng: 80.4583 },
    mejorEpoca: 'Diciembre a Abril',
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
  },

  // NATURALEZA Y PARQUES
  {
    id: 'kottawa',
    nombre: 'Reserva Forestal Kottawa',
    descripcion: 'Bosque tropical húmedo con senderos naturales y rica biodiversidad.',
    tipo: 'Naturaleza',
    ciudad: 'Kottawa',
    imagen: '/images/destinos/costa-sur/kottawa.jpg',
    coordenadas: { lat: 6.0833, lng: 80.3333 },
    actividades: ['Senderismo', 'Observación de aves', 'Fotografía de naturaleza']
  },
  {
    id: 'sinharaja',
    nombre: 'Bosque de Sinharaja',
    descripcion: 'Patrimonio de la Humanidad, último bosque tropical virgen de Sri Lanka.',
    tipo: 'Naturaleza',
    ciudad: 'Sinharaja',
    imagen: '/images/destinos/costa-sur/sinharaja.jpg',
    coordenadas: { lat: 6.4167, lng: 80.5000 },
    actividades: ['Trekking', 'Observación de aves', 'Fotografía de naturaleza']
  },

  // TEMPLOS Y SITIOS RELIGIOSOS
  {
    id: 'rumassala',
    nombre: 'Templo de Rumassala',
    descripcion: 'Templo budista con vistas panorámicas al océano y jardines medicinales.',
    tipo: 'Templo',
    ciudad: 'Galle',
    imagen: '/images/destinos/costa-sur/rumassala.jpg',
    coordenadas: { lat: 6.0500, lng: 80.2167 },
    actividades: ['Meditación', 'Jardines medicinales', 'Vistas panorámicas']
  },
  {
    id: 'weherahena',
    nombre: 'Templo de Weherahena',
    descripcion: 'Templo budista con la estatua de Buda más grande de Sri Lanka.',
    tipo: 'Templo',
    ciudad: 'Matara',
    imagen: '/images/destinos/costa-sur/weherahena.jpg',
    coordenadas: { lat: 5.9500, lng: 80.5500 },
    actividades: ['Meditación', 'Arquitectura budista', 'Pinturas murales']
  },

  // SPAS Y WELLNESS
  {
    id: 'spa-ayurveda',
    nombre: 'Centro de Ayurveda',
    descripcion: 'Centro de tratamientos ayurvédicos tradicionales con masajes y terapias.',
    tipo: 'Spa',
    ciudad: 'Unawatuna',
    imagen: '/images/destinos/costa-sur/ayurveda.jpg',
    coordenadas: { lat: 6.0167, lng: 80.2500 },
    actividades: ['Masajes ayurvédicos', 'Tratamientos de belleza', 'Yoga', 'Meditación']
  },

  // GASTRONOMÍA
  {
    id: 'fish-market',
    nombre: 'Mercado de Pescado',
    descripcion: 'Mercado local donde se vende el pescado fresco del día.',
    tipo: 'Gastronomía',
    ciudad: 'Galle',
    imagen: '/images/destinos/costa-sur/fish-market.jpg',
    coordenadas: { lat: 6.0535, lng: 80.2210 },
    actividades: ['Compras locales', 'Gastronomía local']
  }
];
