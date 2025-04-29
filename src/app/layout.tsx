import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Lato } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Serena Lanka - Turismo de lujo accesible en Sri Lanka',
  description: 'Descubre Sri Lanka con experiencias de lujo auténtico a buen precio. Guía completa de destinos, experiencias y planificación de viajes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${lato.className} bg-coconut-white`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 