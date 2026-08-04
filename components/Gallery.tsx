import { gallery } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';
import GlowCard from './GlowCard';

export default function Gallery() {
  return (
    <Section id="gallery">
      <SectionHead title={`Gallery — Robotics & Coding Classes (${gallery.length})`} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((shot, i) => (
          <Reveal key={shot.title} delay={i * 0.08}>
            <GlowCard as="li" className="group h-full list-none">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.image}
                  alt={shot.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-crimson px-2.5 py-1 text-[0.5rem] font-bold tracking-[0.14em] text-white">
                  ON SITE
                </span>
              </div>
              <div className="px-5 py-4">
                <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.13em] text-bone">
                  {shot.title}
                </h3>
                <p className="mt-1.5 text-[0.7rem] text-crimson/80">{shot.caption}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
