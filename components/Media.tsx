'use client';

import { useEffect, useRef } from 'react';

export type MediaSource = {
  type: 'image' | 'video';
  /** H.264 fallback — universal, but not decodable by some open builds. */
  src: string;
  /** VP9 source, offered first: smaller, and plays where H.264 is absent. */
  webm?: string;
  poster?: string;
};

/**
 * Thumbnail that may be a still or a looping clip.
 *
 * Videos carry `autoPlay` so the browser starts them itself, and an
 * IntersectionObserver pauses whatever has scrolled away so a page of reels
 * never decodes several streams at once. Under prefers-reduced-motion the
 * clip stays parked on its poster frame.
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

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.pause();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            /* autoplay refused — the poster frame stays up */
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.2 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (media.type === 'video') {
    return (
      <video
        ref={videoRef}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className={className}
      >
        {media.webm && <source src={media.webm} type="video/webm" />}
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={media.src} alt={alt} loading="lazy" className={className} />;
}
