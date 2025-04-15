export interface Experience {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  includes: string[];
}

export const experiences: Experience[] = [
  {
    title: "Ritual del Amanecer Salvaje",
    description: "Mientras el mundo duerme, tú despiertas a una versión más auténtica de ti. Un safari íntimo donde cada rugido de leopardo resuena con tu propia transformación interior.",
    duration: "4 horas de magia salvaje",
    price: "450",
    image: "/images/experiences/safari-amanecer.jpg",
    includes: [
      "Guía naturalista personal",
      "Desayuno gourmet bajo el árbol de los leopardos",
      "Equipo profesional de avistamiento",
      "Diario de reflexiones salvajes"
    ]
  },
  {
    title: "Cena bajo las Estrellas de Yala",
    description: "Una experiencia gastronómica que trasciende lo ordinario. Donde cada bocado cuenta una historia y cada estrella ilumina un nuevo descubrimiento sobre ti misma.",
    duration: "3 horas de conexión sensorial",
    price: "275",
    image: "/images/experiences/cena-estrellas.jpg",
    includes: [
      "Chef privado con ingredientes locales",
      "Sommelier de tés de Ceilán",
      "Ritual de intención al atardecer",
      "Música ancestral en vivo"
    ]
  },
  {
    title: "Despertar del Alma en el Spa",
    description: "Un viaje sensorial que combina antiguas tradiciones ayurvédicas con la energía salvaje de Yala. Donde cada masaje es una historia de transformación.",
    duration: "2 horas de reconexión",
    price: "195",
    image: "/images/experiences/spa-salvaje.jpg",
    includes: [
      "Consulta ayurvédica personalizada",
      "Ritual de aceites sagrados",
      "Baño de sonidos naturales",
      "Té de hierbas locales"
    ]
  }
]; 