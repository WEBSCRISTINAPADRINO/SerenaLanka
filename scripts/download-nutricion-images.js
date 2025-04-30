const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'cocina-ayurveda.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'mercado-local.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'curso-cocina.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'desayuno-sano.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'plato-tradicional.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'superfoods.jpg'
  }
];

const downloadDir = path.join(process.cwd(), 'public', 'images', 'wellness', 'nutricion');

// Crear directorio si no existe
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

images.forEach(({ url, filename }) => {
  const filePath = path.join(downloadDir, filename);
  const file = fs.createWriteStream(filePath);

  https.get(url, (response) => {
    response.pipe(file);

    file.on('finish', () => {
      file.close();
      console.log(`Imagen descargada: ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`Error al descargar ${filename}:`, err.message);
  });
}); 