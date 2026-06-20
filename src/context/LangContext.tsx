'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CONTENT, type Lang, type PageContent } from '@/lib/content';

interface LangContextValue {
  lang: Lang;
  c: PageContent;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue>({
  lang: 'fa',
  c: CONTENT.fa,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fa');

  useEffect(() => {
    const { dir, lang: langAttr } = CONTENT[lang];
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', langAttr);
  }, [lang]);

  const toggle = () => setLang(l => (l === 'fa' ? 'en' : 'fa'));

  return (
    <LangContext.Provider value={{ lang, c: CONTENT[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
