declare module '@/components/Breadcrumbs' {
  import { ReactNode } from 'react';
  
  interface BreadcrumbItem {
    label: string;
    href: string;
  }

  interface BreadcrumbsProps {
    items: BreadcrumbItem[];
  }

  const Breadcrumbs: React.FC<BreadcrumbsProps>;
  export default Breadcrumbs;
}

declare module '@/components/PlaceholderImage' {
  import { ReactNode } from 'react';
  
  interface PlaceholderImageProps {
    width: number;
    height: number;
    text?: string;
    bgColor?: string;
    textColor?: string;
  }

  const PlaceholderImage: React.FC<PlaceholderImageProps>;
  export default PlaceholderImage;
} 