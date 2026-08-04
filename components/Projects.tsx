import { projects } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';
import GlowCard from './GlowCard';
import { ArrowIcon } from './Icons';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHead
        title={`Featured Projects (${projects.length})`}
        action={
          <a
            href={projects[0]?.href ?? '#'}
            className="group inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.16em] text-crimson"
          >
            EXPLORE ALL PROJECTS
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        }
      />

      <ul className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.n} delay={(i % 2) * 0.1}>
            <GlowCard as="li" className="group h-full list-none">
              <a href={project.href} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />

                  {/* Stack chips reveal on hover */}
                  <div className="pointer-events-none absolute right-3 top-3 flex flex-wrap justify-end gap-1.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="mono rounded-full bg-void/80 px-2.5 py-1 text-[0.55rem] tracking-wider text-bone ring-1 ring-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="display text-2xl leading-none text-crimson">{project.n}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-bone">
                      {project.title}
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.5rem] font-bold tracking-[0.14em] ${
                          project.status === 'LIVE'
                            ? 'bg-crimson text-white'
                            : 'bg-white/10 text-bone'
                        }`}
                      >
                        <span className="pulse-dot h-1 w-1 rounded-full bg-current" />
                        {project.status}
                      </span>
                    </h3>
                    <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-dust">
                      {project.role}
                    </p>
                  </div>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-ash transition-all duration-300 group-hover:translate-x-1 group-hover:text-crimson" />
                </div>
              </a>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
