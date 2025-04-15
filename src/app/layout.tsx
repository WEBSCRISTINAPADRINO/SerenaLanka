import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://serena-lanka.vercel.app'),
  title: 'Serena Lanka - Turismo de lujo accesible en Sri Lanka',
  description: 'Descubre Sri Lanka con experiencias de lujo auténtico a precios accesibles. Playas paradisíacas, safaris, templos y más.',
  openGraph: {
    title: 'Serena Lanka - Turismo de lujo accesible en Sri Lanka',
    description: 'Descubre Sri Lanka con experiencias de lujo auténtico a precios accesibles',
    url: 'https://serena-lanka.vercel.app',
    siteName: 'Serena Lanka',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serena Lanka - Turismo de lujo accesible en Sri Lanka',
    description: 'Descubre Sri Lanka con experiencias de lujo auténtico a precios accesibles',
  },
} 