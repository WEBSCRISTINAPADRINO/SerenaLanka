import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8">
        <svg
          className="h-24 w-24 text-elephant-gray/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h1 className="mb-4 font-playfair text-4xl font-bold text-elephant-gray">
        404 - Página no encontrada
      </h1>

      <p className="mb-8 max-w-md text-elephant-gray/80">
        Lo sentimos, la página que estás buscando no existe o ha sido movida. 
        Explora nuestros destinos y experiencias para encontrar lo que buscas.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="rounded-full bg-tropical-green px-6 py-3 font-semibold text-coconut-white transition-colors hover:bg-tropical-green/90"
        >
          Volver al inicio
        </Link>

        <Link
          href="/destinos"
          className="rounded-full bg-elephant-gray px-6 py-3 font-semibold text-coconut-white transition-colors hover:bg-elephant-gray/90"
        >
          Explorar destinos
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/destinos"
          className="group rounded-lg bg-golden-sand/10 p-6 text-left transition-colors hover:bg-golden-sand/20"
        >
          <h3 className="mb-2 font-playfair text-xl font-bold text-elephant-gray">
            Destinos
          </h3>
          <p className="text-sm text-elephant-gray/80">
            Descubre los lugares más increíbles de Sri Lanka.
          </p>
        </Link>

        <Link
          href="/experiencias"
          className="group rounded-lg bg-golden-sand/10 p-6 text-left transition-colors hover:bg-golden-sand/20"
        >
          <h3 className="mb-2 font-playfair text-xl font-bold text-elephant-gray">
            Experiencias
          </h3>
          <p className="text-sm text-elephant-gray/80">
            Vive momentos inolvidables con nuestras experiencias únicas.
          </p>
        </Link>

        <Link
          href="/wellness"
          className="group rounded-lg bg-golden-sand/10 p-6 text-left transition-colors hover:bg-golden-sand/20"
        >
          <h3 className="mb-2 font-playfair text-xl font-bold text-elephant-gray">
            Wellness
          </h3>
          <p className="text-sm text-elephant-gray/80">
            Reconecta con tu ser interior en nuestros retiros de bienestar.
          </p>
        </Link>
      </div>
    </div>
  );
} 