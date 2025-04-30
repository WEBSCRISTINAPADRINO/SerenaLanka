const ftp = require('basic-ftp');
const fs = require('fs');
const path = require('path');

// Configuración del servidor FTP
const config = {
  host: 'www.serenalanka.com',
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  secure: true
};

// Directorios a subir
const directories = [
  {
    local: 'out',
    remote: '/public_html'
  },
  {
    local: 'public/images',
    remote: '/public_html/images'
  }
];

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    // Conectar al servidor
    await client.access(config);
    console.log('Conectado al servidor FTP');

    // Subir cada directorio
    for (const dir of directories) {
      console.log(`Subiendo directorio: ${dir.local}`);
      await client.uploadFromDir(dir.local, dir.remote);
      console.log(`Directorio ${dir.local} subido correctamente`);
    }

    console.log('Despliegue completado con éxito');
  } catch (err) {
    console.error('Error durante el despliegue:', err);
  } finally {
    client.close();
  }
}

deploy(); 