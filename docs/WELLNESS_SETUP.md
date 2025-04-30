# Configuración de la Sección Wellness

## Estructura de Archivos

```
src/
├── app/
│   └── wellness/
│       ├── page.tsx              # Página principal de wellness
│       ├── yoga/
│       │   └── page.tsx         # Página de yoga
│       ├── meditacion/
│       │   └── page.tsx         # Página de meditación
│       ├── ayurveda/
│       │   └── page.tsx         # Página de ayurveda
│       └── nutricion/
│           └── page.tsx         # Página de nutrición
├── config/
│   ├── wellness-metadata.ts     # Metadatos SEO
│   └── wellness-images.ts       # Configuración de imágenes
└── public/
    └── images/
        └── wellness/
            ├── yoga/
            ├── meditacion/
            ├── ayurveda/
            └── nutricion/
```

## Configuración de Metadatos

Los metadatos para cada página se encuentran en `src/config/wellness-metadata.ts`:

```typescript
export const wellnessMetadata = {
  base: {
    title: 'Wellness en Sri Lanka | Experiencias de Bienestar y Salud',
    description: 'Descubre el auténtico bienestar en Sri Lanka...',
    keywords: 'wellness, Sri Lanka, yoga, meditación...'
  },
  // ... configuraciones específicas para cada página
};
```

## Gestión de Imágenes

Las imágenes se gestionan a través de `src/config/wellness-images.ts`:

```typescript
export interface WellnessImage {
  id: string;
  url: string;
  title: string;
  description: string;
  location: string;
}

export const wellnessImages = {
  yoga: [
    {
      id: 'yoga-1',
      url: '/images/wellness/yoga/yoga-beach.jpg',
      // ... más propiedades
    }
  ],
  // ... más categorías
};
```

## Scripts de Utilidad

Para descargar imágenes de ejemplo:

```bash
npm run download-images
```

Este script descarga imágenes de Unsplash y las organiza en los directorios correspondientes.

## Componentes Reutilizables

Cada página de wellness utiliza los siguientes componentes:

1. **Hero Section**
   - Imagen de fondo
   - Título y subtítulo
   - Call to action

2. **Galería de Imágenes**
   - Grid responsive
   - Efectos hover
   - Información detallada

3. **Formularios de Contacto**
   - Campos personalizados
   - Validación
   - Integración con API

## SEO y Optimización

1. **Metadatos**
   - Títulos optimizados
   - Descripciones únicas
   - Keywords relevantes

2. **Estructura HTML**
   - Semántica correcta
   - Headings jerárquicos
   - Alt text en imágenes

3. **Rendimiento**
   - Optimización de imágenes
   - Lazy loading
   - Caché configurado

## Despliegue

La sección wellness se despliega automáticamente a través de GitHub Actions:

1. Construcción del proyecto
2. Generación de archivos estáticos
3. Despliegue FTP
4. Configuración de .htaccess

## Mantenimiento

1. **Actualización de Contenido**
   - Revisión mensual de metadatos
   - Actualización de imágenes
   - Verificación de enlaces

2. **Monitoreo**
   - Rendimiento de páginas
   - Errores 404
   - Tiempos de carga

3. **SEO**
   - Análisis de keywords
   - Optimización continua
   - Seguimiento de rankings

## Configuración de Next.js

Para la sección wellness, hemos configurado Next.js con las siguientes opciones:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        '**/*.txt',
      ],
    },
  },
}
```

### Resolución de Errores 404

Para evitar errores 404 en las páginas de wellness:

1. **Configuración de Rutas Estáticas**
   - Uso de `generateStaticParams` en cada página
   - Ejemplo para la página de nutrición:
   ```typescript
   // src/app/wellness/nutricion/generateStaticParams.ts
   export async function generateStaticParams() {
     return [
       { slug: 'nutricion' }
     ];
   }
   ```

2. **Configuración de .htaccess**
   ```apache
   RewriteEngine On
   RewriteBase /
   
   # Redirigir www a no-www
   RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
   RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
   
   # Redirigir HTTP a HTTPS
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # Manejar rutas de Next.js
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ /$1.html [L]
   ```

3. **Gestión de Archivos**
   - Eliminación de archivos .txt generados automáticamente
   - Configuración de caché para archivos estáticos
   - Optimización de imágenes 