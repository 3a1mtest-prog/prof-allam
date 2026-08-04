'use client';

import { useEffect, useRef } from 'react';

export type MediaSource = { type: 'image' | 'video'; src: string; poster?: string };

/**
 * Renders a thumbnail that may be either a still or a looping clip.
 *
 * Videos only start playing once they scroll into view and pause again on the
 * way out, so a page full of reels doesn't decode several streams at once.
 * Under prefers-reduced-motion they stay paused on their first frame.
 */
export default function Media({
  media,
  alt,
  className = '',
}: {
  media: MediaSource;
  alt: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            /* autoplay can be refused; the poster frame stays up */
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (media.type === 'video') {
    return (
      <video
        ref={videoRef}
        src={media.src}
        poster={media.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className={className}
      />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={media.src} alt={alt} loading="lazy" className={className} />;
}
