import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import RydashPage from './routes/RydashPage';
import RydashPrivacyPolicy from './routes/RydashPrivacyPolicy';
import PizzUpPage from './routes/PizzUpPage';
import PizzUpPrivacyPolicy from './routes/PizzUpPrivacyPolicy';
import PizzUpTermsOfService from './routes/PizzUpTermsOfService';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/rydash" element={<RydashPage />} />
          <Route path="/games/rydash/privacy-policy" element={<RydashPrivacyPolicy />} />
          <Route path="/games/pizzup" element={<PizzUpPage />} />
          <Route path="/games/pizzup/privacy-policy" element={<PizzUpPrivacyPolicy />} />
          <Route path="/games/pizzup/terms-of-service" element={<PizzUpTermsOfService />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
