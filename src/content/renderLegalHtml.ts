import { parseInline, type LegalBlock, type LegalDoc } from './legal';

/**
 * Build-time renderer for LegalDoc, used by the prerender plugin in
 * vite.config.ts to write the real text into each page's static index.html.
 *
 * It is the twin of src/components/LegalDocument.tsx: same markup, same
 * classes, so the page reads the same with or without JavaScript. Keep the two
 * in step when either changes. This module must stay free of React and of any
 * browser API, because it runs in Node during the build.
 */

const LINK_CLASS = 'text-accent hover:underline';

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function inline(text: string): string {
  return parseInline(text)
    .map((node) => {
      switch (node.kind) {
        case 'strong':
          return `<strong>${escape(node.text)}</strong>`;
        case 'em':
          return `<em>${escape(node.text)}</em>`;
        case 'link': {
          const target =
            node.external && !node.href.startsWith('mailto:')
              ? ' target="_blank" rel="noopener noreferrer"'
              : '';
          return `<a href="${escape(node.href)}" class="${LINK_CLASS}"${target}>${escape(node.text)}</a>`;
        }
        default:
          return escape(node.text);
      }
    })
    .join('');
}

function block(item: LegalBlock): string {
  switch (item.type) {
    case 'subheading':
      return `<p class="font-semibold text-ink mt-4">${inline(item.text)}</p>`;
    case 'ul':
      return `<ul class="list-disc list-inside space-y-1 ml-2">${item.items
        .map((entry) => `<li>${inline(entry)}</li>`)
        .join('')}</ul>`;
    default:
      return `<p>${inline(item.text)}</p>`;
  }
}

export function renderLegalHtml(doc: LegalDoc): string {
  const sections = doc.sections
    .map(
      (section) =>
        `<section class="mb-10"><h2 class="text-xl font-display font-bold text-ink mb-3">${escape(
          section.title,
        )}</h2><div class="text-ink-muted text-sm leading-relaxed space-y-3">${section.blocks
          .map(block)
          .join('')}</div></section>`,
    )
    .join('');

  return (
    `<div class="pt-24 pb-20 container-x max-w-3xl mx-auto">` +
    `<a href="${escape(doc.back.to)}" class="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition mb-10">${escape(
      doc.back.label,
    )}</a>` +
    `<h1 class="text-4xl font-display font-bold text-ink mb-2">${escape(doc.heading)}</h1>` +
    `<p class="text-ink-dim text-sm mb-10"><strong>Game:</strong> ${escape(
      doc.game,
    )} &nbsp;·&nbsp; <strong>Developer:</strong> ${escape(
      doc.developer,
    )} &nbsp;·&nbsp; <strong>Last updated:</strong> ${escape(doc.lastUpdated)}</p>` +
    sections +
    `<div class="pt-4 border-t border-white/5"><a href="${escape(
      doc.companion.to,
    )}" class="text-sm text-ink-muted hover:text-accent transition">${escape(
      doc.companion.label,
    )}</a></div>` +
    `</div>`
  );
}
