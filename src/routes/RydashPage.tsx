import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { getGame } from '../data/games';
import StoreButtons from '../components/StoreButtons';
import Gallery from '../components/Gallery';
import GameSocials from '../components/GameSocials';

export default function RydashPage() {
  const game = getGame('rydash');
  if (!game) return null;

  return (
    <article className="pt-16">
      <Helmet>
        <title>Rydash — Casual Arcade Racer | Suparion Games</title>
        <meta name="description" content="Rydash is a fast, snackable arcade racer built for one-handed play. Tap, swerve, and chain perfect drifts through neon city streets. Free to play on iOS and Android." />
        <link rel="canonical" href="https://suparion.com/games/rydash" />
        <meta property="og:title" content="Rydash — Casual Arcade Racer" />
        <meta property="og:description" content="Tap, swerve, and chain perfect drifts through neon city streets. Free to play on iOS and Android." />
        <meta property="og:image" content="https://suparion.com/media/games/rydash/background.png" />
        <meta property="og:url" content="https://suparion.com/games/rydash" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rydash — Casual Arcade Racer" />
        <meta name="twitter:description" content="Fast, snackable arcade racer built for one-handed play. Free on iOS and Android." />
        <meta name="twitter:image" content="https://suparion.com/media/games/rydash/background.png" />
      </Helmet>
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
      <section className="container-x py-20 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
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
        <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px]">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl opacity-60" />
          <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl shadow-black/60">
            <video
              className="absolute inset-0 w-full h-full object-contain bg-black"
              playsInline
              controls
              preload="metadata"
              poster={game.media.background}
            >
              <source src={game.media.trailer} type="video/mp4" />
            </video>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
          </div>
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

      {/* Socials */}
      {game.socials && <GameSocials socials={game.socials} />}

      {/* Gallery */}
      {game.media.gallery && game.media.gallery.length > 0 && (
        <section className="container-x py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Gallery
          </span>
          <h2 className="mt-3 font-display font-extrabold tracking-tightest text-4xl sm:text-5xl mb-10">
            Screens & clips.
          </h2>
          <Gallery items={game.media.gallery} />
        </section>
      )}

      {/* Back */}
      <section className="container-x py-16 flex flex-col items-center gap-5">
        <Link to="/" className="btn-ghost">
          ← Back to all games
        </Link>
        <Link
          to="/games/rydash/privacy-policy"
          className="text-xs text-ink-dim hover:text-ink-muted transition"
        >
          Privacy Policy
        </Link>
      </section>
    </article>
  );
}
