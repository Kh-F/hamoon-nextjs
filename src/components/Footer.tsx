'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function Footer() {
  const { c } = useLang();
  const { brand, social, footer } = c;

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand column — spans full width */}
        <div className="footer-brand">
          <a href="#top" className="footer-logo-link">
            <Image
              src="/logo.png.png"
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

        {/* Link columns */}
        {footer.cols.map(col => (
          <div key={col.h} className="footer-col">
            <div className="footer-col-h">{col.h}</div>
            {col.items.map(it => (
              <a key={it} href="#" className="footer-col-link">{it}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>{footer.rights}</span>
          <span>{footer.rightsEn}</span>
        </div>
      </div>
    </footer>
  );
}
