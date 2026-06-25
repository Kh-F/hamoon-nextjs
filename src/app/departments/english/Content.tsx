'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';

const DEPT = {
  fa: {
    badge: 'بخش زبان انگلیسی',
    title: 'یادگیری زبان انگلیسی\nغوطه‌ور، تعاملی و اختصاصی',
    lead: 'دوره‌های انگلیسی غوطه‌ور، کارگاه‌های زبانی تعاملی و برنامه‌های مکالمه سفارشی — از اولین جلسه با اعتماد به نفس صحبت کنید.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'رزرو مشاوره رایگان',
    ctaLead: 'برای انتخاب بهترین دوره با مشاوران ما صحبت کنید.',
    ctaTitle: 'شروع سفر یادگیری زبان انگلیسی',
    featuresTitle: 'رویکرد آموزشی ما',
    coursesTitle: 'دوره‌های زبان انگلیسی',
    voiceTitle: 'تمرین مکالمه با مشاور هوشمند',
    voiceDesc: 'دستیار صوتی هوش مصنوعی هامون آماده تمرین مکالمه با شماست — در هر زمان، بدون قضاوت. دکمه نارنجی را در گوشه صفحه فشار دهید و صحبت را شروع کنید.',
    features: [
      {
        ic: 'chat', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        title: 'یادگیری غوطه‌ور',
        desc: 'محیطی که از همان جلسه اول، دانش‌آموز را در بستر زبان انگلیسی غرق می‌کند — مانند یادگیری زبان مادری.',
      },
      {
        ic: 'users', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        title: 'کارگاه‌های تعاملی',
        desc: 'گروه‌های کوچک، نقش‌آفرینی، گفتگوی واقعی و بازخورد لحظه‌ای — یادگیری که هرگز فراموش نمی‌شود.',
      },
      {
        ic: 'pen', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        title: 'برنامه مکالمه سفارشی',
        desc: 'برنامه‌ای که بر اساس سطح، هدف و علاقه هر زبان‌آموز طراحی می‌شود — نه یک نسخه برای همه.',
      },
    ],
    courses: [
      { ic: 'chat',       title: 'مکالمه نوجوانان',    desc: 'کلاس‌های تعاملی با تمرکز بر گفتگوی روزمره، تلفظ دقیق و اعتماد به نفس ارتباطی.',  meta: ['۱۲ جلسه', '۱۴–۱۶ سال'], badge: 'پرطرفدار', soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'graduation', title: 'آمادگی آیلتس',        desc: 'آموزش هدفمند مهارت‌های چهارگانه با تمرکز بر استراتژی‌های آزمون و بازخورد دقیق.',  meta: ['۲۴ جلسه', 'بزرگسال'],   badge: 'جدید',     soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'users',      title: 'انگلیسی بزرگسالان',  desc: 'مکالمه حرفه‌ای، نگارش و درک مطلب برای بزرگسالانی که به انگلیسی در کار نیاز دارند.', meta: ['۱۶ جلسه', 'بزرگسال'],   badge: 'آنلاین',   soft: 'var(--mint-50)', ink: 'var(--mint-600)' },
    ],
  },
  en: {
    badge: 'English Department',
    title: 'Immersive English,\ninteractive workshops & custom conversation',
    lead: 'Immersive English courses, interactive language workshops, and custom conversation programs — speak with confidence from your very first session.',
    back: 'Back to home',
    cta: 'Book a free consultation',
    ctaLead: 'Talk to our advisors to find the right English course for you.',
    ctaTitle: 'Begin your English language journey',
    featuresTitle: 'Our teaching approach',
    coursesTitle: 'English Department Courses',
    voiceTitle: 'Practise speaking with the AI assistant',
    voiceDesc: "Hamoon's AI voice assistant is ready to practise English conversation with you — any time, judgment-free. Press the orange button in the corner of the screen and start speaking.",
    features: [
      {
        ic: 'chat', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        title: 'Immersive learning',
        desc: 'An environment that immerses students in English from session one — mirroring how a first language is naturally acquired.',
      },
      {
        ic: 'users', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        title: 'Interactive workshops',
        desc: 'Small groups, role-play, real conversation, and instant feedback — learning that sticks because it feels real.',
      },
      {
        ic: 'pen', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        title: 'Custom conversation programs',
        desc: 'A program designed around each learner\'s level, goals, and interests — not a one-size-fits-all syllabus.',
      },
    ],
    courses: [
      { ic: 'chat',       title: 'Teen Conversation',  desc: 'Interactive classes focused on everyday conversation, accurate pronunciation, and communicative confidence.',  meta: ['12 sessions', 'Ages 14–16'], badge: 'Popular', soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'graduation', title: 'IELTS Preparation',  desc: 'Goal-oriented training across all four skills, focused on exam strategies and detailed feedback.',              meta: ['24 sessions', 'Adult'],      badge: 'New',     soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'users',      title: 'Adult English',      desc: 'Professional conversation, writing, and reading comprehension for adults who need English at work.',           meta: ['16 sessions', 'Adult'],      badge: 'Online',  soft: 'var(--mint-50)', ink: 'var(--mint-600)' },
    ],
  },
} as const;

export default function EnglishContent() {
  const { c } = useLang();
  const d = DEPT[c.lang as 'fa' | 'en'];

  return (
    <>
      {/* ── Hero ── */}
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

      {/* ── Teaching approach ── */}
      <section className="dept-features">
        <div className="dept-features-inner">
          <div className="dept-features-h section-center">
            <h2 className="section-title">{d.featuresTitle}</h2>
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

      {/* ── Courses ── */}
      <section>
        <div className="dept-courses-inner">
          <div className="section-center" style={{ marginBottom: 'var(--space-10)' }}>
            <h2 className="section-title">{d.coursesTitle}</h2>
          </div>
          <div className="courses-grid">
            {d.courses.map(co => (
              <article key={co.title} className="course-card">
                <div className="course-header" style={{ background: co.soft }}>
                  <span className="course-icon" style={{ color: co.ink }}><Icon name={co.ic} size={28} /></span>
                  <span className="course-badge" style={{ color: co.ink, border: `1px solid ${co.ink}22` }}>{co.badge}</span>
                </div>
                <div className="course-body">
                  <h3 className="course-title">{co.title}</h3>
                  <p className="course-desc">{co.desc}</p>
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

      {/* ── Voice assistant callout ── */}
      <div className="voice-callout-wrap">
        <div className="voice-callout">
          <div className="voice-callout-icon">
            <Icon name="mic" size={26} />
          </div>
          <div className="voice-callout-body">
            <h3 className="voice-callout-title">{d.voiceTitle}</h3>
            <p className="voice-callout-desc">{d.voiceDesc}</p>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
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
