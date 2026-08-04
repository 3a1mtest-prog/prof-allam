import type { MediaSource } from '@/components/Media';

/**
 * Single source of truth for every piece of copy on the site.
 *
 * Content sourced from the personal portfolio at allam.qd.je
 * (github.com/3a1mtest-prog/Allam) and the public GitHub project list.
 */

export const profile = {
  greeting: "Hello, I'm",
  name: 'ALLAM GHABEN',
  nameArabic: 'علام غبن',
  handle: '_3a1m',
  shortName: 'ALLAM',
  cardRole: 'Engineer',
  tagline: 'SOFTWARE ENGINEER',
  roles: [
    'SOFTWARE ENGINEER • AI AGENTS & AUTOMATION DEVELOPER',
    'HYPER-AUTOMATION CATALYST • GENERATIVE MEDIA',
  ],
  bio: 'Software engineer building intelligent systems end to end — generative media, machine learning, automation, and agent systems. Cinematic images, video and sound; models trained and shipped; pipelines and agents that plan, act, and report back.',
  note: 'Intelligent systems, end to end — from dataset to deployment, from prompt to pipeline.',
  location: 'GAZA, PALESTINE',
  email: '',
  resume: '',
  website: 'https://allam.qd.je',
  lanyardText: 'AI • AGENTS • AUTOMATION • MEDIA • ',
  socials: {
    instagram: 'https://www.instagram.com/_3a1m/',
    github: 'https://github.com/3a1mtest-prog',
    website: 'https://allam.qd.je',
  },
} as const;

export const stats = [
  { value: '2.4K', label: 'INSTAGRAM\nFOLLOWERS' },
  { value: '04', label: 'CORE\nDISCIPLINES' },
  { value: 'GAZA', label: 'BASED IN\nPALESTINE' },
];

export const navLinks = [
  { label: 'WHAT I DO', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'REELS', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
];

/** The four disciplines, carried over verbatim from the source portfolio. */
export const services = [
  {
    icon: '🎬',
    title: 'GENERATIVE MEDIA',
    body: 'Cinematic images, video, and sound. Full visual worlds, consistent characters, film-grade color.',
  },
  {
    icon: '🧠',
    title: 'MACHINE LEARNING',
    body: 'Training and fine-tuning, datasets to deployment. Weights that behave in the real world.',
  },
  {
    icon: '⚡',
    title: 'AUTOMATION',
    body: 'Pipelines and bots that erase manual work while you sleep.',
  },
  {
    icon: '🤖',
    title: 'AGENT SYSTEMS',
    body: 'Tools, memory, guardrails. Systems that plan, act, and report back.',
  },
];

export const philosophy = [
  {
    n: '01',
    title: 'INTELLIGENT SYSTEMS, END TO END',
    body: 'Not a model in isolation — the whole chain. Dataset, training, serving, and the interface a human actually touches.',
  },
  {
    n: '02',
    title: 'AUTOMATION OVER REPETITION',
    body: 'Anything done twice by hand is a pipeline waiting to be written. Bots and workflows that erase manual work.',
  },
  {
    n: '03',
    title: 'FILM-GRADE GENERATIVE OUTPUT',
    body: 'Consistent characters, coherent visual worlds, and color that holds up — generative media treated as craft.',
  },
  {
    n: '04',
    title: 'AGENTS THAT REPORT BACK',
    body: 'Tools, memory, and guardrails so a system can plan and act autonomously without going quiet or off the rails.',
  },
];

export type Project = {
  n: string;
  title: string;
  role: string;
  status: 'LIVE' | 'ACTIVE';
  href: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    n: '01',
    title: 'ALLAM.QD.JE',
    role: 'PERSONAL PORTFOLIO — DESIGN & BUILD',
    status: 'LIVE',
    href: 'https://allam.qd.je',
    stack: ['React 19', 'TanStack Start', 'GSAP', 'Cloudflare Workers'],
  },
  {
    n: '02',
    title: 'غزاوي ستور — AL-GHAZAWE',
    role: 'FULL-STACK DEVELOPER',
    status: 'LIVE',
    href: 'https://github.com/3a1mtest-prog/weballam',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'Supabase'],
  },
  {
    n: '03',
    title: 'HANI SELMI PORTFOLIO',
    role: 'WEB DEVELOPER — CLIENT BUILD',
    status: 'LIVE',
    href: 'https://github.com/3a1mtest-prog/3a1m',
    stack: ['Next.js', 'Framer Motion', 'shadcn/ui'],
  },
  {
    n: '04',
    title: 'GENERATIVE MEDIA REEL',
    role: 'DIRECTION & AI PIPELINE',
    status: 'ACTIVE',
    href: 'https://www.instagram.com/_3a1m/',
    stack: ['Diffusion', 'Video Gen', 'Color Grade'],
  },
];

export type Skill = { name: string; icon: string; color: string };

export const skills: Skill[] = [
  { name: 'React', icon: 'react', color: '#61DAFB' },
  { name: 'Next.js', icon: 'next', color: '#FFFFFF' },
  { name: 'TypeScript', icon: 'ts', color: '#3178C6' },
  { name: 'Tailwind', icon: 'tailwind', color: '#38BDF8' },
  { name: 'TanStack', icon: 'tanstack', color: '#FF4154' },
  { name: 'Vite', icon: 'vite', color: '#A970FF' },
  { name: 'Bun', icon: 'bun', color: '#FBF0DF' },
  { name: 'Node.js', icon: 'node', color: '#8CC84B' },
  { name: 'Python', icon: 'python', color: '#FFD343' },
  { name: 'GSAP', icon: 'gsap', color: '#88CE02' },
  { name: 'Three.js', icon: 'three', color: '#FFFFFF' },
  { name: 'Supabase', icon: 'supabase', color: '#3ECF8E' },
  { name: 'Cloudflare', icon: 'cloudflare', color: '#F6821F' },
  { name: 'Vercel', icon: 'vercel', color: '#FFFFFF' },
  { name: 'Git', icon: 'git', color: '#F05032' },
  { name: 'AI Agents', icon: 'agents', color: '#ff1e2d' },
  { name: 'Automation', icon: 'automation', color: '#ff5c66' },
  { name: 'Diffusion', icon: 'diffusion', color: '#C792EA' },
];

export const objective = {
  quote:
    'Intelligent systems, end to end. Generative media, machine learning, automation, and agents — built to run in the real world, not just in a notebook.',
  author: 'ALLAM GHABEN · علام غبن',
  authorRole: 'SOFTWARE ENGINEER',
};

/** Instagram figures as published on the source portfolio. */
export const instagram = {
  handle: '_3a1m',
  href: 'https://www.instagram.com/_3a1m/',
  avatar: '/assets/ig-avatar.jpg',
  followers: '2,444',
  following: '309',
  bio: [
    'Gaza · PS',
    'AI agents & automation Developer',
    'Hyper-Automation Catalyst',
    'Software Engineer',
  ],
};

export const gallery = [
  {
    title: 'REEL 01',
    caption: 'From @_3a1m on Instagram',
    media: {
      type: 'video' as const,
      src: '/assets/reels/reel-1.mp4',
      poster: '/assets/reels/reel-1-poster.jpg',
    },
  },
  {
    title: 'REEL 02',
    caption: 'From @_3a1m on Instagram',
    media: {
      type: 'video' as const,
      src: '/assets/reels/reel-2.mp4',
      poster: '/assets/reels/reel-2-poster.jpg',
    },
  },
  {
    title: 'REEL 03',
    caption: 'From @_3a1m on Instagram',
    media: {
      type: 'video' as const,
      src: '/assets/reels/reel-3.mp4',
      poster: '/assets/reels/reel-3-poster.jpg',
    },
  },
];

export const contact = {
  heading: "LET'S BUILD TOGETHER",
  body: 'Open for AI agent and automation work, generative media direction, machine learning builds, and full-stack product engineering.',
  links: [
    { label: '@_3a1m', href: 'https://www.instagram.com/_3a1m/', icon: 'instagram' },
    { label: 'allam.qd.je', href: 'https://allam.qd.je', icon: 'globe' },
    { label: 'github.com/3a1mtest-prog', href: 'https://github.com/3a1mtest-prog', icon: 'github' },
    { label: 'Gaza, Palestine', href: '#', icon: 'pin' },
  ],
};
