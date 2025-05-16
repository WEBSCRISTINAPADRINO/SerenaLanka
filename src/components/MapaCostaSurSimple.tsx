// components/MapaCostaSur.tsx
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const costaSurCoords = [
  [5.95, 80.2],   // Punto oeste
  [6.3, 80.2],    // Arriba oeste
  [6.3, 81.3],    // Arriba este
  [5.95, 81.3],   // Punto este
  [5.95, 80.2],   // Cierra el polígono
];

export default function MapaCostaSur() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer
        center={[6.1, 80.75]} // Centro aproximado de la Costa Sur
        zoom={9}
        style={{ height: '100%', width: '100%', borderRadius: '1rem', boxShadow: '0 4px 24px #0002' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Polygon
          positions={costaSurCoords}
          pathOptions={{ color: '#FF5722', fillColor: '#FF5722', fillOpacity: 0.2 }}
        />
      </MapContainer>
    </div>
  );
}
