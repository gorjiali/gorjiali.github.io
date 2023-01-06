import { RiLinkedinBoxLine, RiGithubLine } from 'react-icons/ri';

export const NAVBAR_PAGE_ITEMS = [{ title: 'Home', path: '/' }] as const;

export const NAVBAR_ANCHOR_ITEMS = [
  { href: 'https://www.linkedin.com/in/gorjiali', icon: RiLinkedinBoxLine },
  { href: 'https://github.com/gorjiali', icon: RiGithubLine },
] as const;
