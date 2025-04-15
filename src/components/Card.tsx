import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  tags?: string[];
  precio?: string;
  duracion?: string;
  tipo: 'destino' | 'experiencia';
}

export default function Card({
  id,
  titulo,
  descripcion,
  imagen,
  categoria,
  tags = [],
  precio,
  duracion,
  tipo,
}: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-coconut-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Imagen */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Categoría */}
        <span className="absolute top-4 left-4 rounded-full bg-sunset-orange px-4 py-1 text-sm font-semibold text-coconut-white">
          {categoria}
        </span>
        
        {/* Precio (solo para experiencias) */}
        {tipo === 'experiencia' && precio && (
          <span className="absolute top-4 right-4 rounded-full bg-tropical-green px-4 py-1 text-sm font-semibold text-coconut-white">
            {precio}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="mb-2 font-playfair text-xl font-bold text-elephant-gray">
          {titulo}
        </h3>
        <p className="mb-4 text-sm text-elephant-gray/80 line-clamp-2">
          {descripcion}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-golden-sand/20 px-3 py-1 text-xs text-elephant-gray"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Duración (solo para experiencias) */}
        {tipo === 'experiencia' && duracion && (
          <div className="mb-4 flex items-center text-sm text-elephant-gray/60">
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {duracion}
          </div>
        )}

        {/* Botón */}
        <Link
          href={`/${tipo}s/${id}`}
          className="inline-flex items-center text-tropical-green hover:text-tropical-green/80"
        >
          Ver más
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 