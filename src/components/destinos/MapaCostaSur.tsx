   'use client';
import React, { useState } from "react";

const zonas = [
  {
    nombre: "Mirissa",
    left: "68%",
    top: "82%",
    icono: "🐋",
    actividades: "Avistamiento de ballenas, surf, nado con tortugas"
  },
  {
    nombre: "Galle",
    left: "60%",
    top: "78%",
    icono: "🏯",
    actividades: "Fuerte colonial, compras boutique, gastronomía"
  },
  {
    nombre: "Unawatuna",
    left: "62%",
    top: "80%",
    icono: "🧘‍♂️",
    actividades: "Yoga, playas, snorkel con tortugas"
  },
  {
    nombre: "Tangalle",
    left: "80%",
    top: "88%",
    icono: "💆‍♀️",
    actividades: "Spas de lujo, playas tranquilas, observación de aves"
  },
  {
    nombre: "Hiriketiya",
    left: "77%",
    top: "90%",
    icono: "🏄‍♂️",
    actividades: "Surf, yoga, bares de playa"
  },
  {
    nombre: "Weligama",
    left: "70%",
    top: "85%",
    icono: "🍲",
    actividades: "Surf, nado con tortugas, clases de cocina"
  },
  {
    nombre: "Yala",
    left: "92%",
    top: "88%",
    icono: "🦁",
    actividades: "Safari, elefantes, leopardos"
  },
  {
    nombre: "Sinharaja",
    left: "60%",
    top: "65%",
    icono: "🐒",
    actividades: "Monos, selva tropical, observación de aves"
  }
];

export default function MapaCostaSur() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8 mb-12">
      {/* Imagen de fondo */}
      <img
        src="/images/mapa-sri-lanka-regiones.jpg"
        alt="Mapa de regiones de Sri Lanka"
        className="w-full h-auto rounded-xl shadow-lg"
        style={{ filter: "grayscale(0.2) brightness(1.1)" }}
      />
      {/* Overlay para resaltar la Costa Sur (aproximado) */}
      <div
        className="absolute z-10 rounded-b-xl"
        style={{
          left: "58%",
          top: "77%",
          width: "30%",
          height: "18%",
          background: "rgba(46, 125, 50, 0.25)",
          pointerEvents: "none"
        }}
      />
      {/* Hotspots */}
      {zonas.map((zona) => (
        <div
          key={zona.nombre}
          className="absolute z-20 flex flex-col items-center group"
          style={{ left: zona.left, top: zona.top, transform: "translate(-50%, -50%)" }}
          onMouseEnter={() => setHovered(zona.nombre)}
          onMouseLeave={() => setHovered(null)}
        >
          <button
            className="w-10 h-10 bg-golden-sand border-4 border-tropical-green rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform"
            aria-label={zona.nombre}
            tabIndex={0}
          >
            {zona.icono}
          </button>
          {/* Tooltip */}
          {hovered === zona.nombre && (
            <div className="mt-2 px-4 py-2 bg-white border border-tropical-green rounded-xl shadow-xl text-sm text-elephant-gray font-lato text-center max-w-xs animate-fade-in">
              <div className="font-bold text-tropical-green mb-1">{zona.nombre}</div>
              <div>{zona.actividades}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
fix: marcar MapaCostaSur como Client Component).
