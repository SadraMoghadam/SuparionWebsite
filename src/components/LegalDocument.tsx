import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { parseInline, type LegalBlock, type LegalDoc } from '../content/legal';

/**
 * Renders a LegalDoc. The build-time twin of this component lives in
 * src/content/renderLegalHtml.ts and must emit the same markup and classes, so
 * the prerendered static page and the React page look identical.
 */

const LINK_CLASS = 'text-accent hover:underline';

function Inline({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((node, i) => {
        switch (node.kind) {
          case 'strong':
            return <strong key={i}>{node.text}</strong>;
          case 'em':
            return <em key={i}>{node.text}</em>;
          case 'link':
            if (!node.external) {
              return (
                <Link key={i} to={node.href} className={LINK_CLASS}>
                  {node.text}
                </Link>
              );
            }
            return (
              <a
                key={i}
                href={node.href}
                className={LINK_CLASS}
                {...(node.href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {node.text}
              </a>
            );
          default:
            return <Fragment key={i}>{node.text}</Fragment>;
        }
      })}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'subheading':
      return (
        <p className="font-semibold text-ink mt-4">
          <Inline text={block.text} />
        </p>
      );
    case 'ul':
      return (
        <ul className="list-disc list-inside space-y-1 ml-2">
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p>
          <Inline text={block.text} />
        </p>
      );
  }
}

export default function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <div className="pt-24 pb-20 container-x max-w-3xl mx-auto">
      <Link
        to={doc.back.to}
        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition mb-10"
      >
        {doc.back.label}
      </Link>

      <h1 className="text-4xl font-display font-bold text-ink mb-2">{doc.heading}</h1>
      <p className="text-ink-dim text-sm mb-10">
        <strong>Game:</strong> {doc.game} &nbsp;·&nbsp; <strong>Developer:</strong> {doc.developer}{' '}
        &nbsp;·&nbsp; <strong>Last updated:</strong> {doc.lastUpdated}
      </p>

      {doc.sections.map((section) => (
        <section className="mb-10" key={section.title}>
          <h2 className="text-xl font-display font-bold text-ink mb-3">{section.title}</h2>
          <div className="text-ink-muted text-sm leading-relaxed space-y-3">
            {section.blocks.map((block, i) => (
              <Block block={block} key={i} />
            ))}
          </div>
        </section>
      ))}

      <div className="pt-4 border-t border-white/5">
        <Link to={doc.companion.to} className="text-sm text-ink-muted hover:text-accent transition">
          {doc.companion.label}
        </Link>
      </div>
    </div>
  );
}
