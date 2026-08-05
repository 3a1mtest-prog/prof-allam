import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HeroStage from '@/components/HeroStage';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Instagram from '@/components/Instagram';
import Contact from '@/components/Contact';
import Dock from '@/components/Dock';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* The clip is pinned across both sections and scrubbed by scroll,
            so moving down the page walks through the footage. */}
        <HeroStage>
          <Hero />
          <Services />
        </HeroStage>
        <Gallery />
        <Instagram />
      </main>
      <Contact />
      <Dock />
    </>
  );
}
