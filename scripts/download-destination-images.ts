import fs from 'fs';
import path from 'path';
import https from 'https';
import { destinationImages } from '../src/config/destinations-images';

const downloadImage = (url: string, destination: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(destination);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Imagen descargada: ${destination}`);
          resolve();
        });
      } else {
        response.resume();
        reject(new Error(`Error al descargar ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

async function downloadDestinationImages() {
  const destinationDir = path.join(process.cwd(), 'public', 'images', 'destinations');

  // Crear directorio si no existe
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  for (const [key, url] of Object.entries(destinationImages)) {
    const destination = path.join(destinationDir, `${key}.jpg`);
    try {
      await downloadImage(url, destination);
    } catch (error) {
      console.error(`❌ Error al descargar ${key}:`, error);
    }
  }
}

downloadDestinationImages().catch(console.error); 