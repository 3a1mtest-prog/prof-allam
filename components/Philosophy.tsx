import { philosophy } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';
import GlowCard from './GlowCard';

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <SectionHead title="Philosophy & Career Objective" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {philosophy.map((item, i) => (
          <Reveal key={item.n} delay={i * 0.08}>
            <GlowCard as="li" className="h-full list-none p-6">
              <span className="display text-3xl leading-none text-crimson/70">{item.n}</span>
              <h3 className="mt-6 text-[0.7rem] font-bold uppercase leading-snug tracking-[0.13em] text-bone">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-ash">{item.body}</p>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
