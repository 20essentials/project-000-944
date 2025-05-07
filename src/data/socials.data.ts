import type { SocialIconLink } from '@contracts';

export const DISCORD_URL = 'https://discord.com/';

export const uxSocials: SocialIconLink[] = [
  {
    label: 'LinkedIn',
    icon: 'socials/linkedin',
    link: 'https://www.linkedin.com/',
    color: 'var(--linkedin-color)'
  },
  {
    label: 'GitHub',
    icon: 'socials/github',
    link: 'https://github.com/20essentials',
    color: 'var(--github-color)'
  },
  {
    label: 'Discord',
    icon: 'socials/discord',
    link: DISCORD_URL,
    color: 'var(--discord-color)'
  }
];
