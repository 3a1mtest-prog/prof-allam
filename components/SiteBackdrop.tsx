'use client';

import { useEffect, useRef } from 'react';

/**
 * Page-wide backdrop: the clip is fixed to the viewport for the whole site,
 * and document scroll position drives its playback.
 *
 * Scrolling down walks forward through the footage, scrolling back up runs it
 * in reverse. It never moves — the sections travel over it.
 *
 * An earlier revision scoped the same effect to the hero alone, which is why
 * it read as broken: the footage was spent within the first screen and then
 * sat frozen for the rest of the page. Mapping it across the full document
 * is what makes the whole scroll feel connected to it.
 *
 * `object-cover` keeps the frame filling the viewport, so there is no clip
 * edge to feather.
 */
export default function SiteBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
      const doc = document.documentElement;
      const span = doc.scrollHeight - window.innerHeight;
      const progress = span > 0 ? Math.min(1, Math.max(0, window.scrollY / span)) : 0;
      target = progress * (video.duration || 0);
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!ready) return;
      // Ease toward the target so a flick of the wheel doesn't snap frames,
      // and so the reverse direction stays as smooth as the forward one.
      eased += (target - eased) * 0.1;
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
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
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

      {/* Weighted left, where the hero copy sits, and released on the right so
          he stays clearly visible. */}
      <div className="absolute inset-0 bg-gradient-to-r from-void from-2% via-void/45 via-42% to-transparent to-80%" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_40%_at_8%_44%,rgba(25,10,12,0.9),transparent_72%)]" />
    </div>
  );
}
