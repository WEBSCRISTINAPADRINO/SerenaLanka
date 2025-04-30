import HomePage from '@/components/HomePage';
import DestinationsSlider from '@/components/DestinationsSlider';

export default function Home() {
  return (
    <>
      <HomePage />
      {/* Sección de Destinos */}
      <section className="py-16 bg-coconut-white">
        <DestinationsSlider />
      </section>
    </>
  );
} 