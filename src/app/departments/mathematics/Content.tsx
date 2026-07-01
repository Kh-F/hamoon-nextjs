'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';
import Consultation from '@/components/Consultation';

const DEPT = {
  fa: {
    badge: 'بخش ریاضی',
    title: 'ریاضیات مفهومی\nمنطق، کاوش و ساختارهای گسسته',
    lead: 'از منطق ریاضی و حل خلاقانه مسئله تا ترکیبیات پیشرفته و ساختارهای گسسته — دوره‌هایی برای کودکان، نوجوانان و یادگیرندگان کنجکاو.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'رزرو مشاوره رایگان',
    ctaLead: 'با مشاوران ما برای انتخاب بهترین دوره صحبت کنید.',
    ctaTitle: 'شروع ماجراجویی ریاضی',
    featuresTitle: 'رویکرد آموزشی ما',
    features: [
      {
        ic: 'bulb', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        title: 'منطق ریاضی',
        desc: 'تقویت استدلال قیاسی و استقرایی — پایه‌ای که هر شاخه‌ای از ریاضیات بر آن استوار است.',
      },
      {
        ic: 'target', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        title: 'حل خلاقانه مسئله',
        desc: 'تمرین روش‌های متنوع برای رویکرد به مسائل پیچیده — نه تنها پاسخ درست، بلکه مسیر درست.',
      },
      {
        ic: 'calculator', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        title: 'ساختارهای گسسته و ترکیبیات',
        desc: 'آشنایی با ترکیبیات، گراف‌ها و ساختارهای گسسته — ریشه‌های ریاضی علوم کامپیوتر و AI.',
      },
    ],
  },
  en: {
    badge: 'Mathematics Department',
    title: 'Conceptual Mathematics\nLogic, Inquiry & Discrete Structures',
    lead: 'From mathematical logic and creative problem-solving to advanced discrete structures and combinatorics — courses for curious kids, teens, and adult learners.',
    back: 'Back to home',
    cta: 'Book a free consultation',
    ctaLead: 'Talk to our advisors to find the right course for your child.',
    ctaTitle: 'Begin your mathematics adventure',
    featuresTitle: 'Our teaching approach',
    features: [
      {
        ic: 'bulb', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        title: 'Mathematical Logic',
        desc: 'Strengthening deductive and inductive reasoning — the foundation on which every branch of mathematics stands.',
      },
      {
        ic: 'target', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        title: 'Creative Problem-Solving',
        desc: 'Practising diverse approaches to complex problems — not just the right answer, but the right process.',
      },
      {
        ic: 'calculator', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        title: 'Discrete Structures & Combinatorics',
        desc: 'Combinatorics, graphs, and discrete structures — the mathematical roots of computer science and AI.',
      },
    ],
  },
} as const;

export default function MathContent() {
  const { lang } = useLang();
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
                src="/math.png"
                alt="Mathematics Department — Hamoon Academy"
                width={600} height={400}
                sizes="(max-width: 860px) 100vw, 50vw"
                className="dept-hero-series-img"
                priority
              />
            </div>
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

      {/* ── Consultation form ── */}
      <Consultation department="Mathematics" />
    </>
  );
}
