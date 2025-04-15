'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

interface BookingWidgetProps {
  title: string;
  subtitle: string;
  buttonText: string;
  successMessage: string;
}

export default function BookingWidget({
  title,
  subtitle,
  buttonText,
  successMessage
}: BookingWidgetProps) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 2));
  const [guests, setGuests] = useState(2);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const calculateNights = () => {
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    return calculateNights() * 450; // Precio base por noche
  };

  const handleBooking = async () => {
    setLoading(true);
    try {
      // Aquí iría la integración con el sistema de reservas
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error al procesar la reserva:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-coconut-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="font-playfair text-2xl text-elephant-gray mb-2">
        {title}
      </h3>
      <p className="text-elephant-gray/70 mb-6">
        {subtitle}
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-elephant-gray/70 mb-1">
            Fecha de llegada
          </label>
          <input
            type="date"
            value={format(startDate, 'yyyy-MM-dd')}
            min={format(new Date(), 'yyyy-MM-dd')}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            className="w-full px-4 py-2 border border-golden-sand/20 rounded-md focus:outline-none focus:ring-2 focus:ring-tropical-green/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-elephant-gray/70 mb-1">
            Fecha de salida
          </label>
          <input
            type="date"
            value={format(endDate, 'yyyy-MM-dd')}
            min={format(addDays(startDate, 2), 'yyyy-MM-dd')}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            className="w-full px-4 py-2 border border-golden-sand/20 rounded-md focus:outline-none focus:ring-2 focus:ring-tropical-green/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-elephant-gray/70 mb-1">
            Huéspedes
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-4 py-2 border border-golden-sand/20 rounded-md focus:outline-none focus:ring-2 focus:ring-tropical-green/20"
          >
            {[...Array(4)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'huésped' : 'huéspedes'}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-4 border-t border-golden-sand/20">
          <div className="flex justify-between mb-2">
            <span className="text-elephant-gray/70">Precio por noche</span>
            <span className="text-elephant-gray">$450 USD</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-elephant-gray/70">Noches</span>
            <span className="text-elephant-gray">{calculateNights()}</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-elephant-gray">
            <span>Total</span>
            <span>${calculateTotal()} USD</span>
          </div>
        </div>

        <button
          onClick={handleBooking}
          disabled={loading}
          className="w-full bg-tropical-green text-coconut-white py-3 rounded-md font-medium hover:bg-tropical-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando...
            </span>
          ) : (
            buttonText
          )}
        </button>

        {showSuccess && (
          <div className="mt-4 p-4 bg-tropical-green/10 text-tropical-green rounded-md text-center">
            {successMessage}
          </div>
        )}

        <p className="text-sm text-elephant-gray/60 text-center">
          * Los precios son aproximados. Te contactaremos para confirmar la disponibilidad y el precio final.
        </p>
      </div>
    </motion.div>
  );
} 