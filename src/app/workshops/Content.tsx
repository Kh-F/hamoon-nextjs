'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';
import Consultation from '@/components/Consultation';

type StatusKey = 'upcoming' | 'past' | 'recurring';

interface WsEvent {
  ic: string;
  soft: string;
  ink: string;
  badge: string;
  statusKey: StatusKey;
  title: string;
  desc: string;
  meta: string[];
}

const WS = {
  fa: {
    badge: 'کارگاه‌های ویژه',
    title: 'رویدادها و کارگاه‌های\nتخصصی هامون',
    lead: 'فراتر از دوره‌های منظم — کارگاه‌های فشرده و کاربردی برای رشد مهارت‌های عملی در حوزه‌های فناوری، آموزش و توسعه فردی.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'ثبت‌نام در کارگاه',
    ctaTitle: 'در کارگاه بعدی شرکت کنید',
    ctaLead: 'کارگاه‌های هامون با ظرفیت محدود برگزار می‌شوند. همین حالا جای خود را رزرو کنید.',
    upcomingLabel: 'کارگاه‌های پیش رو',
    pastLabel: 'برگزارشده / دوره‌ای',
    status: { upcoming: 'پیش رو', past: 'برگزارشده', recurring: 'دوره‌ای' } as Record<StatusKey, string>,
    events: [
      {
        ic: 'laptop', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        badge: 'فناوری',
        statusKey: 'upcoming' as StatusKey,
        title: 'طراحی وب و اتوماسیون گردش کار',
        desc: 'از HTML و CSS پایه تا اتوماسیون گردش کار با ابزارهای مدرن — یک کارگاه فشرده که شما را از ایده تا محصول واقعی می‌برد.',
        meta: ['۲ روزه', 'آنلاین و حضوری'],
      },
      {
        ic: 'graduation', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        badge: 'آموزش',
        statusKey: 'upcoming' as StatusKey,
        title: 'آموزش مبتنی بر AI: برنامه‌های تربیت مربی',
        desc: 'برای معلمان، مربیان و علاقه‌مندان به تدریس — چگونه از ابزارهای هوش مصنوعی برای شخصی‌سازی تجربه یادگیری و ارتقای کیفیت تدریس استفاده کنیم.',
        meta: ['۳ روزه', 'حضوری'],
      },
      {
        ic: 'book', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        badge: 'سواد علمی',
        statusKey: 'recurring' as StatusKey,
        title: 'معرفی کتاب و سواد علمی',
        desc: 'انتخاب، معرفی و بررسی کتاب‌های برتر حوزه آموزش، روان‌شناسی شناختی، ریاضیات و هوش مصنوعی در قالب گفت‌وگوی گروهی.',
        meta: ['ماهانه', 'آنلاین'],
      },
    ] as WsEvent[],
  },
  en: {
    badge: 'Special Workshops',
    title: 'Hamoon workshops\n& specialty events',
    lead: 'Beyond regular courses — intensive, hands-on workshops for practical skill growth in technology, education, and academic literacy.',
    back: 'Back to home',
    cta: 'Register for a workshop',
    ctaTitle: 'Join our next workshop',
    ctaLead: 'Hamoon workshops run with limited capacity. Reserve your spot now.',
    upcomingLabel: 'Upcoming workshops',
    pastLabel: 'Past / recurring',
    status: { upcoming: 'Upcoming', past: 'Past', recurring: 'Recurring' } as Record<StatusKey, string>,
    events: [
      {
        ic: 'laptop', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        badge: 'Technology',
        statusKey: 'upcoming' as StatusKey,
        title: 'Web Design & Workflow Automation',
        desc: 'From basic HTML/CSS to workflow automation with modern tools — an intensive workshop that takes you from idea to a real, deployed product.',
        meta: ['2 days', 'Online & in-person'],
      },
      {
        ic: 'graduation', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        badge: 'Education',
        statusKey: 'upcoming' as StatusKey,
        title: 'AI-Driven Education: Teacher Training Programs',
        desc: 'For educators, mentors and teaching enthusiasts — how to use AI tools to personalise the learning experience and elevate teaching quality.',
        meta: ['3 days', 'In-person'],
      },
      {
        ic: 'book', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        badge: 'Academic Literacy',
        statusKey: 'recurring' as StatusKey,
        title: 'Book Introductions & Academic Literacy',
        desc: 'Selecting, presenting and critically discussing leading books in education, cognitive psychology, mathematics and AI — in a group dialogue format.',
        meta: ['Monthly', 'Online'],
      },
    ] as WsEvent[],
  },
} as const;

const STATUS_CLASS: Record<StatusKey, string> = {
  upcoming: 'ws-status ws-status--upcoming',
  past:     'ws-status ws-status--past',
  recurring:'ws-status ws-status--recurring',
};

export default function WorkshopsContent() {
  const { c } = useLang();
  const d = WS[c.lang as 'fa' | 'en'];

  const upcoming  = d.events.filter(e => e.statusKey === 'upcoming');
  const recurring = d.events.filter(e => e.statusKey !== 'upcoming');

  return (
    <>
      {/* ── Hero ── */}
      <section className="dept-hero">
        <div className="dept-hero-inner">
          <div className="dept-hero-grid">
            <div>
              <div className="dept-badge-row">
                <Link href="/" className="dept-back"><Icon name="arrowleft" size={16} />{d.back}</Link>
                <span className="dept-badge">{d.badge}</span>
              </div>
              <h1 className="dept-title" style={{ whiteSpace: 'pre-line' }}>{d.title}</h1>
              <p className="dept-lead">{d.lead}</p>
              <div className="dept-btns">
                <Link href="#consult" className="btn-primary">{d.cta}</Link>
              </div>
            </div>
            <div className="dept-hero-img-col">
              <Image
                src="/Workshop.png"
                alt="Workshops — Hamoon Academy"
                width={600} height={280}
                sizes="(max-width: 860px) 100vw, 50vw"
                className="dept-hero-series-img"
                style={{ height: '280px', objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Workshop grid ── */}
      <section className="dept-features">
        <div className="dept-features-inner">

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <>
              <h2 className="ws-section-h">{d.upcomingLabel}</h2>
              <div className="ws-grid">
                {upcoming.map(ev => (
                  <EventCard key={ev.title} ev={ev} statusLabel={d.status[ev.statusKey]} cta={d.cta} detailsLabel={c.detailsLabel} />
                ))}
              </div>
            </>
          )}

          {/* Recurring / past */}
          {recurring.length > 0 && (
            <>
              <hr className="ws-divider" />
              <h2 className="ws-section-h">{d.pastLabel}</h2>
              <div className="ws-grid">
                {recurring.map(ev => (
                  <EventCard key={ev.title} ev={ev} statusLabel={d.status[ev.statusKey]} cta={d.cta} detailsLabel={c.detailsLabel} />
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* ── Consultation form ── */}
      <Consultation department="Workshops" />
    </>
  );
}

function EventCard({ ev, statusLabel, cta, detailsLabel }: {
  ev: WsEvent;
  statusLabel: string;
  cta: string;
  detailsLabel: string;
}) {
  return (
    <div className="ws-card">
      <div className="ws-card-top">
        <div className="dept-feature-icon" style={{ background: ev.soft, color: ev.ink, margin: 0 }}>
          <Icon name={ev.ic} size={24} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
          <span className="ws-badge" style={{ background: ev.soft, color: ev.ink }}>{ev.badge}</span>
          <span className={STATUS_CLASS[ev.statusKey]}>
            <span className="ws-status-dot" />
            {statusLabel}
          </span>
        </div>
      </div>
      <h3 className="ws-title">{ev.title}</h3>
      <p className="ws-desc">{ev.desc}</p>
      <div className="ws-meta">
        {ev.meta.map(m => <span key={m} className="course-meta-item">{m}</span>)}
      </div>
      <Link href="/#consult" className="ws-cta-link">
        {detailsLabel} <Icon name="chevron" size={15} />
      </Link>
    </div>
  );
}
