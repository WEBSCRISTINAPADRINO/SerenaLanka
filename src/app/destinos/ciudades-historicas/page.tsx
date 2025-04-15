'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PlaceholderImage from '@/components/PlaceholderImage';

// Datos de las ciudades históricas
const ciudades = [
  {
    id: 1,
    nombre: 'Anuradhapura',
    descripcion: 'La primera capital de Sri Lanka y uno de los centros budistas más antiguos del mundo. Fundada en el siglo IV a.C., fue la capital del reino durante más de 1.300 años y alberga algunos de los monumentos budistas más importantes del país.',
    imagen: '/images/ciudades/anuradhapura.jpg',
    mejorEpoca: 'De enero a abril (temporada seca)',
    destacados: [
      'Estupa de Ruwanwelisaya',
      'Árbol sagrado Sri Maha Bodhi',
      'Palacio de Bronce',
      'Estupa de Jetavanaramaya',
      'Museo Arqueológico'
    ],
    experiencias: [
      'Visita guiada a los templos antiguos',
      'Ceremonia de ofrendas a los monjes',
      'Cicloturismo por las ruinas',
      'Fotografía de arquitectura histórica',
      'Meditación en templos antiguos'
    ]
  },
  {
    id: 2,
    nombre: 'Polonnaruwa',
    descripcion: 'La segunda capital medieval de Sri Lanka, que floreció entre los siglos XI y XIII. Esta ciudad jardín alberga algunos de los mejores ejemplos de arquitectura y escultura antigua de Sri Lanka, incluyendo el famoso Gal Vihara con sus estatuas de Buda talladas en la roca.',
    imagen: '/images/ciudades/polonnaruwa.jpg',
    mejorEpoca: 'De enero a abril (temporada seca)',
    destacados: [
      'Gal Vihara (estatuas de Buda)',
      'Palacio Real',
      'Audiencia Real',
      'Templo de Lankatilaka',
      'Parque Arqueológico'
    ],
    experiencias: [
      'Tour en bicicleta por las ruinas',
      'Visita guiada histórica',
      'Fotografía de esculturas antiguas',
      'Paseo en barco por el lago Parakrama',
      'Observación de aves en el parque'
    ]
  },
  {
    id: 3,
    nombre: 'Sigiriya',
    descripcion: 'Conocida como la "Roca del León", Sigiriya es un antiguo palacio y fortaleza construido en lo alto de una roca de 200 metros de altura. Fue la capital efímera del reino durante el reinado del rey Kashyapa (477-495 d.C.) y es famosa por sus frescos de las "doncellas celestiales" y los jardines de agua.',
    imagen: '/images/ciudades/sigiriya.jpg',
    mejorEpoca: 'De enero a abril (temporada seca)',
    destacados: [
      'Frescos de las doncellas celestiales',
      'Escalera de los leones',
      'Jardines de agua',
      'Espejo de la pared',
      'Vistas panorámicas'
    ],
    experiencias: [
      'Ascenso a la roca',
      'Visita guiada histórica',
      'Fotografía de paisajes',
      'Observación de aves',
      'Paseo por los jardines antiguos'
    ]
  },
  {
    id: 4,
    nombre: 'Kandy',
    descripcion: 'La última capital de los reyes de Sri Lanka y centro cultural del país. Kandy alberga el Templo del Diente Sagrado, que contiene la reliquia más importante del budismo en Sri Lanka. La ciudad está rodeada por montañas y un lago artificial, creando un entorno natural espectacular.',
    imagen: '/images/ciudades/kandy.jpg',
    mejorEpoca: 'Todo el año, especialmente durante el Esala Perahera (julio/agosto)',
    destacados: [
      'Templo del Diente Sagrado',
      'Jardines Botánicos de Peradeniya',
      'Lago de Kandy',
      'Museo Nacional',
      'Mercado Central'
    ],
    experiencias: [
      'Ceremonia de ofrendas a los monjes',
      'Danza tradicional Kandyan',
      'Paseo en barco por el lago',
      'Visita a plantaciones de té',
      'Tour gastronómico local'
    ]
  },
  {
    id: 5,
    nombre: 'Galle',
    descripcion: 'Una ciudad costera con una rica historia colonial, Galle es famosa por su fortaleza holandesa del siglo XVII, declarada Patrimonio de la Humanidad por la UNESCO. La ciudad combina arquitectura colonial europea con tradiciones locales y ofrece vistas espectaculares del océano Índico.',
    imagen: '/images/ciudades/galle.jpg',
    mejorEpoca: 'De diciembre a marzo (temporada seca)',
    destacados: [
      'Fuerte holandés',
      'Faro de Galle',
      'Iglesia holandesa',
      'Museo Marítimo',
      'Murallas de la ciudad'
    ],
    experiencias: [
      'Paseo por las murallas al atardecer',
      'Tour histórico por la fortaleza',
      'Visita a talleres de joyería',
      'Degustación de té en la terraza',
      'Observación de ballenas (temporada)'
    ]
  }
];

// Datos de experiencias culturales
const experiencias = [
  {
    id: 1,
    nombre: 'Tour del Triángulo Cultural',
    descripcion: 'Explora las tres ciudades históricas más importantes de Sri Lanka: Anuradhapura, Polonnaruwa y Sigiriya. Este tour te llevará a través de la rica historia del país, desde los primeros asentamientos budistas hasta los palacios medievales.',
    imagen: '/images/experiencias/triangulo-cultural.jpg',
    duracion: '3-5 días',
    mejorEpoca: 'De enero a abril (temporada seca)',
    destacados: [
      'Guía experto en historia',
      'Transporte privado',
      'Alojamiento en hoteles históricos',
      'Entradas a todos los sitios',
      'Comidas tradicionales'
    ],
    enlaces: [
      {
        plataforma: 'GetYourGuide',
        url: 'https://www.getyourguide.com/sri-lanka-l169/cultural-triangle-tours'
      },
      {
        plataforma: 'Viator',
        url: 'https://www.viator.com/Sri-Lanka-attractions/Cultural-Triangle/d213-ttd'
      }
    ]
  },
  {
    id: 2,
    nombre: 'Festival Esala Perahera en Kandy',
    descripcion: 'Vive la experiencia del festival budista más importante de Sri Lanka, que se celebra cada año en Kandy durante la luna llena de julio/agosto. El festival incluye procesiones de elefantes decorados, bailarines tradicionales y la exhibición de la reliquia del diente sagrado.',
    imagen: '/images/experiencias/esala-perahera.jpg',
    duracion: '3-5 días',
    mejorEpoca: 'Julio/Agosto (según el calendario lunar)',
    destacados: [
      'Vistas privilegiadas del desfile',
      'Guía experto en cultura',
      'Alojamiento en el centro de Kandy',
      'Cena de gala tradicional',
      'Tour por la ciudad'
    ],
    enlaces: [
      {
        plataforma: 'GetYourGuide',
        url: 'https://www.getyourguide.com/sri-lanka-l169/esala-perahera-festival'
      },
      {
        plataforma: 'Viator',
        url: 'https://www.viator.com/Sri-Lanka-attractions/Esala-Perahera/d213-ttd'
      }
    ]
  },
  {
    id: 3,
    nombre: 'Tour Colonial por Galle',
    descripcion: 'Descubre la rica historia colonial de Galle, desde los portugueses hasta los holandeses y británicos. Explora la fortaleza, las iglesias históricas, los museos y disfruta de las vistas panorámicas del océano Índico desde las murallas de la ciudad.',
    imagen: '/images/experiencias/galle-colonial.jpg',
    duracion: '1-2 días',
    mejorEpoca: 'De diciembre a marzo (temporada seca)',
    destacados: [
      'Guía experto en historia colonial',
      'Visita a la fortaleza holandesa',
      'Tour por iglesias históricas',
      'Degustación de té en la terraza',
      'Paseo por las murallas al atardecer'
    ],
    enlaces: [
      {
        plataforma: 'GetYourGuide',
        url: 'https://www.getyourguide.com/sri-lanka-l169/galle-fort-tours'
      },
      {
        plataforma: 'Viator',
        url: 'https://www.viator.com/Sri-Lanka-attractions/Galle-Fort/d213-ttd'
      }
    ]
  },
  {
    id: 4,
    nombre: 'Retiro de Meditación en Anuradhapura',
    descripcion: 'Participa en un retiro de meditación en uno de los lugares más sagrados del budismo. Aprende técnicas de meditación de monjes budistas mientras te alojas en un templo histórico en la antigua capital de Sri Lanka.',
    imagen: '/images/experiencias/meditacion-anuradhapura.jpg',
    duracion: '3-7 días',
    mejorEpoca: 'Todo el año',
    destacados: [
      'Instrucción por monjes budistas',
      'Alojamiento en el templo',
      'Comida vegetariana',
      'Visitas a sitios históricos',
      'Ceremonias budistas'
    ],
    enlaces: [
      {
        plataforma: 'GetYourGuide',
        url: 'https://www.getyourguide.com/sri-lanka-l169/meditation-retreats'
      },
      {
        plataforma: 'Airbnb Experiences',
        url: 'https://www.airbnb.com/s/experiences?location=Sri%20Lanka&query=meditation'
      }
    ]
  }
];

export default function CiudadesHistoricas() {
  return (
    <main className="min-h-screen bg-coconut-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <PlaceholderImage
            width={1920}
            height={1080}
            text="Ciudades Históricas de Sri Lanka"
            bgColor="#2E7D32"
            textColor="#FFFFFF"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
              Ciudades Históricas de Sri Lanka
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Explora las antiguas capitales y ciudades históricas que cuentan la fascinante historia de Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumbs 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Destinos', href: '/destinos' },
            { label: 'Ciudades Históricas', href: '/destinos/ciudades-historicas' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 bg-golden-sand bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-4">
                La Riqueza Histórica de Sri Lanka
              </h2>
              <p className="text-elephant-gray mb-4">
                Sri Lanka cuenta con una historia que se remonta a más de 2.500 años, con antiguas ciudades que fueron centros de poder, cultura y espiritualidad. Desde las primeras capitales budistas hasta las ciudades coloniales, cada lugar cuenta una parte única de la historia de la isla.
              </p>
              <p className="text-elephant-gray mb-4">
                Las ciudades históricas de Sri Lanka ofrecen una ventana al pasado, con impresionantes ruinas, templos antiguos, palacios reales y fortalezas coloniales. Estas ciudades no solo son importantes por su valor histórico, sino también por su belleza arquitectónica y su importancia espiritual.
              </p>
              <p className="text-elephant-gray">
                Explorar estas ciudades es como viajar en el tiempo, descubriendo las diferentes civilizaciones que han dejado su huella en la isla: desde los primeros reyes budistas hasta los colonizadores portugueses, holandeses y británicos.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <PlaceholderImage
                width={600}
                height={400}
                text="Arquitectura histórica de Sri Lanka"
                bgColor="#2E7D32"
                textColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ciudades */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-8 text-center">
            Ciudades Históricas Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ciudades.map((ciudad) => (
              <motion.div
                key={ciudad.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <PlaceholderImage
                    width={400}
                    height={192}
                    text={ciudad.nombre}
                    bgColor="#2E7D32"
                    textColor="#FFFFFF"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-tropical-green mb-2">
                    {ciudad.nombre}
                  </h3>
                  <p className="text-elephant-gray mb-4">
                    {ciudad.descripcion}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-bold text-elephant-gray mb-2">Mejor época para visitar:</h4>
                    <p className="text-elephant-gray">{ciudad.mejorEpoca}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-elephant-gray mb-2">Destacados:</h4>
                    <ul className="list-disc list-inside text-elephant-gray">
                      {ciudad.destacados.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-elephant-gray mb-2">Experiencias:</h4>
                    <ul className="list-disc list-inside text-elephant-gray">
                      {ciudad.experiencias.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencias Culturales */}
      <section className="py-16 bg-golden-sand bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-8 text-center">
            Experiencias Culturales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiencias.map((experiencia) => (
              <motion.div
                key={experiencia.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <PlaceholderImage
                    width={600}
                    height={300}
                    text={experiencia.nombre}
                    bgColor="#2E7D32"
                    textColor="#FFFFFF"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-tropical-green mb-2">
                    {experiencia.nombre}
                  </h3>
                  <p className="text-elephant-gray mb-4">
                    {experiencia.descripcion}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-elephant-gray">Duración:</h4>
                      <p className="text-elephant-gray">{experiencia.duracion}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-elephant-gray">Mejor época:</h4>
                      <p className="text-elephant-gray">{experiencia.mejorEpoca}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-elephant-gray mb-2">Destacados:</h4>
                    <ul className="list-disc list-inside text-elephant-gray">
                      {experiencia.destacados.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-elephant-gray mb-2">Reserva esta experiencia:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experiencia.enlaces.map((enlace, index) => (
                        <a
                          key={index}
                          href={enlace.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-ocean-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                        >
                          {enlace.plataforma}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos para Visitantes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-8 text-center">
            Consejos para Visitantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-playfair font-bold text-tropical-green mb-4">
                Planificación del Viaje
              </h3>
              <ul className="list-disc list-inside text-elephant-gray space-y-2">
                <li>Reserva con anticipación durante temporada alta</li>
                <li>Considera un guía local para mejor comprensión histórica</li>
                <li>Planifica visitas temprano para evitar multitudes</li>
                <li>Combina ciudades cercanas para optimizar el tiempo</li>
                <li>Verifica horarios de apertura y días festivos</li>
                <li>Lleva agua y snacks para excursiones largas</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-playfair font-bold text-tropical-green mb-4">
                Vestimenta y Comportamiento
              </h3>
              <ul className="list-disc list-inside text-elephant-gray space-y-2">
                <li>Cubrir hombros y rodillas en templos y sitios religiosos</li>
                <li>Quitar zapatos antes de entrar a templos</li>
                <li>Respetar las normas de fotografía en cada sitio</li>
                <li>Mantener silencio en áreas sagradas</li>
                <li>No tocar estatuas o artefactos históricos</li>
                <li>Ser respetuoso con los locales y su cultura</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-playfair font-bold text-tropical-green mb-4">
                Equipamiento Recomendado
              </h3>
              <ul className="list-disc list-inside text-elephant-gray space-y-2">
                <li>Cámara con buena resolución para fotos históricas</li>
                <li>Zapatos cómodos para caminar por ruinas</li>
                <li>Sombrero o sombrilla para protección solar</li>
                <li>Agua y snacks para excursiones</li>
                <li>Guía de viaje o aplicación con información histórica</li>
                <li>Mapa detallado de cada ciudad histórica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-tropical-green text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            ¿Listo para explorar las ciudades históricas de Sri Lanka?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Permítenos ayudarte a planificar tu viaje a través de la rica historia de Sri Lanka.
          </p>
          <Link 
            href="/contacto" 
            className="inline-block bg-ocean-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Contacta con nosotros
          </Link>
        </div>
      </section>
    </main>
  );
} 