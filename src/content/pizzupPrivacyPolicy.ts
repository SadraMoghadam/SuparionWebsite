import type { LegalDoc } from './legal';

const UNITY_PRIVACY = 'https://unity.com/legal/privacy-policy';

export const pizzupPrivacyPolicy: LegalDoc = {
  heading: 'Privacy Policy',
  game: 'PizzUp!',
  developer: 'Suparion Games',
  lastUpdated: 'September 16, 2026',
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
            '**Username:** A display name you choose yourself when entering the leaderboard. This name is visible to other players on the leaderboard. We do not require your real name.',
          ],
        },
        { type: 'subheading', text: 'b) Automatically collected information' },
        {
          type: 'ul',
          items: [
            '**Leaderboard scores:** Your best score and ranking, stored with the display name you choose.',
            "**Gameplay analytics:** How the game is played (screens opened, runs completed, features used, coin and rank progress), collected via **Google Firebase Analytics**. Firebase generates a random identifier for your installation (an app instance ID) and also reads your device's vendor identifier (IDFV). We do not link these to your name, email, or any account, and we do not set a user identifier in our analytics.",
            '**Purchase events:** When a purchase completes, we record which product was bought and its price. We never receive your payment details. See Section 6a.',
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
            'Display your username and score on the leaderboard.',
            'Improve gameplay balance and fix bugs using aggregated analytics.',
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
          text: "**PizzUp! does not show advertising and contains no advertising SDK.** We do not collect or use your device's advertising identifier (IDFA on iOS, GAID on Android), we do not ask for tracking permission, and we do not track you across other companies' apps or websites. We do not sell or share your data with data brokers.",
        },
        {
          type: 'p',
          text: 'If this changes in a future version, we will update this policy and our App Store privacy disclosures before that version is released.',
        },
      ],
    },
    {
      title: '5. Analytics',
      blocks: [
        {
          type: 'p',
          text: 'We use **Google Firebase Analytics** to understand how players interact with PizzUp! and to decide what to improve. This data is not sold to third parties. Google processes it on our behalf.',
        },
        {
          type: 'ul',
          items: [
            'Google privacy policy: [policies.google.com/privacy](https://policies.google.com/privacy)',
            'Firebase data handling: [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy)',
          ],
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
          text: 'Display names are checked automatically when you enter them, and names containing offensive language are refused before they are sent. No filter catches everything. If you see a name you believe is offensive, use the **"Report a name"** button on the leaderboard screen, or email us at the address in Section 11.',
        },
        {
          type: 'p',
          text: 'You can change your display name at any time from the leaderboard or profile screen. To have your leaderboard entry and display name deleted, email us at the address in Section 11.',
        },
        {
          type: 'p',
          text: 'If your device is offline, or the leaderboard cannot be reached, PizzUp! shows a locally generated ladder instead and nothing is sent anywhere.',
        },
      ],
    },
    {
      title: '6a. Purchases',
      blocks: [
        {
          type: 'p',
          text: 'Coin packs and subscriptions are sold and processed by Apple through the App Store (or by Google through Google Play). **Payment is handled entirely by the store and we never see your card, bank, or billing details.** We receive only confirmation that a purchase succeeded, which the app uses to unlock what you bought, plus the product name and price for our own analytics.',
        },
      ],
    },
    {
      title: "7. Children's Privacy",
      blocks: [
        {
          type: 'p',
          text: 'PizzUp! is a general-audience game and is not directed at children under 13. We do not knowingly collect personal information from children under 13.',
        },
        {
          type: 'p',
          text: 'The leaderboard display name is chosen by the player and is not required to play. We ask all players not to use real names or any personal information as a display name (see Section 6).',
        },
        {
          type: 'p',
          text: 'If you are a parent or guardian and believe your child has submitted a display name or other information, contact us at the address in Section 11 and we will delete it.',
        },
      ],
    },
    {
      title: '8. Data Retention',
      blocks: [
        {
          type: 'p',
          text: 'Leaderboard data (username + score) is retained as long as the leaderboard is active or until you request deletion. Analytics data is retained in aggregated, anonymised form.',
        },
      ],
    },
    {
      title: '8a. International Transfers',
      blocks: [
        {
          type: 'p',
          text: 'Google and Unity process data on servers that may be located outside your country, including in the United States. Both provide contractual safeguards for those transfers.',
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
            'Request deletion of your leaderboard entry and display name.',
            'Stop all analytics collection by deleting the app.',
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
