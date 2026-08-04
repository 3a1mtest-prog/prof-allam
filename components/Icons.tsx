import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4.5" width="20" height="15" rx="2.5" />
      <path d="m2.8 6 8.2 6.2a1.6 1.6 0 0 0 2 0L21.2 6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.7a10.3 10.3 0 0 0-3.26 20.07c.52.1.71-.22.71-.5v-1.75c-2.87.62-3.48-1.38-3.48-1.38-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.07 1.58 1.07 1.58 1.07.92 1.58 2.42 1.13 3.01.86.09-.67.36-1.13.65-1.39-2.29-.26-4.7-1.15-4.7-5.1 0-1.13.4-2.05 1.06-2.77-.1-.26-.46-1.31.1-2.73 0 0 .87-.28 2.85 1.06a9.85 9.85 0 0 1 5.19 0c1.98-1.34 2.85-1.06 2.85-1.06.56 1.42.21 2.47.1 2.73.67.72 1.06 1.64 1.06 2.77 0 3.96-2.41 4.83-4.71 5.09.37.32.7.95.7 1.92v2.85c0 .28.19.61.72.5A10.3 10.3 0 0 0 12 1.7Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.9 21.2h4.16V10.1H2.9v11.1ZM9.5 10.1v11.1h4.16v-6.2c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.3v6.1h4.16v-6.94c0-3.6-.78-6.38-4.99-6.38-2.02 0-3.38 1.11-3.94 2.16h-.06V10.1H9.5Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.4 3h3l1.5 3.8-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 3.8 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.4 5.2 2 2 0 0 1 6.4 3Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.3" r="2.6" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v11" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4.5 19.5h15" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.8c.9 5.2 4.1 8.4 9.3 9.3-5.2.9-8.4 4.1-9.3 9.3-.9-5.2-4.1-8.4-9.3-9.3 5.2-.9 8.4-4.1 9.3-9.3Z" />
    </svg>
  );
}

export function TerminalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="m7 9.5 3 2.5-3 2.5" />
      <path d="M12.5 15h4.5" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9.3" />
      <path d="M2.9 12h18.2" />
      <path d="M12 2.7c2.4 2.6 3.6 5.7 3.6 9.3s-1.2 6.7-3.6 9.3c-2.4-2.6-3.6-5.7-3.6-9.3s1.2-6.7 3.6-9.3Z" />
    </svg>
  );
}

export const socialIconMap = {
  mail: MailIcon,
  instagram: InstagramIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  globe: GlobeIcon,
} as const;

export type SocialIconName = keyof typeof socialIconMap;
