import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { GameConfig } from '../types';
import StoreButtons from './StoreButtons';

export default function FeaturedGame({
  game,
  reverse = false,
}: {
  game: GameConfig;
  reverse?: boolean;
}) {
  const video = game.media.splash || game.media.trailer;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <picture className="block w-full h-full">
          {game.media.portrait && (
            <source media="(max-width: 639px)" srcSet={game.media.portrait} />
          )}
          <img
            src={game.media.background}
            alt=""
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-bg/40" />
      </div>

      <div className="relative container-x py-24 lg:py-36 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className={reverse ? 'lg:order-2' : undefined}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            {game.status === 'coming-soon' ? 'Coming Soon' : 'Featured Game'}
          </span>
          <h2 className="mt-3 font-display font-extrabold tracking-tightest text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            {game.title}
          </h2>
          <p className="mt-4 text-xl text-ink-muted">{game.tagline}</p>
          <p className="mt-5 text-base text-ink-muted/90 max-w-xl">
            {game.description[0]}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <Link to={`/games/${game.slug}`} className="btn-primary">
              Explore {game.title}
            </Link>
            <StoreButtons game={game} compact />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`relative mx-auto w-full max-w-[300px] sm:max-w-[340px] ${
            reverse ? 'lg:order-1' : ''
          }`}
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl opacity-60" />
          <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl shadow-black/60">
            {video ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={game.media.background}
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={game.media.portrait ?? game.media.background}
                alt={`${game.title} key art`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
