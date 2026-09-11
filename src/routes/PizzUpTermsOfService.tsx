import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-display font-bold text-ink mb-3">{title}</h2>
    <div className="text-ink-muted text-sm leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function PizzUpTermsOfService() {
  return (
    <div className="pt-24 pb-20 container-x max-w-3xl mx-auto">
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
      <Link
        to="/games/pizzup"
        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition mb-10"
      >
        ← Back to PizzUp!
      </Link>

      <h1 className="text-4xl font-display font-bold text-ink mb-2">Terms of Service</h1>
      <p className="text-ink-dim text-sm mb-10">
        <strong>Game:</strong> PizzUp! &nbsp;·&nbsp;
        <strong>Developer:</strong> Suparion Games &nbsp;·&nbsp;
        <strong>Last updated:</strong> September 11, 2026
      </p>

      <Section title="1. Acceptance of These Terms">
        <p>
          These Terms of Service ("Terms") govern your use of PizzUp! (the "Game"), a mobile game
          developed and published by Suparion Games ("we", "us", or "our").
        </p>
        <p>
          By downloading, installing, or playing PizzUp!, you agree to these Terms. If you do not
          agree, do not install or play the Game.
        </p>
      </Section>

      <Section title="2. Eligibility">
        <p>
          PizzUp! is suitable for players of all ages. If you are under the age of majority in
          your country, you may use the Game only with the involvement and consent of a parent or
          legal guardian, who agrees to these Terms on your behalf and is responsible for your use
          of the Game.
        </p>
        <p>
          You must also comply with the terms of the app store you downloaded the Game from (Apple
          App Store or Google Play), which apply in addition to these Terms.
        </p>
      </Section>

      <Section title="3. Licence to Play">
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable, revocable licence to
          download and play PizzUp! on devices you own or control, for your own private,
          non-commercial entertainment.
        </p>
        <p>This licence does not give you the right to:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Sell, rent, sublicense, or commercially exploit the Game or any part of it.</li>
          <li>
            Copy, modify, translate, reverse engineer, decompile, or disassemble the Game, except
            where this restriction is prohibited by applicable law.
          </li>
          <li>Remove, obscure, or alter any copyright, trademark, or other proprietary notices.</li>
          <li>
            Use cheats, mods, bots, automation tools, memory editors, or any software that gives
            an unfair advantage or interferes with normal gameplay.
          </li>
          <li>
            Attempt to gain unauthorised access to our servers, leaderboards, or any related
            systems.
          </li>
        </ul>
      </Section>

      <Section title="4. Ownership and Intellectual Property">
        <p>
          PizzUp!, including its code, artwork, characters, logos, music, sound effects, text, and
          all other content, is owned by Suparion Games and is protected by copyright, trademark,
          and other intellectual property laws. All rights not expressly granted to you in these
          Terms are reserved.
        </p>
      </Section>

      <Section title="5. Player Conduct and Usernames">
        <p>
          You are responsible for the display name you choose when submitting a score to the
          leaderboard. Usernames must not:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Contain real names, addresses, phone numbers, or other personal information.</li>
          <li>
            Be offensive, hateful, sexual, harassing, or otherwise inappropriate for a
            family-friendly audience.
          </li>
          <li>Impersonate another person, Suparion Games, or any third party.</li>
          <li>Infringe anyone's trademark or other rights.</li>
        </ul>
        <p>
          We may remove any username or leaderboard entry that breaches these rules, and may
          remove scores that we reasonably believe were achieved through cheating or exploits.
        </p>
      </Section>

      <Section title="6. Advertising and Virtual Items">
        <p>
          PizzUp! is free to play and supported by advertising, including <strong>rewarded ads</strong>{' '}
          that you may voluntarily choose to watch in exchange for in-game rewards. Watching ads
          is always optional.
        </p>
        <p>
          Any in-game currency, items, or unlocks are virtual goods licensed to you for use inside
          the Game. They have no monetary value, cannot be exchanged for real money or other goods,
          and are not your property. Virtual items may be changed, rebalanced, or removed as the
          Game is updated, and they may be lost if you uninstall the Game, reset your device, or
          lose access to your device's local save data.
        </p>
        <p>
          If the Game offers paid purchases, all payments are handled by the Apple App Store or
          Google Play. Refunds are governed by that store's policies, not by us.
        </p>
      </Section>

      <Section title="7. Updates and Availability">
        <p>
          We may update, change, suspend, or discontinue PizzUp! or any of its features, including
          online services such as leaderboards, at any time and without notice. We do not guarantee
          that the Game will always be available, uninterrupted, or error free.
        </p>
      </Section>

      <Section title="8. Termination">
        <p>
          You may stop using PizzUp! at any time by uninstalling it. We may suspend or terminate
          your access to online features, including leaderboards, if you breach these Terms. On
          termination, the licence granted in Section 3 ends immediately.
        </p>
      </Section>

      <Section title="9. Privacy">
        <p>
          Our handling of your information is described in the{' '}
          <Link to="/games/pizzup/privacy-policy" className="text-accent hover:underline">
            PizzUp! Privacy Policy
          </Link>
          , which forms part of these Terms.
        </p>
      </Section>

      <Section title="10. Disclaimer of Warranties">
        <p>
          PizzUp! is provided "as is" and "as available", without warranties of any kind, whether
          express or implied, including any implied warranties of merchantability, fitness for a
          particular purpose, or non-infringement. Nothing in these Terms limits any rights you
          have under mandatory consumer protection laws in your country.
        </p>
      </Section>

      <Section title="11. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Suparion Games will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or for any loss of
          data, progress, virtual items, or profits, arising out of or related to your use of
          PizzUp!.
        </p>
        <p>
          Where liability cannot be excluded, our total liability to you is limited to the amount
          you paid us for the Game in the twelve months before the claim, or ten US dollars,
          whichever is greater.
        </p>
      </Section>

      <Section title="12. Third-Party Services">
        <p>
          PizzUp! uses third-party services including Unity Gaming Services, Unity Ads, Unity
          Analytics, and Firebase. Your use of the Game is also subject to the terms and policies
          of those providers. We are not responsible for the content of third-party
          advertisements.
        </p>
      </Section>

      <Section title="13. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Changes will be posted on this page with an
          updated "Last updated" date. Continued use of PizzUp! after changes take effect
          constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="14. Contact Us">
        <p>If you have questions about these Terms, contact us at:</p>
        <p>
          <a href="mailto:suparion.games@gmail.com" className="text-accent hover:underline">
            suparion.games@gmail.com
          </a>
        </p>
      </Section>

      <div className="pt-4 border-t border-white/5">
        <Link
          to="/games/pizzup/privacy-policy"
          className="text-sm text-ink-muted hover:text-accent transition"
        >
          Privacy Policy →
        </Link>
      </div>
    </div>
  );
}
