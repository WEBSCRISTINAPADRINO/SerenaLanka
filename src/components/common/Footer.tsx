'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { submitNewsletterForm } from '@/lib/api/forms';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await submitNewsletterForm(email);
      setStatus('success');
      setMessage('¡Gracias por suscribirte! Revisa tu email para confirmar.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <footer className="bg-elephant-gray text-coconut-white">
      {/* Newsletter Section */}
      <div className="border-b border-coconut-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl mb-4">
                Suscríbete a nuestra newsletter
              </h3>
              <p className="text-coconut-white/80 mb-6">
                Recibe inspiración mensual, guías exclusivas y ofertas especiales para tu próximo viaje a Sri Lanka.
              </p>
              {message && (
                <div className={`p-4 rounded-lg ${
                  status === 'success' ? 'bg-tropical-green/10 text-tropical-green' : 'bg-spice-red/10 text-spice-red'
                }`}>
                  {message}
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="flex-1 px-6 py-3 rounded-full bg-coconut-white/10 text-coconut-white placeholder:text-coconut-white/50 focus:outline-none focus:ring-2 focus:ring-tropical-green"
                required
                disabled={status === 'loading'}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === 'loading'}
                className={`px-8 py-3 bg-tropical-green rounded-full transition-all duration-300 ${
                  status === 'loading'
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:bg-tropical-green/90'
                }`}
              >
                {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Destinos */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Destinos</h4>
            <ul className="space-y-2">
              <li><Link href="/destinos/costa-sur" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Costa Sur</Link></li>
              <li><Link href="/destinos/costa-este" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Costa Este</Link></li>
              <li><Link href="/destinos/montanas" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Montañas</Link></li>
              <li><Link href="/destinos/templos" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Templos Budistas</Link></li>
              <li><Link href="/destinos/ciudades" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Ciudades históricas</Link></li>
            </ul>
          </div>

          {/* Experiencias */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Experiencias</h4>
            <ul className="space-y-2">
              <li><Link href="/experiencias/safari" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Safari y naturaleza</Link></li>
              <li><Link href="/experiencias/surf" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Surf y deportes acuáticos</Link></li>
              <li><Link href="/experiencias/ballenas" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Avistamiento de ballenas</Link></li>
              <li><Link href="/experiencias/cultura" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Cultura y gastronomía</Link></li>
            </ul>
          </div>

          {/* Wellness */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Wellness</h4>
            <ul className="space-y-2">
              <li><Link href="/wellness/yoga" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Retiros de yoga</Link></li>
              <li><Link href="/wellness/ayurveda" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Masajes ayurvédicos</Link></li>
              <li><Link href="/wellness/meditacion" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Meditación</Link></li>
              <li><Link href="/wellness/nutricion" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Nutrición saludable</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li><Link href="/sobre-nosotros" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Contacto</Link></li>
              <li><Link href="/faq" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">FAQ</Link></li>
              <li><Link href="/blog" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-coconut-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-coconut-white/70 text-sm">
              © 2024 Sri Lanka Luxury Travel. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <Link href="/privacidad" className="text-coconut-white/70 text-sm hover:text-coconut-white transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="/cookies" className="text-coconut-white/70 text-sm hover:text-coconut-white transition-colors duration-300">
                Política de Cookies
              </Link>
              <Link href="/legal" className="text-coconut-white/70 text-sm hover:text-coconut-white transition-colors duration-300">
                Aviso Legal
              </Link>
            </div>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-coconut-white/70 hover:text-coconut-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 