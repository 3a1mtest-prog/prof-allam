import type { Metadata, Viewport } from 'next';
import { Outfit, Bebas_Neue, Fira_Code, Caveat } from 'next/font/google';
import './globals.css';
import { profile } from '@/lib/data';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const description = profile.bio;

/**
 * Absolute base for OG/Twitter URLs.
 *
 * Hardcoding one domain breaks every other deployment: preview builds would
 * advertise the production site's OG image and vice versa. Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — explicit override, wins everywhere
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the stable production domain
 *   3. VERCEL_URL — the per-deployment URL, so previews describe themselves
 *   4. the custom domain, for local builds
 */
const vercelHost =
  process.env.VERCEL_ENV === 'production'
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : process.env.VERCEL_URL;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : 'https://allam.qd.je');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Software Engineer, AI Agents & Automation`,
  description,
  keywords: [
    'Allam Ghaben',
    '_3a1m',
    'AI agents',
    'automation developer',
    'generative media',
    'machine learning',
    'software engineer Gaza',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.tagline}`,
    description,
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.tagline}`,
    description,
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a0404',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bebas.variable} ${fira.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
