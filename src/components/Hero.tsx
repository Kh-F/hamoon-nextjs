'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';

export default function Hero() {
  const { c } = useLang();
  const { hero } = c;

  return (
    <section className="hero">
      <div className="hero-blob1" />
      <div className="hero-blob2" />

      <div className="hero-inner">
        {/* Illustration */}
        <div className="hero-illus-wrap">
          <Image
            src="/website-photo.png"
            alt="Hamoon Academy"
            width={520}
            height={420}
            className="hero-illus"
            priority
          />
        </div>

        {/* Text content */}
        <div className="hero-content">
          <span className="hero-badge">
            <span className="badge-dot" />
            {hero.badge}
          </span>

          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-lead">{hero.lead}</p>

          <div className="hero-btns">
            <a href="#consult" className="btn-primary">{hero.primary}</a>
            <a href="#courses" className="btn-secondary">{hero.secondary}</a>
          </div>

          <div className="hero-stats">
            {hero.stats.map(s => (
              <div key={s.l}>
                <div className="hero-stat-n">{s.n}</div>
                <div className="hero-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
