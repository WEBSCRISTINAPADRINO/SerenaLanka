// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Sri Lanka Turismo',
  description: 'Descubre la magia de Sri Lanka con experiencias únicas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
