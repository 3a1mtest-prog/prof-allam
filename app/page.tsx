import ScrollFrames from '@/components/ScrollFrames';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Gallery from '@/components/Gallery';
import Instagram from '@/components/Instagram';
import Contact from '@/components/Contact';
import Dock from '@/components/Dock';

export default function Home() {
  return (
    <>
      <ScrollFrames />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Gallery />
        <Instagram />
      </main>
      <Contact />
      <Dock />
    </>
  );
}
