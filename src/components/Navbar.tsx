'use client';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';
import SriLankaIcon from './icons/SriLankaIcon';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu: string | null) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };

  return (
    <nav className="bg-coconut-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-playfair font-bold text-tropical-green">
            Serena Lanka
          </Link>

          {/* Barra de búsqueda - visible en desktop */}
          <div className="hidden md:block w-1/3">
            <SearchBar />
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-6 font-lato text-sm text-elephant-gray relative">
            {/* Icono del Mapa */}
            <Link 
              href="/mapa" 
              className="flex items-center hover:text-ocean-blue transition-colors group"
              title="Mapa Interactivo"
            >
              <SriLankaIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </Link>

            {/* Destinos con Submenú */}
            <div className="relative group">
              <button 
                className="text-elephant-gray hover:text-ocean-blue transition-colors flex items-center"
                onClick={() => toggleSubmenu('destinos')}
              >
                Destinos 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'destinos' && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 px-4 w-64 z-50 text-elephant-gray">
                  <h4 className="text-sm font-bold text-tropical-green mb-1">🌊 Regiones de Sri Lanka</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <Link href="/destinos/costa-norte" className="block py-1 hover:text-ocean-blue transition-colors">
                        Costa Norte
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/costa-sur" className="block py-1 hover:text-ocean-blue transition-colors">
                        Costa Sur
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/costa-este" className="block py-1 hover:text-ocean-blue transition-colors">
                        Costa Este
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/costa-oeste" className="block py-1 hover:text-ocean-blue transition-colors">
                        Costa Oeste
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/montanas" className="block py-1 hover:text-ocean-blue transition-colors">
                        Montañas
                      </Link>
                    </li>
                  </ul>
                  <h4 className="text-sm font-bold text-tropical-green mt-3 mb-1">🛕 Cultura e Historia</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <Link href="/destinos/templos-budistas" className="block py-1 hover:text-ocean-blue transition-colors">
                        Templos Budistas
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/ciudades-historicas" className="block py-1 hover:text-ocean-blue transition-colors">
                        Ciudades Históricas
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Experiencias con Submenú */}
            <div className="relative group">
              <button 
                className="text-elephant-gray hover:text-ocean-blue transition-colors flex items-center"
                onClick={() => toggleSubmenu('experiencias')}
              >
                Experiencias
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'experiencias' && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 px-4 w-64 z-50 text-elephant-gray">
                  <ul className="text-sm space-y-1">
                    <li>
                      <Link href="/experiencias/naturaleza" className="block py-1 hover:text-ocean-blue transition-colors">
                        Safari y naturaleza
                      </Link>
                    </li>
                    <li>
                      <Link href="/experiencias/surf-deportes-acuaticos" className="block py-1 hover:text-ocean-blue transition-colors">
                        Surf y deportes acuáticos
                      </Link>
                    </li>
                    <li>
                      <Link href="/experiencias/cultura" className="block py-1 hover:text-ocean-blue transition-colors">
                        Cultura y gastronomía
                      </Link>
                    </li>
                    <li>
                      <Link href="/experiencias/gastronomia" className="block py-1 hover:text-ocean-blue transition-colors">
                        Experiencias gastronómicas
                      </Link>
                    </li>
                    <li>
                      <Link href="/experiencias/elefantes-udawalawe" className="block py-1 hover:text-ocean-blue transition-colors">
                        Elefantes en Udawalawe
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Wellness con Submenú */}
            <div className="relative group">
              <button 
                className="text-elephant-gray hover:text-ocean-blue transition-colors flex items-center"
                onClick={() => toggleSubmenu('wellness')}
              >
                Wellness
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'wellness' && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 px-4 w-64 z-50 text-elephant-gray">
                  <ul className="text-sm space-y-1">
                    <li>
                      <Link href="/wellness/yoga" className="block py-1 hover:text-ocean-blue transition-colors">
                        Retiros de yoga
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness/ayurveda" className="block py-1 hover:text-ocean-blue transition-colors">
                        Masajes y spas ayurvédicos
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness/meditacion" className="block py-1 hover:text-ocean-blue transition-colors">
                        Meditación
                      </Link>
                    </li>
                    <li>
                      <Link href="/wellness/nutricion" className="block py-1 hover:text-ocean-blue transition-colors">
                        Nutrición saludable
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <Link href="/planifica" className="text-elephant-gray hover:text-ocean-blue transition-colors">
              Planifica
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-elephant-gray hover:text-ocean-blue"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <SearchBar />
            <div className="mt-4 space-y-2">
              <Link
                href="/destinos"
                className="block text-elephant-gray hover:text-ocean-blue"
              >
                Destinos
              </Link>
              <Link
                href="/experiencias"
                className="block text-elephant-gray hover:text-ocean-blue"
              >
                Experiencias
              </Link>
              <Link
                href="/wellness"
                className="block text-elephant-gray hover:text-ocean-blue"
              >
                Wellness
              </Link>
              <Link
                href="/planifica"
                className="block text-elephant-gray hover:text-ocean-blue"
              >
                Planifica
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 