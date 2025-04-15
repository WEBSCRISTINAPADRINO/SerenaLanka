'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitItineraryForm } from '@/lib/api/forms';

interface FormData {
  nombre: string;
  email: string;
  tipoViaje: string;
  experiencias: string;
  fecha: string;
}

export default function CustomItinerary() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    tipoViaje: '',
    experiencias: '',
    fecha: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await submitItineraryForm(formData);
      setStatus('success');
      setMessage('¡Gracias! Nos pondremos en contacto contigo pronto.');
      setFormData({
        nombre: '',
        email: '',
        tipoViaje: '',
        experiencias: '',
        fecha: ''
      });
    } catch (error) {
      setStatus('error');
      setMessage('Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-elephant-gray/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-6">
            Creamos tu itinerario de ensueño
          </h2>
          <p className="text-elephant-gray/80 text-lg max-w-2xl mx-auto">
            Porque cada viajero es único, ofrecemos un servicio de diseño de itinerarios personalizado.
            Nos encantará ayudarte a crear tu viaje ideal: informativo, mágico, a tu ritmo, con tu estilo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <img
              src="/images/home/custom-itinerary.jpg"
              alt="Planificación de viaje personalizado"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-elephant-gray/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-coconut-white max-w-md">
              <h3 className="font-playfair text-2xl mb-4">
                Tu viaje, tu historia
              </h3>
              <p className="text-coconut-white/90">
                Responderemos con amor, cuidado y una propuesta que se sentirá como un regalo.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-coconut-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <label htmlFor="nombre" className="block text-elephant-gray font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-elephant-gray/20 focus:outline-none focus:border-tropical-green"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-elephant-gray font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-elephant-gray/20 focus:outline-none focus:border-tropical-green"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="tipoViaje" className="block text-elephant-gray font-medium mb-2">
                Tipo de viaje
              </label>
              <select
                id="tipoViaje"
                name="tipoViaje"
                value={formData.tipoViaje}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-elephant-gray/20 focus:outline-none focus:border-tropical-green"
                required
                disabled={status === 'loading'}
              >
                <option value="">Selecciona una opción</option>
                <option value="solo">Viaje en solitario</option>
                <option value="pareja">Viaje en pareja</option>
                <option value="familia">Viaje en familia</option>
                <option value="amigos">Viaje con amigos</option>
              </select>
            </div>

            <div>
              <label htmlFor="experiencias" className="block text-elephant-gray font-medium mb-2">
                ¿Qué te gustaría vivir?
              </label>
              <textarea
                id="experiencias"
                name="experiencias"
                value={formData.experiencias}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-elephant-gray/20 focus:outline-none focus:border-tropical-green resize-none"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="fecha" className="block text-elephant-gray font-medium mb-2">
                Fecha estimada
              </label>
              <input
                type="month"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-elephant-gray/20 focus:outline-none focus:border-tropical-green"
                required
                disabled={status === 'loading'}
              />
            </div>

            {message && (
              <div className={`p-4 rounded-lg ${
                status === 'success' ? 'bg-tropical-green/10 text-tropical-green' : 'bg-spice-red/10 text-spice-red'
              }`}>
                {message}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'loading'}
              className={`w-full px-8 py-4 bg-tropical-green text-coconut-white rounded-full text-lg font-medium tracking-wide transition-all duration-300 ${
                status === 'loading' 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:bg-tropical-green/90'
              }`}
            >
              {status === 'loading' ? 'Enviando...' : 'Quiero mi itinerario personalizado'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 