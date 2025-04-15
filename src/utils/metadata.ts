import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  image = '/images/og-image.jpg'
}: MetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'website',
      locale: 'es_ES',
      siteName: 'Sri Lanka Luxury Travel'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    },
    robots: {
      index: true,
      follow: true
    }
  };
} 