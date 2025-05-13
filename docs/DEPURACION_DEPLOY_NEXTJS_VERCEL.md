# Guía de Depuración y Buenas Prácticas: Deploy Next.js + Vercel

## 1. Problemas encontrados

### a) Cambios no visibles en producción
- Los cambios subidos a GitHub no se reflejaban en Vercel.
- El commit desplegado en Vercel no era el más reciente.
- El proyecto tenía una carpeta `out/` que podía interferir con el build.
- Había diferencias entre la configuración de build en Vercel y la del proyecto.

### b) Error de metadata y Server/Client Components
- Error: `You are attempting to export "metadata" from a component marked with "use client", which is disallowed.`
- Causa: No se puede exportar `metadata` en un Client Component. La página debe ser un Server Component para usar metadata.

### c) Error de event handlers en Server Components
- Error: `Event handlers cannot be passed to Client Component props.`
- Causa: No se pueden usar props como `onClick` en Server Components. Si se necesita interactividad, el componente debe ser Client Component (`"use client"`).

---

## 2. Soluciones aplicadas

### a) Sincronización de cambios
- Confirmar que el commit más reciente en GitHub es el que despliega Vercel.
- Eliminar la carpeta `out/` del repo si no se usa `next export`.
- Asegurarse de que la configuración de build en Vercel es:
  - Framework: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
- Hacer push a la rama `main` y redeploy manual si es necesario.

### b) Server/Client Components y metadata
- Eliminar la línea `"use client"` de la página si se necesita exportar `metadata`.
- Mantener la página como Server Component para SEO y metadata.
- Si se necesita interactividad, extraer los componentes interactivos a Client Components hijos.

### c) Event handlers (`onClick`, etc.)
- No usar `onClick` ni otros event handlers en Server Components.
- Si se necesita interactividad (por ejemplo, scroll suave en un botón), convertir el componente a Client Component añadiendo `"use client"` al principio del archivo.
- Ejemplo aplicado: `HeroCostaSur.tsx` convertido en Client Component para permitir el uso de `onClick`.
- En la página principal, los botones de la CTA final se cambiaron de `<button>` a `<a>` para evitar event handlers innecesarios.

---

## 3. Buenas prácticas para deploy Next.js + Vercel

- **Mantén la página principal como Server Component** si necesitas SEO y metadata.
- **Usa Client Components solo para partes interactivas** (añade `"use client"` solo donde sea necesario).
- **No uses event handlers en Server Components.**
- **Elimina la carpeta `out/`** si no usas `next export`.
- **Verifica siempre el commit desplegado en Vercel** y que coincida con el de GitHub.
- **Haz build local con `npm run build`** antes de hacer push para detectar errores antes del deploy.
- **Revisa los logs completos de Vercel** si hay errores de build.
- **Si todo falla, crea un nuevo proyecto en Vercel** y conecta el repo desde cero.

---

## 4. Resumen de pasos correctos para desplegar

1. Haz tus cambios en local.
2. Ejecuta `npm run build` para comprobar que no hay errores.
3. Haz commit y push a la rama `main` en GitHub.
4. Verifica que el commit aparece en Vercel y que el deploy se inicia.
5. Si hay errores, revisa los logs y corrige según los mensajes.
6. Si necesitas interactividad, usa Client Components solo donde sea necesario.
7. Elimina la carpeta `out/` si no usas exportación estática.
8. Si el problema persiste, crea un nuevo proyecto en Vercel y conecta el repo.

---

**Este documento sirve como referencia para futuras depuraciones y para evitar los errores más comunes en proyectos Next.js + Vercel.** 