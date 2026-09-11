import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import FeaturedGame from '../components/FeaturedGame';
import GamesGrid from '../components/GamesGrid';
import About from '../components/About';
import { games } from '../data/games';
import { studio } from '../data/studio';

export default function Home() {
  const featured = games.filter((g) => g.featured);
  return (
    <>
      <Helmet>
        <title>Suparion Games | Independent Game Studio</title>
        <meta name="description" content="Suparion Games is an independent mobile game studio. Makers of Rydash, a chill, free endless runner, and PizzUp!, coming soon to iOS and Android." />
        <link rel="canonical" href="https://suparion.com/" />
        <meta property="og:title" content="Suparion Games | Independent Game Studio" />
        <meta property="og:description" content="Makers of Rydash, a chill, free endless runner, and PizzUp!, coming soon to iOS and Android." />
        <meta property="og:image" content="https://suparion.com/media/suparion-logo-name.png" />
        <meta property="og:url" content="https://suparion.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suparion Games | Independent Game Studio" />
        <meta name="twitter:description" content="Makers of Rydash, a chill, free endless runner, and PizzUp!, coming soon to iOS and Android." />
        <meta name="twitter:image" content="https://suparion.com/media/suparion-logo-name.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: studio.name,
            url: 'https://suparion.com/',
            logo: 'https://suparion.com/media/suparion-logo-name.png',
            description: studio.about[0],
            email: studio.contact.email,
            founder: { '@type': 'Person', name: studio.founder.name },
            sameAs: [
              studio.socials.instagram,
              studio.socials.youtube,
              studio.socials.twitter,
              studio.socials.tiktok,
            ],
          })}
        </script>
      </Helmet>
      <Hero />
      {featured.map((game, i) => (
        <FeaturedGame key={game.slug} game={game} reverse={i % 2 === 1} />
      ))}
      <GamesGrid />
      <About />
    </>
  );
}
