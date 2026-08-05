import SiteBackdrop from '@/components/SiteBackdrop';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Instagram from '@/components/Instagram';
import Contact from '@/components/Contact';
import Dock from '@/components/Dock';

export default function Home() {
  return (
    <>
      {/* Fixed for the whole page and scrubbed by document scroll. */}
      <SiteBackdrop />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Services />
        {/*
          No panel over the clip. An earlier revision dimmed these sections with
          a translucent sheet, which drew a hard horizontal line straight across
          him wherever the sheet began — the clip read as a rectangle sitting
          behind the page instead of as the page's own backdrop.
          Contrast is handled per element instead: cards carry their own dark
          base, and loose copy gets a halo (.on-video), both of which fade out
          with no edge.
        */}
        <Gallery />
        <Instagram />
      </main>
      <Contact />
      <Dock />
    </>
  );
}
