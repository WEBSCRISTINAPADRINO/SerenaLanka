'use client';

import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un email válido';
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    try {
      // Aquí iría la lógica para enviar el formulario a tu backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
      setStatus('success');
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-elephant-gray">
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-lg border ${
            errors.nombre ? 'border-spice-red' : 'border-elephant-gray/20'
          } bg-coconut-white px-4 py-3 text-elephant-gray shadow-sm focus:border-tropical-green focus:outline-none focus:ring-1 focus:ring-tropical-green`}
        />
        {errors.nombre && (
          <p className="mt-1 text-sm text-spice-red">{errors.nombre}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-elephant-gray">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-lg border ${
            errors.email ? 'border-spice-red' : 'border-elephant-gray/20'
          } bg-coconut-white px-4 py-3 text-elephant-gray shadow-sm focus:border-tropical-green focus:outline-none focus:ring-1 focus:ring-tropical-green`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-spice-red">{errors.email}</p>
        )}
      </div>

      {/* Asunto */}
      <div>
        <label htmlFor="asunto" className="block text-sm font-medium text-elephant-gray">
          Asunto
        </label>
        <select
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-lg border ${
            errors.asunto ? 'border-spice-red' : 'border-elephant-gray/20'
          } bg-coconut-white px-4 py-3 text-elephant-gray shadow-sm focus:border-tropical-green focus:outline-none focus:ring-1 focus:ring-tropical-green`}
        >
          <option value="">Selecciona un asunto</option>
          <option value="consulta">Consulta general</option>
          <option value="reserva">Reserva de experiencias</option>
          <option value="colaboracion">Propuesta de colaboración</option>
          <option value="otro">Otro</option>
        </select>
        {errors.asunto && (
          <p className="mt-1 text-sm text-spice-red">{errors.asunto}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-elephant-gray">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={4}
          className={`mt-1 block w-full rounded-lg border ${
            errors.mensaje ? 'border-spice-red' : 'border-elephant-gray/20'
          } bg-coconut-white px-4 py-3 text-elephant-gray shadow-sm focus:border-tropical-green focus:outline-none focus:ring-1 focus:ring-tropical-green`}
        />
        {errors.mensaje && (
          <p className="mt-1 text-sm text-spice-red">{errors.mensaje}</p>
        )}
      </div>

      {/* Botón de envío */}
      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-full bg-tropical-green px-6 py-3 font-semibold text-coconut-white transition-colors hover:bg-tropical-green/90 disabled:opacity-50"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </div>

      {/* Mensajes de estado */}
      {status === 'success' && (
        <div className="rounded-lg bg-tropical-green/10 p-4 text-center text-tropical-green">
          ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-lg bg-spice-red/10 p-4 text-center text-spice-red">
          Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.
        </div>
      )}
    </form>
  );
} 