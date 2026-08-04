'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, profile } from '@/lib/data';

export default function Nav() {
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);

  // Scroll spy: the section whose top most recently passed the nav line wins.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-5"
      >
        <nav
          aria-label="Primary"
          className="glass flex w-full max-w-5xl items-center justify-between gap-4 rounded-full py-2 pl-4 pr-2 sm:pl-6"
        >
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="display whitespace-nowrap text-base leading-none tracking-wide text-bone sm:text-lg">
              {profile.name}
            </span>
            <span className="hidden shrink-0 whitespace-nowrap text-[0.6rem] font-medium tracking-[0.18em] text-dust 2xl:inline">
              {profile.tagline}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-full px-3 py-2 text-[0.65rem] font-semibold tracking-[0.16em] transition-colors ${
                      isActive ? 'text-crimson' : 'text-ash hover:text-bone'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-crimson/12 ring-1 ring-crimson/35"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="hidden shrink-0 rounded-full bg-crimson px-5 py-2.5 text-[0.65rem] font-semibold tracking-[0.16em] text-white transition-shadow hover:shadow-[0_0_26px_-4px_rgba(255,30,45,0.85)] lg:inline-block"
          >
            HIRE ME
          </a>

          {/* Mobile trigger — 44px touch target */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 text-bone lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-void/95 px-6 pt-28 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display block border-b border-white/5 py-4 text-3xl text-bone transition-colors hover:text-crimson"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 block rounded-full bg-crimson py-4 text-center text-xs font-semibold tracking-[0.2em] text-white"
            >
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
