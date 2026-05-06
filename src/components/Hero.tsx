import { motion } from 'framer-motion';
import { studio } from '../data/studio';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center pt-24 pb-16">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_30%,rgba(0,166,147,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_10%_80%,rgba(46,196,176,0.10),transparent_65%)]" />
      </div>

      <div className="relative z-10 container-x grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center w-full">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img
            src="/media/suparion-logo.png"
            alt="Suparion Games logo"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain mb-6 drop-shadow-[0_8px_24px_rgba(0,166,147,0.35)]"
          />
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-5">
            Independent Game Studio
          </span>
          <h1 className="font-display font-extrabold tracking-tightest text-5xl sm:text-7xl lg:text-8xl leading-[0.95]">
            SUPARION
            <br />
            <span className="text-accent">GAMES</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-muted max-w-xl">
            {studio.tagline} From casual mobile to story-driven worlds — we build games worth your time.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#games" className="btn-primary">See our games</a>
            <a href="#about" className="btn-ghost">About the studio</a>
          </div>
        </motion.div>

        {/* Square 1:1 splash video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
        >
          {/* Soft glow halo */}
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-3xl opacity-50" />
          <div className="relative aspect-square rounded-[1.75rem] overflow-hidden border border-white/10 bg-bg-soft shadow-2xl shadow-black/60">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/media/suparion-logo-name.png"
            >
              <source src="/media/suparion-splash.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[1.75rem] pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-dim text-xs tracking-widest uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}
