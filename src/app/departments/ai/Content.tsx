'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';

const DEPT = {
  fa: {
    badge: 'بخش هوش مصنوعی',
    title: 'هوش مصنوعی\nبرای نسل آینده',
    lead: 'درک مفاهیم هوش مصنوعی، کار با ابزارهای پیشرفته و آماده شدن برای دنیای فردا — به زبانی ساده و عملی.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'رزرو مشاوره رایگان',
    ctaLead: 'برای انتخاب دوره مناسب با مشاوران ما صحبت کنید.',
    ctaTitle: 'آماده‌سازی برای دنیای هوش مصنوعی',
    coursesTitle: 'دوره‌های هوش مصنوعی',
    features: [
      { ic: 'laptop',  soft: 'var(--blue-50)',  ink: 'var(--blue-600)',  title: 'مبانی هوش مصنوعی',  desc: 'آشنایی با الگوریتم‌ها، یادگیری ماشین و مدل‌های زبانی به زبان ساده.' },
      { ic: 'bulb',    soft: 'var(--amber-50)', ink: 'var(--amber-600)', title: 'ابزارهای عملی',      desc: 'کار با ChatGPT، Midjourney، Gemini و ابزارهای اتوماسیون در پروژه‌های واقعی.' },
      { ic: 'target',  soft: 'var(--mint-50)',  ink: 'var(--mint-600)', title: 'پروژه‌محور',         desc: 'ساخت پروژه‌های واقعی با هوش مصنوعی — از ایده تا محصول نهایی.' },
    ],
    courses: [
      { ic: 'laptop',   title: 'مقدمه هوش مصنوعی',      meta: ['۸ جلسه', '۱۲–۱۳ سال'],  badge: 'جدید',    soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'bulb',     title: 'هوش مصنوعی و خلاقیت',    meta: ['۱۰ جلسه', '۱۴–۱۶ سال'], badge: 'STEM',    soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'trending', title: 'اتوماسیون با هوش مصنوعی',meta: ['۱۲ جلسه', 'بزرگسال'],   badge: 'پیشرفته', soft: 'var(--mint-50)',  ink: 'var(--mint-600)' },
    ],
  },
  en: {
    badge: 'AI Department',
    title: 'Artificial Intelligence\nfor the next generation',
    lead: "Understand AI concepts, work with cutting-edge tools and prepare for tomorrow's world — practically and simply.",
    back: 'Back to home',
    cta: 'Book a free consultation',
    ctaLead: 'Talk to our advisors to find the right AI course for you.',
    ctaTitle: 'Get ready for the AI-powered world',
    coursesTitle: 'AI Department Courses',
    features: [
      { ic: 'laptop', soft: 'var(--blue-50)',  ink: 'var(--blue-600)',  title: 'AI fundamentals',    desc: 'Algorithms, machine learning and language models explained simply.' },
      { ic: 'bulb',   soft: 'var(--amber-50)', ink: 'var(--amber-600)', title: 'Practical AI tools', desc: 'Work with ChatGPT, Midjourney, Gemini and automation tools on real projects.' },
      { ic: 'target', soft: 'var(--mint-50)',  ink: 'var(--mint-600)', title: 'Project-based',      desc: 'Build real AI-powered projects from idea to finished product.' },
    ],
    courses: [
      { ic: 'laptop',   title: 'Intro to AI',       meta: ['8 sessions', 'Ages 12–13'],  badge: 'New',      soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'bulb',     title: 'AI & Creativity',   meta: ['10 sessions', 'Ages 14–16'], badge: 'STEM',     soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'trending', title: 'AI Automation',     meta: ['12 sessions', 'Adult'],      badge: 'Advanced', soft: 'var(--mint-50)',  ink: 'var(--mint-600)' },
    ],
  },
} as const;

export default function AIContent() {
  const { c } = useLang();
  const d = DEPT[c.lang as 'fa' | 'en'];

  return (
    <>
      <section className="dept-hero">
        <div className="dept-hero-inner">
          <div className="dept-badge-row">
            <Link href="/" className="dept-back"><Icon name="arrowleft" size={16} />{d.back}</Link>
            <span className="dept-badge">{d.badge}</span>
          </div>
          <h1 className="dept-title" style={{ whiteSpace: 'pre-line' }}>{d.title}</h1>
          <p className="dept-lead">{d.lead}</p>
          <div className="dept-btns">
            <Link href="/#consult" className="btn-primary">{d.cta}</Link>
          </div>
        </div>
      </section>

      <section className="dept-features">
        <div className="dept-features-inner">
          <div className="dept-features-h section-center">
            <h2 className="section-title">{d.coursesTitle}</h2>
          </div>
          <div className="dept-features-grid">
            {d.features.map(f => (
              <div key={f.title} className="dept-feature">
                <div className="dept-feature-icon" style={{ background: f.soft, color: f.ink }}>
                  <Icon name={f.ic} size={24} />
                </div>
                <div className="dept-feature-title">{f.title}</div>
                <p className="dept-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="dept-courses-inner">
          <div className="courses-grid">
            {d.courses.map(co => (
              <article key={co.title} className="course-card">
                <div className="course-header" style={{ background: co.soft }}>
                  <span className="course-icon" style={{ color: co.ink }}><Icon name={co.ic} size={28} /></span>
                  <span className="course-badge" style={{ color: co.ink, border: `1px solid ${co.ink}22` }}>{co.badge}</span>
                </div>
                <div className="course-body">
                  <h3 className="course-title">{co.title}</h3>
                  <div className="course-metas">
                    {co.meta.map(m => <span key={m} className="course-meta-item">{m}</span>)}
                  </div>
                  <Link href="/#consult" className="course-link">
                    {c.detailsLabel}<Icon name="chevron" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dept-cta">
        <div className="dept-cta-inner">
          <h2 className="dept-cta-title">{d.ctaTitle}</h2>
          <p className="dept-cta-lead">{d.ctaLead}</p>
          <Link href="/#consult" className="btn-primary">{d.cta}</Link>
        </div>
      </section>
    </>
  );
}
