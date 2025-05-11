'use client';
import React from "react";

export default function HeroCostaSur() {
  const handleScroll = () => {
    const zonas = document.getElementById("zonas-costa-sur");
    if (zonas) {
      zonas.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center">
      {/* Imagen de fondo */}
      <img
        src="/images/costa-sur-hero.jpg"
        alt="Playa tropical en la Costa Sur de Sri Lanka"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="eager"
        fetchPriority="high"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10" />
      {/* Contenido */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-golden-sand drop-shadow-lg mb-4">
          Costa Sur de Sri Lanka
        </h1>
        <p className="text-xl md:text-2xl text-coconut-white font-lato mb-8 drop-shadow">
          Lujo salvaje, playas infinitas y alma tropical
        </p>
        <button
          onClick={handleScroll}
          className="bg-tropical-green hover:bg-tropical-green/90 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-colors"
        >
          Empieza a explorar
        </button>
      </div>
    </section>
  );
} 