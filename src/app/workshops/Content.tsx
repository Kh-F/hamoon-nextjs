'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';

const WS = {
  fa: {
    badge: 'کارگاه‌های ویژه',
    title: 'رویدادها و کارگاه‌های\nتخصصی هامون',
    lead: 'فراتر از دوره‌های منظم — کارگاه‌های فشرده، تخصصی و کاربردی برای رشد مهارت‌های عملی.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'ثبت‌نام در کارگاه',
    ctaTitle: 'در کارگاه بعدی شرکت کنید',
    ctaLead: 'کارگاه‌های هامون با ظرفیت محدود برگزار می‌شوند. همین حالا جای خود را رزرو کنید.',
    upcomingTitle: 'کارگاه‌های آینده',
    upcomingNote: 'برای اطلاع از تاریخ دقیق و ثبت‌نام کارگاه‌های آینده، با ما تماس بگیرید.',
    events: [
      {
        ic: 'laptop', color: 'var(--blue-50)', ink: 'var(--blue-600)',
        badge: 'طراحی وب',
        title: 'کارگاه طراحی وب و اتوماسیون',
        desc: 'از ایده تا وب‌سایت واقعی — آموزش HTML، CSS، JavaScript پایه و ابزارهای اتوماسیون مدرن در یک کارگاه فشرده.',
        meta: ['۲ روزه', 'آنلاین و حضوری'],
      },
      {
        ic: 'graduation', color: 'var(--amber-50)', ink: 'var(--amber-600)',
        badge: 'تربیت مربی',
        title: 'کارگاه تربیت مربی آموزشی',
        desc: 'برای معلمان، والدین و علاقه‌مندان به تدریس — روش‌های نوین آموزش، روان‌شناسی کودک و تکنیک‌های کلاس مدرن.',
        meta: ['۳ روزه', 'حضوری'],
      },
      {
        ic: 'book', color: 'var(--mint-50)', ink: 'var(--mint-600)',
        badge: 'کتاب‌خوانی',
        title: 'جلسات معرفی و بررسی کتاب',
        desc: 'انتخاب، معرفی و نقد کتاب‌های برتر حوزه آموزش، روان‌شناسی کودک و توسعه فردی در قالب گفت‌وگوی گروهی.',
        meta: ['ماهانه', 'آنلاین'],
      },
      {
        ic: 'bulb', color: 'var(--blue-50)', ink: 'var(--blue-700)',
        badge: 'کارگاه خلاقیت',
        title: 'کارگاه خلاقیت و حل مسئله',
        desc: 'تقویت تفکر خلاقانه و مهارت‌های حل مسئله برای نوجوانان با استفاده از روش‌های Design Thinking و بازی‌های آموزشی.',
        meta: ['۱ روزه', 'حضوری'],
      },
    ],
  },
  en: {
    badge: 'Special Workshops',
    title: 'Hamoon specialty\nworkshops & events',
    lead: 'Beyond regular courses — intensive, specialized, hands-on workshops for practical skill growth.',
    back: 'Back to home',
    cta: 'Register for a workshop',
    ctaTitle: 'Join our next workshop',
    ctaLead: 'Hamoon workshops run with limited capacity. Reserve your spot now.',
    upcomingTitle: 'Upcoming Workshops',
    upcomingNote: 'Contact us for exact dates and registration for upcoming workshops.',
    events: [
      {
        ic: 'laptop', color: 'var(--blue-50)', ink: 'var(--blue-600)',
        badge: 'Web Design',
        title: 'Web Design & Automation Workshop',
        desc: 'From idea to real website — HTML, CSS, basic JavaScript and modern automation tools in one intensive workshop.',
        meta: ['2 days', 'Online & in-person'],
      },
      {
        ic: 'graduation', color: 'var(--amber-50)', ink: 'var(--amber-600)',
        badge: 'Teacher Training',
        title: 'Educational Mentor Training',
        desc: 'For teachers, parents and teaching enthusiasts — modern pedagogy, child psychology and contemporary classroom techniques.',
        meta: ['3 days', 'In-person'],
      },
      {
        ic: 'book', color: 'var(--mint-50)', ink: 'var(--mint-600)',
        badge: 'Book Club',
        title: 'Book Introduction & Review Sessions',
        desc: 'Selecting, presenting and critically discussing top books in education, child psychology and personal development.',
        meta: ['Monthly', 'Online'],
      },
      {
        ic: 'bulb', color: 'var(--blue-50)', ink: 'var(--blue-700)',
        badge: 'Creativity',
        title: 'Creativity & Problem-Solving Workshop',
        desc: 'Strengthening creative thinking and problem-solving for teens using Design Thinking methods and educational games.',
        meta: ['1 day', 'In-person'],
      },
    ],
  },
} as const;

export default function WorkshopsContent() {
  const { c } = useLang();
  const d = WS[c.lang as 'fa' | 'en'];

  return (
    <>
      {/* Hero */}
      <section className="dept-hero">
        <div className="dept-hero-inner">
          <div className="dept-badge-row">
            <Link href="/" className="dept-back">
              <Icon name="arrowleft" size={16} />
              {d.back}
            </Link>
            <span className="dept-badge">{d.badge}</span>
          </div>
          <h1 className="dept-title" style={{ whiteSpace: 'pre-line' }}>{d.title}</h1>
          <p className="dept-lead">{d.lead}</p>
          <div className="dept-btns">
            <Link href="/#consult" className="btn-primary">{d.cta}</Link>
          </div>
        </div>
      </section>

      {/* Workshop cards */}
      <section className="dept-features">
        <div className="dept-features-inner">
          <div className="dept-features-h section-center">
            <h2 className="section-title">{d.upcomingTitle}</h2>
          </div>
          <div className="ws-grid">
            {d.events.map(ev => (
              <div key={ev.title} className="ws-card">
                <div className="ws-card-top">
                  <div className="dept-feature-icon" style={{ background: ev.color, color: ev.ink }}>
                    <Icon name={ev.ic} size={26} />
                  </div>
                  <span className="ws-badge" style={{ background: ev.color, color: ev.ink }}>{ev.badge}</span>
                </div>
                <h3 className="ws-title">{ev.title}</h3>
                <p className="ws-desc">{ev.desc}</p>
                <div className="ws-meta">
                  {ev.meta.map(m => <span key={m} className="course-meta-item">{m}</span>)}
                </div>
                <Link href="/#consult" className="ws-cta-link">{d.cta}</Link>
              </div>
            ))}
          </div>
          <p className="ws-note">{d.upcomingNote}</p>
        </div>
      </section>

      {/* CTA */}
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
