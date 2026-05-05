import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled || !onHome
          ? 'bg-bg/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/media/suparion-logo.png"
            alt="Suparion Games"
            className="h-8 w-8 object-contain"
          />
          <span className="font-display font-bold tracking-tightest text-lg">
            SUPARION <span className="text-accent">GAMES</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          {onHome ? (
            <>
              <a href="#games" className="px-3 py-2 text-ink-muted hover:text-ink transition">Games</a>
              <a href="#about" className="px-3 py-2 text-ink-muted hover:text-ink transition">About</a>
              <a href="#contact" className="px-3 py-2 text-ink-muted hover:text-ink transition">Contact</a>
            </>
          ) : (
            <Link to="/" className="px-3 py-2 text-ink-muted hover:text-ink transition">
              ← Home
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
