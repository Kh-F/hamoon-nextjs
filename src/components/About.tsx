'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

// The source clip has a built-in fade-to-black outro after this point,
// so we freeze on the last fully-lit frame instead of the true last frame.
const VIDEO_FREEZE_TIME = 9;

export default function About() {
  const { c } = useLang();
  const { about, aboutStat, pillars } = c;
  const videoRef = useRef<HTMLVideoElement>(null);
  const frozenRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function freezeVideo() {
    const video = videoRef.current;
    if (!video || frozenRef.current) return;
    frozenRef.current = true;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    video.pause();
    video.currentTime = VIDEO_FREEZE_TIME;
  }

  function watchPlayback() {
    const video = videoRef.current;
    if (!video || frozenRef.current) return;
    if (video.currentTime >= VIDEO_FREEZE_TIME) {
      freezeVideo();
      return;
    }
    rafRef.current = requestAnimationFrame(watchPlayback);
  }

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
              muted
              playsInline
              onPlay={watchPlayback}
              onEnded={freezeVideo}
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
