import { generateAffiliateUrl, getAffiliateTracking } from '@/config/affiliates';

interface AffiliateLinkProps {
  platform: 'booking' | 'getyourguide' | 'aviator' | 'amazon' | 'agoda' | 'expedia' | 'klook';
  path: string;
  className?: string;
  children: React.ReactNode;
}

export default function AffiliateLink({ platform, path, className, children }: AffiliateLinkProps) {
  const url = generateAffiliateUrl(platform, path);
  const trackingProps = getAffiliateTracking(platform);

  return (
    <a
      href={url}
      className={className}
      {...trackingProps}
    >
      {children}
    </a>
  );
} 