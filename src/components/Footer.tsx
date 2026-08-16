'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function Footer() {
  const { c } = useLang();
  const { brand, social, nav, footer } = c;

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#top" className="footer-logo-link">
            <Image
              src="/logo.png"
              alt=""
              width={44}
              height={44}
              className="img-logo-footer"
            />
            <strong className="footer-logo-name">{brand}</strong>
          </a>
          <p className="footer-tagline">{footer.tagline}</p>
          <div className="social-row">
            {social.map(so => (
              <a key={so.label} href="#" className="social-btn" aria-label={so.label}>
                <Icon name={so.ic} size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-h">{footer.linksTitle}</div>
          {nav.map(item => (
            <Link key={item.id} href={item.href ?? `#${item.id}`} className="footer-col-link">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>{footer.rights}</span>
          <span>{brand}</span>
        </div>
      </div>
    </footer>
  );
}
