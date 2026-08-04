'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/lib/data';
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TerminalIcon } from './Icons';

const items = [
  { label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
  { label: 'Instagram', href: profile.socials.instagram, Icon: InstagramIcon, external: true },
  { label: 'GitHub', href: profile.socials.github, Icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: LinkedinIcon, external: true },
];

/** Floating macOS-style dock, pinned bottom-centre on every viewport. */
export default function Dock() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? undefined : { y: 90, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
    >
      <nav aria-label="Social links" className="glass-dock flex items-center gap-1.5 rounded-2xl p-2">
        {items.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="dock-item grid h-11 w-11 place-items-center rounded-xl text-white hover:bg-white/10"
          >
            <Icon className="h-[1.15rem] w-[1.15rem]" />
          </a>
        ))}

        <span className="mx-1 h-7 w-px bg-white/12" aria-hidden="true" />

        <a
          href="/spidey.html"
          aria-label="Admin console"
          title="Spidey admin console"
          className="dock-item grid h-11 w-11 place-items-center rounded-xl text-crimson hover:bg-crimson/15"
        >
          <TerminalIcon className="h-[1.15rem] w-[1.15rem]" />
        </a>
      </nav>
    </motion.div>
  );
}
