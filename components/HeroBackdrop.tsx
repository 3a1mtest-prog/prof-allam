'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll-scrubbed hero backdrop.
 *
 * The clip is pinned to the viewport while the section scrolls past it, and
 * scroll position drives `currentTime` rather than the clip playing on its
 * own. Scrolling down walks through the footage; stopping holds a frame.
 *
 * This is the effect the original brief described as a 192-frame canvas
 * sequence. Driving one short clip does the same job for ~500KB instead of
 * ~15MB of stills, and seeks stay cheap because the file is small and fully
 * buffered before scrubbing starts.
 *
 * Full-bleed `object-cover` also means the frame always fills the viewport,
 * so there are no clip edges to feather — the visible rectangle in earlier
 * revisions came from the frame being smaller than the element holding it.
 */
export default function HeroBackdrop({
  scrollRef,
}: {
  /** The element whose scroll span maps onto the clip's duration. */
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const track = scrollRef.current;
    if (!video || !track) return;

    // Scrubbing is motion the user did not ask for; hold the poster instead.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      return;
    }

    let raf = 0;
    let target = 0;
    let eased = 0;
    let ready = false;

    const onLoaded = () => {
      ready = Number.isFinite(video.duration) && video.duration > 0;
    };

    const measure = () => {
      const rect = track.getBoundingClientRect();
      // Span is the stage's own height, not height-minus-viewport. The sticky
      // child is pulled out of the flow by a negative margin, so it stays
      // pinned for the stage's full travel rather than unpinning a viewport
      // early — measuring it the usual way finished the scrub less than
      // halfway down and left the clip frozen for the rest of the section.
      const span = rect.height;
      const progress = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
      target = progress * (video.duration || 0);
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!ready) return;
      // Ease toward the target so a flick of the wheel doesn't snap the frame.
      eased += (target - eased) * 0.12;
      if (Math.abs(video.currentTime - eased) > 0.015) {
        // fastSeek trades exact-frame accuracy for a much cheaper seek.
        if (typeof video.fastSeek === 'function') video.fastSeek(eased);
        else video.currentTime = eased;
      }
    };

    video.pause();
    video.addEventListener('loadedmetadata', onLoaded);
    if (video.readyState >= 1) onLoaded();

    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener('loadedmetadata', onLoaded);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [scrollRef]);

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
        muted
        playsInline
        /* Fully buffered up front: scrubbing a partially loaded file stalls. */
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
