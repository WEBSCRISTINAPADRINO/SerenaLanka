const fs = require('fs');
const path = require('path');
const https = require('https');

const categories = ['yoga', 'meditacion', 'ayurveda', 'nutricion'];
const baseDir = path.join(__dirname, '../public/images/wellness');

// Crear directorios si no existen
categories.forEach(category => {
  const dir = path.join(baseDir, category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// URLs de imágenes de ejemplo (reemplazar con URLs reales)
const imageUrls = {
  yoga: [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80'
  ],
  meditacion: [
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
  ],
  ayurveda: [
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
  ],
  nutricion: [
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80'
  ]
};

// Función para descargar una imagen
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
}

// Descargar todas las imágenes
async function downloadAllImages() {
  for (const category of categories) {
    const urls = imageUrls[category];
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const filename = `${category}-${i + 1}.jpg`;
      const filepath = path.join(baseDir, category, filename);
      
      try {
        await downloadImage(url, filepath);
        console.log(`Downloaded ${filename}`);
      } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
      }
    }
  }
}

downloadAllImages().then(() => {
  console.log('All images downloaded successfully');
}).catch(error => {
  console.error('Error downloading images:', error);
}); 