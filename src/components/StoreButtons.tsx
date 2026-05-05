import type { GameConfig, Platform } from '../types';

const LABELS: Record<Platform, { name: string; sub: string }> = {
  ios: { name: 'App Store', sub: 'Download on the' },
  android: { name: 'Google Play', sub: 'Get it on' },
  steam: { name: 'Steam', sub: 'Play on' },
  web: { name: 'Web', sub: 'Play on' },
};

export default function StoreButtons({
  game,
  compact = false,
}: {
  game: GameConfig;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? '' : 'mt-2'}`}>
      {game.platforms.map((p) => {
        const href = game.storeLinks[p];
        const label = LABELS[p];
        const disabled = !href;
        const Inner = (
          <span
            className={`group inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 transition ${
              disabled
                ? 'border-white/10 text-ink-dim cursor-not-allowed'
                : 'border-white/15 text-ink hover:border-accent hover:text-accent'
            }`}
            title={disabled ? 'Link coming soon' : undefined}
          >
            <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">
              {label.sub}
            </span>
            <span className="font-display font-bold text-base">
              {label.name}
            </span>
          </span>
        );
        return disabled ? (
          <span key={p}>{Inner}</span>
        ) : (
          <a
            key={p}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Inner}
          </a>
        );
      })}
    </div>
  );
}
