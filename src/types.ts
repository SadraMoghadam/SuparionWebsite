export type Platform = 'ios' | 'android' | 'steam' | 'web';

export type GameStatus = 'released' | 'coming-soon';

export type GalleryItem =
  | { type: 'image'; src: string; caption?: string }
  | { type: 'video'; src: string; poster?: string; caption?: string };

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
    youtubeId?: string;
    splash?: string;
    /** Portrait key art, used where a game has no trailer video yet. */
    portrait?: string;
    gallery?: GalleryItem[];
  };
  status: GameStatus;
  /** Shown in the featured band on the home page, in array order. */
  featured?: boolean;
  accentColor?: string;
  socials?: GameSocials;
};

export type GameSocials = {
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  twitter?: string;
  discord?: string;
  website?: string;
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
