export const affiliateConfig = {
  booking: {
    id: '7965268',  // Tu ID de Booking.com
    baseUrl: 'https://www.booking.com',
    links: {
      country: '/country/lk.es.html',
      regions: {
        south: '/region/lk/southern-province.es.html',
        central: '/region/lk/central-province.es.html',
        eastern: '/region/lk/eastern-province.es.html'
      },
      cities: {
        colombo: '/city/lk/colombo.es.html',
        kandy: '/city/lk/kandy.es.html',
        galle: '/city/lk/galle.es.html',
        mirissa: '/city/lk/mirissa.es.html'
      }
    }
  },
  getyourguide: {
    id: 'ABCD123',  // Tu ID de GetYourGuide
    baseUrl: 'https://www.getyourguide.es',
    links: {
      country: '/sri-lanka-l727',
      categories: {
        wellness: '/sri-lanka-l727/spa-y-bienestar-tc1026',
        adventure: '/sri-lanka-l727/aventura-y-deportes-tc3',
        culture: '/sri-lanka-l727/tours-culturales-tc27',
        food: '/sri-lanka-l727/gastronomia-tc103'
      }
    }
  },
  aviator: {
    id: 'XYZ789',  // Tu ID de Aviator
    baseUrl: 'https://aviator.com',
    links: {
      flights: '/flights/to/sri-lanka',
      deals: '/deals/sri-lanka'
    }
  },
  amazon: {
    id: 'ABC123',  // Tu ID de Amazon Afiliados
    baseUrl: 'https://www.amazon.es',
    links: {
      travelGear: '/s?k=equipo+viaje',
      cameras: '/s?k=camaras+viaje',
      backpacks: '/s?k=mochilas+viaje',
      tropicalClothing: '/s?k=ropa+tropical'
    }
  },
  agoda: {
    id: 'DEF456',  // Tu ID de Agoda
    baseUrl: 'https://www.agoda.com',
    links: {
      country: '/country/sri-lanka.html',
      luxury: '/luxury/sri-lanka.html',
      beach: '/beach-hotels/sri-lanka.html'
    }
  },
  expedia: {
    id: 'GHI789',  // Tu ID de Expedia
    baseUrl: 'https://www.expedia.es',
    links: {
      hotels: '/Hotels-g293961',
      packages: '/Packages-g293961'
    }
  },
  klook: {
    id: 'JKL012',  // Tu ID de Klook
    baseUrl: 'https://www.klook.com',
    links: {
      activities: '/es-ES/city/colombo-sri-lanka-100248',
      tours: '/es-ES/experiences/tours-sri-lanka'
    }
  }
};

export const generateAffiliateUrl = (
  platform: keyof typeof affiliateConfig,
  path: string
): string => {
  const config = affiliateConfig[platform];
  const baseUrl = config.baseUrl;
  const id = config.id;
  
  // Añadir el ID de afiliado según el formato de cada plataforma
  switch (platform) {
    case 'booking':
      return `${baseUrl}${path}?aid=${id}`;
    case 'getyourguide':
      return `${baseUrl}${path}/?partner_id=${id}`;
    case 'amazon':
      return `${baseUrl}${path}?tag=${id}`;
    case 'agoda':
      return `${baseUrl}${path}?cid=${id}`;
    case 'expedia':
      return `${baseUrl}${path}?affcid=${id}`;
    case 'klook':
      return `${baseUrl}${path}?aid=${id}`;
    default:
      return `${baseUrl}${path}?ref=${id}`;
  }
};

export const getAffiliateTracking = (platform: keyof typeof affiliateConfig) => {
  return {
    rel: 'nofollow sponsored',
    target: '_blank',
    'data-platform': platform
  };
}; 