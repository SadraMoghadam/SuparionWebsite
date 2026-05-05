import { studio } from '../data/studio';

const SocialLink = ({ href, label }: { href: string; label: string }) => {
  if (!href) {
    return (
      <span className="text-ink-dim cursor-not-allowed" title="Coming soon">
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ink-muted hover:text-accent transition"
    >
      {label}
    </a>
  );
};

export default function Footer() {
  const { socials, contact } = studio;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/5 bg-bg-soft">
      <div className="container-x py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/media/suparion-logo.png"
              alt=""
              className="h-9 w-9 object-contain"
            />
            <span className="font-display font-bold tracking-tightest text-lg">
              SUPARION <span className="text-accent">GAMES</span>
            </span>
          </div>
          <p className="mt-4 text-ink-muted text-sm max-w-xs">
            {studio.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-ink-dim font-semibold mb-4">
            Get in touch
          </h4>
          {contact.email ? (
            <a
              href={`mailto:${contact.email}`}
              className="text-ink hover:text-accent transition"
            >
              {contact.email}
            </a>
          ) : (
            <span className="text-ink-dim" title="Coming soon">
              contact@suparion.com
            </span>
          )}
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-ink-dim font-semibold mb-4">
            Follow
          </h4>
          <ul className="space-y-2 text-sm">
            <li><SocialLink href={socials.instagram} label="Instagram" /></li>
            <li><SocialLink href={socials.youtube} label="YouTube" /></li>
            <li><SocialLink href={socials.twitter} label="Twitter / X" /></li>
            <li><SocialLink href={socials.tiktok} label="TikTok" /></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 text-xs text-ink-dim flex flex-wrap items-center justify-between gap-3">
          <span>© {year} Suparion Games. All rights reserved.</span>
          <span>Made with care.</span>
        </div>
      </div>
    </footer>
  );
}
