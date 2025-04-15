# Estructura de Imágenes para Yala

## Organización de Carpetas

```
yala/
├── hero/              # Imágenes principales para el encabezado
├── experiencias/      # Imágenes de las actividades y experiencias
├── galeria/          # Imágenes para la galería principal
├── alojamientos/     # Imágenes de hoteles y lodges
├── fauna/            # Imágenes de animales salvajes
├── paisajes/         # Imágenes de paisajes y naturaleza
└── icons/            # Iconos y marcadores para mapas
```

## Requisitos de Imágenes

### Hero
- Resolución: 1920x1080px mínimo
- Formato: JPG
- Optimización: Compresión progresiva
- Nombres requeridos:
  - hero-main.jpg
  - hero-mobile.jpg

### Experiencias
- Resolución: 800x600px
- Formato: JPG
- Nombres requeridos:
  - safari-privado.jpg
  - fotografia-naturaleza.jpg
  - picnic-gourmet.jpg
  - amanecer-selva.jpg

### Galería
- Resolución: 1200x800px
- Formato: JPG
- Nombres requeridos:
  - leopardo.jpg
  - elefantes.jpg
  - paisaje.jpg
  - amanecer.jpg
  - aves.jpg
  - laguna.jpg

### Alojamientos
- Resolución: 800x600px
- Formato: JPG
- Nombres sugeridos:
  - wild-trails.jpg
  - leopard-nest.jpg
  - cinnamon-wild.jpg

### Fauna
- Resolución: 800x600px
- Formato: JPG
- Nombres sugeridos:
  - leopardo-1.jpg
  - elefantes-1.jpg
  - cocodrilo-1.jpg
  - aves-1.jpg

### Paisajes
- Resolución: 800x600px
- Formato: JPG
- Nombres sugeridos:
  - amanecer-1.jpg
  - atardecer-1.jpg
  - laguna-1.jpg
  - sabana-1.jpg

### Icons
- Resolución: 64x64px
- Formato: SVG
- Nombres requeridos:
  - marker.svg
  - leopard-marker.svg
  - elephant-marker.svg

## Optimización

Todas las imágenes deben:
- Estar optimizadas para web
- Incluir metadatos ALT para accesibilidad
- Tener un tamaño máximo de 500KB (excepto hero)
- Mantener una buena calidad visual

## Convenciones de Nombres

1. Usar solo minúsculas
2. Separar palabras con guiones
3. No usar espacios ni caracteres especiales
4. Incluir número de versión si hay variantes (-1, -2, etc.)

## Responsividad

- Las imágenes hero deben tener versiones para móvil
- Considerar el uso de srcset para imágenes responsivas
- Implementar lazy loading para optimizar el rendimiento

## Mantenimiento

- Actualizar imágenes cada 6 meses
- Mantener copias de respaldo
- Documentar cambios en este README 