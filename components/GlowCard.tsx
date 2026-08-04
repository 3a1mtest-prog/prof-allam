'use client';

import type { MouseEvent, ReactNode } from 'react';

/**
 * Card shell that feeds the pointer position into the `--mx/--my` custom
 * properties, driving the crimson spotlight defined by `.card::before`.
 */
export default function GlowCard({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
}) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag onMouseMove={onMove} className={`card ${className}`}>
      {children}
    </Tag>
  );
}
