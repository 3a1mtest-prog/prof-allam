'use client';

import type { ReactNode } from 'react';
import HeroBackdrop from './HeroBackdrop';

/**
 * Wraps the sections the backdrop stays pinned behind. The sections arrive as
 * children so they remain server components.
 */
export default function HeroStage({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <HeroBackdrop />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
