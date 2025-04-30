import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { costaOesteImages } from '../src/config/costa-oeste-images';

const IMAGES_DIR = path.join(process.cwd(), 'public/images/destinos/costa-oeste');

async function downloadImage(url: string, filename: string) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const writer = fs.createWriteStream(path.join(IMAGES_DIR, filename));
    response.data.pipe(writer);

    return new Promise<void>((resolve, reject) => {
      writer.on('finish', () => resolve());
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error);
    throw error;
  }
}

async function main() {
  // Crear directorio si no existe
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  // Descargar cada imagen
  for (const image of costaOesteImages) {
    const filename = `${image.id}.jpg`;
    console.log(`Downloading ${filename}...`);
    try {
      await downloadImage(image.url, filename);
      console.log(`Successfully downloaded ${filename}`);
    } catch (error) {
      console.error(`Failed to download ${filename}`);
    }
  }

  console.log('All images downloaded successfully!');
}

main().catch(console.error); 