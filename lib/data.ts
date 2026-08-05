import type { MediaSource } from '@/components/Media';

/**
 * Single source of truth for every piece of copy on the site.
 *
 * EVERY string below is taken from the owner's own portfolio
 * (github.com/3a1mtest-prog/Allam, deployed at allam.qd.je). Nothing here is
 * authored or inferred — an earlier revision carried a written bio, a derived
 * skills grid and projects read off the GitHub repo list, and all of that has
 * been removed. If you add content, source it rather than writing it.
 */

export const profile = {
  greeting: "Hello, I'm",
  name: 'ALLAM GHABEN',
  handle: '_3a1m',
  shortName: 'ALLAM',
  cardRole: 'Engineer',
  /** FACTS.ROLE */
  tagline: 'SOFTWARE ENGINEER',
  /** IG_BIO, minus the location line which is shown separately */
  roles: ['AI AGENTS & AUTOMATION DEVELOPER', 'HYPER-AUTOMATION CATALYST'],
  /** og_description from the source portfolio's app-meta.json */
  bio: 'The portfolio of Allam Ghaben: generative media, machine learning, automation, and agent systems.',
  /** FACTS.FIELD */
  note: 'Intelligent systems, end to end.',
  /** IG_BIO[0] */
  location: 'GAZA · PS',
  email: '',
  resume: '',
  website: 'https://allam.qd.je',
  lanyardText: 'AI • AGENTS • AUTOMATION • MEDIA • ',
  socials: {
    instagram: 'https://www.instagram.com/_3a1m/',
    website: 'https://allam.qd.je',
  },
} as const;

/**
 * Hero figures. Sourced: the follower/following counts are the ones published
 * on the source portfolio's Instagram card, and the location is IG_BIO[0].
 */
export const stats = [
  { value: '2,444', label: 'INSTAGRAM\nFOLLOWERS' },
  { value: '309', label: 'ACCOUNTS\nFOLLOWING' },
  { value: 'GAZA', label: 'BASED IN\nPALESTINE' },
];

export const navLinks = [
  { label: 'WHAT I DO', href: '#services' },
  { label: 'REELS', href: '#gallery' },
  { label: 'INSTAGRAM', href: '#instagram' },
  { label: 'CONTACT', href: '#contact' },
];

/** The four disciplines, carried over verbatim from the source portfolio. */
export const services = [
  {
    n: '01',
    icon: '🎬',
    title: 'GENERATIVE MEDIA',
    body: 'Cinematic images, video, and sound. Full visual worlds, consistent characters, film-grade color.',
  },
  {
    n: '02',
    icon: '🧠',
    title: 'MACHINE LEARNING',
    body: 'Training and fine-tuning, datasets to deployment. Weights that behave in the real world.',
  },
  {
    n: '03',
    icon: '⚡',
    title: 'AUTOMATION',
    body: 'Pipelines and bots that erase manual work while you sleep.',
  },
  {
    n: '04',
    icon: '🤖',
    title: 'AGENT SYSTEMS',
    body: 'Tools, memory, guardrails. Systems that plan, act, and report back.',
  },
];

/** Instagram figures and bio exactly as published on the source portfolio. */
export const instagram = {
  handle: '_3a1m',
  href: 'https://www.instagram.com/_3a1m/',
  avatar: '/assets/ig-avatar.jpg',
  followers: '2,444',
  following: '309',
  heading: ['Off the stage,', 'on the feed.'],
  body: 'The builds, the drops, and the behind the scenes. One tap on the card and you are in.',
  bio: [
    'Gaza · PS',
    'AI agents & automation Developer',
    'Hyper-Automation Catalyst',
    'Software Engineer',
  ],
};

export type GalleryItem = {
  title: string;
  caption: string;
  media: MediaSource;
};

/** The three reels from the source portfolio. Captions are labels, not claims. */
export const gallery: GalleryItem[] = [
  {
    title: 'REEL 01',
    caption: 'From @_3a1m on Instagram',
    media: {
      type: 'video',
      src: '/assets/reels/reel-1.mp4',
      webm: '/assets/reels/reel-1.webm',
      poster: '/assets/reels/reel-1-poster.jpg',
    },
  },
  {
    title: 'REEL 02',
    caption: 'From @_3a1m on Instagram',
    media: {
      type: 'video',
      src: '/assets/reels/reel-2.mp4',
      webm: '/assets/reels/reel-2.webm',
      poster: '/assets/reels/reel-2-poster.jpg',
    },
  },
  {
    title: 'REEL 03',
    caption: 'From @_3a1m on Instagram',
    media: {
      type: 'video',
      src: '/assets/reels/reel-3.mp4',
      webm: '/assets/reels/reel-3.webm',
      poster: '/assets/reels/reel-3-poster.jpg',
    },
  },
];

export const contact = {
  heading: "LET'S BUILD TOGETHER",
  links: [
    { label: '@_3a1m', href: 'https://www.instagram.com/_3a1m/', icon: 'instagram' },
    { label: 'allam.qd.je', href: 'https://allam.qd.je', icon: 'globe' },
    { label: 'Gaza · PS', href: '#', icon: 'pin' },
  ],
};
