'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';
import Consultation from '@/components/Consultation';

type StatusKey = 'upcoming' | 'free';

interface WsEvent {
  ic: string;
  soft: string;
  ink: string;
  badge: string;
  statusKey: StatusKey;
  title: string;
  desc: string;
  meta: string[];
  /** External registration link — when set, a primary "register" button is shown. */
  registerHref?: string;
  registerLabel?: string;
  /** In-site details page — when set, the details link points here instead of #consult. */
  detailHref?: string;
}

const WS = {
  fa: {
    badge: 'کارگاه‌های ویژه',
    title: 'رویدادها و کارگاه‌های\nتخصصی هامون',
    lead: 'فراتر از دوره‌های منظم — کارگاه‌های فشرده و کاربردی برای رشد مهارت‌های عملی در حوزه‌های فناوری، آموزش و توسعه فردی.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'ثبت‌نام در کارگاه',
    consultCta: 'رزرو مشاوره اختصاصی کارگاه‌ها',
    ctaTitle: 'در کارگاه بعدی شرکت کنید',
    ctaLead: 'کارگاه‌های هامون با ظرفیت محدود برگزار می‌شوند. همین حالا جای خود را رزرو کنید.',
    upcomingLabel: 'کارگاه‌های پیش رو',
    status: { upcoming: 'پیش رو', free: 'رایگان' } as Record<StatusKey, string>,
    events: [
      {
        ic: 'laptop', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        badge: 'فناوری',
        statusKey: 'upcoming' as StatusKey,
        title: 'طراحی وب‌سایت با هوش مصنوعی و اتوماسیون هوشمند',
        desc: 'در این کارگاه یاد می‌گیرید چگونه با کمک ابزارهای هوش مصنوعی یک وب‌سایت حرفه‌ای طراحی کنید و فرآیندهای کاری را با اتوماسیون‌های هوشمند ساده‌تر و سریع‌تر کنید. شرکت‌کنندگان با مفاهیم طراحی وب، ساخت صفحات مدرن، ابزارهای AI در توسعه وب و ایجاد گردش‌کارهای خودکار با ابزارهایی مانند n8n آشنا می‌شوند.',
        meta: ['۵ جلسه', 'آنلاین', 'سطح: مقدماتی تا متوسط'],
      },
      {
        ic: 'target', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        badge: 'هوش مصنوعی',
        statusKey: 'free' as StatusKey,
        title: 'آشنایی با دنیای هوش مصنوعی؛ از ریاضیات تا AI مدرن',
        desc: 'در این کارگاه با مفاهیم پایه و کاربردی هوش مصنوعی، یادگیری ماشین و تحلیل داده‌ها آشنا می‌شویم و بررسی می‌کنیم که چگونه تفکر ریاضی به درک بهتر فناوری‌های نوین کمک می‌کند. شرکت‌کنندگان با ایده‌های اصلی داده، مدل‌های یادگیری ماشین و عامل‌های هوشمند (AI Agents) آشنا خواهند شد.',
        meta: ['یک جلسه', 'آنلاین', 'سطح: مقدماتی'],
        registerHref: '/#consult',
        registerLabel: 'ثبت‌نام رایگان',
        detailHref: '/workshops/ai-intro',
      },
    ] as WsEvent[],
  },
  en: {
    badge: 'Special Workshops',
    title: 'Hamoon workshops\n& specialty events',
    lead: 'Beyond regular courses — intensive, hands-on workshops for practical skill growth in technology, education, and academic literacy.',
    back: 'Back to home',
    cta: 'Register for a workshop',
    consultCta: 'Book a Workshops consultation',
    ctaTitle: 'Join our next workshop',
    ctaLead: 'Hamoon workshops run with limited capacity. Reserve your spot now.',
    upcomingLabel: 'Upcoming workshops',
    status: { upcoming: 'Upcoming' } as Record<StatusKey, string>,
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
    ] as WsEvent[],
  },
} as const;

const STATUS_CLASS: Record<StatusKey, string> = {
  upcoming: 'ws-status ws-status--upcoming',
  free: 'ws-status ws-status--free',
};

function scrollToConsult() {
  document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' });
}

export default function WorkshopsContent() {
  const { c } = useLang();
  const d = WS[c.lang as 'fa' | 'en'];

  const upcoming = d.events;

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
                <button type="button" className="btn-primary" onClick={scrollToConsult}>{d.consultCta}</button>
              </div>
            </div>
            <div className="dept-hero-img-col">
              <Image
                src="/Workshops.png"
                alt="Workshops — Hamoon Academy"
                width={600} height={400}
                sizes="(max-width: 860px) 100vw, 50vw"
                className="dept-hero-series-img"
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
      <div className="ws-ctas">
        {ev.registerHref && (
          <Link href={ev.registerHref} className="ws-btn-primary">
            {ev.registerLabel ?? cta}
          </Link>
        )}
        <Link href={ev.detailHref ?? '/#consult'} className="ws-cta-link">
          {detailsLabel} <Icon name="chevron" size={15} />
        </Link>
      </div>
    </div>
  );
}
