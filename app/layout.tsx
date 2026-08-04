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

export const metadata: Metadata = {
  metadataBase: new URL('https://shadinkappzzz.vercel.app'),
  title: `${profile.name} — Full-Stack Developer, AI & Robotics`,
  description,
  keywords: [
    'Shadin Kappachali',
    'Shadin_Kappzzz',
    'Next.js developer',
    'Flutter developer',
    'AI computer vision',
    'robotics trainer',
    'Kerala developer portfolio',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.tagline}`,
    description,
    type: 'profile',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.tagline}`,
    description,
  },
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
