'use client';

import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 192;
const framePath = (i: number) =>
  `/assets/frames/frame_${String(i + 1).padStart(3, '0')}.jpg`;

/**
 * Full-bleed background canvas that scrubs a 192-frame image sequence against
 * page scroll position.
 *
 * Frames are optional: if `/assets/frames/` has not been populated the very
 * first probe fails, the component disables itself and the page falls back to
 * the CSS gradient backdrop. Drop the sequence in and it lights up with no
 * code change.
 */
export default function ScrollFrames() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  // Probe frame 1 before committing to 192 network requests.
  useEffect(() => {
    let cancelled = false;
    const probe = new Image();
    probe.src = framePath(0);

    probe.onload = () => {
      if (cancelled) return;
      const images: HTMLImageElement[] = [probe];
      for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = framePath(i);
        images.push(img);
      }
      framesRef.current = images;
      setReady(true);
    };

    probe.onerror = () => {
      if (!cancelled) setReady(false);
    };

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      currentFrame.current = -1;
      draw();
    };

    /**
     * Draws one frame cover-fit, then lays a soft radial patch of the page
     * background over the bottom-right corner so any watermark burned into
     * the source video blends away instead of hard-edging.
     */
    const renderFrame = (index: number) => {
      const img = framesRef.current[index];
      if (!img?.complete || !img.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;

      ctx.fillStyle = '#0a0404';
      ctx.fillRect(0, 0, cw, ch);

      // cover-fit
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);

      // watermark patch — bottom-right radial blend
      const patchW = cw * 0.3;
      const patchH = ch * 0.16;
      const px = cw - patchW;
      const py = ch - patchH;
      const grad = ctx.createRadialGradient(
        px + patchW / 2,
        py + patchH / 2,
        0,
        px + patchW / 2,
        py + patchH / 2,
        Math.max(patchW, patchH) / 1.35,
      );
      grad.addColorStop(0, 'rgba(10,4,4,1)');
      grad.addColorStop(0.55, 'rgba(10,4,4,0.96)');
      grad.addColorStop(1, 'rgba(10,4,4,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(px - patchW * 0.35, py - patchH * 0.6, patchW * 1.4, patchH * 1.7);
    };

    const draw = () => {
      rafRef.current = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const index = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(progress * (FRAME_COUNT - 1))),
      );
      if (index === currentFrame.current) return;
      currentFrame.current = index;
      renderFrame(index);
    };

    const onScroll = () => {
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full opacity-40" />
      {/* Keeps text legible over any frame content */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/85 to-void" />
    </div>
  );
}
