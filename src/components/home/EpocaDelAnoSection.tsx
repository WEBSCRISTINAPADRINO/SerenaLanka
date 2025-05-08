import React from 'react';
import CardEpoca from '../CardEpoca';

interface EpocaDelAnoSectionProps {
  onSelectEpoca: (epoca: string) => void;
}

const epocas = [
  {
    key: 'invierno',
    titulo: 'Invierno',
    meses: 'Diciembre - Marzo',
    imagen: '/images/epoca-invierno.jpg',
    descripcion: 'La mejor época para disfrutar de la Costa Sur y Oeste, con clima seco y playas perfectas.'
  },
  {
    key: 'verano',
    titulo: 'Verano',
    meses: 'Mayo - Septiembre',
    imagen: '/images/epoca-verano.jpg',
    descripcion: 'Ideal para explorar la Costa Este y sus aguas cristalinas, lejos de las lluvias del monzón.'
  },
  {
    key: 'intermedia',
    titulo: 'Intermedia',
    meses: 'Abril, Octubre, Noviembre',
    imagen: '/images/epoca-intermedia.jpg',
    descripcion: 'Perfecta para rutas culturales, montañas y experiencias auténticas en el interior.'
  }
];

const EpocaDelAnoSection: React.FC<EpocaDelAnoSectionProps> = ({ onSelectEpoca }) => (
  <section className="py-12 bg-coconut-white">
    <h2 className="text-3xl font-playfair font-bold text-tropical-green text-center mb-8">
      ¿En qué época del año quieres viajar?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {epocas.map(epoca => (
        <CardEpoca
          key={epoca.key}
          titulo={epoca.titulo}
          meses={epoca.meses}
          imagen={epoca.imagen}
          descripcion={epoca.descripcion}
          onClick={() => onSelectEpoca(epoca.key)}
        />
      ))}
    </div>
  </section>
);

export default EpocaDelAnoSection; 