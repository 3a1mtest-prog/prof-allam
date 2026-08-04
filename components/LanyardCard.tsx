'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { profile } from '@/lib/data';

/**
 * Draggable pendulum ID card hanging from a lanyard.
 *
 * Horizontal drag distance drives a spring-damped rotation, so releasing the
 * card lets it swing out and settle like a real badge on a strap. The straps
 * are redrawn from the same rotation value, keeping them attached to the
 * card's top corners throughout the swing.
 */
export default function LanyardCard() {
  const reduce = useReducedMotion();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const [broken, setBroken] = useState(false);

  // The avatar request usually fails during the HTML load, before React has
  // hydrated and attached onError — so re-check the element on mount rather
  // than relying on the event alone.
  useEffect(() => {
    const img = avatarRef.current;
    if (img?.complete && img.naturalWidth === 0) setBroken(true);
  }, []);

  const x = useMotionValue(0);

  // Loose spring => visible overshoot, then a slow settle.
  const rotate = useSpring(useTransform(x, [-190, 190], [-26, 26]), {
    stiffness: 62,
    damping: 9,
    mass: 1.1,
  });

  // Straps pivot from the clip, so they lean at a fraction of the card angle.
  const strapSkew = useTransform(rotate, (r) => r * 0.55);

  return (
    <div className="relative flex w-full justify-center" ref={constraintsRef}>
      {/* Rotating badge ring around the clip */}
      <div className="pointer-events-none absolute -top-2 right-2 h-24 w-24 opacity-70 sm:right-6 sm:h-28 sm:w-28">
        <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
          <defs>
            <path
              id="lanyard-ring"
              d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
              fill="none"
            />
          </defs>
          <text className="mono fill-ash text-[8.5px] tracking-[0.34em] uppercase">
            <textPath href="#lanyard-ring">{profile.lanyardText.repeat(2)}</textPath>
          </text>
        </svg>
      </div>

      <div className="relative flex flex-col items-center pt-1">
        {/* Clip */}
        <div className="relative z-20 h-7 w-11 rounded-b-md rounded-t-sm bg-gradient-to-b from-crimson to-crimson-deep shadow-[0_6px_16px_-4px_rgba(255,30,45,0.7)]">
          <div className="absolute inset-x-2 top-1 h-1 rounded-full bg-white/25" />
          <div className="absolute inset-x-3 bottom-0 h-1.5 rounded-t-sm bg-black/45" />
        </div>

        {/* Straps */}
        <motion.div
          style={reduce ? undefined : { rotate: strapSkew }}
          className="relative z-10 -mt-1 h-16 w-24 origin-top sm:h-20"
        >
          <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rotate-[10deg] origin-top rounded-full bg-gradient-to-b from-crimson-deep/90 to-crimson/60" />
          <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 -rotate-[10deg] origin-top rounded-full bg-gradient-to-b from-crimson-deep/90 to-crimson/60" />
        </motion.div>

        {/* Card */}
        <motion.div
          drag={reduce ? false : 'x'}
          dragConstraints={{ left: -170, right: 170 }}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 90, bounceDamping: 12 }}
          style={reduce ? undefined : { x, rotate }}
          whileDrag={{ cursor: 'grabbing', scale: 1.02 }}
          className="relative -mt-2 w-[13.5rem] origin-top touch-pan-y select-none rounded-2xl border border-white/12 bg-gradient-to-br from-shell to-void p-2.5 shadow-[0_36px_80px_-24px_rgba(0,0,0,0.95),0_0_60px_-24px_rgba(255,30,45,0.6)] sm:w-[15rem]"
          role="img"
          aria-label={`${profile.shortName} — ${profile.cardRole} identification card`}
        >
          {/* Punch hole */}
          <div className="absolute left-1/2 top-2 h-1.5 w-9 -translate-x-1/2 rounded-full bg-black/70 ring-1 ring-white/10" />

          <div className="relative mt-4 overflow-hidden rounded-xl bg-gradient-to-b from-crimson-deep/45 to-void">
            <div className="aspect-[3/3.25] w-full">
              {broken ? (
                <PortraitPlaceholder />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  ref={avatarRef}
                  src="/assets/avatar.png"
                  alt={profile.name}
                  onError={() => setBroken(true)}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              )}
            </div>
            {/* Crimson key light wash over the portrait */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-crimson/12" />
          </div>

          <div className="mt-2.5 flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <span className="display text-sm tracking-wider text-bone">
              {profile.shortName}
            </span>
            <span className="hand text-lg leading-none text-crimson">
              {profile.cardRole}
            </span>
          </div>
        </motion.div>

        {!reduce && (
          <p className="mono mt-3 text-[0.6rem] tracking-[0.2em] text-dust">
            ← DRAG THE CARD →
          </p>
        )}
      </div>
    </div>
  );
}

/** Shown until a real portrait is dropped at /public/assets/avatar.png */
function PortraitPlaceholder() {
  return (
    <svg viewBox="0 0 120 144" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a0a10" />
          <stop offset="100%" stopColor="#0a0404" />
        </linearGradient>
      </defs>
      <rect width="120" height="144" fill="url(#pp-bg)" />
      <circle cx="60" cy="54" r="22" fill="#0a0404" opacity="0.6" />
      <path d="M22 144c0-24 17-40 38-40s38 16 38 40Z" fill="#0a0404" opacity="0.6" />
      <text
        x="60"
        y="132"
        textAnchor="middle"
        fill="#6d5f5f"
        fontSize="7"
        letterSpacing="1.6"
        fontFamily="monospace"
      >
        ADD avatar.png
      </text>
    </svg>
  );
}
