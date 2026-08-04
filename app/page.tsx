import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HeroBackdrop from '@/components/HeroBackdrop';
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
        {/* One backdrop behind both, so the figure runs from the hero
            straight down through the What I Do grid. */}
        <div className="relative overflow-hidden">
          <HeroBackdrop />
          <Hero />
          <Services />
        </div>
        <Gallery />
        <Instagram />
      </main>
      <Contact />
      <Dock />
    </>
  );
}
