import Image from 'next/image';

interface CardEpocaProps {
  titulo: string;
  meses: string;
  imagen: string;
  descripcion: string;
  onClick: () => void;
}

const CardEpoca: React.FC<CardEpocaProps> = ({ titulo, meses, imagen, descripcion, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-3xl overflow-hidden shadow-lg group relative w-full h-80 focus:outline-none"
    aria-label={`Ver destinos recomendados para ${titulo}`}
  >
    <Image
      src={imagen}
      alt={titulo}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-2xl font-playfair font-bold mb-2">{titulo}</h3>
      <p className="text-lg font-semibold mb-1">{meses}</p>
      <p className="text-sm mb-3">{descripcion}</p>
      <span className="inline-block bg-golden-sand text-elephant-gray px-4 py-2 rounded-full font-bold text-sm group-hover:bg-sunset-orange group-hover:text-white transition-all duration-300">
        Ver destinos recomendados →
      </span>
    </div>
  </button>
);

export default CardEpoca; 