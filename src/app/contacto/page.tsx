import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | Serena Lanka',
  description: 'Contáctanos para planificar tu viaje de lujo a Sri Lanka. Estamos aquí para ayudarte a crear experiencias inolvidables.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl text-center mb-8">Contacto</h1>
      <p className="text-center mb-8">
        Página de contacto en construcción
      </p>
    </div>
  );
} 