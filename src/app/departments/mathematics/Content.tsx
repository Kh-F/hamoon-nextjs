'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';

const DEPT = {
  fa: {
    badge: 'بخش ریاضی',
    title: 'یادگیری مفهومی ریاضی\nبا چالش‌های خلاقانه',
    lead: 'نه حفظ فرمول، بلکه درک عمیق — رویکردی که ریاضی را از کابوس به علاقه تبدیل می‌کند.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'رزرو مشاوره رایگان',
    ctaLead: 'برای انتخاب دوره مناسب با مشاوران ما صحبت کنید.',
    ctaTitle: 'شروع سفر ریاضی فرزندتان',
    coursesTitle: 'دوره‌های ریاضی',
    features: [
      { ic: 'bulb',       soft: 'var(--amber-50)', ink: 'var(--amber-600)', title: 'یادگیری مفهومی',  desc: 'درک چرایی قبل از چگونگی — پایه‌ای محکم برای ریاضیات پیشرفته.' },
      { ic: 'users',      soft: 'var(--blue-50)',  ink: 'var(--blue-600)',  title: 'چالش‌های گروهی', desc: 'حل مسئله در قالب تیمی — تقویت تفکر نقادانه و همکاری.' },
      { ic: 'calculator', soft: 'var(--mint-50)',  ink: 'var(--mint-600)', title: 'آمادگی کنکور',   desc: 'پوشش کامل مباحث با تمرکز بر مسائل چالش‌برانگیز آزمون.' },
    ],
    courses: [
      { ic: 'calculator', title: 'ریاضی کودکان',   meta: ['۸ جلسه', '۱۰–۱۱ سال'],  badge: 'پرطرفدار', soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'bulb',       title: 'ریاضی نوجوانان', meta: ['۱۲ جلسه', '۱۲–۱۳ سال'], badge: 'جدید',     soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'trending',   title: 'ریاضی پیشرفته',  meta: ['۱۶ جلسه', '۱۴–۱۶ سال'], badge: 'STEM',    soft: 'var(--mint-50)',  ink: 'var(--mint-600)' },
    ],
  },
  en: {
    badge: 'Mathematics Department',
    title: 'Conceptual math learning\nthrough creative challenges',
    lead: 'Not formula memorization, but deep understanding — an approach that turns math from fear into fascination.',
    back: 'Back to home',
    cta: 'Book a free consultation',
    ctaLead: 'Talk to our advisors to find the right course for your child.',
    ctaTitle: "Start your child's math journey",
    coursesTitle: 'Mathematics Department Courses',
    features: [
      { ic: 'bulb',       soft: 'var(--amber-50)', ink: 'var(--amber-600)', title: 'Conceptual learning',  desc: 'Understand the why before the how — building a strong foundation.' },
      { ic: 'users',      soft: 'var(--blue-50)',  ink: 'var(--blue-600)',  title: 'Group challenges',    desc: 'Team problem-solving to build critical thinking and collaboration.' },
      { ic: 'calculator', soft: 'var(--mint-50)',  ink: 'var(--mint-600)', title: 'Exam preparation',   desc: 'Full curriculum coverage with focus on challenging exam questions.' },
    ],
    courses: [
      { ic: 'calculator', title: 'Math for Kids',    meta: ['8 sessions', 'Ages 10–11'],  badge: 'Popular', soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'bulb',       title: 'Teen Mathematics', meta: ['12 sessions', 'Ages 12–13'], badge: 'New',     soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'trending',   title: 'Advanced Math',    meta: ['16 sessions', 'Ages 14–16'], badge: 'STEM',   soft: 'var(--mint-50)',  ink: 'var(--mint-600)' },
    ],
  },
} as const;

export default function MathContent() {
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
