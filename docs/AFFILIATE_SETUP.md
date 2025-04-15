# Configuración de Programas de Afiliados

## Resumen de Implementación

La web utiliza múltiples programas de afiliados para monetización, implementados a través de un sistema centralizado en `src/config/affiliates.ts` y componentes reutilizables.

### Estructura Principal

```typescript
src/
  ├── config/
  │   └── affiliates.ts       # Configuración central de afiliados
  ├── components/
  │   ├── common/
  │   │   └── AffiliateLink.tsx  # Componente reutilizable para enlaces
  │   ├── Hero.tsx           # Enlaces principales en el hero
  │   ├── CustomItinerary.tsx    # Enlaces en el planificador
  │   └── RecommendedProducts.tsx # Productos de Amazon
```

## Programas de Afiliados Implementados

### 1. Booking.com
- **ID**: 7965268
- **Tipo de Enlaces**: 
  - Hoteles y alojamientos
  - Villas privadas
  - Resorts
- **Ubicación**: Hero, CustomItinerary
- **Formato URL**: `?aid=ID`

### 2. GetYourGuide
- **ID**: ABCD123 (Pendiente de actualizar)
- **Tipo de Enlaces**:
  - Tours culturales
  - Actividades de aventura
  - Experiencias de bienestar
- **Ubicación**: Hero, CustomItinerary
- **Formato URL**: `?partner_id=ID`

### 3. Aviator
- **ID**: XYZ789 (Pendiente de actualizar)
- **Tipo de Enlaces**:
  - Vuelos a Sri Lanka
  - Ofertas especiales
- **Ubicación**: Hero, CustomItinerary
- **Formato URL**: `?ref=ID`

### 4. Amazon
- **ID**: ABC123 (Pendiente de actualizar)
- **Tipo de Enlaces**:
  - Equipo de viaje
  - Cámaras y accesorios
  - Productos de bienestar
- **Ubicación**: RecommendedProducts
- **Formato URL**: `?tag=ID`

### 5. Agoda
- **ID**: DEF456 (Pendiente de actualizar)
- **Tipo de Enlaces**:
  - Hoteles de lujo
  - Resorts en playa
- **Ubicación**: Hero, CustomItinerary
- **Formato URL**: `?cid=ID`

### 6. Expedia
- **ID**: GHI789 (Pendiente de actualizar)
- **Tipo de Enlaces**:
  - Hoteles
  - Paquetes vacacionales
- **Ubicación**: CustomItinerary
- **Formato URL**: `?affcid=ID`

### 7. Klook
- **ID**: JKL012 (Pendiente de actualizar)
- **Tipo de Enlaces**:
  - Actividades locales
  - Tours especializados
- **Ubicación**: Hero, CustomItinerary
- **Formato URL**: `?aid=ID`

## Implementación SEO

Todos los enlaces de afiliados incluyen:
- `rel="nofollow sponsored"`
- `target="_blank"`
- `data-platform` para tracking

## Componentes con Enlaces de Afiliados

### Hero
- Enlaces principales para hoteles y vuelos
- Enlaces secundarios para tours y experiencias

### CustomItinerary
- Sección de alojamientos exclusivos
- Sección de experiencias únicas
- Botón de vuelos destacado

### RecommendedProducts
- Productos Amazon organizados por categorías
- Cada producto tiene enlaces individuales y generales

## Próximos Pasos

1. **Actualización de IDs**:
   - Obtener y actualizar los IDs reales de cada plataforma
   - Verificar el funcionamiento de los enlaces

2. **Implementación de Tracking**:
   - Configurar Google Analytics para seguimiento
   - Implementar eventos personalizados

3. **Optimización**:
   - A/B testing de ubicaciones de enlaces
   - Monitoreo de tasas de conversión

4. **Expansión**:
   - Evaluar nuevos programas de afiliados
   - Añadir más categorías de productos

## Notas de Mantenimiento

- Revisar mensualmente los enlaces y IDs
- Actualizar precios y ofertas regularmente
- Monitorear el rendimiento de cada programa
- Mantener actualizada la documentación 