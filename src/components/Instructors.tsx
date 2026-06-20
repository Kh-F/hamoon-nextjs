'use client';

import { useLang } from '@/context/LangContext';

export default function Instructors() {
  const { c } = useLang();
  const { instructors, instructorsTitle, instructorsLead } = c;

  return (
    <section id="instructors">
      <div className="section">
        <div className="section-center">
          <h2 className="section-title">{instructorsTitle}</h2>
          <p className="section-lead">{instructorsLead}</p>
        </div>

        <div className="instructors-grid">
          {instructors.map(t => (
            <div key={t.name} className="instructor-card">
              <div className="instructor-avatar-wrap">
                <span
                  className="instructor-avatar"
                  style={{
                    background: t.bg,
                    color: t.ink,
                    boxShadow: `0 0 0 5px var(--surface-card), 0 0 0 6px ${t.ink}22`,
                  }}
                >
                  {t.initials}
                </span>
              </div>
              <div className="instructor-body">
                <div className="instructor-name">{t.name}</div>
                <div style={{ fontSize: 'var(--fs-sm)', fontWeight: 700, color: t.ink }}>{t.role}</div>
                <p className="instructor-bio">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
