import type { GameConfig } from '../types';

export const games: GameConfig[] = [
  {
    slug: 'rydash',
    title: 'Rydash',
    tagline: 'Ride. Dodge. Beat your best.',
    description: [
      'Rydash: just hop on and ride. A chill, addictive endless runner with one simple promise: pick it up, have fun, and try to beat your own best run. No timers, no pressure, no winning or losing against anyone but yourself. Just you, the road, and that itch to go one run further.',
      'Cruise on a skateboard, bike, or scooter through endlessly unfolding worlds. Swipe to change lanes, tap to jump, react to oncoming obstacles, and keep that combo going. Every run is a fresh chance to set a new personal best.',
      'No paywalls blocking the fun, no stamina meters, no nonsense. Just an endless playground designed to make you smile and say "one more run."',
    ],
    features: [
      'Three-lane endless action with smooth swipe-and-tap controls',
      'Unlock a growing collection of rideables: skateboards, bikes, scooters & more',
      'Powerups: Coin Magnets, Double Coins, Extra Health, Double Lane Change, Invincibility',
      'Tap challenges, dynamic obstacles & surprise moments on every run',
      'Multiple maps with different vibes and visuals to explore',
      'Daily rewards, in-game shop, and a global leaderboard',
    ],
    genre: 'Endless runner',
    platforms: ['ios', 'android'],
    storeLinks: {
      // TODO: paste real App Store URL after iOS launch.
      ios: '',
      android: 'https://play.google.com/store/apps/details?id=com.suparion.rydash',
    },
    media: {
      icon: '/media/games/rydash/icon.png',
      background: '/media/games/rydash/background.png',
      trailer: '/media/games/rydash/trailer.mp4',
      youtubeId: 'aJbf8uyhsCg',
      splash: '/media/games/rydash/splash.mp4',
      gallery: [
        { type: 'image', src: '/media/games/rydash/background.png', caption: 'Key art' },
        { type: 'video', src: '/media/games/rydash/splash.mp4', caption: 'Splash' },
        { type: 'image', src: '/media/games/rydash/icon.png', caption: 'App icon' },
      ],
    },
    status: 'released',
    featured: true,
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
  {
    slug: 'pizzup',
    title: 'PizzUp!',
    tagline: 'Catch, balance and build the tallest tower in Italy!',
    description: [
      'How high can you stack your pizza tower? Welcome to PizzUp!, a fun pizza stacking game where timing, balance and perfect catches are everything. A chef throws pizzas from above and your job is to catch them on your tray and stack them as high as possible. Land pizzas perfectly to keep your tower stable, build combos and earn more coins. Miss the center, and your whole pizza tower can start to wobble!',
      'Simple to play, hard to master, PizzUp! mixes casual arcade gameplay, stacking and balance mechanics into quick and satisfying runs. Catch perfect pizzas, build combos and beat your high score. The better your timing, the taller your pizza tower can grow!',
      'Travel across Italy and unlock new colorful locations inspired by famous Italian cities and landscapes. Earn coins as you play, unlock new content and challenge yourself to build an even higher stack in every run.',
      'Whether you love pizza games, stacking games, balance games or casual arcade games, PizzUp! is easy to pick up and surprisingly hard to put down. Catch the pizza. Keep your balance. Build the tallest tower!',
    ],
    features: [
      'One-tap catching: time every drop and land it dead center',
      'Real balance physics: off-center pizzas make your tower wobble',
      'Combo system that rewards perfect catches with more coins',
      'Colorful locations to unlock, inspired by Italian cities and landscapes',
      'Earn coins as you play and unlock new content',
      'Quick runs built for chasing a new high score',
    ],
    genre: 'Casual arcade stacking',
    platforms: ['ios', 'android'],
    storeLinks: {
      // TODO: paste real store URLs at launch.
      ios: '',
      android: '',
    },
    media: {
      icon: '/media/games/pizzup/PizzUpIcon.png',
      background: '/media/games/pizzup/Horizontal.jpg',
      trailer: '',
      portrait: '/media/games/pizzup/Vertical.jpg',
      gallery: [
        { type: 'image', src: '/media/games/pizzup/Horizontal.jpg', caption: 'Key art' },
        { type: 'image', src: '/media/games/pizzup/Vertical.jpg', caption: 'Poster' },
        { type: 'image', src: '/media/games/pizzup/PizzUpIcon.png', caption: 'App icon' },
      ],
    },
    status: 'coming-soon',
    featured: true,
    accentColor: '#E4572E',
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
