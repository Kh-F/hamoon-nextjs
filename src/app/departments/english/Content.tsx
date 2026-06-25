'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';

const DEPT = {
  fa: {
    badge: 'بخش زبان انگلیسی',
    title: 'یادگیری زبان انگلیسی\nبا رویکرد ارتباط‌محور',
    lead: 'از مکالمه روزمره تا آمادگی برای آزمون‌های بین‌المللی — برنامه‌هایی منعطف برای نوجوانان و بزرگسالان.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'رزرو مشاوره رایگان',
    ctaLead: 'برای انتخاب بهترین دوره با مشاوران ما صحبت کنید.',
    ctaTitle: 'شروع یادگیری زبان انگلیسی',
    coursesTitle: 'دوره‌های زبان انگلیسی',
    features: [
      { ic: 'chat',       soft: 'var(--blue-50)',  ink: 'var(--blue-600)',  title: 'تدریس ارتباط‌محور',  desc: 'تمرین گفت‌وگوی واقعی از همان جلسه اول، نه حفظ قواعد.' },
      { ic: 'pen',        soft: 'var(--amber-50)', ink: 'var(--amber-600)', title: 'بازخورد اختصاصی',   desc: 'اصلاح تلفظ و ساختار جمله برای هر زبان‌آموز به‌صورت فردی.' },
      { ic: 'graduation', soft: 'var(--mint-50)',  ink: 'var(--mint-600)', title: 'آمادگی برای آزمون', desc: 'آیلتس، TOEFL و گواهینامه‌های بین‌المللی با برنامه هدفمند.' },
    ],
    courses: [
      { ic: 'chat',       title: 'مکالمه نوجوانان',   meta: ['۱۲ جلسه', '۱۴–۱۶ سال'], badge: 'پرطرفدار', soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'graduation', title: 'آمادگی آیلتس',       meta: ['۲۴ جلسه', 'بزرگسال'],   badge: 'جدید',     soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'users',      title: 'انگلیسی بزرگسالان', meta: ['۱۶ جلسه', 'بزرگسال'],   badge: 'آنلاین',   soft: 'var(--mint-50)', ink: 'var(--mint-600)' },
    ],
  },
  en: {
    badge: 'English Department',
    title: 'Learn English\nthe communicative way',
    lead: 'From everyday conversation to international exam prep — flexible programs for teens and adults.',
    back: 'Back to home',
    cta: 'Book a free consultation',
    ctaLead: 'Talk to our advisors to find the right course for you.',
    ctaTitle: 'Start your English journey',
    coursesTitle: 'English Department Courses',
    features: [
      { ic: 'chat',       soft: 'var(--blue-50)',  ink: 'var(--blue-600)',  title: 'Communicative teaching', desc: 'Real conversation practice from session one — not grammar drills.' },
      { ic: 'pen',        soft: 'var(--amber-50)', ink: 'var(--amber-600)', title: 'Dedicated feedback',     desc: 'Individual pronunciation and structure correction every session.' },
      { ic: 'graduation', soft: 'var(--mint-50)',  ink: 'var(--mint-600)', title: 'Exam preparation',      desc: 'IELTS, TOEFL and international certificates with a focused plan.' },
    ],
    courses: [
      { ic: 'chat',       title: 'Teen Conversation', meta: ['12 sessions', 'Ages 14–16'], badge: 'Popular', soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'graduation', title: 'IELTS Prep',        meta: ['24 sessions', 'Adult'],      badge: 'New',     soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'users',      title: 'Adult English',     meta: ['16 sessions', 'Adult'],      badge: 'Online',  soft: 'var(--mint-50)', ink: 'var(--mint-600)' },
    ],
  },
} as const;

export default function EnglishContent() {
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
