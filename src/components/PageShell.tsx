'use client';

import { LangProvider } from '@/context/LangContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <Navbar />
      <main id="top">{children}</main>
      <Footer />
    </LangProvider>
  );
}
