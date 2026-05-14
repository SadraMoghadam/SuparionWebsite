import { Link } from 'react-router-dom';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-display font-bold text-ink mb-3">{title}</h2>
    <div className="text-ink-muted text-sm leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function RydashPrivacyPolicy() {
  return (
    <div className="pt-24 pb-20 container-x max-w-3xl mx-auto">
      <Link
        to="/games/rydash"
        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition mb-10"
      >
        ← Back to Rydash
      </Link>

      <h1 className="text-4xl font-display font-bold text-ink mb-2">Privacy Policy</h1>
      <p className="text-ink-dim text-sm mb-10">
        <strong>Game:</strong> Rydash &nbsp;·&nbsp;
        <strong>Developer:</strong> Suparion Games &nbsp;·&nbsp;
        <strong>Last updated:</strong> May 14, 2025
      </p>

      <Section title="1. Introduction">
        <p>
          Suparion Games ("we", "us", or "our") built Rydash as a mobile game. This Privacy Policy
          explains what information is collected when you play Rydash, how it is used, and your
          rights regarding that information.
        </p>
        <p>
          By playing Rydash, you agree to the practices described in this policy. If you do not
          agree, please do not use the game.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We and our third-party partners collect the following types of information:</p>

        <p className="font-semibold text-ink mt-4">a) Information you provide</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <strong>Username:</strong> A display name you choose yourself when entering the
            leaderboard. This name is visible to other players on global and local leaderboards.
            We do not require your real name.
          </li>
        </ul>

        <p className="font-semibold text-ink mt-4">b) Automatically collected information</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <strong>Leaderboard scores:</strong> Your in-game scores and ranking data associated
            with your chosen username.
          </li>
          <li>
            <strong>Gameplay analytics:</strong> Aggregated, anonymised data about how the game is
            played (e.g., levels reached, sessions, feature usage) collected via Firebase Analytics
            and Unity Analytics. This data does not identify you personally.
          </li>
          <li>
            <strong>Device & crash data:</strong> Device model, OS version, and crash/error logs
            collected to diagnose technical issues.
          </li>
          <li>
            <strong>Advertising identifiers:</strong> Your device's advertising ID (GAID on Android)
            collected by Unity Ads to serve relevant rewarded ads.
          </li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Display your username and score on leaderboards.</li>
          <li>Improve gameplay balance and fix bugs using aggregated analytics.</li>
          <li>Serve advertisements, including rewarded ads you choose to watch.</li>
          <li>Monitor and fix crashes and technical issues.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </Section>

      <Section title="4. Advertising">
        <p>
          Rydash offers <strong>rewarded ads</strong>: short video ads that you can
          voluntarily choose to watch in exchange for in-game rewards. These ads are powered
          by <strong>Unity Ads</strong>. Unity Ads may collect and use your device's
          advertising identifier and other technical information to serve personalised or
          contextual ads.
        </p>
        <p>
          You can opt out of personalised advertising on your Android device under{' '}
          <em>Settings → Google → Ads → Opt out of Ads Personalization</em>, or reset your
          advertising ID at any time in the same menu.
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>
            Unity Ads Privacy Policy:{' '}
            <a
              href="https://unity.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              unity.com/legal/privacy-policy
            </a>
          </li>
        </ul>
      </Section>

      <Section title="5. Analytics">
        <p>
          We use <strong>Unity Analytics</strong> (part of Unity Gaming Services) to understand
          how players interact with Rydash. Data collected is anonymised and aggregated; it is
          not sold to third parties.
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>
            Unity Privacy Policy:{' '}
            <a
              href="https://unity.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              unity.com/legal/privacy-policy
            </a>
          </li>
        </ul>
      </Section>

      <Section title="6. Leaderboards">
        <p>
          When you submit a score to the leaderboard, your chosen username and score are stored
          and processed by <strong>Unity Gaming Services (UGS)</strong> and displayed publicly
          to all players. Do not use your real name or any personal information as your username.
        </p>
        <p>
          Unity Gaming Services Privacy Policy:{' '}
          <a
            href="https://unity.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            unity.com/legal/privacy-policy
          </a>
        </p>
        <p>
          You may request deletion of your leaderboard entry at any time by contacting us at the
          address below.
        </p>
      </Section>

      <Section title="7. Children's Privacy">
        <p>
          Rydash is not directed at children under the age of 13. We do not knowingly collect
          personal information from children under 13. If you believe a child under 13 has
          provided personal information through the game, please contact us immediately and we
          will delete it.
        </p>
      </Section>

      <Section title="8. Data Retention">
        <p>
          Leaderboard data (username + score) is retained as long as the leaderboard is active
          or until you request deletion. Analytics data is retained in aggregated, anonymised
          form. Advertising identifiers are managed by the respective ad platform's own retention
          policies.
        </p>
      </Section>

      <Section title="9. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Opt out of personalised advertising (see Section 4).</li>
        </ul>
        <p>To exercise any of these rights, contact us at the address in Section 11.</p>
      </Section>

      <Section title="10. Security">
        <p>
          We use commercially reasonable measures to protect the information we collect.
          However, no method of transmission or storage over the internet is 100% secure, and
          we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>If you have questions or requests regarding this Privacy Policy, contact us at:</p>
        <p>
          <a
            href="mailto:suparion.games@gmail.com"
            className="text-accent hover:underline"
          >
            suparion.games@gmail.com
          </a>
        </p>
      </Section>

      <Section title="12. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this
          page with an updated "Last updated" date. Continued use of Rydash after changes
          constitutes acceptance of the new policy.
        </p>
      </Section>
    </div>
  );
}
