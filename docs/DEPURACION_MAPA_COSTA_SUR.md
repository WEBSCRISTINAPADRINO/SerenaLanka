# Depuración y pruebas: Mapa interactivo Costa Sur (Next.js + Vercel)

## Resumen del problema
- El mapa interactivo de la Costa Sur no se muestra en producción (Vercel), aunque el componente y la lógica parecen correctos.
- Se han realizado múltiples pruebas y cambios, pero el bloque de prueba mínimo tampoco se renderiza.

---

## Pasos y pruebas realizadas

1. **Revisión de importaciones y rutas**
   - Se probó tanto con rutas absolutas (`@/components/destinos/MapaCostaSur`) como relativas (`../../../components/destinos/MapaCostaSur`).
   - Se corrigieron rutas en todos los archivos relacionados.

2. **Verificación de existencia del archivo**
   - Se comprobó que `src/components/destinos/MapaCostaSur.tsx` no existía en el repo.
   - Se creó manualmente el archivo y se subió a GitHub.

3. **Prueba con componente mínimo**
   - Se dejó el componente con solo:
     ```tsx
     <div style={{background: 'yellow', padding: 40, textAlign: 'center'}}>Hola desde el mapa</div>
     ```
   - Aun así, no se renderiza nada en la página de la Costa Sur.

4. **Resolución de conflictos de merge**
   - Se resolvió un conflicto `add/add` en el archivo `MapaCostaSur.tsx` tras un `git pull`.
   - Se hizo commit y push de la versión mínima.

5. **Verificación de estructura de carpetas**
   - Confirmado: `src/components/destinos/MapaCostaSur.tsx` existe y está en la ruta correcta.

6. **Revisión de la página de la Costa Sur**
   - Se comprobó que la importación y renderizado de `<MapaCostaSur />` están presentes en `src/app/destinos/costa-sur/page.tsx`.
   - Se sugirió añadir un `<h1>PRUEBA VISIBLE</h1>` para comprobar si los cambios llegan a producción.

7. **Revisión de despliegue y caché**
   - Se recomendó hacer hard refresh y revisar los logs de Vercel.

---

## Posibles problemas a revisar mañana

- **La página de la Costa Sur en producción podría no estar usando el archivo `page.tsx` esperado** (problema de rutas, estructura o configuración de Next.js).
- **El import de `MapaCostaSur` podría estar fallando silenciosamente** (error de ruta, mayúsculas/minúsculas, o configuración de TypeScript/Next.js).
- **Vercel podría estar sirviendo una versión antigua o corrupta del build** (problema de caché o despliegue).
- **El componente podría estar dentro de un bloque de código que nunca se ejecuta**.
- **Errores de build o importación podrían estar ocultos en los logs de Vercel**.

---

## Siguiente paso recomendado
1. Editar `src/app/destinos/costa-sur/page.tsx` y añadir un `<h1>PRUEBA VISIBLE</h1>` al principio.
2. Hacer commit y push.
3. Comprobar si el texto aparece en producción.
4. Revisar los logs de Vercel si sigue sin aparecer nada.

---

**Este documento resume toda la depuración y los próximos pasos para retomar el problema del mapa de la Costa Sur.** 