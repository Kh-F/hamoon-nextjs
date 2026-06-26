'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function Founders() {
  const { c } = useLang();
  const { founders, foundersTitle, foundersLead } = c;

  return (
    <section id="founders" className="section-card-bg">
      <div className="section">
        <div className="section-center">
          <span className="section-badge">{foundersTitle}</span>
          <h2 className="section-title">{foundersLead}</h2>
        </div>

        <div className="founders-grid">
          {founders.map(f => (
            <div key={f.name} className="founder-card">
              <div
                className="founder-avatar-lg"
                style={{ background: f.bg, color: f.ink }}
              >
                {f.initials}
              </div>
              <div className="founder-info">
                <h3 className="founder-name">{f.name}</h3>
                {f.role && <div className="founder-role">{f.role}</div>}
                <p className="founder-bio">{f.bio}</p>
                {(f.linkedin !== '#' || f.cv !== '#') && (
                  <div className="founder-actions">
                    {f.linkedin !== '#' && (
                      <Link
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="founder-link founder-link--linkedin"
                      >
                        <Icon name="linkedin" size={14} />
                        LinkedIn
                      </Link>
                    )}
                    {f.cv !== '#' && (
                      <a href={f.cv} download className="founder-link founder-link--cv">
                        <Icon name="download" size={14} />
                        {c.lang === 'fa' ? 'دانلود رزومه' : 'Download CV'}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
