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
        {/* Left: text content */}
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

        {/* Right: floating card */}
        <div className="hero-card-wrap">
          <div className="hero-card">
            <div className="hero-card-thumb">
              <Image
                src="/logo.png.png"
                alt=""
                width={96}
                height={96}
                className="img-logo-hero"
              />
              <span className="live-badge">
                <span className="live-dot" />
                {hero.liveLabel}
              </span>
            </div>

            <div className="hero-card-body">
              <span className="card-avatar">{hero.cardInitials}</span>
              <div className="card-info">
                <div className="card-title">{hero.cardTitle}</div>
                <div className="card-teacher">{hero.cardTeacher}</div>
              </div>
              <span className="card-meta-pill">{hero.cardMeta}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
