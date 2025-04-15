import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { nombre, email, asunto, mensaje } = data;

    // Aquí iría la lógica para enviar el email
    // Por ahora solo simulamos el envío
    console.log('Datos del formulario recibidos:', { nombre, email, asunto, mensaje });

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json(
      { message: 'Error al procesar el formulario' },
      { status: 500 }
    );
  }
} 