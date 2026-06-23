'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function Testimonials() {
  const { c } = useLang();
  const { testimonials, testimonialsTitle, testimonialsLead } = c;
  const count = testimonials.length;
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % count), 4500);
  }, [count]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const go = useCallback((n: number) => {
    setIdx((n + count) % count);
    startTimer();
  }, [count, startTimer]);

  return (
    <section id="testimonials" className="section-card-bg">
      <div className="section">
        <div className="section-center testi-header">
          <span className="section-badge">{testimonialsTitle}</span>
          <h2 className="section-title">{testimonialsLead}</h2>
        </div>

        <div
          className="testi-carousel"
          onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
          onMouseLeave={startTimer}
        >
          <div className="testi-viewport">
            <div
              className="testi-track"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {testimonials.map(t => (
                <article key={t.name} className="testi-slide" dir={c.dir}>
                  <div className="testi-card">
                    <div className="testi-stars">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Icon key={i} name="star" size={16} />
                      ))}
                    </div>
                    <p className="testi-body">«{t.body}»</p>
                    <div className="testi-author">
                      <div
                        className="testi-avatar"
                        style={{ background: t.bg, color: t.ink }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div className="testi-name">{t.name}</div>
                        <div className="testi-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="testi-controls">
            <button
              className="testi-arrow"
              onClick={() => go(idx - 1)}
              aria-label="previous"
            >
              {c.dir === 'rtl'
                ? <Icon name="chevron" size={20} />
                : <span className="testi-icon-flip"><Icon name="chevron" size={20} /></span>}
            </button>

            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot${i === idx ? ' active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testi-arrow"
              onClick={() => go(idx + 1)}
              aria-label="next"
            >
              {c.dir === 'rtl'
                ? <span className="testi-icon-flip"><Icon name="chevron" size={20} /></span>
                : <Icon name="chevron" size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
