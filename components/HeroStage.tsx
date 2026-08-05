'use client';

import { useRef, type ReactNode } from 'react';
import HeroBackdrop from './HeroBackdrop';

/**
 * Holds the scroll span that the hero clip is scrubbed against.
 *
 * The ref has to live in a client component, but the sections rendered inside
 * stay server components — they arrive as children rather than being imported
 * here.
 */
export default function HeroStage({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={stageRef} className="relative">
      <HeroBackdrop scrollRef={stageRef} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
