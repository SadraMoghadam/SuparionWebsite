import type { GameConfig } from '../types';

export const games: GameConfig[] = [
  {
    slug: 'rydash',
    title: 'Rydash',
    tagline: 'Dash. Drift. Dominate.',
    // TODO: replace with the real Rydash pitch when finalized.
    description: [
      'Rydash is a fast, snackable arcade racer built for one-handed play. Tap, swerve, and chain perfect drifts through neon city streets — every run is short, every comeback is electric.',
      'Designed for mobile-first sessions: pick it up at the bus stop, master a new track on a coffee break, beat your best friend by 0.4 seconds before bed.',
    ],
    features: [
      'One-thumb arcade controls that feel right in 30 seconds',
      'Hand-crafted city tracks with shortcuts to discover',
      'Daily challenges and global leaderboards',
      'Free to play — no pay-to-win, no ads mid-race',
    ],
    genre: 'Casual arcade racer',
    platforms: ['ios', 'android'],
    storeLinks: {
      // TODO: paste real store URLs after launch.
      ios: '',
      android: '',
    },
    media: {
      icon: '/media/games/rydash/icon.png',
      background: '/media/games/rydash/background.png',
      trailer: '/media/games/rydash/trailer.mp4',
      splash: '/media/games/rydash/splash.mp4',
    },
    status: 'released',
    accentColor: '#ff8a3d',
  },
];

export const getGame = (slug: string): GameConfig | undefined =>
  games.find((g) => g.slug === slug);
