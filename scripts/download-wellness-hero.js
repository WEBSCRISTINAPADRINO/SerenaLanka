const https = require('https');
const fs = require('fs');
const path = require('path');

const image = {
  url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&h=1080&q=80',
  filename: 'wellness-hero.jpg'
};

const downloadDir = path.join(process.cwd(), 'public', 'images', 'wellness');

// Crear directorio si no existe
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

const filePath = path.join(downloadDir, image.filename);
const file = fs.createWriteStream(filePath);

https.get(image.url, (response) => {
  response.pipe(file);

  file.on('finish', () => {
    file.close();
    console.log(`Imagen descargada: ${image.filename}`);
  });
}).on('error', (err) => {
  fs.unlink(filePath, () => {});
  console.error(`Error al descargar ${image.filename}:`, err.message);
}); 