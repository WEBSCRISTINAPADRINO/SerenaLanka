import fs from 'fs';
import path from 'path';
import axios from 'axios';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Playa tropical
    filename: 'epoca-verano.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // Montaña verde
    filename: 'epoca-intermedia.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80', // Atardecer cálido
    filename: 'epoca-invierno.jpg',
  },
];

const outputDir = path.join(__dirname, '../public/images');

async function downloadImage(url: string, filename: string) {
  const filePath = path.join(outputDir, filename);
  const writer = fs.createWriteStream(filePath);
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  response.data.pipe(writer);
  return new Promise<void>((resolve, reject) => {
    writer.on('finish', () => resolve());
    writer.on('error', reject);
  });
}

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  for (const img of images) {
    console.log(`Descargando ${img.filename}...`);
    await downloadImage(img.url, img.filename);
    console.log(`Guardado en ${outputDir}/${img.filename}`);
  }
  console.log('¡Imágenes descargadas correctamente!');
}

main(); 