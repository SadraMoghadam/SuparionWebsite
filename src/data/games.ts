import type { GameConfig } from '../types';

export const games: GameConfig[] = [
  {
    slug: 'rydash',
    title: 'Rydash',
    tagline: 'Ride. Dodge. Beat your best.',
    description: [
      'Rydash — just hop on and ride. A chill, addictive endless runner with one simple promise: pick it up, have fun, and try to beat your own best run. No timers, no pressure, no winning or losing against anyone but yourself — just you, the road, and that itch to go one run further.',
      'Cruise on a skateboard, bike, or scooter through endlessly unfolding worlds. Swipe to change lanes, tap to jump, react to oncoming obstacles, and keep that combo going. Every run is a fresh chance to set a new personal best.',
      'No paywalls blocking the fun, no stamina meters, no nonsense. Just an endless playground designed to make you smile and say "one more run."',
    ],
    features: [
      'Three-lane endless action with smooth swipe-and-tap controls',
      'Unlock a growing collection of rideables — skateboards, bikes, scooters & more',
      'Powerups: Coin Magnets, Double Coins, Extra Health, Double Lane Change, Invincibility',
      'Tap challenges, dynamic obstacles & surprise moments on every run',
      'Multiple maps with different vibes and visuals to explore',
      'Daily rewards, in-game shop, and a global leaderboard',
    ],
    genre: 'Endless runner',
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
      gallery: [
        { type: 'image', src: '/media/games/rydash/background.png', caption: 'Key art' },
        { type: 'video', src: '/media/games/rydash/splash.mp4', caption: 'Splash' },
        { type: 'image', src: '/media/games/rydash/icon.png', caption: 'App icon' },
      ],
    },
    status: 'released',
    accentColor: '#00A693',
    socials: {
      instagram: '',
      tiktok: '',
      youtube: '',
      twitter: '',
      discord: '',
      website: '',
    },
  },
];

export const getGame = (slug: string): GameConfig | undefined =>
  games.find((g) => g.slug === slug);
