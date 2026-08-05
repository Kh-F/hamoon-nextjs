'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';
import DeptInstructor from '@/components/DeptInstructor';
import Consultation from '@/components/Consultation';

const REGISTER_HREF = '/#consult';

const WORKSHOP = {
  fa: {
    back: 'بازگشت به کارگاه‌ها',
    category: 'هوش مصنوعی',
    status: 'رایگان',
    title: 'آشنایی با دنیای هوش مصنوعی؛ از ریاضیات تا AI مدرن',
    lead: 'این کارگاه برای علاقه‌مندان به فناوری طراحی شده است تا با مسیر ارتباط ریاضیات، تحلیل داده، یادگیری ماشین و هوش مصنوعی آشنا شوند.',
    meta: [
      { label: 'فرمت', value: 'آنلاین' },
      { label: 'سطح', value: 'مقدماتی' },
      { label: 'مدت', value: 'یک جلسه' },
    ],
    registerCta: 'ثبت‌نام رایگان',
    topicsTitle: 'سرفصل‌های این کارگاه',
    topics: [
      'ارتباط ریاضیات با هوش مصنوعی',
      'آشنایی با Data Analytics و نقش داده‌ها در تصمیم‌گیری',
      'مفاهیم پایه Machine Learning',
      'آشنایی با AI Agents و کاربردهای آن‌ها',
      'مسیر یادگیری برای ورود به حوزه هوش مصنوعی',
    ],
    presenter: {
      sectionLabel: 'مدرس کارگاه',
      name: 'دکتر خدیجه فتحعلی‌خانی',
      role: 'متخصص ریاضیات و هوش مصنوعی',
      bio: 'دکترای ریاضیات با تخصص در ترکیبیات و نظریه گراف؛ اکنون در حوزه هوش مصنوعی کاربردی و مهندسی زیرساخت DevOps فعالیت می‌کند و سابقه تدریس گسترده‌ای در دانشگاه‌های مختلف دارد.',
      creds: ['دکترای ریاضیات', 'متخصص هوش مصنوعی'],
      skills: ['یادگیری ماشین', 'تحلیل داده', 'AI Agents'],
      linkedin: 'https://www.linkedin.com/in/khadijeh-fathalikhani-405b0627',
      linkedinLabel: 'مشاهده لینکدین',
      initials: 'خ ف', bg: 'var(--amber-100)', ink: 'var(--amber-700)',
    },
  },
  en: {
    back: 'Back to workshops',
    category: 'Artificial Intelligence',
    status: 'Free',
    title: 'Introduction to the World of AI: From Mathematics to Modern AI',
    lead: 'Designed for anyone curious about technology — discover how mathematics, data analytics, machine learning, and AI connect.',
    meta: [
      { label: 'Format', value: 'Online' },
      { label: 'Level', value: 'Beginner' },
      { label: 'Duration', value: 'One session' },
    ],
    registerCta: 'Register for Free',
    topicsTitle: 'What this workshop covers',
    topics: [
      'How mathematics connects to artificial intelligence',
      'Introduction to Data Analytics and the role of data in decision-making',
      'Core concepts of Machine Learning',
      'Introduction to AI Agents and their applications',
      'A learning path for entering the field of AI',
    ],
    presenter: {
      sectionLabel: 'Workshop Instructor',
      name: 'Dr. Khadijeh Fathalikhani',
      role: 'Mathematics & AI Specialist',
      bio: 'Ph.D. in Mathematics specializing in Combinatorics and Graph Theory, now active in Applied AI and DevOps Infrastructure Engineering, with extensive university-level teaching experience.',
      creds: ['Ph.D. in Mathematics', 'AI Specialist'],
      skills: ['Machine Learning', 'Data Analytics', 'AI Agents'],
      linkedin: 'https://www.linkedin.com/in/khadijeh-fathalikhani-405b0627',
      linkedinLabel: 'View LinkedIn',
      initials: 'KF', bg: 'var(--amber-100)', ink: 'var(--amber-700)',
    },
  },
} as const;

export default function AIIntroWorkshopContent() {
  const { lang } = useLang();
  const d = WORKSHOP[lang];

  return (
    <>
      {/* ── Hero ── */}
      <section className="dept-hero">
        <div className="dept-hero-inner">
          <div className="dept-hero-grid">
            <div>
              <div className="dept-badge-row">
                <Link href="/workshops" className="dept-back"><Icon name="arrowleft" size={16} />{d.back}</Link>
                <span className="dept-badge">{d.category}</span>
                <span className="ws-status ws-status--free"><span className="ws-status-dot" />{d.status}</span>
              </div>
              <h1 className="dept-title">{d.title}</h1>
              <p className="dept-lead">{d.lead}</p>
              <div className="ws-meta" style={{ marginBottom: 'var(--space-8)' }}>
                {d.meta.map(m => (
                  <span key={m.label} className="course-meta-item">{m.label}: {m.value}</span>
                ))}
              </div>
              <div className="dept-btns">
                <Link href={REGISTER_HREF} className="btn-primary">
                  {d.registerCta}
                </Link>
              </div>
            </div>
            <div className="dept-hero-img-col">
              <Image
                src="/AI.png"
                alt={d.title}
                width={600} height={400}
                sizes="(max-width: 860px) 100vw, 50vw"
                className="dept-hero-series-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Topics covered ── */}
      <section className="dept-features">
        <div className="dept-features-inner">
          <div className="dept-features-h section-center">
            <h2 className="section-title">{d.topicsTitle}</h2>
          </div>
          <ul className="cdp-bullets" style={{ maxWidth: '640px', marginInline: 'auto' }}>
            {d.topics.map(t => (
              <li key={t} className="cdp-bullet">
                <span className="cdp-bullet-dot" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Presenter ── */}
      <DeptInstructor
        sectionLabel={d.presenter.sectionLabel}
        name={d.presenter.name}
        role={d.presenter.role}
        bio={d.presenter.bio}
        creds={d.presenter.creds}
        skills={d.presenter.skills}
        linkedin={d.presenter.linkedin}
        linkedinLabel={d.presenter.linkedinLabel}
        initials={d.presenter.initials}
        bg={d.presenter.bg}
        ink={d.presenter.ink}
      />

      {/* ── Consultation / registration form ── */}
      <Consultation department="AI Intro Workshop" />
    </>
  );
}
