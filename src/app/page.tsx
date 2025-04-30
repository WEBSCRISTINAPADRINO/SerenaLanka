import HomePage from '@/components/HomePage';
import SriLankaOutlineMap from '@/components/SriLankaOutlineMap';

export default function Home() {
  return (
    <main>
      <HomePage />
      <section className="py-20 px-4 bg-coconut-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-tropical-green mb-8">
            Explora Sri Lanka por Regiones
          </h2>
          <p className="text-lg text-elephant-gray mb-12 max-w-2xl mx-auto">
            Descubre cada región única de Sri Lanka. Haz clic en el mapa para explorar 
            los destinos y experiencias que cada zona tiene para ofrecer.
          </p>
          <SriLankaOutlineMap />
        </div>
      </section>
    </main>
  );
} 