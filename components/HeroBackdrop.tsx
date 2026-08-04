'use client';

import { useEffect, useRef } from 'react';

/**
 * Full-bleed crimson-graded portrait loop sitting behind the hero copy.
 *
 * The clip is colour-graded to the site palette at encode time rather than via
 * CSS blend modes, so it renders identically everywhere. Layered gradients on
 * top keep the headline and body text at readable contrast over it.
 */
export default function HeroBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Hold the poster frame for anyone who asked for less motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Pause once the hero has scrolled away — nothing to show, no reason to decode.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            /* autoplay refused — the poster stays up */
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
        poster="/assets/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover object-[64%_top] opacity-80 sm:object-[70%_top] lg:opacity-95"
      >
        <source src="/assets/hero-loop.webm" type="video/webm" />
        <source src="/assets/hero-loop.mp4" type="video/mp4" />
      </video>

      {/*
        Legibility stack, tuned for a container that spans the hero and the
        What I Do grid. Anchoring the clip to the top lets his head sit in the
        hero and the rest of his body carry on down behind the cards.

        Horizontal: weighted left, where the hero copy sits, and released on
        the right so he stays visible.
        Vertical: light through the hero, deepening across the card grid so
        the cards keep their contrast, then solid at the very bottom so the
        section hands off cleanly to the next.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/60 to-transparent lg:via-void/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-transparent via-45% to-void" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_54%_38%_at_12%_34%,rgba(10,4,4,0.9),transparent_70%)]" />
    </div>
  );
}
