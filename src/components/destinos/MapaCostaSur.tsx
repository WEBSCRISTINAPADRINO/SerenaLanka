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
  "Yoga": "🧘‍♂️",
  "Retiros de yoga": "🧘‍♂️",
  "Masajes ayurvédicos": "💆",
  "Tratamientos de belleza": "🧑‍🦰",
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
  "Senderismo": "🚶",
  "Trekking": "🥾",
  "Surf": "🏄‍♂️",
  "Clases de surf": "🏄‍♂️",
  "Pesca": "🎣",
  "Kayak": "🛶",
  "Meditación": "🧘‍♂️",
  "Spa": "🧖",
  "Shopping": "🛍️",
  "Gastronomía local": "🍲",
  "Compras locales": "🛍️"
};

const centerCostaSur: [number, number] = [5.9833, 80.5167]; // Centro aproximado de la Costa Sur

// Leyenda de actividades y slugs para URLs
const leyendaActividades: { nombre: string; icono: string; slug: string }[] = [
  { nombre: "Avistamiento de ballenas", icono: "🐋", slug: "avistamiento-ballenas" },
  { nombre: "Nado con tortugas", icono: "🐢", slug: "nado-tortugas" },
  { nombre: "Snorkel", icono: "🤿", slug: "snorkel" },
  { nombre: "Yoga", icono: "🧘‍♂️", slug: "yoga" },
  { nombre: "Masajes ayurvédicos", icono: "💆", slug: "masajes-ayurvedicos" },
  { nombre: "Tratamientos de belleza", icono: "🧑‍🦰", slug: "tratamientos-belleza" },
  { nombre: "Clases de cocina", icono: "🍲", slug: "clases-cocina" },
  { nombre: "Safari", icono: "🐊", slug: "safari" },
  { nombre: "Safari en Yala", icono: "🐆", slug: "safari-yala" },
  { nombre: "Safari en Udawalawe", icono: "🐘", slug: "safari-udawalawe" },
  { nombre: "Exploración de templos", icono: "🏯", slug: "templos" },
  { nombre: "Observación de aves", icono: "🦜", slug: "observacion-aves" },
  { nombre: "Paseos en barco", icono: "🛥️", slug: "paseos-barco" },
  { nombre: "Granja de serpientes", icono: "🐍", slug: "granja-serpientes" },
  { nombre: "Reserva de Sinharaja", icono: "🐒", slug: "sinharaja" },
  { nombre: "Senderismo", icono: "🚶", slug: "senderismo" },
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
          ${actividades.length > 0 ? `<ul class="list-disc pl-4 text-sm text-elephant-gray">${actividades.map(act => `<li>${iconosActividades[act] ? iconosActividades[act] + ' ' : ''}${act}</li>`).join('')}</ul>` : ''}
        </div>
      `;
      const marker = L.marker([lugar.coordenadas.lat, lugar.coordenadas.lng])
        .bindPopup(popupHtml, {
          maxWidth: 320,
          className: "custom-popup"
        })
        .addTo(map.current!);
      marker.on("click", () => setLugarSeleccionado(lugar));
      markers.current.push(marker);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      markers.current.forEach(marker => marker.remove());
      markers.current = [];
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Mapa a la izquierda */}
      <div className="w-full md:w-2/3 h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
        <div ref={mapContainer} className="w-full h-full" />
      </div>
      {/* Tarjeta lateral a la derecha */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
          {/* Navegación flechas */}
          <button onClick={prevLugar} className="absolute left-2 top-1/2 -translate-y-1/2 bg-golden-sand rounded-full p-2 shadow hover:bg-tropical-green hover:text-white transition-colors z-10" aria-label="Anterior">&#8592;</button>
          <button onClick={nextLugar} className="absolute right-2 top-1/2 -translate-y-1/2 bg-golden-sand rounded-full p-2 shadow hover:bg-tropical-green hover:text-white transition-colors z-10" aria-label="Siguiente">&#8594;</button>
          {/* Imagen */}
          {lugarSeleccionado.imagen && (
            <img src={lugarSeleccionado.imagen} alt={lugarSeleccionado.nombre} className="w-full h-48 object-cover rounded-xl mb-4" />
          )}
          {/* Nombre y tipo */}
          <h2 className="text-2xl font-playfair font-bold text-tropical-green mb-1">{lugarSeleccionado.nombre}</h2>
          <p className="text-sm text-elephant-gray mb-2 font-semibold">{lugarSeleccionado.tipo}</p>
          {/* Descripción */}
          <p className="text-base text-elephant-gray mb-4">{lugarSeleccionado.descripcion}</p>
          {/* Actividades */}
          {lugarSeleccionado.actividades && lugarSeleccionado.actividades.length > 0 && (
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-tropical-green mb-2">Actividades</h3>
              <ul className="flex flex-wrap gap-2">
                {lugarSeleccionado.actividades.map((act, i) => (
                  <li key={i} className="flex items-center gap-1 bg-golden-sand/40 rounded-full px-3 py-1 text-sm font-lato">
                    <span className="text-xl">{iconosActividades[act] || ""}</span> {act}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
