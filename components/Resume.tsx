import { education, experience, profile } from '@/lib/data';
import Section from './Section';
import Reveal from './Reveal';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './Icons';

type Entry = { title: string; org: string; period: string; body: string };

const socialCards = [
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/shadinkappachali',
    href: profile.socials.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: 'GITHUB',
    value: 'github.com/shadinkappachali',
    href: profile.socials.github,
    Icon: GithubIcon,
  },
  {
    label: 'INSTAGRAM',
    value: '@shadin_kappzzz',
    href: profile.socials.instagram,
    Icon: InstagramIcon,
  },
];

export default function Resume() {
  return (
    <Section id="experience">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="card h-full p-6 sm:p-8">
            <Block title="Education & Academics" entries={education} />
            <div className="rule my-9" />
            <Block title="Work Experience" entries={experience} />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card h-full p-6 sm:p-8">
            <h2 className="eyebrow mb-7 flex items-center gap-3 text-bone">
              <span className="h-2 w-2 shrink-0 bg-crimson" aria-hidden="true" />
              Connect & Profiles
            </h2>
            <ul className="space-y-3">
              {socialCards.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-11 items-center gap-4 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3 transition-all hover:border-crimson/45 hover:bg-crimson/[0.07]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-crimson/15 text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.6rem] font-bold tracking-[0.16em] text-bone">
                        {label}
                      </span>
                      <span className="mono block truncate text-[0.65rem] text-dust">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Block({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <>
      <h2 className="eyebrow mb-7 flex items-center gap-3 text-bone">
        <span className="h-2 w-2 shrink-0 bg-crimson" aria-hidden="true" />
        {title}
      </h2>
      <ol className="relative space-y-7 border-l border-white/8 pl-6">
        {entries.map((entry) => (
          <li key={entry.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.72rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-void bg-crimson"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[0.95rem] font-semibold text-bone">{entry.title}</h3>
              <span className="mono text-[0.6rem] tracking-wider text-dust">{entry.period}</span>
            </div>
            <p className="mt-0.5 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-crimson/85">
              {entry.org}
            </p>
            <p className="mt-2 text-[0.8rem] leading-relaxed text-ash">{entry.body}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
