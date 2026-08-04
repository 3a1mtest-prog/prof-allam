import ScrollFrames from '@/components/ScrollFrames';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Awards from '@/components/Awards';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Community from '@/components/Community';
import Gallery from '@/components/Gallery';
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
        <Philosophy />
        <Projects />
        <Leadership />
        <Awards />
        <Skills />
        <Resume />
        <Community />
        <Gallery />
      </main>
      <Contact />
      <Dock />
    </>
  );
}
