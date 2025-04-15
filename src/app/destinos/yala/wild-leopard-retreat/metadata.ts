import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wild Leopard Retreat Yala | Lujo Salvaje y Transformador en Sri Lanka',
  description: 'Despierta con rugidos de leopardo desde tu villa privada en Yala. Una experiencia de lujo consciente donde la elegancia encuentra lo salvaje. Solo 5 villas exclusivas.',
  keywords: [
    'hotel de lujo yala',
    'safari sri lanka',
    'villas privadas yala',
    'experiencia safari exclusiva',
    'retiro de lujo sri lanka',
    'alojamiento exclusivo yala',
    'villa con piscina infinita yala',
    'safari privado leopardos',
    'experiencias transformadoras sri lanka',
    'lujo consciente sri lanka'
  ].join(', '),
  openGraph: {
    title: 'Wild Leopard Retreat Yala | Lujo Salvaje y Transformador',
    description: 'Despierta con rugidos de leopardo desde tu villa privada. Una experiencia de lujo consciente donde la elegancia encuentra lo salvaje.',
    images: [
      {
        url: '/images/og/wild-leopard-retreat.jpg',
        width: 1200,
        height: 630,
        alt: 'Villa con piscina infinita en Wild Leopard Retreat Yala'
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wild Leopard Retreat Yala | Lujo Salvaje y Transformador',
    description: 'Despierta con rugidos de leopardo desde tu villa privada. Una experiencia de lujo consciente donde la elegancia encuentra lo salvaje.',
    images: ['/images/og/wild-leopard-retreat.jpg'],
  },
  alternates: {
    canonical: 'https://srilanka-luxury.com/destinos/yala/wild-leopard-retreat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  },
}; 