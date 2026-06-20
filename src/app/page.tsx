import { LangProvider } from '@/context/LangContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Instructors from '@/components/Instructors';
import Gallery from '@/components/Gallery';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Courses />
        <Instructors />
        <Gallery />
        <Consultation />
      </main>
      <Footer />
    </LangProvider>
  );
}
