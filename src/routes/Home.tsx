import Hero from '../components/Hero';
import FeaturedGame from '../components/FeaturedGame';
import GamesGrid from '../components/GamesGrid';
import About from '../components/About';
import { games } from '../data/games';

export default function Home() {
  const featured = games[0];
  return (
    <>
      <Hero />
      {featured && <FeaturedGame game={featured} />}
      <GamesGrid />
      <About />
    </>
  );
}
