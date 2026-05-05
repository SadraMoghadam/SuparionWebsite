import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { GameConfig } from '../types';

export default function GameCard({ game }: { game: GameConfig }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-bg-card aspect-[4/5]"
    >
      <Link to={`/games/${game.slug}`} className="block w-full h-full">
        <img
          src={game.media.background}
          alt={`${game.title} key art`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-3">
          <img
            src={game.media.icon}
            alt=""
            className="h-10 w-10 rounded-xl object-cover border border-white/10"
          />
          <span className="text-xs uppercase tracking-widest text-ink-muted px-2 py-1 rounded-full bg-black/40 border border-white/10">
            {game.status === 'released' ? 'Out Now' : 'Coming Soon'}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display font-extrabold tracking-tightest text-3xl">
            {game.title}
          </h3>
          <p className="text-sm text-ink-muted mt-1">{game.tagline}</p>
          <p className="text-xs text-ink-dim mt-3 uppercase tracking-widest">
            {game.genre}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
