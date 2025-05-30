'use client';
import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { lugaresCostaSur } from "@/config/costa-sur-data";

// Relación de actividades con iconos
const iconosActividades: Record<string, string> = {
  "Avistamiento de ballenas": "🐋",
  "Avistamiento de ballenas y delfines": "🐋",
  "Nado con tortugas": "🐢",
  "Snorkel": "🤿",
  "Buceo": "🤿",
  "Yoga": "🧘‍♂️",
  "Retiros de yoga": "🧘‍♂️",
  "Masajes ayurvédicos": "💆‍♀️",
  "Tratamientos de belleza": "💅",
  "Clases de cocina": "🍲",
  "Clases de cocina tradicional cingalesa": "🍲",
  "Safari": "🐊",
  "Safari en Yala": "🐆",
  "Safari en Udawalawe": "🐘",
  "Exploración de templos": "🏯",
  "Templo": "🏯",
  "Observación de aves": "🦜",
  "Paseos en barco": "🛥️",
  "Granja de serpientes": "🐍",
  "Reserva de Sinharaja": "🐒",
  "Monos": "🐒",
  "Senderismo": "🥾",
  "Trekking": "🥾",
  "Surf": "🏄‍♂️",
  "Clases de surf": "🏄‍♂️",
  "Pesca": "🎣",
  "Kayak": "🛶",
  "Meditación": "🧘‍♂️",
  "Spa": "🧖",
  "Shopping": "🛍️",
  "Gastronomía local": "🍲",
  "Compras locales": "🛍️",
  "Fuerte holandés": "🏰",
  "Playa": "🏖️",
  "Mercado local": "🛒",
  "Jardines medicinales": "🌿",
  "Vistas panorámicas": "🌅",
  "Arquitectura budista": "🛕",
  "Pinturas murales": "🎨",
  "Fotografía de naturaleza": "📷"
};

const centerCostaSur: [number, number] = [5.9833, 80.5167]; // Centro aproximado de la Costa Sur

// Leyenda de actividades y slugs para URLs
const leyendaActividades: { nombre: string; icono: string; slug: string }[] = [
  { nombre: "Avistamiento de ballenas", icono: "🐋", slug: "avistamiento-ballenas" },
  { nombre: "Nado con tortugas", icono: "🐢", slug: "nado-tortugas" },
  { nombre: "Snorkel", icono: "🤿", slug: "snorkel" },
  { nombre: "Yoga", icono: "🧘‍♂️", slug: "yoga" },
  { nombre: "Masajes ayurvédicos", icono: "💆‍♀️", slug: "masajes-ayurvedicos" },
  { nombre: "Tratamientos de belleza", icono: "💅", slug: "tratamientos-belleza" },
  { nombre: "Clases de cocina", icono: "🍲", slug: "clases-cocina" },
  { nombre: "Safari", icono: "🐊", slug: "safari" },
  { nombre: "Safari en Yala", icono: "🐆", slug: "safari-yala" },
  { nombre: "Safari en Udawalawe", icono: "🐘", slug: "safari-udawalawe" },
  { nombre: "Exploración de templos", icono: "🏯", slug: "templos" },
  { nombre: "Observación de aves", icono: "🦜", slug: "observacion-aves" },
  { nombre: "Paseos en barco", icono: "🛥️", slug: "paseos-barco" },
  { nombre: "Granja de serpientes", icono: "🐍", slug: "granja-serpientes" },
  { nombre: "Reserva de Sinharaja", icono: "🐒", slug: "sinharaja" },
  { nombre: "Senderismo", icono: "🥾", slug: "senderismo" },
  { nombre: "Trekking", icono: "🥾", slug: "trekking" },
  { nombre: "Surf", icono: "🏄‍♂️", slug: "surf" },
  { nombre: "Pesca", icono: "🎣", slug: "pesca" },
  { nombre: "Kayak", icono: "🛶", slug: "kayak" },
  { nombre: "Spa", icono: "🧖", slug: "spa" },
  { nombre: "Shopping", icono: "🛍️", slug: "shopping" },
  { nombre: "Gastronomía local", icono: "🍲", slug: "gastronomia-local" },
];

export default function MapaCostaSur() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<L.Marker[]>([]);
  const [lugarSeleccionado, setLugarSeleccionado] = useState(lugaresCostaSur[0]);

  // Navegación por flechas
  const currentIndex = lugaresCostaSur.findIndex(l => l.id === lugarSeleccionado.id);
  const prevLugar = () => setLugarSeleccionado(lugaresCostaSur[(currentIndex - 1 + lugaresCostaSur.length) % lugaresCostaSur.length]);
  const nextLugar = () => setLugarSeleccionado(lugaresCostaSur[(currentIndex + 1) % lugaresCostaSur.length]);

  useEffect(() => {
    if (typeof window === "undefined" || !mapContainer.current || map.current) return;

    // Configurar iconos por defecto
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/images/map/marker-icon-2x.png",
      iconUrl: "/images/map/marker-icon.png",
      shadowUrl: "/images/map/marker-shadow.png",
    });

    // Inicializar el mapa
    map.current = L.map(mapContainer.current, {
      center: centerCostaSur,
      zoom: 10,
      minZoom: 9,
      maxZoom: 13,
      scrollWheelZoom: true
    });

    // Añadir capa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map.current);

    // Añadir marcadores
    lugaresCostaSur.forEach((lugar) => {
      const actividades = lugar.actividades || [];
      const iconos = actividades.map(act => iconosActividades[act] || "").filter(Boolean);
      const popupHtml = `
        <div class="p-3">
          <h3 class="text-lg font-bold text-tropical-green mb-1">${lugar.nombre}</h3>
          <p class="text-sm text-elephant-gray mb-1">${lugar.tipo}</p>
          <div class="flex flex-wrap gap-1 mb-2">
            ${iconos.map(icono => `<span class="text-xl">${icono}</span>`).join(" ")}
          </div>
          <p class="text-sm text-elephant-gray mb-1">${lugar.descripcion}</p>
        </div>
      `;

      const marker = L.marker([lugar.coordenadas.lat, lugar.coordenadas.lng])
        .bindPopup(popupHtml)
        .addTo(map.current!);

      marker.on("click", () => setLugarSeleccionado(lugar));
      markers.current.push(marker);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <button
            onClick={prevLugar}
            className="p-2 rounded-full bg-tropical-green text-white hover:bg-opacity-90"
          >
            ←
          </button>
          <div className="text-center">
            <h3 className="font-bold text-tropical-green">{lugarSeleccionado.nombre}</h3>
            <p className="text-sm text-elephant-gray">{lugarSeleccionado.tipo}</p>
          </div>
          <button
            onClick={nextLugar}
            className="p-2 rounded-full bg-tropical-green text-white hover:bg-opacity-90"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
