'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';

export default function Navbar() {
  const { c, toggle } = useLang();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="nav-brand">
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
        </Link>

        <nav className="main-nav" aria-label="main">
          {c.nav.map(item => (
            <Link key={item.id} href={item.href ?? `#${item.id}`} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn-lang" onClick={toggle} aria-label={c.switchLabel}>
            {c.switchLabel}
          </button>
          <Link href="/#consult" className="btn-cta">{c.cta}</Link>
        </div>
      </div>
    </header>
  );
}
