import type { GameSocials as GameSocialsT } from '../types';

const LABELS: Record<keyof GameSocialsT, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  twitter: 'Twitter / X',
  discord: 'Discord',
  website: 'Website',
};

export default function GameSocials({ socials }: { socials: GameSocialsT }) {
  const entries = (Object.keys(LABELS) as (keyof GameSocialsT)[])
    .map((key) => ({
      key,
      label: LABELS[key],
      href: socials[key] ?? '',
    }))
    .filter(({ href }) => href);

  if (entries.length === 0) return null;

  return (
    <section className="bg-bg-soft border-y border-white/5">
      <div className="container-x py-16">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
          Follow the game
        </span>
        <h2 className="mt-3 font-display font-extrabold tracking-tightest text-3xl sm:text-4xl mb-8">
          Stay in the loop.
        </h2>
        <ul className="flex flex-wrap gap-3">
          {entries.map(({ key, label, href }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-white/10 bg-bg-card text-ink hover:border-accent hover:text-accent transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
