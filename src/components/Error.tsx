'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Opcionalmente, puedes enviar el error a un servicio de análisis
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8">
        <svg
          className="h-24 w-24 text-spice-red"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h2 className="mb-4 font-playfair text-3xl font-bold text-elephant-gray">
        ¡Ups! Algo salió mal
      </h2>

      <p className="mb-8 max-w-md text-elephant-gray/80">
        Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta nuevamente o contacta con nuestro equipo de soporte si el problema persiste.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-tropical-green px-6 py-3 font-semibold text-coconut-white transition-colors hover:bg-tropical-green/90"
        >
          Intentar nuevamente
        </button>

        <Link
          href="/"
          className="rounded-full bg-elephant-gray px-6 py-3 font-semibold text-coconut-white transition-colors hover:bg-elephant-gray/90"
        >
          Volver al inicio
        </Link>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 max-w-md rounded-lg bg-elephant-gray/5 p-4 text-left">
          <p className="mb-2 font-mono text-sm font-semibold text-elephant-gray">
            Error details (development only):
          </p>
          <pre className="whitespace-pre-wrap break-words text-sm text-elephant-gray/80">
            {error.message}
          </pre>
        </div>
      )}
    </div>
  );
} 