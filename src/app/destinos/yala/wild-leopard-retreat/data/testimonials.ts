export interface Testimonial {
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Isabella Martinez",
    location: "Madrid, España",
    text: "Llegué buscando una escapada de lujo, pero encontré mucho más: un despertar del alma. Ver un leopardo desde mi piscina infinita mientras sorbía té de Ceilán no fue solo un momento Instagram-perfect, fue el catalizador de una transformación profunda. Ahora entiendo que el verdadero lujo es reconectar con tu esencia salvaje.",
    image: "/images/testimonials/isabella.jpg",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    location: "París, Francia",
    text: "Cada amanecer en Wild Leopard Retreat me recordaba que la vida puede ser diferente. El ritual del té al despertar, los safaris íntimos, las conversaciones profundas bajo las estrellas... No es solo un hotel de lujo, es un portal hacia una versión más consciente y plena de ti misma.",
    image: "/images/testimonials/sophie.jpg",
    rating: 5
  },
  {
    name: "Maria Rossi",
    location: "Milán, Italia",
    text: "La magia de Wild Leopard Retreat va más allá del lujo tangible. Es despertar con el rugido de los leopardos, meditar en tu terraza privada mientras los pavos reales danzan, y sentir que cada momento es una invitación a reconectar con tu verdadera naturaleza. Una experiencia que transforma tu definición de lujo para siempre.",
    image: "/images/testimonials/maria.jpg",
    rating: 5
  }
]; 