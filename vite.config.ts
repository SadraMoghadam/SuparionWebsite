import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const PRERENDER_ROUTES = [
  '/games/rydash',
  '/games/rydash/privacy-policy',
];

function prerenderRoutes(): Plugin {
  return {
    name: 'prerender-spa-routes',
    apply: 'build',
    closeBundle() {
      const dist = resolve(__dirname, 'dist');
      const source = resolve(dist, 'index.html');
      if (!existsSync(source)) return;
      for (const route of PRERENDER_ROUTES) {
        const target = resolve(dist, '.' + route, 'index.html');
        mkdirSync(dirname(target), { recursive: true });
        copyFileSync(source, target);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), prerenderRoutes()],
  base: '/',
});
