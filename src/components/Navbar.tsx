'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function Navbar() {
  const { c, toggle } = useLang();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="nav-brand">
          <Image
            src="/logo.png.png"
            alt="Hamoon Academy"
            width={46}
            height={46}
            className="img-logo-nav"
            priority
          />
          <span className="nav-brand-text">
            <strong className="nav-brand-name">{c.brand}</strong>
            <span className="nav-brand-sub">{c.brandSub}</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="main">
          {c.nav.map(item => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn-lang" onClick={toggle} aria-label={c.switchLabel}>
            {c.switchLabel}
          </button>
          <a href="#consult" className="btn-cta">{c.cta}</a>
        </div>
      </div>
    </header>
  );
}
