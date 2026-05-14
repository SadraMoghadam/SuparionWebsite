import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import FeaturedGame from '../components/FeaturedGame';
import GamesGrid from '../components/GamesGrid';
import About from '../components/About';
import { games } from '../data/games';

export default function Home() {
  const featured = games[0];
  return (
    <>
      <Helmet>
        <title>Suparion Games | Independent Game Studio</title>
        <meta name="description" content="Suparion Games is an independent mobile game studio. Makers of Rydash, a chill, free endless runner for iOS and Android." />
        <link rel="canonical" href="https://suparion.com/" />
        <meta property="og:title" content="Suparion Games | Independent Game Studio" />
        <meta property="og:description" content="Makers of Rydash, a chill, free endless runner for iOS and Android." />
        <meta property="og:image" content="https://suparion.com/media/suparion-logo-name.png" />
        <meta property="og:url" content="https://suparion.com/" />
      </Helmet>
      <Hero />
      {featured && <FeaturedGame game={featured} />}
      <GamesGrid />
      <About />
    </>
  );
}
