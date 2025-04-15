import Image from 'next/image'
import Link from 'next/link'

const experiences = [
  {
    id: 'safari',
    title: 'Safari y Naturaleza',
    description: 'Sumérgete en un mundo donde la naturaleza cobra vida. Observa elefantes majestuosos en su hábitat natural, contempla el elegante paso de los leopardos, y maravíllate con las ballenas azules que surcan las aguas cristalinas. Cada momento es una historia única que contar.',
    image: '/images/experiences/safari.jpg',
    highlights: [
      'Avistamiento de elefantes en Minneriya',
      'Safari en Yala para ver leopardos',
      'Observación de ballenas en Mirissa',
      'Birdwatching en Sinharaja'
    ],
    color: 'bg-tropical-green',
    affiliateLink: 'https://www.booking.com/experiences/safari-sri-lanka',
    price: 'Desde 75€',
    duration: '1-3 días',
    bestTime: 'Todo el año',
    emotion: 'Asombro y conexión con la naturaleza'
  },
  {
    id: 'surf',
    title: 'Surf y Deportes Acuáticos',
    description: 'Deja que el océano Índico te abrace con sus olas perfectas. Desde las playas doradas del sur hasta las cristalinas aguas del este, descubre algunos de los mejores spots de surf de Asia. Ya seas principiante o experto, el mar te espera con experiencias inolvidables.',
    image: '/images/experiences/surf.jpg',
    highlights: [
      'Surf en Arugam Bay',
      'Kitesurf en Kalpitiya',
      'Snorkel en Hikkaduwa',
      'Buceo en Unawatuna'
    ],
    color: 'bg-ocean-blue',
    affiliateLink: 'https://www.booking.com/experiences/surf-sri-lanka',
    price: 'Desde 45€',
    duration: '1-7 días',
    bestTime: 'Abril a Octubre',
    emotion: 'Libertad y adrenalina'
  },
  {
    id: 'wellness',
    title: 'Wellness y Yoga',
    description: 'Encuentra tu equilibrio interior en el paraíso del bienestar. Desde antiguos templos budistas hasta modernos centros de yoga junto al mar, descubre el poder transformador de las tradiciones de Sri Lanka. Cada respiración te acerca a tu mejor versión.',
    image: '/images/experiences/wellness.jpg',
    highlights: [
      'Retiros de yoga en la playa',
      'Tratamientos ayurvédicos',
      'Meditación en templos budistas',
      'Spa en la naturaleza'
    ],
    color: 'bg-lotus-pink',
    affiliateLink: 'https://www.booking.com/experiences/wellness-sri-lanka',
    price: 'Desde 120€',
    duration: '3-14 días',
    bestTime: 'Todo el año',
    emotion: 'Paz y renovación interior'
  },
  {
    id: 'cultura',
    title: 'Cultura y Gastronomía',
    description: 'Saborea la auténtica esencia de Sri Lanka a través de sus tradiciones y sabores. Aprende los secretos de la cocina local, participa en ceremonias ancestrales, y descubre el arte de la artesanía tradicional. Cada experiencia es una ventana a un mundo de tradición y autenticidad.',
    image: '/images/experiences/culture.jpg',
    highlights: [
      'Clases de cocina local',
      'Visitas a templos budistas',
      'Talleres de artesanía',
      'Festivales tradicionales'
    ],
    color: 'bg-spice-red',
    affiliateLink: 'https://www.booking.com/experiences/culture-sri-lanka',
    price: 'Desde 35€',
    duration: '1-5 días',
    bestTime: 'Todo el año',
    emotion: 'Descubrimiento y conexión cultural'
  },
  {
    id: 'aventura',
    title: 'Aventura y Naturaleza',
    description: 'Despierta tu espíritu aventurero en los paisajes más impresionantes de Sri Lanka. Desde las cumbres de las montañas hasta los ríos más salvajes, cada ruta te llevará a descubrir rincones mágicos y vivir experiencias que marcarán tu vida.',
    image: '/images/experiences/adventure.jpg',
    highlights: [
      'Trekking en las montañas',
      'Rafting en Kitulgala',
      'Ciclismo en el país del té',
      'Escalada en roca'
    ],
    color: 'bg-sunset-orange',
    affiliateLink: 'https://www.booking.com/experiences/adventure-sri-lanka',
    price: 'Desde 55€',
    duration: '1-5 días',
    bestTime: 'Diciembre a Marzo',
    emotion: 'Aventura y superación personal'
  }
]

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/images/experiences/hero.jpg"
          alt="Experiencias en Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-playfair mb-4">
            Experiencias que Transforman Vidas
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Descubre momentos mágicos que te harán caer rendido ante la belleza de Sri Lanka
          </p>
          <Link
            href="#experiencias"
            className="bg-white text-tropical-green px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block"
          >
            Explorar Experiencias
          </Link>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 px-4 bg-coconut-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-6 text-elephant-gray">
            Vive Sri Lanka con el Corazón
          </h2>
          <p className="text-lg text-elephant-gray/80 mb-8">
            Cada experiencia ha sido cuidadosamente seleccionada para ofrecerte lo mejor de Sri Lanka,
            combinando aventura, cultura y bienestar. Descubre actividades únicas que te permitirán
            conectar con la esencia de este mágico país y crear recuerdos que durarán toda la vida.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-playfair mb-2 text-tropical-green">Autenticidad</h3>
              <p className="text-elephant-gray/80">Experiencias genuinas que te conectan con la verdadera esencia de Sri Lanka</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-playfair mb-2 text-ocean-blue">Transformación</h3>
              <p className="text-elephant-gray/80">Cada momento es una oportunidad para crecer y descubrirte a ti mismo</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-playfair mb-2 text-spice-red">Memorias</h3>
              <p className="text-elephant-gray/80">Crea historias inolvidables que contarás una y otra vez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Experiencias */}
      <section id="experiencias" className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`relative h-[300px] overflow-hidden ${experience.color} bg-opacity-10`}>
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 text-tropical-green px-3 py-1 rounded-full text-sm font-semibold">
                  {experience.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair mb-2 text-elephant-gray">{experience.title}</h3>
                <p className="text-elephant-gray/80 mb-4">{experience.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-elephant-gray/70">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {experience.duration}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {experience.bestTime}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-elephant-gray">Emoción:</span>
                  <span className="ml-2 text-sm text-elephant-gray/70">{experience.emotion}</span>
                </div>
                <ul className="space-y-1 mb-6">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm flex items-center text-elephant-gray/80">
                      <span className="mr-2 text-tropical-green">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <Link
                    href={`/experiencias/${experience.id}`}
                    className="bg-tropical-green text-white px-6 py-2 rounded-full text-center font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Descubrir Más
                  </Link>
                  <a
                    href={experience.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ocean-blue text-white px-6 py-2 rounded-full text-center font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Reservar Ahora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-tropical-green to-ocean-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-6">
            ¿Listo para vivir experiencias inolvidables?
          </h2>
          <p className="text-lg mb-8">
            Permítenos ayudarte a planificar tu próxima aventura en Sri Lanka.
            Personalizaremos cada experiencia según tus preferencias y crearemos
            un viaje que supere todas tus expectativas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-tropical-green px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Planifica tu Viaje
            </Link>
            <Link
              href="/experiencias/personalizadas"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Experiencias Personalizadas
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 