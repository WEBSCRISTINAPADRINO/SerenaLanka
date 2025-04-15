import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = 'Sri Lanka, viajes, turismo, lujo, playas, templos, cultura, wellness',
  ogImage = '/images/hero-sri-lanka.jpg',
  ogUrl = 'https://srilanka-turismo.com'
}: MetadataProps): Metadata {
  const fullTitle = `${title} | Sri Lanka Turismo de Lujo`;
  
  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      images: [ogImage],
      url: ogUrl,
      siteName: 'Sri Lanka Turismo de Lujo',
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: ogUrl,
    },
  };
} 