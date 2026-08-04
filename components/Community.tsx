import { community } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';

export default function Community() {
  return (
    <Section id="community">
      <SectionHead title="Leadership & Community" />
      <ol className="card divide-y divide-white/6 overflow-hidden">
        {community.map((item, i) => (
          <Reveal key={item.n} delay={i * 0.06}>
            <li className="group flex flex-col gap-2 px-6 py-6 transition-colors hover:bg-crimson/[0.05] sm:flex-row sm:items-baseline sm:gap-8 sm:px-8">
              <span className="display shrink-0 text-2xl leading-none text-crimson/60 transition-colors group-hover:text-crimson sm:w-14">
                {item.n}
              </span>
              <h3 className="shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-bone sm:w-56">
                {item.title}
              </h3>
              <p className="text-[0.82rem] leading-relaxed text-ash">{item.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
