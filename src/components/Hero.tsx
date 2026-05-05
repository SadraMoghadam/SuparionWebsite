import { motion } from 'framer-motion';
import { studio } from '../data/studio';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/suparion-logo-name.png"
      >
        <source src="/media/suparion-splash.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/20 to-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/60" />

      <div className="relative z-10 container-x h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
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
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-dim text-xs tracking-widest uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}
