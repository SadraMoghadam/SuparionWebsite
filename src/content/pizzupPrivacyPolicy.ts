import type { LegalDoc } from './legal';

const UNITY_PRIVACY = 'https://unity.com/legal/privacy-policy';

export const pizzupPrivacyPolicy: LegalDoc = {
  heading: 'Privacy Policy',
  game: 'PizzUp!',
  developer: 'Suparion Games',
  lastUpdated: 'September 11, 2026',
  back: { to: '/games/pizzup', label: '← Back to PizzUp!' },
  companion: { to: '/games/pizzup/terms-of-service', label: 'Terms of Service →' },
  sections: [
    {
      title: '1. Introduction',
      blocks: [
        {
          type: 'p',
          text: 'Suparion Games ("we", "us", or "our") built PizzUp! as a mobile game. This Privacy Policy explains what information is collected when you play PizzUp!, how it is used, and your rights regarding that information.',
        },
        {
          type: 'p',
          text: 'By playing PizzUp!, you agree to the practices described in this policy. If you do not agree, please do not use the game.',
        },
      ],
    },
    {
      title: '2. Information We Collect',
      blocks: [
        { type: 'p', text: 'We and our third-party partners collect the following types of information:' },
        { type: 'subheading', text: 'a) Information you provide' },
        {
          type: 'ul',
          items: [
            '**Username:** A display name you choose yourself when entering the leaderboard. This name is visible to other players on global and local leaderboards. We do not require your real name.',
          ],
        },
        { type: 'subheading', text: 'b) Automatically collected information' },
        {
          type: 'ul',
          items: [
            '**Leaderboard scores:** Your in-game scores and ranking data associated with your chosen username.',
            '**Gameplay analytics:** Aggregated, anonymised data about how the game is played (e.g., levels reached, sessions, feature usage) collected via Firebase Analytics and Unity Analytics. This data does not identify you personally.',
            '**Device & crash data:** Device model, OS version, and crash/error logs collected to diagnose technical issues.',
            "**Advertising identifiers:** Your device's advertising ID (GAID on Android, IDFA on iOS) collected by Unity Ads to serve relevant rewarded ads.",
          ],
        },
      ],
    },
    {
      title: '3. How We Use Your Information',
      blocks: [
        {
          type: 'ul',
          items: [
            'Display your username and score on leaderboards.',
            'Improve gameplay balance and fix bugs using aggregated analytics.',
            'Serve advertisements, including rewarded ads you choose to watch.',
            'Monitor and fix crashes and technical issues.',
            'Comply with legal obligations.',
          ],
        },
      ],
    },
    {
      title: '4. Advertising',
      blocks: [
        {
          type: 'p',
          text: "PizzUp! offers **rewarded ads**: short video ads that you can voluntarily choose to watch in exchange for in-game rewards. These ads are powered by **Unity Ads**. Unity Ads may collect and use your device's advertising identifier and other technical information to serve personalised or contextual ads. For players we know or believe to be under 13, ads are limited to non-personalised, contextual ads only (see Section 7).",
        },
        {
          type: 'p',
          text: 'You can opt out of personalised advertising on your Android device under *Settings → Google → Ads → Opt out of Ads Personalization*, or reset your advertising ID at any time in the same menu. On iOS you can control this under *Settings → Privacy & Security → Tracking*.',
        },
        {
          type: 'ul',
          items: [`Unity Ads Privacy Policy: [unity.com/legal/privacy-policy](${UNITY_PRIVACY})`],
        },
      ],
    },
    {
      title: '5. Analytics',
      blocks: [
        {
          type: 'p',
          text: 'We use **Unity Analytics** (part of Unity Gaming Services) to understand how players interact with PizzUp!. Data collected is anonymised and aggregated; it is not sold to third parties.',
        },
        {
          type: 'ul',
          items: [`Unity Privacy Policy: [unity.com/legal/privacy-policy](${UNITY_PRIVACY})`],
        },
      ],
    },
    {
      title: '6. Leaderboards',
      blocks: [
        {
          type: 'p',
          text: 'When you submit a score to the leaderboard, your chosen username and score are stored and processed by **Unity Gaming Services (UGS)** and displayed publicly to all players. Do not use your real name or any personal information as your username.',
        },
        {
          type: 'p',
          text: `Unity Gaming Services Privacy Policy: [unity.com/legal/privacy-policy](${UNITY_PRIVACY})`,
        },
        {
          type: 'p',
          text: 'You may request deletion of your leaderboard entry at any time by contacting us at the address below.',
        },
      ],
    },
    {
      title: "7. Children's Privacy",
      blocks: [
        {
          type: 'p',
          text: 'PizzUp! is a family-friendly game suitable for players of all ages, including children under 13. We take additional steps to protect the privacy of younger players.',
        },
        {
          type: 'p',
          text: 'For any user we know or have reason to believe is under 13, we do not knowingly collect personal information beyond what is strictly necessary to run the game, and we instruct our advertising and analytics partners to treat such traffic as child-directed. This means:',
        },
        {
          type: 'ul',
          items: [
            'Advertising is limited to non-personalised, contextual ads only. The advertising identifier is not used for behavioural profiling, cross-app tracking, or building interest-based audiences.',
            'Analytics are limited to aggregated, anonymised gameplay data. No persistent identifiers are used to profile individual children.',
            'The leaderboard username is chosen by the player and is not required to play. We ask players not to use real names or any personal information as their username (see Section 6).',
          ],
        },
        {
          type: 'p',
          text: "We do not knowingly collect a child's real name, address, phone number, email, precise location, or photos. If you are a parent or guardian and believe your child has provided personal information through the game, please contact us at the address in Section 11 and we will delete it.",
        },
      ],
    },
    {
      title: '8. Data Retention',
      blocks: [
        {
          type: 'p',
          text: "Leaderboard data (username + score) is retained as long as the leaderboard is active or until you request deletion. Analytics data is retained in aggregated, anonymised form. Advertising identifiers are managed by the respective ad platform's own retention policies.",
        },
      ],
    },
    {
      title: '9. Your Rights',
      blocks: [
        { type: 'p', text: 'Depending on your location, you may have the right to:' },
        {
          type: 'ul',
          items: [
            'Access the personal data we hold about you.',
            'Request correction or deletion of your data.',
            'Opt out of personalised advertising (see Section 4).',
          ],
        },
        { type: 'p', text: 'To exercise any of these rights, contact us at the address in Section 11.' },
      ],
    },
    {
      title: '10. Security',
      blocks: [
        {
          type: 'p',
          text: 'We use commercially reasonable measures to protect the information we collect. However, no method of transmission or storage over the internet is 100% secure, and we cannot guarantee absolute security.',
        },
      ],
    },
    {
      title: '11. Contact Us',
      blocks: [
        { type: 'p', text: 'If you have questions or requests regarding this Privacy Policy, contact us at:' },
        { type: 'p', text: '[suparion.games@gmail.com](mailto:suparion.games@gmail.com)' },
      ],
    },
    {
      title: '12. Changes to This Policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of PizzUp! after changes constitutes acceptance of the new policy.',
        },
      ],
    },
  ],
};
