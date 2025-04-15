'use client';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';

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
            Sri Lanka Lujo
          </Link>

          {/* Barra de búsqueda - visible en desktop */}
          <div className="hidden md:block w-1/3">
            <SearchBar />
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6 font-lato text-sm text-elephant-gray relative">
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
                  <h4 className="text-sm font-bold text-tropical-green mb-1">🌊 Zonas de Sri Lanka</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <Link href="/destinos/zona-sur" className="block py-1 hover:text-ocean-blue transition-colors">
                        Costa Sur
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/zona-este" className="block py-1 hover:text-ocean-blue transition-colors">
                        Costa Este
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/zona-norte" className="block py-1 hover:text-ocean-blue transition-colors">
                        Zona Norte
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/zona-central" className="block py-1 hover:text-ocean-blue transition-colors">
                        Zona Central
                      </Link>
                    </li>
                    <li>
                      <Link href="/destinos/zona-oeste" className="block py-1 hover:text-ocean-blue transition-colors">
                        Zona Oeste
                      </Link>
                    </li>
                  </ul>
                  <h4 className="text-sm font-bold text-tropical-green mt-3 mb-1">🛕 Templos y Cultura</h4>
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
                      <Link href="/experiencias/ballenas" className="block py-1 hover:text-ocean-blue transition-colors">
                        Avistamiento de ballenas
                      </Link>
                    </li>
                    <li>
                      <Link href="/experiencias/tortugas" className="block py-1 hover:text-ocean-blue transition-colors">
                        Nado con tortugas
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
            
            <Link href="/nosotros" className="text-elephant-gray hover:text-ocean-blue transition-colors">
              Nosotros
            </Link>
          </div>

          {/* Menu móvil */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-elephant-gray hover:text-tropical-green focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Barra de búsqueda - visible en móvil */}
        <div className="md:hidden mb-4">
          <SearchBar />
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link href="/" className="block py-2 text-elephant-gray hover:text-ocean-blue transition-colors">
              Inicio
            </Link>
            
            <div className="py-2">
              <button 
                className="flex justify-between items-center w-full text-elephant-gray hover:text-ocean-blue transition-colors"
                onClick={() => toggleSubmenu('destinos-mobile')}
              >
                Destinos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'destinos-mobile' && (
                <div className="pl-4 mt-2 space-y-2">
                  <h4 className="text-sm font-bold text-tropical-green">Zonas de Sri Lanka</h4>
                  <Link href="/destinos/zona-sur" className="block py-1 hover:text-ocean-blue transition-colors">Costa Sur</Link>
                  <Link href="/destinos/zona-este" className="block py-1 hover:text-ocean-blue transition-colors">Costa Este</Link>
                  <Link href="/destinos/zona-norte" className="block py-1 hover:text-ocean-blue transition-colors">Zona Norte</Link>
                  <Link href="/destinos/zona-central" className="block py-1 hover:text-ocean-blue transition-colors">Zona Central</Link>
                  <Link href="/destinos/zona-oeste" className="block py-1 hover:text-ocean-blue transition-colors">Zona Oeste</Link>
                  
                  <h4 className="text-sm font-bold text-tropical-green mt-3">Templos y Cultura</h4>
                  <Link href="/destinos/templos-budistas" className="block py-1 hover:text-ocean-blue transition-colors">Templos Budistas</Link>
                  <Link href="/destinos/ciudades-historicas" className="block py-1 hover:text-ocean-blue transition-colors">Ciudades Históricas</Link>
                </div>
              )}
            </div>
            
            <div className="py-2">
              <button 
                className="flex justify-between items-center w-full text-elephant-gray hover:text-ocean-blue transition-colors"
                onClick={() => toggleSubmenu('experiencias-mobile')}
              >
                Experiencias
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'experiencias-mobile' && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/experiencias/naturaleza" className="block py-1 hover:text-ocean-blue transition-colors">Safari y naturaleza</Link>
                  <Link href="/experiencias/surf-deportes-acuaticos" className="block py-1 hover:text-ocean-blue transition-colors">Surf y deportes acuáticos</Link>
                  <Link href="/experiencias/ballenas" className="block py-1 hover:text-ocean-blue transition-colors">Avistamiento de ballenas</Link>
                  <Link href="/experiencias/tortugas" className="block py-1 hover:text-ocean-blue transition-colors">Nado con tortugas</Link>
                  <Link href="/experiencias/cultura" className="block py-1 hover:text-ocean-blue transition-colors">Cultura y gastronomía</Link>
                  <Link href="/experiencias/gastronomia" className="block py-1 hover:text-ocean-blue transition-colors">Experiencias gastronómicas</Link>
                  <Link href="/experiencias/elefantes-udawalawe" className="block py-1 hover:text-ocean-blue transition-colors">Elefantes en Udawalawe</Link>
                </div>
              )}
            </div>
            
            <div className="py-2">
              <button 
                className="flex justify-between items-center w-full text-elephant-gray hover:text-ocean-blue transition-colors"
                onClick={() => toggleSubmenu('wellness-mobile')}
              >
                Wellness
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSubmenu === 'wellness-mobile' && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/wellness/yoga" className="block py-1 hover:text-ocean-blue transition-colors">Retiros de yoga</Link>
                  <Link href="/wellness/ayurveda" className="block py-1 hover:text-ocean-blue transition-colors">Masajes y spas ayurvédicos</Link>
                  <Link href="/wellness/meditacion" className="block py-1 hover:text-ocean-blue transition-colors">Meditación</Link>
                  <Link href="/wellness/nutricion" className="block py-1 hover:text-ocean-blue transition-colors">Nutrición saludable</Link>
                </div>
              )}
            </div>
            
            <Link href="/planifica" className="block py-2 text-elephant-gray hover:text-ocean-blue transition-colors">
              Planifica
            </Link>
            
            <Link href="/nosotros" className="block py-2 text-elephant-gray hover:text-ocean-blue transition-colors">
              Nosotros
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 