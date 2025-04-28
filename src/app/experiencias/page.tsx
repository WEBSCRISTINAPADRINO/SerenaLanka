const experiencias = [
  {
    id: 'tortugas-rekawa',
    nombre: 'Tortugas en Rekawa',
    descripcion: 'Observa tortugas marinas en su hábitat natural',
    imagen: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&q=80',
  },
  {
    id: 'yala-safari',
    nombre: 'Safari en Yala',
    descripcion: 'Aventura en el parque nacional más famoso',
    imagen: 'https://images.unsplash.com/photo-1577724513556-7ce8c0c0c610?auto=format&fit=crop&q=80',
  },
  {
    id: 'ballenas-mirissa',
    nombre: 'Ballenas en Mirissa',
    descripcion: 'Avistamiento de ballenas azules y delfines',
    imagen: 'https://images.unsplash.com/photo-1568430462989-44163eb1b109?auto=format&fit=crop&q=80',
  },
  {
    id: 'cultura-local',
    nombre: 'Cultura Local',
    descripcion: 'Inmersión en tradiciones y costumbres',
    imagen: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80',
  }
];

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Experiencias en Sri Lanka</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {experiencias.map((exp) => (
          <div key={exp.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src={exp.imagen} alt={exp.nombre} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-2xl font-playfair mb-2">{exp.nombre}</h2>
            <p className="text-elephant-gray">{exp.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
} // Forzar despliegue Vercel
