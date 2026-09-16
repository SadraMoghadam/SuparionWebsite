import { Helmet } from 'react-helmet-async';
import LegalDocument from '../components/LegalDocument';
import { pizzupTermsOfService } from '../content/pizzupTermsOfService';

export default function PizzUpTermsOfService() {
  return (
    <>
      <Helmet>
        <title>PizzUp! Terms of Service | Suparion Games</title>
        <meta
          name="description"
          content="Terms of Service for PizzUp! by Suparion Games: licence to play, player conduct, virtual items, advertising, liability, and contact details."
        />
        <link rel="canonical" href="https://suparion.com/games/pizzup/terms-of-service" />
        <meta property="og:title" content="PizzUp! Terms of Service" />
        <meta property="og:url" content="https://suparion.com/games/pizzup/terms-of-service" />
        <meta property="og:type" content="article" />
      </Helmet>
      <LegalDocument doc={pizzupTermsOfService} />
    </>
  );
}
