import { NextResponse } from 'next/server';

interface NewsletterData {
  email: string;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const data: NewsletterData = await request.json();

    // Validar el email
    if (!data.email || !isValidEmail(data.email)) {
      return NextResponse.json(
        { error: 'El email proporcionado no es válido' },
        { status: 400 }
      );
    }

    // Aquí iría la lógica para procesar la suscripción
    // Por ejemplo, guardar en base de datos, enviar a Mailchimp, etc.
    console.log('Nueva suscripción al newsletter:', data.email);

    // Simular un pequeño delay para dar sensación de procesamiento
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        message: 'Suscripción al newsletter completada',
        data: {
          email: data.email,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error procesando la suscripción al newsletter:', error);
    return NextResponse.json(
      { error: 'Error al procesar la suscripción' },
      { status: 500 }
    );
  }
} 