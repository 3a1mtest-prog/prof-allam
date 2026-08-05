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
          Past the hero the clip should recede rather than compete: these
          sections sit on a translucent panel, so it still shows through but
          the copy keeps its contrast.
        */}
        <div className="relative bg-void/80 backdrop-blur-[2px]">
          <Gallery />
          <Instagram />
        </div>
      </main>
      <Contact />
      <Dock />
    </>
  );
}
