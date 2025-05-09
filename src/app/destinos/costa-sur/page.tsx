import React from 'react';
import HeroCostaSur from '@/components/destinos/HeroCostaSur';

export const metadata = {
  title: 'Costa Sur de Sri Lanka | Serena Lanka',
  description: 'Descubre las mejores playas, templos y experiencias en la Costa Sur de Sri Lanka. Desde el histórico Fuerte de Galle hasta las playas paradisíacas de Mirissa.',
};

export default function CostaSurPage() {
  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      {/* Hero visual */}
      <HeroCostaSur />

      {/* Navegación visual por zonas */}
      <section id="zonas-costa-sur" className="px-6">
        <h2 className="text-2xl font-semibold mb-4 text-tropical-green font-playfair">Explora por zonas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Mirissa", "Unawatuna", "Tangalle", "Galle", "Hiriketiya", "Weligama"].map(zone => (
            <div key={zone} className="cursor-pointer hover:shadow-xl bg-white rounded-xl p-4 text-center font-semibold border border-golden-sand transition-shadow">
              {zone}
            </div>
          ))}
        </div>
      </section>

      {/* Experiencias destacadas */}
      <section className="space-y-6 px-6">
        <h2 className="text-2xl font-semibold text-tropical-green font-playfair">Vívelo de verdad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Avistamiento de ballenas azules y delfines", icon: "🐋" },
            { title: "Nado con tortugas en aguas cristalinas", icon: "🐢" },
            { title: "Retiros de yoga frente al mar", icon: "🧘‍♂️" },
            { title: "Masajes ayurvédicos y tratamientos detox", icon: "💆‍♀️" },
            { title: "Clases de cocina tradicional cingalesa", icon: "🍲" },
            { title: "Safaris en Yala y Udawalawe", icon: "🦁" },
            { title: "Exploración de templos milenarios", icon: "🏯" },
            { title: "Paseos en barca por manglares y santuarios de aves", icon: "🦜" },
            { title: "Granja de serpientes tradicionales", icon: "🐍" },
            { title: "Reserva de Sinharaja: monos y selva tropical", icon: "🐒" },
          ].map((item, index) => (
            <div key={index} className="flex items-center p-4 space-x-4 bg-white rounded-xl border border-golden-sand shadow-sm">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-base font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center space-y-4 border-t pt-10 px-6">
        <h3 className="text-2xl font-semibold font-playfair text-tropical-green">¿Listo para vivirlo tú también?</h3>
        <p className="text-muted-foreground">Diseña tu viaje ideal o explora más experiencias</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-tropical-green hover:bg-tropical-green/90 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-colors">Diseña tu viaje</button>
          <button className="border border-tropical-green text-tropical-green text-lg font-semibold px-8 py-3 rounded-full hover:bg-tropical-green/10 transition-colors">Ver todas las experiencias</button>
        </div>
      </section>
    </div>
  );
} 