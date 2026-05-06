import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryItem } from '../types';

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === 'ArrowLeft')
        setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, items.length]);

  if (!items.length) return null;

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="group relative mb-4 block w-full break-inside-avoid rounded-xl overflow-hidden border border-white/10 bg-bg-soft focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.caption ?? ''}
                className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              <>
                <video
                  className="block w-full h-auto"
                  src={item.src}
                  poster={item.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                />
                <span className="absolute top-2 right-2 text-[10px] uppercase tracking-widest bg-black/60 text-ink px-2 py-1 rounded-full border border-white/10">
                  Video
                </span>
              </>
            )}
            {item.caption && (
              <span className="absolute bottom-0 left-0 right-0 p-3 text-xs text-ink-muted bg-gradient-to-t from-black/80 to-transparent text-left">
                {item.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-ink text-xl flex items-center justify-center"
            >
              ×
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length));
              }}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-ink text-2xl flex items-center justify-center"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive((i) => (i === null ? null : (i + 1) % items.length));
              }}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-ink text-2xl flex items-center justify-center"
            >
              ›
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[92vw] max-h-[88vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {items[active].type === 'image' ? (
                <img
                  src={items[active].src}
                  alt={items[active].caption ?? ''}
                  className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl"
                />
              ) : (
                <video
                  src={items[active].src}
                  poster={(items[active] as Extract<GalleryItem, { type: 'video' }>).poster}
                  className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
