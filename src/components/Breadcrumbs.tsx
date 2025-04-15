'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      <Link href="/" className="hover:text-tropical-green">
        Inicio
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <span className="mx-2">/</span>
          <Link
            href={item.href}
            className={`hover:text-tropical-green ${
              index === items.length - 1 ? 'text-tropical-green font-medium' : ''
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
} 