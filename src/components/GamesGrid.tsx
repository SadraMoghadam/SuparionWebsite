import { motion } from 'framer-motion';
import { games } from '../data/games';
import GameCard from './GameCard';

export default function GamesGrid() {
  return (
    <section id="games" className="container-x py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Our Games
          </span>
          <h2 className="mt-3 font-display font-extrabold tracking-tightest text-4xl sm:text-5xl">
            Built one game at a time.
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((g) => (
          <GameCard key={g.slug} game={g} />
        ))}
        <div className="rounded-2xl border border-dashed border-white/10 aspect-[4/5] flex items-center justify-center text-ink-dim text-sm tracking-widest uppercase">
          More soon
        </div>
      </div>
    </section>
  );
}
