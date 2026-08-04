import { leadership } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';
import GlowCard from './GlowCard';

export default function Leadership() {
  return (
    <Section id="leadership">
      <SectionHead title="Leadership & Certifications" />
      <ul className="grid gap-4 md:grid-cols-3">
        {leadership.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <GlowCard as="li" className="h-full list-none p-6">
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-bone">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[0.7rem] italic text-crimson/85">{item.org}</p>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-ash">{item.body}</p>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
