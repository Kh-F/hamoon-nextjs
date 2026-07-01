'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';

const DEPT = {
  fa: {
    badge: 'بخش هوش مصنوعی',
    title: 'سواد دیجیتال آینده\nهوش مصنوعی عاملی و تحلیل داده',
    lead: 'درک عمیق مفاهیم هوش مصنوعی، تحلیل داده، و معماری AI عاملی — با برنامه درسی سفارشی که دقت ریاضی را با استقرار عملی در کنار هم قرار می‌دهد.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'رزرو مشاوره رایگان',
    ctaLead: 'برای انتخاب بهترین مسیر یادگیری با مشاوران ما صحبت کنید.',
    ctaTitle: 'آماده‌سازی برای دنیای هوش مصنوعی',
    featuresTitle: 'سه محور اصلی برنامه',
    coursesTitle: 'دوره‌های بخش هوش مصنوعی',
    features: [
      {
        ic: 'graduation', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        title: 'سواد دیجیتال آینده',
        desc: 'آشنایی با مفاهیم پایه هوش مصنوعی، یادگیری ماشین و مدل‌های زبانی بزرگ — به زبانی ساده و کاربردی برای نسل آینده.',
      },
      {
        ic: 'trending', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        title: 'تحلیل داده',
        desc: 'خواندن، تفسیر و بصری‌سازی داده — مهارت‌های اساسی برای تصمیم‌گیری هوشمند در دنیای داده‌محور.',
      },
      {
        ic: 'target', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        title: 'معماری AI عاملی',
        desc: 'طراحی و ساخت سیستم‌های AI عاملی که به‌صورت خودکار اهداف را پردازش و اجرا می‌کنند — رویکرد عملی و پروژه‌محور.',
      },
    ],
    curriculum: {
      badge: 'برنامه درسی سفارشی',
      title: 'تدریس با دقت ریاضی، استقرار با فناوری روز',
      body: 'برنامه درسی هوش مصنوعی هامون توسط دکتر خدیجه فتحعلی‌خانی — ریاضیدان و متخصص AI — طراحی و تألیف شده است. این برنامه با ترکیب بهترین مفاهیم جهانی از جمله Stempedia و زیرساخت‌های پیشرفته اتوماسیون AI، دقت ریاضی را با مهارت‌های استقرار عملی در هم می‌آمیزد.',
    },
    courses: [
      { ic: 'laptop',   title: 'مقدمه هوش مصنوعی',      desc: 'مفاهیم پایه AI، یادگیری ماشین و کاربرد ابزارهای هوشمند در پروژه‌های واقعی.', meta: ['۸ جلسه', '۱۲–۱۳ سال'], badge: 'جدید',    soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'bulb',     title: 'هوش مصنوعی و خلاقیت',   desc: 'ابزارهای تولید محتوا، طراحی تصویر و موسیقی با AI — برای نوجوانان خلاق.', meta: ['۱۰ جلسه', '۱۴–۱۶ سال'], badge: 'STEM',    soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'trending', title: 'اتوماسیون با هوش مصنوعی',desc: 'طراحی پایپلاین‌های اتوماسیون با n8n و Dify — از صفر تا استقرار در محیط تولید.', meta: ['۱۲ جلسه', 'بزرگسال'],   badge: 'پیشرفته', soft: 'var(--mint-50)',  ink: 'var(--mint-600)' },
    ],
  },
  en: {
    badge: 'AI Department',
    title: 'Future Literacy,\nData Analytics & Agentic AI',
    lead: 'A deep grasp of AI concepts, data analytics, and agentic AI architecture — through a custom curriculum that unites mathematical rigour with real-world deployment.',
    back: 'Back to home',
    cta: 'Book a free consultation',
    ctaLead: 'Talk to our advisors to find the right AI learning path for you.',
    ctaTitle: 'Get ready for the AI-powered world',
    featuresTitle: 'Three core pillars',
    coursesTitle: 'AI Department Courses',
    features: [
      {
        ic: 'graduation', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        title: 'Future Literacy',
        desc: 'AI fundamentals, machine learning, and large language models explained accessibly — equipping the next generation with the vocabulary of tomorrow.',
      },
      {
        ic: 'trending', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        title: 'Data Analytics',
        desc: 'Reading, interpreting, and visualising data — core skills for intelligent decision-making in a data-driven world.',
      },
      {
        ic: 'target', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        title: 'Agentic AI Architecture',
        desc: 'Designing and building agentic AI systems that autonomously plan and execute goals — hands-on and project-based throughout.',
      },
    ],
    curriculum: {
      badge: 'Custom curriculum',
      title: 'Mathematical rigour meets practical deployment',
      body: 'The Hamoon AI curriculum is custom-tailored and authored by Dr. Khadijeh Fathalikhani — mathematician and AI specialist. By synthesising the best global frameworks including Stempedia and advanced AI automation infrastructure, it ensures strict mathematical rigour is paired with the practical deployment skills the industry demands.',
    },
    courses: [
      { ic: 'laptop',   title: 'Intro to AI',         desc: 'Core AI concepts, machine learning and practical use of intelligent tools in real projects.',           meta: ['8 sessions', 'Ages 12–13'],  badge: 'New',      soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'bulb',     title: 'AI & Creativity',     desc: 'Content generation, AI image and music tools — designed for creative teens who want to build.',         meta: ['10 sessions', 'Ages 14–16'], badge: 'STEM',     soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'trending', title: 'AI Automation',       desc: 'Build production-grade automation pipelines with n8n and Dify — from zero to live deployment.',         meta: ['12 sessions', 'Adult'],      badge: 'Advanced', soft: 'var(--mint-50)',  ink: 'var(--mint-600)' },
    ],
  },
} as const;

export default function AIContent() {
  const { lang, c } = useLang();
  const d = DEPT[lang];

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
                <Link href="/#consult" className="btn-primary">{d.cta}</Link>
              </div>
            </div>
            <div className="dept-hero-img-col">
              <Image
                src="/AI.png"
                alt="AI Department — Hamoon Academy"
                width={600} height={400}
                sizes="(max-width: 860px) 100vw, 50vw"
                className="dept-hero-series-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Three pillars ── */}
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

      {/* ── Curriculum highlight ── */}
      <section className="dept-curriculum">
        <div className="dept-curriculum-inner">
          <div className="dept-curriculum-icon">
            <Icon name="graduation" size={28} />
          </div>
          <div className="dept-curriculum-content">
            <span className="dept-curriculum-badge">{d.curriculum.badge}</span>
            <h2 className="dept-curriculum-title">{d.curriculum.title}</h2>
            <p className="dept-curriculum-body">{d.curriculum.body}</p>
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
