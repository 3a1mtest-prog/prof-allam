import type { ReactNode } from 'react';
import Reveal from './Reveal';

export function SectionHead({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <Reveal>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
        <h2 className="eyebrow on-video flex items-center gap-3 text-bone">
          <span className="h-2 w-2 shrink-0 bg-crimson" aria-hidden="true" />
          {title}
        </h2>
        {action}
      </div>
    </Reveal>
  );
}

export default function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative z-10 px-5 py-16 sm:px-8 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
