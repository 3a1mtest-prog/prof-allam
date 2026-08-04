import { services } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';
import GlowCard from './GlowCard';

export default function Services() {
  return (
    <Section id="services">
      <SectionHead title="What I Do" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.07}>
            <GlowCard as="li" className="h-full list-none p-6">
              <span className="text-2xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-5 text-[0.7rem] font-bold uppercase leading-snug tracking-[0.13em] text-bone">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-ash">{service.body}</p>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
