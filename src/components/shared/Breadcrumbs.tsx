'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && (
              <ChevronRightIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
            )}
            <li className="flex items-center">
              <Link
                href={item.href}
                className={`hover:text-tropical-green transition-colors ${
                  index === items.length - 1
                    ? 'text-elephant-gray font-medium'
                    : 'text-gray-500'
                }`}
              >
                {item.label}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 