'use client';

import { useEffect, useRef } from 'react';
import { instagram } from '@/lib/data';
import Section from './Section';
import Reveal from './Reveal';
import { ArrowIcon } from './Icons';

/**
 * Instagram call-out with a card that tilts toward the pointer — the 3D
 * profile card carried over from the source portfolio.
 */
export default function Instagram() {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      // Only react while the pointer is in the card's neighbourhood.
      if (e.clientX < r.left - 260 || e.clientX > r.right + 260) return;
      if (e.clientY < r.top - 260 || e.clientY > r.bottom + 260) return;
      const nx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const ny = (e.clientY - (r.top + r.height / 2)) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(900px) rotateY(${nx * 10}deg) rotateX(${ny * -10}deg)`;
      });
    };
    const onLeave = () => {
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseout', onLeave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <Section id="instagram">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div>
            <h2 className="eyebrow on-video flex items-center gap-3 text-bone">
              <span className="h-2 w-2 shrink-0 bg-crimson" aria-hidden="true" />
              Instagram
            </h2>
            <p className="display on-video mt-7 text-[2.6rem] leading-[0.92] text-bone sm:text-6xl">
              {instagram.heading[0]}
              <br />
              <span className="text-crimson">{instagram.heading[1]}</span>
            </p>
            <p className="on-video mt-6 max-w-md text-[0.95rem] leading-relaxed text-ash">
              {instagram.body}
            </p>
            <span className="glass mt-8 inline-flex rounded-full px-5 py-3 text-[0.65rem] font-semibold tracking-[0.18em] text-bone">
              {instagram.followers} FOLLOWERS
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <a
            ref={cardRef}
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Allam on Instagram, @${instagram.handle}`}
            className="card mx-auto block max-w-sm p-6 transition-transform duration-200 ease-out will-change-transform"
          >
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={instagram.avatar}
                alt=""
                className="h-14 w-14 rounded-full object-cover ring-2 ring-crimson/50"
              />
              <div>
                <p className="mono text-lg font-semibold leading-none text-bone">@{instagram.handle}</p>
                <p className="mono mt-1.5 text-[0.55rem] tracking-[0.22em] text-dust">
                  ALLAM · INSTAGRAM
                </p>
              </div>
            </div>

            <dl className="mt-6 flex gap-8 border-y border-white/8 py-4">
              <div>
                <dt className="display text-lg leading-none text-bone">
                  {instagram.followers}
                </dt>
                <dd className="mono mt-1.5 text-[0.55rem] tracking-[0.18em] text-dust">
                  FOLLOWERS
                </dd>
              </div>
              <div>
                <dt className="display text-lg leading-none text-bone">
                  {instagram.following}
                </dt>
                <dd className="mono mt-1.5 text-[0.55rem] tracking-[0.18em] text-dust">
                  FOLLOWING
                </dd>
              </div>
            </dl>

            <ul className="mt-5 space-y-1.5">
              {instagram.bio.map((line) => (
                <li key={line} className="text-[0.82rem] leading-relaxed text-ash">
                  {line}
                </li>
              ))}
            </ul>

            <p className="mono mt-6 flex items-center gap-2 text-[0.6rem] tracking-[0.22em] text-crimson">
              TAP TO OPEN PROFILE
              <ArrowIcon className="h-3 w-3 -rotate-45" />
            </p>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
