'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AffiliateLink {
  platform: string;
  url: string;
  logo: string;
  description: string;
  commission: string;
}

interface AffiliateLinksProps {
  title: string;
  subtitle: string;
  links: AffiliateLink[];
}

export default function AffiliateLinks({ title, subtitle, links }: AffiliateLinksProps) {
  return (
    <section className="py-16 bg-elephant-gray/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
            {title}
          </h2>
          <p className="text-elephant-gray/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-coconut-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  <Image
                    src={link.logo}
                    alt={`${link.platform} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-playfair text-xl text-elephant-gray">
                  {link.platform}
                </h3>
              </div>
              <p className="text-elephant-gray/70 mb-4">
                {link.description}
              </p>
              <div className="flex items-center text-tropical-green">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <span className="font-medium">
                  Comisión: {link.commission}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-elephant-gray/60">
            * Al hacer clic en estos enlaces, serás redirigido a sitios externos. Podemos recibir una comisión por las reservas realizadas a través de estos enlaces.
          </p>
        </div>
      </div>
    </section>
  );
} 