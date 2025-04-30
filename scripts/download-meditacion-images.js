const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'templo-meditacion.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'retiro-naturaleza.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'meditacion-guiada.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'mindfulness.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'meditacion-amanecer.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&h=800&q=80',
    filename: 'retiro-silencio.jpg'
  }
];

const downloadDir = path.join(process.cwd(), 'public', 'images', 'wellness', 'meditacion');

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