'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { facts, profile } from '@/lib/data';
import LanyardCard from './LanyardCard';
import { ArrowIcon, GlobeIcon, PinIcon, SparkIcon } from './Icons';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section id="top" className="relative z-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* ---------------- Left: identity ---------------- */}
        <div className="relative">
          <motion.p {...rise(0.05)} className="hand relative text-3xl text-bone/90 sm:text-4xl">
            {profile.greeting}
          </motion.p>

          <motion.h1
            {...rise(0.12)}
            className="display relative mt-1 text-[3.1rem] leading-[0.87] text-bone sm:text-7xl lg:text-[5.4rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.div {...rise(0.2)} className="relative mt-5 space-y-1">
            {profile.roles.map((role) => (
              <p
                key={role}
                className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-crimson sm:text-xs"
              >
                {role}
              </p>
            ))}
          </motion.div>

          <motion.p
            {...rise(0.28)}
            className="relative mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ash"
          >
            {profile.bio}
          </motion.p>

          <motion.div {...rise(0.36)} className="relative mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-6 text-[0.68rem] font-semibold tracking-[0.16em] text-bone transition-all hover:border-crimson/60 hover:bg-crimson/10"
            >
              GET IN TOUCH
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-6 text-[0.68rem] font-semibold tracking-[0.16em] text-bone transition-all hover:border-crimson/60 hover:bg-crimson/10"
            >
              ALLAM.QD.JE
              <GlobeIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
            </a>
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/8 px-5 text-[0.68rem] font-semibold tracking-[0.16em] text-ash">
              <PinIcon className="h-3.5 w-3.5 text-crimson" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* ---------------- Right: badge, note, stats ---------------- */}
        <div className="flex flex-col items-center gap-7 lg:items-stretch">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: -40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
          >
            <LanyardCard />
          </motion.div>

          <motion.div
            {...rise(0.5)}
            className="glass flex max-w-sm items-start gap-3 rounded-2xl p-5"
          >
            <SparkIcon className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
            <p className="text-[0.9rem] leading-relaxed text-bone/90">{profile.note}</p>
          </motion.div>

          <motion.dl {...rise(0.58)} className="grid max-w-sm grid-cols-2 gap-2.5">
            {facts.map((fact) => (
              <div key={fact.k} className="glass rounded-xl px-4 py-3.5">
                <dt className="mono text-[0.55rem] tracking-[0.24em] text-crimson">{fact.k}</dt>
                <dd className="mt-1.5 text-[0.82rem] leading-snug text-bone">{fact.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
