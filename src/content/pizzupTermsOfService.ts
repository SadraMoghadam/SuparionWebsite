import type { LegalDoc } from './legal';

export const pizzupTermsOfService: LegalDoc = {
  heading: 'Terms of Service',
  game: 'PizzUp!',
  developer: 'Suparion Games',
  lastUpdated: 'September 16, 2026',
  back: { to: '/games/pizzup', label: '← Back to PizzUp!' },
  companion: { to: '/games/pizzup/privacy-policy', label: 'Privacy Policy →' },
  sections: [
    {
      title: '1. Acceptance of These Terms',
      blocks: [
        {
          type: 'p',
          text: 'These Terms of Service ("Terms") govern your use of PizzUp! (the "Game"), a mobile game developed and published by Suparion Games ("we", "us", or "our").',
        },
        {
          type: 'p',
          text: 'By downloading, installing, or playing PizzUp!, you agree to these Terms. If you do not agree, do not install or play the Game.',
        },
      ],
    },
    {
      title: '2. Eligibility',
      blocks: [
        {
          type: 'p',
          text: 'PizzUp! is intended for a general audience and is not directed at children under 13. If you are under the age of majority in your country, you may use the Game only with the involvement and consent of a parent or legal guardian, who agrees to these Terms on your behalf and is responsible for your use of the Game.',
        },
        {
          type: 'p',
          text: 'You must also comply with the terms of the app store you downloaded the Game from (Apple App Store or Google Play), which apply in addition to these Terms.',
        },
      ],
    },
    {
      title: '3. Licence to Play',
      blocks: [
        {
          type: 'p',
          text: 'We grant you a personal, limited, non-exclusive, non-transferable, revocable licence to download and play PizzUp! on devices you own or control, for your own private, non-commercial entertainment.',
        },
        { type: 'p', text: 'This licence does not give you the right to:' },
        {
          type: 'ul',
          items: [
            'Sell, rent, sublicense, or commercially exploit the Game or any part of it.',
            'Copy, modify, translate, reverse engineer, decompile, or disassemble the Game, except where this restriction is prohibited by applicable law.',
            'Remove, obscure, or alter any copyright, trademark, or other proprietary notices.',
            'Use cheats, mods, bots, automation tools, memory editors, or any software that gives an unfair advantage or interferes with normal gameplay.',
            'Attempt to gain unauthorised access to our servers, leaderboards, or any related systems.',
          ],
        },
      ],
    },
    {
      title: '4. Ownership and Intellectual Property',
      blocks: [
        {
          type: 'p',
          text: 'PizzUp!, including its code, artwork, characters, logos, music, sound effects, text, and all other content, is owned by Suparion Games and is protected by copyright, trademark, and other intellectual property laws. All rights not expressly granted to you in these Terms are reserved.',
        },
      ],
    },
    {
      title: '5. Player Conduct and Usernames',
      blocks: [
        {
          type: 'p',
          text: 'You are responsible for the display name you choose when submitting a score to the leaderboard. Usernames must not:',
        },
        {
          type: 'ul',
          items: [
            'Contain real names, addresses, phone numbers, or other personal information.',
            'Be offensive, hateful, sexual, harassing, or otherwise inappropriate for a family-friendly audience.',
            'Impersonate another person, Suparion Games, or any third party.',
            "Infringe anyone's trademark or other rights.",
          ],
        },
        {
          type: 'p',
          text: 'We may remove any username or leaderboard entry that breaches these rules, and may remove scores that we reasonably believe were achieved through cheating or exploits.',
        },
        {
          type: 'p',
          text: 'Display names are filtered automatically when entered. We may change or remove any display name, and may remove any leaderboard entry, at our discretion and without notice. To report an offensive name, use the **"Report a name"** button on the leaderboard screen or contact us at the address in Section 14.',
        },
      ],
    },
    {
      title: '6. Purchases, Subscriptions and Virtual Items',
      blocks: [
        { type: 'p', text: 'PizzUp! is free to play. It contains optional purchases.' },
        {
          type: 'p',
          text: '**Coin packs** are one-time purchases that add coins to your balance.',
        },
        {
          type: 'p',
          text: '**Subscriptions.** PizzUp! offers two optional auto-renewing monthly subscriptions:',
        },
        {
          type: 'ul',
          items: ['**Pizza Master:** $2.99 per month', '**La Dolce Vita:** $7.49 per month'],
        },
        {
          type: 'p',
          text: 'Both unlock premium locations and pizza sets. Payment is charged to your store account at confirmation of purchase. A subscription renews automatically each month unless auto-renew is turned off at least 24 hours before the end of the current period, and your account is charged for renewal within 24 hours before the period ends. You can manage or cancel a subscription at any time in your device settings: on iOS under Settings > Apple ID > Subscriptions. Cancelling stops future charges; the period already paid for continues to its end and is not refunded.',
        },
        {
          type: 'p',
          text: 'Prices are shown in the app in your local currency before you buy.',
        },
        {
          type: 'p',
          text: "All payments are handled by the Apple App Store or Google Play. Refunds are governed by that store's policies, not by us.",
        },
        {
          type: 'p',
          text: "Any in-game currency, items, or unlocks are virtual goods licensed to you for use inside the Game. They have no monetary value, cannot be exchanged for real money or other goods, and are not your property. Virtual items may be changed, rebalanced, or removed as the Game is updated, and they may be lost if you uninstall the Game, reset your device, or lose access to your device's local save data.",
        },
        {
          type: 'p',
          text: "For copies of PizzUp! obtained through the Apple App Store, Apple's Standard End User Licence Agreement also applies in addition to these Terms: [apple.com/legal/internet-services/itunes/dev/stdeula/](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)",
        },
      ],
    },
    {
      title: '7. Updates and Availability',
      blocks: [
        {
          type: 'p',
          text: 'We may update, change, suspend, or discontinue PizzUp! or any of its features, including online services such as leaderboards, at any time and without notice. We do not guarantee that the Game will always be available, uninterrupted, or error free.',
        },
      ],
    },
    {
      title: '8. Termination',
      blocks: [
        {
          type: 'p',
          text: 'You may stop using PizzUp! at any time by uninstalling it. We may suspend or terminate your access to online features, including leaderboards, if you breach these Terms. On termination, the licence granted in Section 3 ends immediately.',
        },
      ],
    },
    {
      title: '9. Privacy',
      blocks: [
        {
          type: 'p',
          text: 'Our handling of your information is described in the [PizzUp! Privacy Policy](/games/pizzup/privacy-policy), which forms part of these Terms.',
        },
      ],
    },
    {
      title: '10. Disclaimer of Warranties',
      blocks: [
        {
          type: 'p',
          text: 'PizzUp! is provided "as is" and "as available", without warranties of any kind, whether express or implied, including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Nothing in these Terms limits any rights you have under mandatory consumer protection laws in your country.',
        },
      ],
    },
    {
      title: '11. Limitation of Liability',
      blocks: [
        {
          type: 'p',
          text: 'To the maximum extent permitted by law, Suparion Games will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, progress, virtual items, or profits, arising out of or related to your use of PizzUp!.',
        },
        {
          type: 'p',
          text: 'Where liability cannot be excluded, our total liability to you is limited to the amount you paid us for the Game in the twelve months before the claim, or ten US dollars, whichever is greater.',
        },
      ],
    },
    {
      title: '12. Third-Party Services',
      blocks: [
        {
          type: 'p',
          text: 'PizzUp! uses third-party services including **Unity Gaming Services** (leaderboard) and **Google Firebase Analytics** (analytics). Your use of the Game is also subject to the terms and policies of those providers.',
        },
      ],
    },
    {
      title: '13. Changes to These Terms',
      blocks: [
        {
          type: 'p',
          text: 'We may update these Terms from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of PizzUp! after changes take effect constitutes acceptance of the revised Terms.',
        },
      ],
    },
    {
      title: '14. Contact Us',
      blocks: [
        { type: 'p', text: 'If you have questions about these Terms, contact us at:' },
        { type: 'p', text: '[suparion.games@gmail.com](mailto:suparion.games@gmail.com)' },
      ],
    },
  ],
};
