import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contacto | Sri Lanka Luxury Travel',
  description: 'Contáctanos para planificar tu viaje de lujo personalizado a Sri Lanka. Estamos aquí para hacer realidad tus sueños de viaje.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Inicio', href: '/' },
        { label: 'Contacto', href: '/contacto' }
      ]} />
      <h1 className="text-4xl font-playfair mb-8 text-elephant-gray">Contacto</h1>
      <ContactForm />
    </div>
  );
} 