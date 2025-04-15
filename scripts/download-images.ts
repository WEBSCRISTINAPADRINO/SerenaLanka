// @ts-nocheck
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import sharp from 'sharp';

// Configuración de imágenes para Yala
const yalaImages = {
  hero: [
    {
      src: 'https://images.unsplash.com/photo-1625471883722-9973b1c7e5cd?auto=format&fit=crop',
      alt: 'Elefante salvaje en Yala National Park',
      width: 1920,
      height: 1080,
      filename: 'yala-hero-1.jpg'
    }
  ],
  experiencias: [
    {
      src: 'https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?auto=format&fit=crop',
      alt: 'Safari en Yala',
      width: 800,
      height: 600,
      filename: 'yala-safari-1.jpg'
    },
    {
      src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop',
      alt: 'Avistamiento de aves en Yala',
      width: 800,
      height: 600,
      filename: 'yala-birdwatching-1.jpg'
    }
  ],
  galeria: [
    {
      src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop',
      alt: 'Paisaje de Yala al atardecer',
      width: 1200,
      height: 800,
      filename: 'yala-landscape-1.jpg'
    },
    {
      src: 'https://images.unsplash.com/photo-1578326457068-b4e21bf6e79a?auto=format&fit=crop',
      alt: 'Vida silvestre en Yala',
      width: 1200,
      height: 800,
      filename: 'yala-wildlife-1.jpg'
    }
  ],
  alojamientos: [
    {
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop',
      alt: 'Glamping en Yala',
      width: 800,
      height: 600,
      filename: 'yala-glamping-1.jpg'
    }
  ],
  fauna: [
    {
      src: 'https://images.unsplash.com/photo-1589813619402-9d71e1c1c8e4?auto=format&fit=crop',
      alt: 'Elefante en su hábitat natural',
      width: 1200,
      height: 800,
      filename: 'yala-elephant-1.jpg'
    },
    {
      src: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?auto=format&fit=crop',
      alt: 'Leopardo de Sri Lanka',
      width: 1200,
      height: 800,
      filename: 'yala-leopard-1.jpg'
    }
  ],
  paisajes: [
    {
      src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop',
      alt: 'Atardecer en Yala',
      width: 1200,
      height: 800,
      filename: 'yala-sunset-1.jpg'
    },
    {
      src: 'https://images.unsplash.com/photo-1578326457068-b4e21bf6e79a?auto=format&fit=crop',
      alt: 'Playa salvaje de Yala',
      width: 1200,
      height: 800,
      filename: 'yala-beach-1.jpg'
    }
  ]
};

const IMAGES_BASE_PATH = path.join(process.cwd(), 'public/images/destinos/yala');

async function downloadAndOptimizeImage(url, outputPath, width, height) {
  try {
    // Descargar imagen
    const response = await axios.get(url, {
      responseType: 'arraybuffer'
    });

    // Optimizar con Sharp
    const sharpInstance = sharp(response.data);
    await sharpInstance
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: 80,
        progressive: true
      })
      .toFile(outputPath);

    console.log(`✅ Imagen descargada y optimizada: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error procesando imagen ${url}:`, error);
  }
}

async function processImages() {
  // Procesar hero images
  const heroPath = path.join(IMAGES_BASE_PATH, 'hero');
  if (!fs.existsSync(heroPath)) fs.mkdirSync(heroPath, { recursive: true });
  
  for (const hero of yalaImages.hero) {
    await downloadAndOptimizeImage(
      hero.src,
      path.join(heroPath, hero.filename),
      hero.width,
      hero.height
    );
  }

  // Procesar experiencias
  const experienciasPath = path.join(IMAGES_BASE_PATH, 'experiencias');
  if (!fs.existsSync(experienciasPath)) fs.mkdirSync(experienciasPath, { recursive: true });
  
  for (const exp of yalaImages.experiencias) {
    await downloadAndOptimizeImage(
      exp.src,
      path.join(experienciasPath, exp.filename),
      exp.width,
      exp.height
    );
  }

  // Procesar galería
  const galeriaPath = path.join(IMAGES_BASE_PATH, 'galeria');
  if (!fs.existsSync(galeriaPath)) fs.mkdirSync(galeriaPath, { recursive: true });
  
  for (const img of yalaImages.galeria) {
    await downloadAndOptimizeImage(
      img.src,
      path.join(galeriaPath, img.filename),
      img.width,
      img.height
    );
  }

  // Procesar alojamientos
  const alojamientosPath = path.join(IMAGES_BASE_PATH, 'alojamientos');
  if (!fs.existsSync(alojamientosPath)) fs.mkdirSync(alojamientosPath, { recursive: true });
  
  for (const aloj of yalaImages.alojamientos) {
    await downloadAndOptimizeImage(
      aloj.src,
      path.join(alojamientosPath, aloj.filename),
      aloj.width,
      aloj.height
    );
  }

  // Procesar fauna
  const faunaPath = path.join(IMAGES_BASE_PATH, 'fauna');
  if (!fs.existsSync(faunaPath)) fs.mkdirSync(faunaPath, { recursive: true });
  
  for (const animal of yalaImages.fauna) {
    await downloadAndOptimizeImage(
      animal.src,
      path.join(faunaPath, animal.filename),
      animal.width,
      animal.height
    );
  }

  // Procesar paisajes
  const paisajesPath = path.join(IMAGES_BASE_PATH, 'paisajes');
  if (!fs.existsSync(paisajesPath)) fs.mkdirSync(paisajesPath, { recursive: true });
  
  for (const paisaje of yalaImages.paisajes) {
    await downloadAndOptimizeImage(
      paisaje.src,
      path.join(paisajesPath, paisaje.filename),
      paisaje.width,
      paisaje.height
    );
  }
}

// Ejecutar el script
processImages().then(() => {
  console.log('✨ Proceso de descarga y optimización completado');
}).catch((error) => {
  console.error('❌ Error en el proceso:', error);
}); 