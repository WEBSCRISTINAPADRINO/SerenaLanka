import { NextResponse } from 'next/server';

// Tipo para validar los datos del formulario
interface ItineraryFormData {
  nombre: string;
  email: string;
  tipoViaje: string;
  experiencias: string;
  fecha: string;
}

// Función para validar el email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para validar los datos del formulario
function validateFormData(data: any): { isValid: boolean; error?: string } {
  if (!data.nombre || typeof data.nombre !== 'string' || data.nombre.length < 2) {
    return { isValid: false, error: 'El nombre es requerido y debe tener al menos 2 caracteres' };
  }

  if (!data.email || !isValidEmail(data.email)) {
    return { isValid: false, error: 'El email proporcionado no es válido' };
  }

  if (!data.tipoViaje || !['solo', 'pareja', 'familia', 'amigos'].includes(data.tipoViaje)) {
    return { isValid: false, error: 'El tipo de viaje seleccionado no es válido' };
  }

  if (!data.experiencias || typeof data.experiencias !== 'string' || data.experiencias.length < 10) {
    return { isValid: false, error: 'Por favor, describe tus experiencias deseadas (mínimo 10 caracteres)' };
  }

  if (!data.fecha || typeof data.fecha !== 'string') {
    return { isValid: false, error: 'La fecha es requerida' };
  }

  return { isValid: true };
}

export async function POST(request: Request) {
  try {
    const data: ItineraryFormData = await request.json();

    // Validar los datos
    const validation = validateFormData(data);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    // Aquí iría la lógica para procesar los datos
    // Por ejemplo, enviar un email, guardar en base de datos, etc.
    console.log('Datos del itinerario recibidos:', data);

    // Simular un pequeño delay para dar sensación de procesamiento
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        message: 'Solicitud de itinerario recibida correctamente',
        data: {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          ...data
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error procesando la solicitud de itinerario:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
} 