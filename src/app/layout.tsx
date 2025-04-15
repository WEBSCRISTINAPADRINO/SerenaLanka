import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://serena-lanka.vercel.app'),
  title: {
    template: '%s | Sri Lanka Luxury Travel',
    default: 'Sri Lanka Luxury Travel - Experiencias de lujo auténtico',
  },
  description: 'Descubre Sri Lanka a través de experiencias de lujo auténtico. Viajes personalizados, retiros wellness y aventuras exclusivas.',
  keywords: ['Sri Lanka', 'viajes de lujo', 'experiencias exclusivas', 'turismo de lujo', 'wellness', 'aventuras'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 