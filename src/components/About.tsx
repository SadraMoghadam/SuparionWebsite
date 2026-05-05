import { motion } from 'framer-motion';
import { studio } from '../data/studio';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="container-x py-24 lg:py-32 grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            About the studio
          </span>
          <h2 className="mt-3 font-display font-extrabold tracking-tightest text-4xl sm:text-5xl leading-tight">
            Small team. Big games.
          </h2>
          {studio.about.map((p, i) => (
            <p key={i} className="mt-5 text-ink-muted text-lg leading-relaxed max-w-2xl">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl bg-bg-card border border-white/10 p-6"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-bg-soft border border-white/5 mb-5">
            <img
              src={studio.founder.photo}
              alt={studio.founder.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            {studio.founder.role}
          </p>
          <p className="mt-1 font-display font-bold text-2xl">
            {studio.founder.name}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
