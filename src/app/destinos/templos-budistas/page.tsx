'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PlaceholderImage from '@/components/PlaceholderImage';

// Datos de los templos budistas
const templos = [
  {
    id: 1,
    nombre: 'Templo del Diente Sagrado',
    ubicacion: 'Kandy',
    descripcion: 'El templo más importante de Sri Lanka, que alberga la reliquia del diente de Buda. Este templo es el centro espiritual del budismo en la isla y un lugar de peregrinación para budistas de todo el mundo.',
    imagen: '/images/templos/diente-sagrado.jpg',
    mejorEpoca: 'Todo el año, especialmente durante el Esala Perahera (julio/agosto)',
    destacados: [
      'Reliquia del diente de Buda',
      'Arquitectura tradicional de Kandy',
      'Ceremonias diarias',
      'Museo del templo',
      'Jardines y estanques'
    ],
    experiencias: [
      'Ceremonia de ofrendas',
      'Visita guiada al museo',
      'Observación de ceremonias vespertinas',
      'Fotografía de arquitectura',
      'Meditación guiada'
    ]
  },
  {
    id: 2,
    nombre: 'Templo de la Cueva de Dambulla',
    ubicacion: 'Dambulla',
    descripcion: 'Un complejo de templos rupestres con más de 2.000 años de antigüedad, declarado Patrimonio de la Humanidad por la UNESCO. Alberga más de 150 estatuas de Buda y pinturas murales que cubren una superficie de 2.100 m².',
    imagen: '/images/templos/dambulla.jpg',
    mejorEpoca: 'De enero a abril (temporada seca)',
    destacados: [
      '5 cuevas con templos',
      'Frescos antiguos',
      'Estatuas de Buda en diferentes posturas',
      'Vistas panorámicas de la región',
      'Historia milenaria'
    ],
    experiencias: [
      'Visita guiada a las cuevas',
      'Fotografía de arte budista',
      'Observación de ceremonias',
      'Visita al museo arqueológico',
      'Peregrinación espiritual'
    ]
  },
  {
    id: 3,
    nombre: 'Templo de la Roca de Sigiriya',
    ubicacion: 'Sigiriya',
    descripcion: 'Aunque conocido principalmente como palacio real, Sigiriya también albergó un importante monasterio budista. La roca de 200 metros de altura ofrece vistas impresionantes y es un ejemplo único de planificación urbana antigua.',
    imagen: '/images/templos/sigiriya.jpg',
    mejorEpoca: 'De enero a abril (temporada seca)',
    destacados: [
      'Frescos de las doncellas celestiales',
      'Jardines de agua',
      'Escalera de los leones',
      'Vistas panorámicas',
      'Historia real y espiritual'
    ],
    experiencias: [
      'Ascenso a la roca',
      'Visita guiada histórica',
      'Fotografía de paisajes',
      'Observación de aves',
      'Meditación en los jardines'
    ]
  },
  {
    id: 4,
    nombre: 'Templo de la Cueva de Mihintale',
    ubicacion: 'Mihintale',
    descripcion: 'Considerado el lugar donde el budismo fue introducido en Sri Lanka en el siglo III a.C. Este complejo de templos y cuevas en la cima de una colina es un importante lugar de peregrinación y ofrece vistas panorámicas de la región de Anuradhapura.',
    imagen: '/images/templos/mihintale.jpg',
    mejorEpoca: 'De enero a abril (temporada seca)',
    destacados: [
      'Lugar de introducción del budismo',
      'Escalera de 1.840 escalones',
      'Cueva de Mahinda',
      'Estupa Kantaka Chetiya',
      'Vistas panorámicas'
    ],
    experiencias: [
      'Peregrinación espiritual',
      'Ascenso a la cima',
      'Meditación en las cuevas',
      'Fotografía de arquitectura',
      'Observación de ceremonias'
    ]
  },
  {
    id: 5,
    nombre: 'Templo de la Cueva de Aluvihara',
    ubicacion: 'Aluvihara',
    descripcion: 'Un complejo de cuevas donde se cree que el Canon Pali (las escrituras budistas) fue escrito por primera vez en el siglo I a.C. Este templo es de gran importancia histórica para el budismo y alberga antiguas pinturas y estatuas.',
    imagen: '/images/templos/aluvihara.jpg',
    mejorEpoca: 'Todo el año',
    destacados: [
      'Historia de la escritura del Canon Pali',
      'Cuevas con frescos antiguos',
      'Biblioteca de manuscritos',
      'Estatuas de Buda',
      'Ambiente tranquilo y espiritual'
    ],
    experiencias: [
      'Visita guiada histórica',
      'Meditación en las cuevas',
      'Fotografía de arte budista',
      'Observación de ceremonias',
      'Estudio de manuscritos antiguos'
    ]
  },
  {
    id: 6,
    nombre: 'Templo de la Cueva de Mulkirigala',
    ubicacion: 'Mulkirigala',
    descripcion: 'Un complejo de templos rupestres con más de 2.000 años de antigüedad, situado en una roca de 205 metros de altura. Alberga frescos antiguos, estatuas de Buda y ofrece vistas panorámicas de la región.',
    imagen: '/images/templos/mulkirigala.jpg',
    mejorEpoca: 'De enero a abril (temporada seca)',
    destacados: [
      '5 cuevas con templos',
      'Frescos antiguos',
      'Estatuas de Buda',
      'Vistas panorámicas',
      'Ambiente tranquilo y menos turístico'
    ],
    experiencias: [
      'Ascenso a la roca',
      'Visita guiada a las cuevas',
      'Fotografía de arte budista',
      'Meditación en las cuevas',
      'Observación de ceremonias'
    ]
  }
];

// Datos de experiencias espirituales
const experiencias = [
  {
    id: 1,
    nombre: 'Retiro de Meditación Vipassana',
    descripcion: 'Participa en un retiro de meditación Vipassana en un templo budista tradicional. Aprende las técnicas de meditación directamente de monjes budistas y experimenta la vida monástica durante varios días.',
    imagen: '/images/experiencias/meditacion-vipassana.jpg',
    duracion: '3-10 días',
    mejorEpoca: 'Todo el año',
    destacados: [
      'Instrucción por monjes budistas',
      'Alojamiento en el templo',
      'Comida vegetariana',
      'Práctica diaria de meditación',
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
  },
  {
    id: 2,
    nombre: 'Ceremonia de Ofrendas a Monjes',
    descripcion: 'Participa en la tradicional ceremonia de ofrendas a los monjes budistas (dana). Esta experiencia te permite aprender sobre la importancia de las ofrendas en el budismo y recibir bendiciones de los monjes.',
    imagen: '/images/experiencias/ofrendas-monjes.jpg',
    duracion: '1-2 horas',
    mejorEpoca: 'Todo el año',
    destacados: [
      'Preparación de ofrendas',
      'Ceremonia tradicional',
      'Bendiciones de monjes',
      'Aprendizaje sobre budismo',
      'Experiencia cultural auténtica'
    ],
    enlaces: [
      {
        plataforma: 'Viator',
        url: 'https://www.viator.com/Sri-Lanka-attractions/Buddhist-temples/d213-ttd'
      },
      {
        plataforma: 'Airbnb Experiences',
        url: 'https://www.airbnb.com/s/experiences?location=Sri%20Lanka&query=buddhist%20ceremony'
      }
    ]
  },
  {
    id: 3,
    nombre: 'Visita a Templos con Monje Guía',
    descripcion: 'Explora los templos budistas más importantes de Sri Lanka con un monje como guía. Aprende sobre la historia, la arquitectura y las prácticas budistas directamente de alguien que vive la tradición.',
    imagen: '/images/experiencias/monje-guia.jpg',
    duracion: '1 día',
    mejorEpoca: 'Todo el año',
    destacados: [
      'Guía monje budista',
      'Explicaciones detalladas',
      'Acceso a áreas normalmente cerradas',
      'Ceremonias privadas',
      'Preguntas y respuestas'
    ],
    enlaces: [
      {
        plataforma: 'GetYourGuide',
        url: 'https://www.getyourguide.com/sri-lanka-l169/buddhist-temples'
      },
      {
        plataforma: 'Viator',
        url: 'https://www.viator.com/Sri-Lanka-attractions/Buddhist-temples/d213-ttd'
      }
    ]
  },
  {
    id: 4,
    nombre: 'Celebración de Poya',
    descripcion: 'Participa en la celebración de Poya, el día de luna llena que es sagrado para los budistas. Observa las ceremonias especiales, las procesiones y las ofrendas en los templos durante esta importante fecha del calendario budista.',
    imagen: '/images/experiencias/celebracion-poya.jpg',
    duracion: '1 día',
    mejorEpoca: 'Varía según el calendario lunar',
    destacados: [
      'Ceremonias especiales',
      'Procesiones con antorchas',
      'Ofrendas a los templos',
      'Actividades culturales',
      'Comida vegetariana tradicional'
    ],
    enlaces: [
      {
        plataforma: 'GetYourGuide',
        url: 'https://www.getyourguide.com/sri-lanka-l169/buddhist-festivals'
      },
      {
        plataforma: 'Airbnb Experiences',
        url: 'https://www.airbnb.com/s/experiences?location=Sri%20Lanka&query=buddhist%20festival'
      }
    ]
  }
];

export default function TemplosBudistas() {
  return (
    <main className="min-h-screen bg-coconut-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <PlaceholderImage
            width={1920}
            height={1080}
            text="Templos Budistas de Sri Lanka"
            bgColor="#2E7D32"
            textColor="#FFFFFF"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
              Templos Budistas de Sri Lanka
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto px-4">
              Descubre la rica herencia espiritual y arquitectónica de los templos budistas más importantes de la isla
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
            { label: 'Templos Budistas', href: '/destinos/templos-budistas' }
          ]} 
        />
      </div>

      {/* Introducción */}
      <section className="py-12 bg-golden-sand bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-4">
                La Herencia Budista de Sri Lanka
              </h2>
              <p className="text-elephant-gray mb-4">
                Sri Lanka es uno de los países budistas más antiguos del mundo, con una tradición que se remonta a más de 2.300 años. El budismo fue introducido en la isla en el siglo III a.C. por el monje Mahinda, hijo del emperador indio Ashoka.
              </p>
              <p className="text-elephant-gray mb-4">
                Los templos budistas de Sri Lanka no son solo lugares de culto, sino también centros de aprendizaje, arte y arquitectura. Cada templo cuenta una historia única y alberga tesoros culturales e históricos de incalculable valor.
              </p>
              <p className="text-elephant-gray">
                Desde cuevas excavadas en la roca hasta complejos de templos en la cima de montañas, la arquitectura budista de Sri Lanka refleja la evolución de las tradiciones espirituales y artísticas a lo largo de los siglos.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <PlaceholderImage
                width={600}
                height={400}
                text="Arquitectura budista tradicional"
                bgColor="#2E7D32"
                textColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Templos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-8 text-center">
            Templos Budistas Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templos.map((templo) => (
              <motion.div
                key={templo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <PlaceholderImage
                    width={400}
                    height={192}
                    text={templo.nombre}
                    bgColor="#2E7D32"
                    textColor="#FFFFFF"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-tropical-green mb-2">
                    {templo.nombre}
                  </h3>
                  <p className="text-ocean-blue font-medium mb-3">
                    {templo.ubicacion}
                  </p>
                  <p className="text-elephant-gray mb-4">
                    {templo.descripcion}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-bold text-elephant-gray mb-2">Mejor época para visitar:</h4>
                    <p className="text-elephant-gray">{templo.mejorEpoca}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-elephant-gray mb-2">Destacados:</h4>
                    <ul className="list-disc list-inside text-elephant-gray">
                      {templo.destacados.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-elephant-gray mb-2">Experiencias:</h4>
                    <ul className="list-disc list-inside text-elephant-gray">
                      {templo.experiencias.map((item, index) => (
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

      {/* Experiencias Espirituales */}
      <section className="py-16 bg-golden-sand bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-8 text-center">
            Experiencias Espirituales
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
                Vestimenta y Comportamiento
              </h3>
              <ul className="list-disc list-inside text-elephant-gray space-y-2">
                <li>Cubrir hombros y rodillas (hombres y mujeres)</li>
                <li>Quitar zapatos antes de entrar a los templos</li>
                <li>No apuntar con los pies hacia las estatuas de Buda</li>
                <li>Mantener silencio y respeto</li>
                <li>No tomar fotos durante las ceremonias sin permiso</li>
                <li>No tocar a los monjes (especialmente las mujeres)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-playfair font-bold text-tropical-green mb-4">
                Mejor Momento para Visitar
              </h3>
              <ul className="list-disc list-inside text-elephant-gray space-y-2">
                <li>Días de Poya (luna llena) para ceremonias especiales</li>
                <li>Mañanas temprano para evitar multitudes</li>
                <li>Entre semana en lugar de fines de semana</li>
                <li>Temporada seca (enero-abril) para mejor acceso</li>
                <li>Durante festivales budistas para experiencias culturales</li>
                <li>Consultar horarios de ceremonias específicas</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-playfair font-bold text-tropical-green mb-4">
                Preparación y Equipamiento
              </h3>
              <ul className="list-disc list-inside text-elephant-gray space-y-2">
                <li>Llevar ropa modesta y cómoda</li>
                <li>Zapatos fáciles de quitar y poner</li>
                <li>Sombrero o sombrilla para protección solar</li>
                <li>Agua y snacks (algunos templos no tienen tiendas)</li>
                <li>Cámara con flash desactivado</li>
                <li>Pequeñas ofrendas (flores) si se desea participar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-tropical-green text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            ¿Listo para explorar los templos budistas de Sri Lanka?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Permítenos ayudarte a planificar tu viaje espiritual a los templos más importantes de la isla.
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