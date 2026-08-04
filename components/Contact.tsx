import { contact, profile } from '@/lib/data';
import Reveal from './Reveal';
import { ArrowIcon, SparkIcon, socialIconMap, type SocialIconName } from './Icons';

export default function Contact() {
  return (
    <footer id="contact" className="relative z-10 px-5 pb-36 pt-16 sm:px-8 sm:pb-40 sm:pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="card overflow-hidden p-7 sm:p-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Heading */}
            <Reveal>
              <div>
                <h2 className="display flex flex-wrap items-center gap-4 text-[2.6rem] leading-[0.9] text-bone sm:text-6xl">
                  {contact.heading}
                  <SparkIcon className="h-7 w-7 shrink-0 text-crimson sm:h-9 sm:w-9" />
                </h2>
                <p className="mt-6 max-w-md text-[0.9rem] leading-relaxed text-ash">
                  {contact.body}
                </p>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-crimson px-7 text-[0.68rem] font-semibold tracking-[0.16em] text-white transition-shadow hover:shadow-[0_0_34px_-6px_rgba(255,30,45,0.9)]"
                >
                  GET IN TOUCH
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            {/* Links */}
            <Reveal delay={0.12}>
              <ul className="space-y-1">
                {contact.links.map((link) => {
                  const Icon = socialIconMap[link.icon as SocialIconName];
                  const external = link.href.startsWith('http');
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="group flex min-h-11 items-center gap-4 border-b border-white/6 py-3.5 transition-colors hover:border-crimson/40"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-ash transition-colors group-hover:bg-crimson group-hover:text-white">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="mono min-w-0 flex-1 truncate text-[0.75rem] text-bone/90">
                          {link.label}
                        </span>
                        <ArrowIcon className="h-3.5 w-3.5 shrink-0 -rotate-45 text-dust transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-crimson" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <div className="rule mt-12" />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="mono text-[0.6rem] tracking-[0.14em] text-dust">
              © {new Date().getFullYear()} {profile.name} — @{profile.handle}
            </p>
            <p className="mono text-[0.6rem] tracking-[0.14em] text-dust">
              BUILT WITH NEXT.JS · TAILWIND · FRAMER MOTION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
