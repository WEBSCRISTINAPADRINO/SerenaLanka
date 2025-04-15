export interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights?: string[];
  slug: string;
  affiliateLink: string;
  price: string;
  bestTime: string;
  emotion: string;
}

export interface TravelerProfile {
  id: string;
  title: string;
  description: string;
  image: string;
  affiliateLink: string;
  activities: string[];
}

export interface VerifiedExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  affiliateLink: string;
  price: string;
  duration: string;
  rating: number;
}

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  filename: string;
}

export interface RegionsExplorerProps {
  regions: Region[];
}

export interface TravelerProfilesProps {
  profiles: TravelerProfile[];
}

export interface VerifiedExperiencesProps {
  experiences: VerifiedExperience[];
}

export interface ImageGalleryProps {
  images?: Image[];
  query?: string;
  limit?: number;
} 