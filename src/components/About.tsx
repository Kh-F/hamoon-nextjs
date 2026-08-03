'use client';

import { useRef, useState } from 'react';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function About() {
  const { c } = useLang();
  const { about, aboutStat, pillars } = c;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <section id="about">
      <div className="section about-grid">
        {/* Image column */}
        <div className="about-img-wrap">
          <div className="about-img-frame">
            <video
              ref={videoRef}
              src="/Logo-Motion.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="about-video"
            />
            <button
              type="button"
              onClick={toggleSound}
              className="about-video-sound"
              aria-label={muted ? (c.lang === 'fa' ? 'پخش صدا' : 'Unmute video') : (c.lang === 'fa' ? 'قطع صدا' : 'Mute video')}
            >
              <Icon name={muted ? 'volumeoff' : 'volume'} size={18} />
            </button>
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
          <p className="section-note">{about.note}</p>

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
