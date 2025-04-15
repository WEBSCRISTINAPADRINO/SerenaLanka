import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/*.json$',
      ],
    },
    sitemap: 'https://srilanka-turismo.com/sitemap.xml',
  };
} 