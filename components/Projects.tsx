import { profile, projects } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';
import GlowCard from './GlowCard';
import { ArrowIcon } from './Icons';

/**
 * Typographic project cards.
 *
 * Deliberately no thumbnails: there are no screenshots of these builds on
 * hand, and dropping in unrelated imagery would misrepresent the work. The
 * name, stack and status carry the card instead.
 */
export default function Projects() {
  return (
    <Section id="projects">
      <SectionHead
        title={`Featured Projects (${projects.length})`}
        action={
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.16em] text-crimson"
          >
            EXPLORE ALL PROJECTS
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        }
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.n} delay={(i % 2) * 0.1}>
            <GlowCard as="li" className="group h-full list-none">
              <a
                href={project.href}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex h-full flex-col p-7 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="display text-5xl leading-none text-crimson/45 transition-colors duration-500 group-hover:text-crimson">
                    {project.n}
                  </span>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.5rem] font-bold tracking-[0.14em] ${
                      project.status === 'LIVE'
                        ? 'bg-crimson text-white'
                        : 'bg-white/10 text-bone'
                    }`}
                  >
                    <span className="pulse-dot h-1 w-1 rounded-full bg-current" />
                    {project.status}
                  </span>
                </div>

                <h3 className="display mt-8 text-3xl leading-[0.95] text-bone sm:text-[2.4rem]">
                  {project.title}
                </h3>
                <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-dust">
                  {project.role}
                </p>

                <ul className="mt-7 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="mono rounded-full border border-white/8 px-2.5 py-1 text-[0.55rem] tracking-wider text-ash transition-colors group-hover:border-crimson/30 group-hover:text-bone"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto flex items-center gap-2 pt-8 text-[0.6rem] font-semibold tracking-[0.18em] text-ash transition-colors group-hover:text-crimson">
                  VIEW PROJECT
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
