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
            src="/website-photo.webp"
            alt="Hamoon Academy"
            width={520}
            height={284}
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

        </div>

      </div>
    </section>
  );
}
