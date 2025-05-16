'use client';
import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
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

const centerCostaSur: [number, number] = [5.9833, 80.5167];

export default function MapaCostaSur() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<any>(null);
  const markers = useRef<any[]>([]);

  useEffect(() => {
    let leafletMap: any;

    import("leaflet").then((L) => {
      // Configurar iconos por defecto
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/images/map/marker-icon-2x.png",
        iconUrl: "/images/map/marker-icon.png",
        shadowUrl: "/images/map/marker-shadow.png",
      });

      // Inicializar el mapa
      leafletMap = L.map(mapContainer.current!, {
        center: centerCostaSur,
        zoom: 10,
        minZoom: 9,
        maxZoom: 13,
        scrollWheelZoom: true
      });

      // Añadir capa base
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
      }).addTo(leafletMap);

      // Añadir marcadores
      lugaresCostaSur.forEach((lugar) => {
        const marker = L.marker([lugar.coordenadas.lat, lugar.coordenadas.lng])
          .bindPopup(`
            <div>
              <h3>${lugar.nombre}</h3>
              <p>${lugar.descripcion}</p>
              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                ${(lugar.actividades || []).map(
                  act => iconosActividades[act] ? `<span style="font-size: 1.5em;">${iconosActividades[act]}</span> <span>${act}</span>` : `<span>${act}</span>`
                ).join('<br>')}
              </div>
            </div>
          `)
          .addTo(leafletMap);
        markers.current.push(marker);
      });

      map.current = leafletMap;
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
    <div className="w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
