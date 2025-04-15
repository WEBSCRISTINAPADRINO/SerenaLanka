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
    mensaje: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [enviando, setEnviando] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState('');

  const validarEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validarFormulario = (): boolean => {
    const nuevosErrores: Partial<FormData> = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      nuevosErrores.email = 'El email es requerido';
    } else if (!validarEmail(formData.email)) {
      nuevosErrores.email = 'Email inválido';
    }
    if (!formData.asunto.trim()) {
      nuevosErrores.asunto = 'El asunto es requerido';
    }
    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es requerido';
    }

    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      return;
    }

    setEnviando(true);
    setMensajeEstado('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMensajeEstado('¡Mensaje enviado con éxito!');
        setFormData({
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        });
      } else {
        throw new Error(data.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setMensajeEstado('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.nombre ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="asunto" className="block text-gray-700 font-medium mb-2">
          Asunto
        </label>
        <select
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.asunto ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
        >
          <option value="">Selecciona un asunto</option>
          <option value="consulta">Consulta general</option>
          <option value="reserva">Información de reservas</option>
          <option value="sugerencia">Sugerencia</option>
          <option value="otro">Otro</option>
        </select>
        {errors.asunto && <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={4}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.mensaje ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
      </div>

      {mensajeEstado && (
        <div className={`mb-4 p-3 rounded-lg ${
          mensajeEstado.includes('éxito') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {mensajeEstado}
        </div>
      )}

      <button
        type="submit"
        disabled={enviando}
        className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${
          enviando
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-tropical-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
        }`}
      >
        {enviando ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
} 