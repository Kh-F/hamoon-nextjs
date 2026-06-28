import { ElevenLabsWidget } from '@/components/ElevenLabsWidget';
import { LangProvider } from '@/context/LangContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Founders from '@/components/Founders';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';

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
      </main>
      <Footer />
      <ElevenLabsWidget />
    </LangProvider>
  );
}
