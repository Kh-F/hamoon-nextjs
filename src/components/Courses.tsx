'use client';

import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function Courses() {
  const { c } = useLang();
  const { courses, coursesTitle, coursesLead, detailsLabel } = c;

  return (
    <section id="courses" className="section-card-bg">
      <div className="section">
        <div className="section-header">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', maxWidth: '54ch' }}>
            <h2 className="section-title">{coursesTitle}</h2>
            <p className="section-lead">{coursesLead}</p>
          </div>
        </div>

        <div className="courses-grid">
          {courses.map(co => (
            <article key={co.title} className="course-card">
              <div className="course-header" style={{ background: co.soft }}>
                <span className="course-icon" style={{ color: co.ink }}>
                  <Icon name={co.ic} size={28} />
                </span>
                <span
                  className="course-badge"
                  style={{ color: co.ink, border: `1px solid ${co.ink}22` }}
                >
                  {co.badge}
                </span>
              </div>

              <div className="course-body">
                <h3 className="course-title">{co.title}</h3>
                <p className="course-desc">{co.desc}</p>

                <div className="course-metas">
                  {co.meta.map(m => (
                    <span key={m} className="course-meta-item">{m}</span>
                  ))}
                </div>

                <a href="#consult" className="course-link">
                  {detailsLabel}
                  <Icon name="chevron" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
