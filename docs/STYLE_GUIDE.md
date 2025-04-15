# Guía de Estilo

## Paleta de Colores

### Colores Principales
- **Tropical Green** `#2E7D32`
  - Uso: Elementos principales, CTAs, acentos
  - Accesibilidad: AAA con texto blanco
  - Contexto: Naturaleza, crecimiento, frescura

- **Elephant Gray** `#424242`
  - Uso: Texto principal, fondos sutiles
  - Accesibilidad: AAA con texto blanco
  - Contexto: Elegancia, sofisticación

- **Golden Sand** `#F5DEB3`
  - Uso: Fondos, acentos suaves
  - Accesibilidad: AA con texto oscuro
  - Contexto: Calidez, playas, atardeceres

### Colores Secundarios
- **Ocean Blue** `#1976D2`
  - Uso: Enlaces, elementos interactivos
  - Accesibilidad: AAA con texto blanco
  - Contexto: Mar, tranquilidad

- **Sunset Orange** `#FF5722`
  - Uso: Acentos, alertas
  - Accesibilidad: AA con texto blanco
  - Contexto: Energía, pasión

- **Lotus Pink** `#E91E63`
  - Uso: Elementos destacados
  - Accesibilidad: AA con texto blanco
  - Contexto: Cultura, espiritualidad

- **Spice Red** `#D32F2F`
  - Uso: Errores, advertencias
  - Accesibilidad: AAA con texto blanco
  - Contexto: Urgencia, importancia

- **Coconut White** `#FFFFFF`
  - Uso: Fondos, texto sobre fondos oscuros
  - Accesibilidad: AAA con texto oscuro
  - Contexto: Limpieza, claridad

## Tipografía

### Fuentes
- **Títulos**: Playfair Display
  - Pesos: 400, 700
  - Uso: H1, H2, H3
  - Estilo: Elegante, serif

- **Texto**: Lato
  - Pesos: 300, 400, 700
  - Uso: Párrafos, botones, navegación
  - Estilo: Moderno, sans-serif

### Tamaños
- **H1**: 3.5rem (56px)
- **H2**: 2.5rem (40px)
- **H3**: 2rem (32px)
- **H4**: 1.5rem (24px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)

### Espaciado
- **Letra**: 1.5 (body), 1.2 (títulos)
- **Párrafos**: 1.5rem
- **Secciones**: 4rem

## Componentes

### Botones
- **Primario**
  ```css
  background: #2E7D32;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
  ```

- **Secundario**
  ```css
  background: transparent;
  border: 2px solid #2E7D32;
  color: #2E7D32;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
  ```

### Cards
- **Experiencia**
  ```css
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  ```

- **Destino**
  ```css
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  ```

### Badges
- **Precio**
  ```css
  background: #2E7D32;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  ```

- **Tiempo**
  ```css
  background: #1976D2;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  ```

### Iconos
- **Material Icons**
  - Tamaño: 1.5rem
  - Color: Inherit
  - Espaciado: 0.5rem

## Layout

### Grid
- **Desktop**: 12 columnas
- **Tablet**: 8 columnas
- **Mobile**: 4 columnas

### Espaciado
- **Secciones**: 4rem
- **Elementos**: 2rem
- **Componentes**: 1rem

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Efectos

### Hover
- **Cards**: 
  ```css
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
  ```

- **Botones**:
  ```css
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  ```

### Transiciones
- **Duración**: 0.3s
- **Timing**: ease
- **Propiedades**: all

## Imágenes

### Formatos
- **Fotos**: WebP con fallback JPG
- **Iconos**: SVG
- **Logos**: SVG

### Tamaños
- **Hero**: 1920x1080px
- **Cards**: 800x600px
- **Thumbnails**: 400x300px

### Optimización
- Lazy loading
- Responsive images
- Alt text descriptivo

## Accesibilidad

### Contraste
- Mínimo ratio: 4.5:1
- Texto grande: 3:1
- Elementos UI: 3:1

### Focus
- Outline visible
- Color: #2E7D32
- Estilo: 2px solid

### ARIA
- Labels descriptivos
- Roles semánticos
- Estados dinámicos

## Animaciones

### Transiciones
- **Duración**: 0.3s
- **Timing**: ease
- **Propiedades**: transform, opacity

### Hover States
- **Cards**: Elevación suave
- **Botones**: Escala y sombra
- **Enlaces**: Subrayado

### Loading States
- **Skeleton**: Pulse animation
- **Spinner**: Rotación suave
- **Progress**: Barra animada

## Responsive

### Mobile First
- Base styles para mobile
- Media queries para tablet/desktop
- Imágenes fluidas

### Breakpoints
```css
/* Mobile */
@media (min-width: 640px) { ... }

/* Tablet */
@media (min-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1280px) { ... }
```

### Grid System
```css
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

## Utilidades

### Espaciado
- **Margin**: m-{1-16}
- **Padding**: p-{1-16}
- **Gap**: gap-{1-16}

### Flexbox
- **Container**: flex
- **Direction**: flex-col, flex-row
- **Justify**: justify-{start,end,center,between}

### Grid
- **Container**: grid
- **Columns**: grid-cols-{1-12}
- **Gap**: gap-{1-16}

### Visibilidad
- **Display**: hidden, block, inline
- **Opacity**: opacity-{0-100}
- **Visibility**: visible, invisible
``` 