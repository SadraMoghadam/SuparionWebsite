import type { StudioInfo } from '../types';

export const studio: StudioInfo = {
  name: 'Suparion Games',
  tagline: 'We build games worth playing.',
  about: [
    'Suparion Games is an independent studio designing games that respect your time and reward your curiosity. We make tight, expressive experiences: simple enough to pick up in a moment, deep enough to keep coming back to.',
    'Our craft sits at the intersection of feel, focus, and finish: responsive controls, clean visuals, and mechanics that earn every second on screen. No filler, no friction, no dark patterns.',
    'We are starting on mobile with fast, free-to-play arcade titles like Rydash, and building toward richer, story-driven worlds on PC and console, one carefully shipped game at a time.',
  ],
  founder: {
    name: 'Sadra Heidary Moghadam',
    role: 'Founder & Game Director',
    // TODO: replace with a real photo at /public/media/founder.jpg
    photo: '/media/founder.jpg',
  },
  contact: {
    // TODO: replace with the real address you want public, e.g. contact@suparion.com
    email: '',
  },
  socials: {
    // TODO: fill with real URLs when accounts are live.
    instagram: '',
    youtube: '',
    twitter: '',
    tiktok: '',
  },
};
