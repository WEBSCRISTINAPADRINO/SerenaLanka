# Web de Turismo de Lujo Accesible en Sri Lanka

## Descripción
Plataforma web inspiradora y guía para viajeros que buscan experiencias de lujo auténtico a buen precio en Sri Lanka.

## Stack Tecnológico
- Next.js 14
- TypeScript
- Tailwind CSS
- API de Google Maps
- API de OpenWeather
- APIs de afiliados (Booking.com, Skyscanner, etc.)

## Estructura del Proyecto
```
src/
├── app/                    # Rutas y páginas principales
│   ├── page.tsx           # Homepage
│   ├── destinos/          # Páginas de destinos
│   ├── experiencias/      # Páginas de experiencias
│   ├── wellness/          # Sección de bienestar
│   ├── planifica/         # Herramientas de planificación
│   └── sobre-nosotros/    # Información sobre el proyecto
├── components/            # Componentes reutilizables
├── lib/                   # Utilidades y configuraciones
└── styles/               # Estilos globales
```

## Documentación Detallada
- [Arquitectura Técnica](docs/ARCHITECTURE.md)
- [Guía de Estilo](docs/STYLE_GUIDE.md)
- [Guía de Contenido](docs/CONTENT_GUIDE.md)
- [Integración de APIs](docs/API_INTEGRATION.md)
- [Estrategia SEO](docs/SEO_STRATEGY.md)
- [Herramientas SEO](docs/SEO_TOOLS.md)
- [Experiencias](docs/EXPERIENCIAS.md)

## Características Principales
- Diseño responsive y moderno
- Optimización SEO avanzada
- Integración con APIs de clima y mapas
- Sistema de afiliados integrado
- Contenido personalizable
- Experiencias únicas y auténticas

## Páginas Principales

### Homepage (/)
- Hero con slider de imágenes impactantes
- Manifesto de lujo accesible
- Exploración de regiones
- Perfiles de viajeros
- Itinerario personalizado
- Testimonios
- Blog preview
- Newsletter

### Destinos (/destinos)
- Hero con imagen de fondo
- Grid de regiones principales
- Mejores épocas para visitar
- Mapa interactivo
- Call to action

### Experiencias (/experiencias)
- Hero con imagen impactante
- Introducción emocional
- Grid de experiencias con:
  - Imágenes atractivas
  - Descripciones persuasivas
  - Precios y duración
  - Mejor época
  - Emociones que evoca
  - Enlaces de afiliación
- Sección de valores añadidos
- Call to action personalizado

## Desarrollo
1. Clonar repositorio
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno
4. Ejecutar en desarrollo: `npm run dev`

## Mantenimiento
- Actualización regular de contenido
- Monitoreo de rendimiento
- Optimización SEO continua
- Gestión de afiliados

## Contribución
- Seguir guía de estilo
- Respetar estructura de componentes
- Mantener documentación actualizada
- Respetar estrategia SEO
- Utilizar herramientas SEO aprobadas

## Licencia
Todos los derechos reservados 

## Monetización

La web implementa una estrategia de monetización basada en:

1. **Programas de Afiliados**:
   - Booking.com para alojamientos
   - GetYourGuide para experiencias
   - Amazon para equipamiento
   - Y más (ver [AFFILIATE_SETUP.md](docs/AFFILIATE_SETUP.md))

2. **Contenido Premium**:
   - Guías descargables
   - Itinerarios personalizados
   - Acceso a comunidad exclusiva 