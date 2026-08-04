import { awards } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';
import GlowCard from './GlowCard';

export default function Awards() {
  return (
    <Section id="awards">
      <SectionHead title={`Honors, Awards & Certifications (${awards.length})`} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, i) => (
          <Reveal key={award.title} delay={i * 0.08}>
            <GlowCard as="li" className="h-full list-none p-4">
              <Certificate caption={award.caption} />
              <div className="px-2 pb-1 pt-5">
                <h3 className="text-[0.72rem] font-bold uppercase leading-snug tracking-[0.13em] text-bone">
                  {award.title}
                </h3>
                <p className="mt-1.5 text-[0.7rem] italic text-crimson/85">{award.org}</p>
                <p className="mono mt-2 text-[0.6rem] tracking-wider text-dust">{award.meta}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/**
 * Paper-stock certificate mock. Swap for a real scan by replacing this with an
 * <img> pointed at /assets/awards/*.jpg — the surrounding card is unchanged.
 */
function Certificate({ caption }: { caption: string }) {
  return (
    <div className="relative aspect-[4/2.7] overflow-hidden rounded-lg bg-gradient-to-br from-[#eee7e4] to-[#c9bfbb]">
      <div className="absolute inset-[7px] rounded-[3px] border border-[#0a0404]/12" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-5 text-center">
        <span className="h-px w-8 bg-[#0a0404]/25" />
        <p className="text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.1em] text-[#0a0404]/75">
          {caption}
        </p>
        <span className="h-px w-8 bg-[#0a0404]/25" />
      </div>
      {/* Foil seal */}
      <div className="absolute bottom-2.5 right-2.5 h-5 w-5 rounded-full bg-gradient-to-br from-crimson to-crimson-deep opacity-85" />
      {/* Sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent opacity-45" />
    </div>
  );
}
