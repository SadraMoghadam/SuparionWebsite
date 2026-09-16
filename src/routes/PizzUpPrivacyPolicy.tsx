import { Helmet } from 'react-helmet-async';
import LegalDocument from '../components/LegalDocument';
import { pizzupPrivacyPolicy } from '../content/pizzupPrivacyPolicy';

export default function PizzUpPrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>PizzUp! Privacy Policy | Suparion Games</title>
        <meta
          name="description"
          content="Privacy Policy for PizzUp! by Suparion Games: what data the game collects, how it is used, advertising and analytics partners, children's privacy, and how to contact us."
        />
        <link rel="canonical" href="https://suparion.com/games/pizzup/privacy-policy" />
        <meta property="og:title" content="PizzUp! Privacy Policy" />
        <meta property="og:url" content="https://suparion.com/games/pizzup/privacy-policy" />
        <meta property="og:type" content="article" />
      </Helmet>
      <LegalDocument doc={pizzupPrivacyPolicy} />
    </>
  );
}
