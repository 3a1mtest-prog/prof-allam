import { gallery } from '@/lib/data';
import Section, { SectionHead } from './Section';
import Reveal from './Reveal';
import Media from './Media';

/**
 * Reels wall.
 *
 * The card geometry is carried over from the source portfolio's `.reel-card`:
 * a 9:16 well, 1.5rem radius, hairline border, deep drop shadow, and a lift
 * with a coloured glow on hover — restated in this site's crimson rather than
 * the original's blue. The number sits in a blurred pill in the top-left,
 * matching `.reel-num`.
 */
export default function Gallery() {
  return (
    <Section id="gallery">
      <SectionHead title={`Reels (${gallery.length})`} />

      {/*
        Below sm a 9:16 card at full width is ~620px tall, so three of them
        become a very long scroll. Kept side by side instead as a snap
        carousel that bleeds to the screen edges; from sm up it is the grid
        the source portfolio uses. The strip scrolls, never the page.
      */}
      <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-auto sm:grid sm:max-w-5xl sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-6">
        {gallery.map((shot, i) => (
          <Reveal key={shot.title} delay={i * 0.09} className="w-[68vw] shrink-0 snap-center sm:w-auto">
            <figure className="group relative">
              <div className="reel-card">
                <Media media={shot.media} alt={shot.title} />

                {/* Number pill — the source site's .reel-num */}
                <figcaption className="reel-num">{shot.title.replace('REEL ', '')}</figcaption>

                {/* Caption rides in from the bottom on hover */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/70 to-transparent p-5 pt-12">
                  <p className="translate-y-1 text-[0.7rem] leading-snug text-bone/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {shot.caption}
                  </p>
                </div>
              </div>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
