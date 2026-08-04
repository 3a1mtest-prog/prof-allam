import { skills, objective } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';

/** Short wordmarks; anything absent falls back to the first two letters. */
const marks: Record<string, string> = {
  React: 'Re',
  'Next.js': 'N',
  TypeScript: 'TS',
  Tailwind: 'tw',
  TanStack: 'TS◆',
  Vite: 'V',
  Bun: 'Bun',
  'Node.js': 'nd',
  Python: 'Py',
  GSAP: 'gs',
  'Three.js': '3js',
  Supabase: 'Sb',
  Cloudflare: 'CF',
  Vercel: '▲',
  Git: 'git',
  'AI Agents': '◈',
  Automation: '⚙',
  Diffusion: '✳',
};

export default function Skills() {
  return (
    <Section id="skills">
      <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
        {/* Tech stack */}
        <Reveal>
          <div className="card h-full p-6 sm:p-8">
            <h2 className="eyebrow mb-8 flex items-center gap-3 text-bone">
              <span className="h-2 w-2 shrink-0 bg-crimson" aria-hidden="true" />
              Skills & Tech Stack
            </h2>
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {skills.map((skill) => (
                <li key={skill.name} className="flex">
                  <div
                    className="group/tile relative flex w-full flex-col items-center justify-start gap-2 rounded-xl border border-white/6 bg-white/[0.03] px-2 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
                    style={{ ['--brand' as string]: skill.color }}
                  >
                    <span
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--brand) 22%, transparent), transparent 70%)',
                      }}
                    />
                    <span
                      className="mono relative grid h-9 w-9 place-items-center rounded-lg text-[0.7rem] font-bold"
                      style={{
                        color: skill.color,
                        background: 'color-mix(in srgb, var(--brand) 12%, transparent)',
                        boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--brand) 26%, transparent)',
                      }}
                    >
                      {marks[skill.name] ?? skill.name.slice(0, 2)}
                    </span>
                    <span className="relative text-center text-[0.55rem] font-semibold uppercase leading-tight tracking-[0.08em] text-ash">
                      {skill.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Career objective */}
        <Reveal delay={0.12}>
          <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-crimson-deep via-[#5c0a11] to-[#2a0409] p-7 sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full bg-crimson/25 blur-3xl"
            />
            <div className="relative flex flex-1 flex-col justify-center">
              <span className="display text-6xl leading-none text-white/20">&ldquo;</span>
              <blockquote className="-mt-4 text-[1.05rem] leading-relaxed text-white/95 sm:text-[1.15rem]">
                {objective.quote}
              </blockquote>
            </div>
            <figcaption className="relative mt-10">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white">
                {objective.author}
              </p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.14em] text-white/60">
                {objective.authorRole}
              </p>
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-full bg-white/45" />
                ))}
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
