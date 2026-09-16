import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { renderLegalHtml } from './src/content/renderLegalHtml';
import { pizzupPrivacyPolicy } from './src/content/pizzupPrivacyPolicy';
import { pizzupTermsOfService } from './src/content/pizzupTermsOfService';

const SITE = 'https://suparion.com';

type RouteMeta = {
  title: string;
  description: string;
  image?: string;
  /**
   * Fully rendered page body, written into #root so the page is readable with
   * JavaScript disabled or blocked. React renders the same markup on boot.
   */
  body?: string;
};

/**
 * Routes written to disk as their own index.html so they resolve with a 200 on
 * static hosts (GitHub Pages) instead of falling through to 404.html. Each gets
 * its own crawlable title/description, so a page can be found and shared on its
 * own, without the app having to boot first.
 */
const PRERENDER_ROUTES: Record<string, RouteMeta> = {
  '/games/rydash': {
    title: 'Rydash: Endless Runner | Suparion Games',
    description:
      'Ride. Dodge. Beat your best. Rydash is a chill endless runner. Hop on a skateboard, bike, or scooter and chase your high score. Free to play on iOS and Android.',
    image: `${SITE}/media/games/rydash/background.png`,
  },
  '/games/rydash/privacy-policy': {
    title: 'Rydash Privacy Policy | Suparion Games',
    description:
      'Privacy Policy for Rydash by Suparion Games: what data the game collects, how it is used, advertising and analytics partners, children’s privacy, and how to contact us.',
  },
  '/games/pizzup': {
    title: 'PizzUp! | Suparion Games',
    description:
      'PizzUp! is a pizza stacking game: catch, balance and build the tallest tower in Italy. A new arcade game from Suparion Games, coming soon to iOS and Android.',
    image: `${SITE}/media/games/pizzup/Horizontal.jpg`,
  },
  '/games/pizzup/privacy-policy': {
    title: 'PizzUp! Privacy Policy | Suparion Games',
    description:
      'Privacy Policy for PizzUp! by Suparion Games: what data the game collects, how it is used, advertising and analytics partners, children’s privacy, and how to contact us.',
    body: renderLegalHtml(pizzupPrivacyPolicy),
  },
  '/games/pizzup/terms-of-service': {
    title: 'PizzUp! Terms of Service | Suparion Games',
    description:
      'Terms of Service for PizzUp! by Suparion Games: licence to play, player conduct, virtual items, advertising, liability, and contact details.',
    body: renderLegalHtml(pizzupTermsOfService),
  },
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function applyMeta(html: string, route: string, meta: RouteMeta): string {
  const url = `${SITE}${route}`;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  let out = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[\s\S]*?" \/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:title" content="[\s\S]*?" \/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta property="og:description" content="[\s\S]*?" \/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:url" content="[\s\S]*?" \/>/,
      `<meta property="og:url" content="${url}" />`,
    );

  if (meta.image) {
    out = out.replace(
      /<meta property="og:image" content="[\s\S]*?" \/>/,
      `<meta property="og:image" content="${escapeHtml(meta.image)}" />`,
    );
  }

  out = out.replace('</head>', `    <link rel="canonical" href="${url}" />\n  </head>`);

  if (meta.body) {
    out = out.replace('<div id="root"></div>', `<div id="root">${meta.body}</div>`);
  }

  return out;
}

function prerenderRoutes(): Plugin {
  return {
    name: 'prerender-spa-routes',
    apply: 'build',
    closeBundle() {
      const dist = resolve(__dirname, 'dist');
      const source = resolve(dist, 'index.html');
      if (!existsSync(source)) return;
      const html = readFileSync(source, 'utf8');
      for (const [route, meta] of Object.entries(PRERENDER_ROUTES)) {
        const target = resolve(dist, '.' + route, 'index.html');
        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, applyMeta(html, route, meta), 'utf8');
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), prerenderRoutes()],
  base: '/',
});
