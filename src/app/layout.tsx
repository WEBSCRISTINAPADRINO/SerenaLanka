import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: {
    default: 'Sri Lanka Turismo | Experiencias de Lujo Accesible',
    template: '%s | Sri Lanka Turismo',
  },
  description: 'Descubre Sri Lanka con nuestras guías expertas y experiencias únicas de lujo accesible. Explora destinos, actividades y consejos para tu próxima aventura.',
  keywords: ['Sri Lanka', 'turismo', 'viajes', 'lujo', 'accesible', 'destinos', 'experiencias', 'wellness'],
  authors: [{ name: 'Sri Lanka Turismo' }],
  creator: 'Sri Lanka Turismo',
  publisher: 'Sri Lanka Turismo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://srilanka-turismo.com',
    siteName: 'Sri Lanka Turismo',
    title: 'Sri Lanka Turismo | Experiencias de Lujo Accesible',
    description: 'Descubre Sri Lanka con nuestras guías expertas y experiencias únicas de lujo accesible.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Lanka Turismo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Lanka Turismo | Experiencias de Lujo Accesible',
    description: 'Descubre Sri Lanka con nuestras guías expertas y experiencias únicas de lujo accesible.',
    images: ['/images/twitter-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 