import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getGame } from '../data/games';
import StoreButtons from '../components/StoreButtons';

export default function RydashPage() {
  const game = getGame('rydash');
  if (!game) return null;

  return (
    <article className="pt-16">
      {/* Hero */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden">
        <img
          src={game.media.background}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/20" />

        <div className="relative container-x h-full flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-5 mb-6"
          >
            <img
              src={game.media.icon}
              alt=""
              className="h-20 w-20 rounded-2xl object-cover border border-white/10 shadow-xl"
            />
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                {game.genre}
              </span>
              <h1 className="font-display font-extrabold tracking-tightest text-6xl sm:text-7xl lg:text-8xl leading-[0.9]">
                {game.title}
              </h1>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl text-ink-muted max-w-2xl"
          >
            {game.tagline}
          </motion.p>
        </div>
      </section>

      {/* Description + trailer */}
      <section className="container-x py-20 grid lg:grid-cols-2 gap-12">
        <div>
          {game.description.map((p, i) => (
            <p key={i} className="text-lg text-ink-muted leading-relaxed mb-5">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <StoreButtons game={game} />
          </div>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster={game.media.background}
          >
            <source src={game.media.trailer} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg-soft border-y border-white/5">
        <div className="container-x py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Features
          </span>
          <h2 className="mt-3 font-display font-extrabold tracking-tightest text-4xl sm:text-5xl mb-10">
            Built for thumbs.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-5">
            {game.features.map((f, i) => (
              <li
                key={i}
                className="rounded-2xl bg-bg-card border border-white/10 p-6 flex gap-4"
              >
                <span className="text-accent font-display font-extrabold text-2xl">
                  0{i + 1}
                </span>
                <span className="text-ink-muted text-lg leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Splash */}
      {game.media.splash && (
        <section className="container-x py-20">
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={game.media.splash} type="video/mp4" />
            </video>
          </div>
        </section>
      )}

      {/* Back */}
      <section className="container-x py-16 flex justify-center">
        <Link to="/" className="btn-ghost">
          ← Back to all games
        </Link>
      </section>
    </article>
  );
}
