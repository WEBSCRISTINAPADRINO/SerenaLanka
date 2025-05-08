'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { regions, type Region } from '@/config/data';
import { costaSurImages, type CostaSurImage } from '@/config/costa-sur-images';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CostaSurExplorer from '@/components/destinos/CostaSurExplorer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Costa Sur de Sri Lanka | Serena Lanka',
  description: 'Descubre las mejores playas, templos y experiencias en la Costa Sur de Sri Lanka. Desde el histórico Fuerte de Galle hasta las playas paradisíacas de Mirissa.',
};

export default function CostaSurPage() {
  const region = regions.find((r: Region) => r.id === 'costa-sur');

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-elephant-gray">Región no encontrada</p>
      </div>
    );
  }

  return (
    <main>
      <Hero
        title="Costa Sur de Sri Lanka"
        subtitle="Playas paradisíacas y resorts de lujo"
        backgroundImage="/images/destinos/costa-sur/hero.jpg"
        ctaText="Explorar Destinos"
        ctaLink="#explorador"
      />
      
      <section className="py-12 bg-coconut-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-6">
              Descubre la Costa Sur
            </h2>
            <p className="text-gray-600 mb-6">
              La Costa Sur de Sri Lanka es un paraíso tropical donde las playas de arena dorada se encuentran con las aguas turquesas del Océano Índico. Desde el histórico Fuerte de Galle hasta las playas surferas de Weligama, cada rincón ofrece una experiencia única de lujo accesible y autenticidad.
            </p>
            <p className="text-gray-600 mb-6">
              Esta región combina perfectamente la riqueza cultural con la belleza natural, ofreciendo desde templos antiguos hasta modernos resorts de lujo, todo ello manteniendo un equilibrio perfecto entre tradición y comodidad.
            </p>
          </div>
        </div>
      </section>

      <section id="explorador" className="py-12">
        <CostaSurExplorer />
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-playfair font-bold text-tropical-green mb-6">
              Planifica tu Visita
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-elephant-gray mb-4">
                  Mejor Época para Visitar
                </h3>
                <p className="text-gray-600 mb-4">
                  La mejor época para visitar la Costa Sur es de diciembre a abril, cuando el clima es seco y las temperaturas son agradables. Durante estos meses, podrás disfrutar de:
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Avistamiento de ballenas en Mirissa</li>
                  <li>Condiciones ideales para surf</li>
                  <li>Playas con aguas cristalinas</li>
                  <li>Festivales culturales locales</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-elephant-gray mb-4">
                  Consejos de Viaje
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Reserva con anticipación durante temporada alta</li>
                  <li>Lleva protector solar y repelente de mosquitos</li>
                  <li>Respeta las costumbres locales al visitar templos</li>
                  <li>Considera alquilar una moto para mayor libertad</li>
                  <li>Prueba la gastronomía local en los mercados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 