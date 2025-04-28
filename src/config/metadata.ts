import { Metadata } from 'next';

// Definición de tipos
type Author = {
  name: string;
  url?: string;
};

// Configuración base de metadatos
export const siteConfig = {
  name: 'Sri Lanka Luxury Travel',
  description: 'Experiencias de lujo auténtico a precios accesibles en Sri Lanka',
  url: 'https://srilanka-luxury.travel',
  ogImage: '/images/social/og-default.jpg',
  twitterImage: '/images/social/twitter-default.jpg',
  authors: [{ 
    name: 'Sri Lanka Luxury Travel',
    url: 'https://srilanka-luxury.travel'
  }] as Author[],
  creator: '@srilankaluxury'
};

// Metadatos por defecto
export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Sri Lanka',
    'turismo de lujo',
    'viajes',
    'experiencias',
    'wellness',
    'playas',
    'cultura',
    'naturaleza'
  ],
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: siteConfig.name
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.twitterImage],
    creator: siteConfig.creator
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest'
}; 