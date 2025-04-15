import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | Serena Lanka',
  description: 'Contáctanos para planificar tu viaje de lujo a Sri Lanka. Estamos aquí para ayudarte a crear experiencias inolvidables.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-playfair text-center mb-8">Contacto</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-elephant-gray/80 text-center mb-8">
          ¿Tienes preguntas sobre Sri Lanka? ¿Necesitas ayuda para planificar tu viaje? 
          Estamos aquí para ayudarte a crear experiencias inolvidables.
        </p>
        <ContactForm />
      </div>
    </div>
  );
} 