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
      {/* Sized box rather than full-bleed, so he reads as standing further back
          — about 80% of the scale a full-bleed cover would force, which keeps
          him prominent the way the reference hero is without pressing him into
          the viewer. Offset from the top so his head clears the floating nav,
          and full height so his lower body runs behind the What I Do cards. */}
      <div className="absolute left-1/2 top-[5%] aspect-[3/4] h-full -translate-x-1/2 sm:top-[6%]">
        <video
          ref={videoRef}
          poster="/assets/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          /* The box carries the frame's own 3:4 ratio and the video covers it
             exactly, so .video-blend's feather lands on the real frame edge
             rather than on letterbox padding. */
          className="video-blend h-full w-full object-cover object-top"
        >
          <source src="/assets/hero-loop.webm" type="video/webm" />
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
      </div>

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
      <div className="absolute inset-0 bg-gradient-to-r from-void from-2% via-void/40 via-42% to-transparent to-78% lg:via-void/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/55 via-transparent via-40% to-void" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_34%_at_8%_34%,rgba(10,4,4,0.92),transparent_72%)]" />
    </div>
  );
}
