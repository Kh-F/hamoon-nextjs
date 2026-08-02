import { LangProvider } from '@/context/LangContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Founders from '@/components/Founders';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Consultation from '@/components/Consultation';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Founders />
        <Gallery />
        <Testimonials />
        <Consultation />
        <ElevenLabsWidget agentId="agent_6901kvx2pxa4evqsz6bfm578n0a0" />
      </main>
    </LangProvider>
  );
}
