export type Platform = 'ios' | 'android' | 'steam' | 'web';

export type GameStatus = 'released' | 'coming-soon';

export type GameConfig = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  features: string[];
  genre: string;
  platforms: Platform[];
  storeLinks: Partial<Record<Platform, string>>;
  media: {
    icon: string;
    background: string;
    trailer: string;
    splash?: string;
  };
  status: GameStatus;
  accentColor?: string;
};

export type StudioInfo = {
  name: string;
  tagline: string;
  about: string[];
  founder: {
    name: string;
    role: string;
    photo: string;
  };
  contact: {
    email: string;
  };
  socials: {
    instagram: string;
    youtube: string;
    twitter: string;
    tiktok: string;
  };
};
