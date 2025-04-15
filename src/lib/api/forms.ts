interface FormData {
  nombre: string;
  email: string;
  tipoViaje: string;
  experiencias: string;
  fecha: string;
}

export async function submitItineraryForm(data: FormData) {
  try {
    // Aquí iría la lógica de envío real, por ejemplo a una API
    const response = await fetch('/api/itinerary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function submitNewsletterForm(email: string) {
  try {
    // Aquí iría la lógica de envío real, por ejemplo a una API
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Error al suscribirse al newsletter');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
} 