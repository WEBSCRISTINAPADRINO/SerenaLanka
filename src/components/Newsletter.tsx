'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterFormData {
  email: string;
  nombre: string;
  intereses: string[];
}

export default function Newsletter() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    nombre: '',
    intereses: []
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const interesesOpciones = [
    { id: 'playas', label: 'Playas y Relax' },
    { id: 'cultura', label: 'Cultura y Templos' },
    { id: 'aventura', label: 'Aventura y Naturaleza' },
    { id: 'wellness', label: 'Wellness y Yoga' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Configuración de Active Campaign
      const AC_URL = process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_URL;
      const AC_API_KEY = process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_API_KEY;

      // Primero creamos o actualizamos el contacto
      const contactResponse = await fetch(`${AC_URL}/api/3/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': AC_API_KEY as string
        },
        body: JSON.stringify({
          contact: {
            email: formData.email,
            firstName: formData.nombre,
            // Campos personalizados para intereses
            fieldValues: [
              {
                field: '1', // ID del campo personalizado en AC
                value: formData.intereses.join(', ')
              }
            ]
          }
        })
      });

      if (!contactResponse.ok) throw new Error('Error al suscribir');

      // Añadimos el contacto a la lista específica de Sri Lanka
      const listId = process.env.NEXT_PUBLIC_AC_LIST_ID;
      await fetch(`${AC_URL}/api/3/contactLists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': AC_API_KEY as string
        },
        body: JSON.stringify({
          contactList: {
            list: listId,
            contact: (await contactResponse.json()).contact.id,
            status: '1'
          }
        })
      });

      setStatus('success');
      setMessage('¡Gracias por suscribirte! Te enviaremos información personalizada sobre Sri Lanka.');
      
      // Reiniciamos el formulario
      setFormData({
        email: '',
        nombre: '',
        intereses: []
      });

    } catch (error) {
      setStatus('error');
      setMessage('Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.');
    }
  };

  const handleInteresChange = (interes: string) => {
    setFormData(prev => ({
      ...prev,
      intereses: prev.intereses.includes(interes)
        ? prev.intereses.filter(i => i !== interes)
        : [...prev.intereses, interes]
    }));
  };

  return (
    <section className="bg-elephant-gray/5 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
            Descubre el Verdadero Sri Lanka
          </h2>
          <p className="text-elephant-gray/80 text-lg">
            Recibe guías exclusivas, consejos de viaje y ofertas especiales
            directamente en tu correo.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-elephant-gray font-semibold mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                className="w-full px-4 py-2 border border-elephant-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-tropical-green"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-elephant-gray font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 border border-elephant-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-tropical-green"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <p className="text-elephant-gray font-semibold mb-3">
              ¿Qué te interesa más de Sri Lanka?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interesesOpciones.map((interes) => (
                <label
                  key={interes.id}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.intereses.includes(interes.id)}
                    onChange={() => handleInteresChange(interes.id)}
                    className="form-checkbox text-tropical-green rounded border-elephant-gray/20"
                  />
                  <span className="text-elephant-gray/80">{interes.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full bg-tropical-green text-white py-3 rounded-lg font-semibold transition-all duration-300
              ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
          >
            {status === 'loading' ? 'Procesando...' : 'Suscribirme'}
          </button>

          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-4 text-center ${
                status === 'success' ? 'text-tropical-green' : 'text-spice-red'
              }`}
            >
              {message}
            </motion.p>
          )}

          <p className="mt-4 text-sm text-elephant-gray/60 text-center">
            Al suscribirte, aceptas recibir emails con contenido exclusivo sobre Sri Lanka.
            Puedes darte de baja en cualquier momento.
          </p>
        </motion.form>
      </div>
    </section>
  );
} 