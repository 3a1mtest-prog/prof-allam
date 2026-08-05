'use client';

import { useEffect, useRef } from 'react';

/**
 * Hero backdrop: the clip holds its place on screen and plays on its own
 * while the page scrolls over it.
 *
 * `sticky` pins it for the length of the hero and What I Do, so it reads as
 * locked to the viewport while the copy and cards travel past. Playback is
 * continuous — an earlier revision drove `currentTime` from scroll position,
 * which meant the footage froze the moment scrolling stopped and read as a
 * still image.
 *
 * Full-bleed `object-cover` keeps the frame filling the viewport, so there is
 * no clip edge to feather; the visible rectangle in older revisions came from
 * the frame being smaller than the element holding it.
 */
export default function HeroBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      return;
    }

    // Only decode while the backdrop is actually on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay refused — the poster frame stays up */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.01 },
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    // Pinned for the height of the section, then pulled back out of the flow
    // by the negative margin so it contributes no height of its own.
    <div
      className="pointer-events-none sticky top-0 z-0 -mb-[100svh] h-[100svh] overflow-hidden"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        poster="/assets/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover object-[62%_top]"
      >
        <source src="/assets/hero-loop.webm" type="video/webm" />
        <source src="/assets/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Legibility: weighted left under the copy, released on the right so he
          stays visible, and solid at the bottom to hand off to the next
          section. */}
      <div className="absolute inset-0 bg-gradient-to-r from-void from-2% via-void/45 via-42% to-transparent to-80%" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent via-35% to-void" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_40%_at_8%_44%,rgba(25,10,12,0.92),transparent_72%)]" />
    </div>
  );
}
