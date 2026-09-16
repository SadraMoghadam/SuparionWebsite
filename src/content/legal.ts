/**
 * Shared model for legal documents (privacy policies, terms of service).
 *
 * The copy lives here as plain data so it can be rendered twice from one
 * source: by the React page at runtime, and by the build-time prerenderer in
 * vite.config.ts, which writes the full text into the static index.html. That
 * way the page is readable without JavaScript, which store reviewers and
 * crawlers need.
 *
 * Body text supports a small inline syntax so the copy stays readable here:
 *   **bold**, *italic*, [label](/internal-path), [label](https://example.com)
 */

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'ul'; items: string[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  /** Page heading, e.g. "Privacy Policy". */
  heading: string;
  game: string;
  developer: string;
  lastUpdated: string;
  /** Link back to the game page, shown above the heading. */
  back: { to: string; label: string };
  sections: LegalSection[];
  /** Link to the companion document, shown at the foot of the page. */
  companion: { to: string; label: string };
};

export type InlineNode =
  | { kind: 'text'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'em'; text: string }
  | { kind: 'link'; text: string; href: string; external: boolean };

const INLINE = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\(([^)]+)\)/g;

/** Parses the inline syntax above into nodes both renderers understand. */
export function parseInline(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let last = 0;

  for (const match of text.matchAll(INLINE)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push({ kind: 'text', text: text.slice(last, index) });

    const [full, bold, italic, label, href] = match;
    if (bold !== undefined) {
      nodes.push({ kind: 'strong', text: bold });
    } else if (italic !== undefined) {
      nodes.push({ kind: 'em', text: italic });
    } else if (label !== undefined && href !== undefined) {
      nodes.push({ kind: 'link', text: label, href, external: !href.startsWith('/') });
    }
    last = index + full.length;
  }

  if (last < text.length) nodes.push({ kind: 'text', text: text.slice(last) });
  return nodes;
}
