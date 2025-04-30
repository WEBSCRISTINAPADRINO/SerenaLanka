# Documentación del Mapa Interactivo de Sri Lanka

## 1. Componentes Principales

### 1.1 Icono del Mapa en el Navbar (`SriLankaIcon.tsx`)
```typescript
// Ubicación: src/components/icons/SriLankaIcon.tsx
export default function SriLankaIcon({ className = "w-6 h-6", color = "#2E7D32" }: SriLankaIconProps) {
  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="
        M 50 20
        C 42 25, 38 35, 35 45
        C 32 55, 30 65, 30 75
        C 30 90, 32 100, 35 110
        C 40 120, 45 125, 50 130
        C 55 125, 60 120, 65 110
        C 68 100, 70 90, 70 75
        C 70 65, 68 55, 65 45
        C 62 35, 58 25, 50 20
        Z
      " />
    </svg>
  );
}
```

### 1.2 Mapa Interactivo (`SriLankaMap.tsx`)
```typescript
// Ubicación: src/components/SriLankaMap.tsx
// Características principales:
// - Usa Leaflet para el mapa interactivo
// - Marcadores personalizados para cada destino
// - Popups informativos con estilos personalizados
// - Hover effects para mejor interactividad
```

## 2. Configuración

### 2.1 Dependencias Necesarias
```bash
npm install leaflet    # Biblioteca principal para el mapa
```

### 2.2 Estructura de Archivos
```
public/
  └── images/
      └── map/
          ├── marker-icon.png       # Icono normal
          ├── marker-icon-2x.png    # Icono retina
          └── marker-shadow.png     # Sombra del marcador
```

## 3. Características del Mapa

### 3.1 Configuración del Mapa
- Centro: [7.8731, 80.7718] (Centro de Sri Lanka)
- Zoom inicial: 8
- Zoom mínimo: 7
- Zoom máximo: 12
- Mapa base: OpenStreetMap

### 3.2 Destinos Principales
```typescript
const destinations = [
  {
    name: 'Colombo',
    coordinates: [6.9271, 79.8528],
    region: 'Costa Oeste',
    description: 'Capital cosmopolita con mezcla de modernidad y tradición'
  },
  // ... más destinos
];
```

### 3.3 Estilos Personalizados
```css
.custom-popup .leaflet-popup-content-wrapper {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
```

## 4. Integración en la Página

### 4.1 Página del Mapa (`/mapa`)
- Ruta: `/mapa`
- Componente: `MapaPage`
- Características:
  - Breadcrumbs para navegación
  - Título y descripción
  - Mapa interactivo
  - Categorías de destinos

### 4.2 Navegación
- Icono en el navbar que enlaza a la página del mapa
- Marcadores en el mapa que enlazan a páginas específicas de destinos

## 5. Personalización

### 5.1 Colores
- Verde tropical (#2E7D32) para iconos y elementos principales
- Azul océano (#1976D2) para elementos interactivos
- Gris elefante para textos

### 5.2 Interactividad
- Popups se abren al hover sobre marcadores
- Información detallada en popups:
  - Nombre del destino
  - Región
  - Descripción breve

## 6. Mantenimiento

### 6.1 Actualización de Destinos
Para añadir nuevos destinos, agregar al array `destinations` en `SriLankaMap.tsx`:
```typescript
{
  name: 'Nuevo Destino',
  coordinates: [latitud, longitud],
  region: 'Región',
  description: 'Descripción del destino'
}
```

### 6.2 Personalización de Estilos
Los estilos se pueden modificar en:
- `SriLankaMap.tsx` para estilos del mapa y popups
- `SriLankaIcon.tsx` para el icono del navbar 

## 7. Desarrollo y Despliegue

### 7.1 Entorno de Desarrollo
```bash
# Iniciar el servidor de desarrollo
npm run dev

# El mapa estará disponible en:
http://localhost:3000/mapa
```

### 7.2 Variables de Entorno
```env
# Necesarias para el despliegue en producción
NEXT_PUBLIC_MAPBOX_TOKEN=tu_token_aqui  # Si se decide usar Mapbox en el futuro
```

### 7.3 Optimización
- Los iconos del mapa están optimizados para dispositivos retina
- Las imágenes se cargan de forma lazy
- Los popups se renderizan solo cuando son necesarios

## 8. Responsividad

### 8.1 Adaptación Móvil
- El mapa se ajusta automáticamente al tamaño de la pantalla
- Altura mínima de 600px en desktop, ajustable en móvil
- Controles de zoom adaptados para touch

### 8.2 Breakpoints
```css
/* Tamaños del mapa según dispositivo */
.map-container {
  height: 600px;  /* Desktop */
  @media (max-width: 768px) {
    height: 400px;  /* Tablet */
  }
  @media (max-width: 480px) {
    height: 300px;  /* Mobile */
  }
}
```

## 9. SEO y Accesibilidad

### 9.1 SEO
- Títulos y descripciones optimizados para cada destino
- URLs amigables para cada región
- Metadatos específicos para la página del mapa

### 9.2 Accesibilidad
- Marcadores y popups navegables por teclado
- Textos alternativos para los iconos
- Contraste de colores optimizado
- ARIA labels en elementos interactivos

## 10. Solución de Problemas

### 10.1 Problemas Comunes
1. **Mapa no se carga**:
   - Verificar que Leaflet está instalado
   - Comprobar que los estilos de Leaflet están importados
   - Asegurar que el contenedor del mapa tiene dimensiones

2. **Marcadores no aparecen**:
   - Verificar que las imágenes de los marcadores existen en `/public/images/map/`
   - Comprobar las coordenadas
   - Validar que el zoom permite ver los marcadores

3. **Popups no funcionan**:
   - Revisar los event listeners
   - Verificar la estructura HTML de los popups
   - Comprobar los estilos personalizados

### 10.2 Mejores Prácticas
1. **Rendimiento**:
   - Usar `useCallback` para funciones de eventos
   - Implementar lazy loading para imágenes grandes
   - Limitar el número de marcadores visibles según el zoom

2. **Mantenimiento**:
   - Mantener las coordenadas en un archivo de configuración separado
   - Documentar cambios en el mapa
   - Hacer backups de la configuración

3. **Actualizaciones**:
   - Revisar periódicamente las actualizaciones de Leaflet
   - Mantener los marcadores y descripciones actualizados
   - Verificar los enlaces a las páginas de destinos

## 11. Recursos Adicionales

### 11.1 Referencias
- [Documentación de Leaflet](https://leafletjs.com/reference.html)
- [OpenStreetMap Wiki](https://wiki.openstreetmap.org/)
- [Next.js con Leaflet](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)

### 11.2 Herramientas Útiles
- [Coordenadas Finder](https://www.latlong.net/) - Para encontrar coordenadas exactas
- [Mapbox Studio](https://www.mapbox.com/studio) - Si se decide personalizar más el mapa
- [GeoJSON Tools](https://geojson.io/) - Para crear regiones personalizadas 