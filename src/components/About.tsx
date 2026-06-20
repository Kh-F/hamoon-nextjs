'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function About() {
  const { c } = useLang();
  const { about, aboutStat, pillars } = c;

  return (
    <section id="about">
      <div className="section about-grid">
        {/* Image column */}
        <div className="about-img-wrap">
          <div className="about-img-frame">
            <Image
              src="/logo.png.png"
              alt=""
              width={160}
              height={160}
              className="img-logo-about"
            />
            <span className="about-img-overlay" />
          </div>

          <div className="about-stat-card">
            <span className="about-stat-icon">
              <Icon name="star" size={24} />
            </span>
            <div>
              <div className="about-stat-n">{aboutStat.n}</div>
              <div className="about-stat-l">{aboutStat.l}</div>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="about-content">
          <span className="section-badge">{about.badge}</span>
          <h2 className="section-title">{about.title}</h2>
          <p className="section-lead">{about.body}</p>
          <p className="section-body">{about.body2}</p>

          <div className="pillars">
            {pillars.map(p => (
              <div key={p.title} className="pillar">
                <div className="pillar-icon">
                  <Icon name={p.ic} size={22} />
                </div>
                <div>
                  <div className="pillar-title">{p.title}</div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
