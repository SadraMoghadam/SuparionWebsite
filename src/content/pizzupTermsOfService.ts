import type { LegalDoc } from './legal';

export const pizzupTermsOfService: LegalDoc = {
  heading: 'Terms of Service',
  game: 'PizzUp!',
  developer: 'Suparion Games',
  lastUpdated: 'September 11, 2026',
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
          text: 'PizzUp! is suitable for players of all ages. If you are under the age of majority in your country, you may use the Game only with the involvement and consent of a parent or legal guardian, who agrees to these Terms on your behalf and is responsible for your use of the Game.',
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
      ],
    },
    {
      title: '6. Advertising and Virtual Items',
      blocks: [
        {
          type: 'p',
          text: 'PizzUp! is free to play and supported by advertising, including **rewarded ads** that you may voluntarily choose to watch in exchange for in-game rewards. Watching ads is always optional.',
        },
        {
          type: 'p',
          text: "Any in-game currency, items, or unlocks are virtual goods licensed to you for use inside the Game. They have no monetary value, cannot be exchanged for real money or other goods, and are not your property. Virtual items may be changed, rebalanced, or removed as the Game is updated, and they may be lost if you uninstall the Game, reset your device, or lose access to your device's local save data.",
        },
        {
          type: 'p',
          text: "If the Game offers paid purchases, all payments are handled by the Apple App Store or Google Play. Refunds are governed by that store's policies, not by us.",
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
          text: 'PizzUp! uses third-party services including Unity Gaming Services, Unity Ads, Unity Analytics, and Firebase. Your use of the Game is also subject to the terms and policies of those providers. We are not responsible for the content of third-party advertisements.',
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
