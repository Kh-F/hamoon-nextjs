'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';
import Consultation from '@/components/Consultation';

/* ── Shared general-info sections (shown in every accordion panel) ───────── */
type GenSection = { icon: string; title: string; text?: string; items?: string[] };

const GENERAL_FA: GenSection[] = [
  {
    icon: 'book',
    title: 'معرفی مجموعه',
    text: 'کتاب آکسفورد دیسکاور ویراست دوم محصول انتشارات دانشگاه آکسفورد و مبتنی بر مهارت‌های قرن بیست و یکمی است. این مجموعه از سطح A1 تا B2 (معادل آیلتس ۶.۵) را پوشش می‌دهد و زبان‌آموزان را به تسلط بر هر ۴ مهارت اصلی می‌رساند.',
  },
  {
    icon: 'graduation',
    title: 'شرایط سنی ثبت‌نام',
    text: 'ویژه دانش‌آموزانی که کلاس سوم دبستان خود را به اتمام رسانده باشند.',
  },
  {
    icon: 'clock',
    title: 'زمان‌بندی و تقویم آموزشی',
    items: [
      'شروع کلاس‌ها هرساله از اواخر دی‌ماه است.',
      'کلاس‌ها از ۱۵ فروردین تا ۲۵ اسفند دایر هستند و در روزهای تعطیل رسمی تشکیل نمی‌شوند.',
    ],
  },
  {
    icon: 'users',
    title: 'ساختار جلسات',
    items: [
      'کلاس‌های زبان آکادمی هامون هفته‌ای ۱ جلسه است.',
      'هر جلسه به دو تایم ۴۰ دقیقه‌ای تقسیم می‌شود (متناسب با گستره تمرکز ۳۵–۴۰ دقیقه‌ای کودکان).',
      'بین دو تایم، ۱۵ دقیقه استراحت (زنگ تفریح) قرار دارد.',
    ],
  },
  {
    icon: 'pen',
    title: 'تکالیف و کار گروهی',
    items: [
      'به غیر از روزهای تعطیل، زبان‌آموزان هر روز تکلیف خواهند داشت.',
      'از شروع ترم، دانش‌آموزان به گروه‌های دو نفره تقسیم می‌شوند.',
      'برخی تکالیف انفرادی و برخی به‌صورت گروهی و تعاملی انجام می‌شود.',
    ],
  },
  {
    icon: 'star',
    title: 'سیستم ارزیابی و سنجش',
    items: [
      'ارزیابی‌های کوچک و مستمر در طول ترم انجام می‌شود (ارزیابی‌های کوچک را کاراتر از آزمون‌های بزرگ می‌دانیم).',
      'پس از هر ۶ درس، یک ارزیابی جامع و بزرگ برگزار می‌شود.',
    ],
  },
  {
    icon: 'book',
    title: 'ساختار کتاب',
    items: [
      'هر کتاب شامل ۱۸ درس است؛ هر ۲ درس یک موضوع محوری را پوشش می‌دهد (مجموعاً ۹ موضوع در هر کتاب).',
      'هر دو درس با یک «سوال بزرگ» شروع می‌شود و دانش‌آموزان مدام به واکاوی و تحقیق درباره آن پرسش می‌پردازند.',
      'ویژگی چندفرهنگی این کتاب، آن را از تمامی مجموعه‌های دیگر مجزا می‌کند.',
    ],
  },
];

const GENERAL_EN: GenSection[] = [
  {
    icon: 'book',
    title: 'About the series',
    text: 'Oxford Discover 2nd Edition is published by Oxford University Press and built around 21st-century skills. The series spans A1 to B2 (equivalent to IELTS 6.5) and develops all four core language skills.',
  },
  {
    icon: 'graduation',
    title: 'Age requirements',
    text: 'Open to students who have completed Grade 3 of primary school.',
  },
  {
    icon: 'clock',
    title: 'Schedule & academic calendar',
    items: [
      'Classes begin each year in late January.',
      'The academic year runs 5 April – 15 March; no classes on official public holidays.',
    ],
  },
  {
    icon: 'users',
    title: 'Session structure',
    items: [
      'One session per week.',
      'Each session is split into two 40-minute blocks — matched to children\'s 35–40 minute concentration span.',
      '15-minute break between the two blocks.',
    ],
  },
  {
    icon: 'pen',
    title: 'Homework & group work',
    items: [
      'Learners receive daily homework on all non-holiday days.',
      'From the start of term, learners are paired into groups of two.',
      'Some tasks are completed individually; others are collaborative and interactive.',
    ],
  },
  {
    icon: 'star',
    title: 'Assessment system',
    items: [
      'Frequent short assessments throughout the term — we find small, regular checks more effective than high-stakes exams.',
      'A comprehensive review assessment after every 6 lessons.',
    ],
  },
  {
    icon: 'book',
    title: 'Book structure',
    items: [
      'Each book contains 18 lessons; every 2 lessons share one central topic (9 topics per book).',
      'Every pair of lessons opens with a "Big Question" that learners research and explore throughout both lessons.',
      'The multicultural perspective of this series sets it apart from all other programmes.',
    ],
  },
];

/* ── Course data ─────────────────────────────────────────────────────────── */
const DEPT = {
  fa: {
    badge: 'بخش زبان انگلیسی',
    title: 'یادگیری زبان انگلیسی\nغوطه‌ور، تعاملی و اختصاصی',
    lead: 'برنامه جامع Oxford Discover ویرایش دوم — مسیری پیوسته از A1 تا B2 با ۶ سطح مجزا، برای کودکان و نوجوانانی که هدفشان تسلط واقعی بر زبان انگلیسی است.',
    manager: 'مدیریت دپارتمان زبان انگلیسی: سعید موسی‌وند',
    back: 'بازگشت به صفحه اصلی',
    cta: 'رزرو مشاوره رایگان',
    ctaLead: 'برای انتخاب بهترین دوره با مشاوران ما صحبت کنید.',
    ctaTitle: 'شروع سفر یادگیری زبان انگلیسی',
    featuresTitle: 'رویکرد آموزشی ما',
    coursesTitle: 'دوره‌های Oxford Discover — ویرایش دوم',
    policyTitle: 'قانون الزامی ثبت‌نام',
    policyBody: 'در آکادمی هامون، یادگیری یک مسیر پیوسته و زنجیره‌وار است. هیچ زبان‌آموزی نمی‌تواند بدون گذراندن دوره‌های قبلی، مستقیماً وارد سطوح بالاتر (مانند سطح ۲ و بعد از آن) شود. تمامی زبان‌آموزان جدید واجد شرایط، الزامات آموزشی را از «سطح ۱» آغاز خواهند کرد.',
    detailBtn: 'مشاهده جزئیات',
    sessionsLabel: 'طول دوره',
    goalLabel: 'هدف آموزشی',
    generalTitle: 'اطلاعات عمومی آکادمی هامون',
    general: GENERAL_FA,
    features: [
      { ic: 'chat',  soft: 'var(--blue-50)',  ink: 'var(--blue-600)',  title: 'یادگیری غوطه‌ور',         desc: 'محیطی که از همان جلسه اول، دانش‌آموز را در بستر زبان انگلیسی غرق می‌کند — مانند یادگیری زبان مادری.' },
      { ic: 'users', soft: 'var(--amber-50)', ink: 'var(--amber-600)', title: 'کارگاه‌های تعاملی',       desc: 'گروه‌های کوچک، نقش‌آفرینی، گفتگوی واقعی و بازخورد لحظه‌ای — یادگیری که هرگز فراموش نمی‌شود.' },
      { ic: 'pen',   soft: 'var(--mint-50)',  ink: 'var(--mint-600)',  title: 'مسیر پیوسته و ساختارمند', desc: 'شش سطح به‌هم‌پیوسته که هر کدام بر پایه سطح قبلی بنا می‌شود — رشد واقعی و قابل اندازه‌گیری در هر مرحله.' },
    ],
    courses: [
      {
        ic: 'pen', title: 'دوره مقدماتی: آموزش آواها و صداهای زبان انگلیسی (Sounds)',
        desc: 'یادگیری اصولی صداها و آواهای زبان انگلیسی (Phonics) به عنوان پیش‌نیاز ورود به کتاب‌های اصلی، جهت به‌دست آوردن درک صحیح از تلفظ و شنیدار.',
        meta: ['۶ جلسه', 'Phonics', 'پیش‌نیاز: ندارد'],
        badge: 'پیش‌نیاز اجباری', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        detail: { sessions: '۶ جلسه', goal: 'ویژه یادگیری صداها و آواهای زبان انگلیسی قبل از شروع کتاب‌های اصلی.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۱',
        desc: 'نقطه شروع اجباری برای تمامی زبان‌آموزان جدید. در این سطح A1، پایه‌های اساسی زبان انگلیسی — از واژگان روزمره تا ساختارهای ابتدایی — با روشی تعاملی و لذت‌بخش بنا می‌شود.',
        meta: ['۳۶ جلسه', 'A1', 'پیش‌نیاز: دوره مقدماتی آواها'],
        badge: 'شروع اجباری', soft: 'var(--blue-50)', ink: 'var(--blue-700)',
        detail: { sessions: '۳۶ جلسه', goal: 'تمرکز اصلی بر درک مفاهیم ساده و پایه‌گذاری مهارت‌های چهارگانه است.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۲',
        desc: 'ادامه مسیر A1 و تقویت پایه‌های زبانی. زبان‌آموز مهارت‌های چهارگانه را در موضوعات متنوع‌تر تمرین می‌کند و اعتماد به نفس ارتباطی‌اش رشد می‌یابد.',
        meta: ['۳۶ جلسه', 'A1+', 'پیش‌نیاز: سطح ۱'],
        badge: 'پایه', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        detail: { sessions: '۳۶ جلسه', goal: 'تمرکز اصلی بر درک مفاهیم ساده و پایه‌گذاری مهارت‌های چهارگانه است.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۳',
        desc: 'ورود به سطح A2 و توسعه مهارت‌های چهارگانه. موضوعات پیچیده‌تر، جملات طولانی‌تر و توانایی بیان ایده‌های روزمره با جزئیات بیشتر.',
        meta: ['۳۶ جلسه', 'A2', 'پیش‌نیاز: سطح ۲'],
        badge: 'متوسطه پایین', soft: 'var(--amber-50)', ink: 'var(--amber-700)',
        detail: { sessions: '۳۶ جلسه', goal: 'زبان‌آموزان قادر به «تولید ساختارهای ساده» و «فهم ساختارهای مرکب» می‌شوند.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۴',
        desc: 'تکمیل سطح A2 و گذار به B1. زبان‌آموز قادر به مکالمه درباره موضوعات گسترده‌تر، خواندن متون متوسط و نگارش پاراگراف‌های ساختارمند می‌شود.',
        meta: ['۳۶ جلسه', 'A2+', 'پیش‌نیاز: سطح ۳'],
        badge: 'متوسطه', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        detail: { sessions: '۳۶ جلسه', goal: 'زبان‌آموزان قادر به «تولید مفاهیم مرکب» بوده و می‌توانند «ساختارهای پیچیده» را به خوبی درک کنند.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۵',
        desc: 'تثبیت سطح B1 و آمادگی برای B2. مکالمه روان، درک مطلب پیشرفته، نگارش انشا و آمادگی برای شرکت در محیط‌های دو زبانه.',
        meta: ['۳۶ جلسه', 'B1', 'پیش‌نیاز: سطح ۴'],
        badge: 'متوسطه بالا', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        detail: { sessions: '۳۶ جلسه', goal: 'توانایی «تولید ساختارهای پیچیده» و «درک ساختارهای مرکب‌پیچیده».' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۶',
        desc: 'تسلط کامل در سطح B2 معادل آیلتس ۶.۵. فارغ‌التحصیلان این سطح توانایی برقراری ارتباط مؤثر در محیط‌های آکادمیک و حرفه‌ای بین‌المللی را خواهند داشت.',
        meta: ['۳۶ جلسه', 'B2 ≈ IELTS 6.5', 'پیش‌نیاز: سطح ۵'],
        badge: 'پیشرفته', soft: 'var(--mint-50)', ink: 'var(--mint-700)',
        detail: { sessions: '۳۶ جلسه', goal: 'تسلط کامل بر تمامی ساختارهای زبان انگلیسی؛ فارغ‌التحصیلان این سطح به مهارت معادل آیلتس ۶.۵ دست می‌یابند.' },
      },
    ],
  },
  en: {
    badge: 'English Department',
    title: 'Immersive English,\nstructured levels & proven progression',
    lead: 'The complete Oxford Discover 2nd Edition programme — a continuous A1-to-B2 pathway across 6 individual levels, for children and teens aiming for genuine English mastery.',
    manager: 'English Department Head: Saeid Moosivand',
    back: 'Back to home',
    cta: 'Book a free consultation',
    ctaLead: 'Talk to our advisors to find the right English course for you.',
    ctaTitle: 'Begin your English language journey',
    featuresTitle: 'Our teaching approach',
    coursesTitle: 'Oxford Discover Courses — 2nd Edition',
    policyTitle: 'Mandatory Enrolment Policy',
    policyBody: 'At Hamoon Academy, learning follows a continuous, sequential path. No learner may skip directly into a higher level (Level 2 or above) without completing the prerequisite levels. All new eligible learners begin their journey at Level 1.',
    detailBtn: 'View details',
    sessionsLabel: 'Duration',
    goalLabel: 'Learning objective',
    generalTitle: 'General information — Hamoon Academy',
    general: GENERAL_EN,
    features: [
      { ic: 'chat',  soft: 'var(--blue-50)',  ink: 'var(--blue-600)',  title: 'Immersive learning',            desc: 'An environment that immerses students in English from session one — mirroring how a first language is naturally acquired.' },
      { ic: 'users', soft: 'var(--amber-50)', ink: 'var(--amber-600)', title: 'Interactive workshops',          desc: 'Small groups, role-play, real conversation, and instant feedback — learning that sticks because it feels real.' },
      { ic: 'pen',   soft: 'var(--mint-50)',  ink: 'var(--mint-600)',  title: 'Continuous structured path',    desc: 'Six sequential levels, each building on the last — measurable, real progress at every stage of the journey.' },
    ],
    courses: [
      {
        ic: 'pen', title: 'Foundation Course: English Sounds & Phonics',
        desc: 'A structured introduction to English sounds and phonics — the mandatory prerequisite before entering the main Oxford Discover books, ensuring correct pronunciation and listening comprehension from the start.',
        meta: ['6 sessions', 'Phonics', 'Prerequisite: None'],
        badge: 'Mandatory Prerequisite', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        detail: { sessions: '6 sessions', goal: 'Dedicated to learning English sounds and phonics before beginning the main course books.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 1',
        desc: 'Mandatory starting point for all new learners. At A1, foundational English skills — everyday vocabulary, basic structures, and communicative confidence — are built through interactive, enjoyable methods.',
        meta: ['36 sessions', 'A1', 'Prerequisite: Sounds Course'],
        badge: 'Required Start', soft: 'var(--blue-50)', ink: 'var(--blue-700)',
        detail: { sessions: '36 sessions', goal: 'Primary focus on understanding simple concepts and laying the foundations of all four language skills.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 2',
        desc: 'Continuing the A1 journey and strengthening language foundations. Learners practise all four skills across varied topics, building communicative confidence step by step.',
        meta: ['36 sessions', 'A1+', 'Prerequisite: Level 1'],
        badge: 'Foundation', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        detail: { sessions: '36 sessions', goal: 'Continued focus on simple concepts and consolidation of all four core language skills.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 3',
        desc: 'Entry into A2, developing all four language skills. More complex topics, longer sentences, and the ability to express everyday ideas in greater detail.',
        meta: ['36 sessions', 'A2', 'Prerequisite: Level 2'],
        badge: 'Elementary', soft: 'var(--amber-50)', ink: 'var(--amber-700)',
        detail: { sessions: '36 sessions', goal: 'Learners can produce simple structures and understand compound structures.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 4',
        desc: 'Completing A2 and transitioning to B1. Learners can converse on a wider range of topics, read intermediate texts, and write structured paragraphs.',
        meta: ['36 sessions', 'A2+', 'Prerequisite: Level 3'],
        badge: 'Intermediate', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        detail: { sessions: '36 sessions', goal: 'Learners can produce compound concepts and confidently understand complex structures.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 5',
        desc: 'Consolidating B1 and preparing for B2. Fluent conversation, advanced reading comprehension, essay writing, and readiness for bilingual environments.',
        meta: ['36 sessions', 'B1', 'Prerequisite: Level 4'],
        badge: 'Upper-Intermediate', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        detail: { sessions: '36 sessions', goal: 'Ability to produce complex structures and understand compound-complex structures.' },
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 6',
        desc: 'Full B2 mastery, equivalent to IELTS 6.5. Graduates can communicate effectively in international academic and professional settings.',
        meta: ['36 sessions', 'B2 ≈ IELTS 6.5', 'Prerequisite: Level 5'],
        badge: 'Advanced', soft: 'var(--mint-50)', ink: 'var(--mint-700)',
        detail: { sessions: '36 sessions', goal: 'Complete mastery of all English structures; graduates reach the equivalent of IELTS 6.5.' },
      },
    ],
  },
} as const;

/* ── Component ───────────────────────────────────────────────────────────── */
export default function EnglishContent() {
  const { lang } = useLang();
  const d = DEPT[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  function toggle(idx: number) {
    setOpenIdx(prev => (prev === idx ? null : idx));
  }

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
              <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', fontWeight: 600 }}>
                {d.manager}
              </p>
              <div className="dept-btns">
                <Link href="/#consult" className="btn-primary">{d.cta}</Link>
              </div>
            </div>
            <div className="dept-hero-img-col">
              <Image
                src="/Oxford-Discover-Full-Series.webp"
                alt="Oxford Discover Full Series — 2nd Edition"
                width={600} height={347}
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

      {/* ── Courses ── */}
      <section>
        <div className="dept-courses-inner">
          <div className="section-center" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 className="section-title">{d.coursesTitle}</h2>
          </div>

          {/* Enrollment policy */}
          <div style={{
            maxWidth: 'var(--container-xl)', marginInline: 'auto', marginBottom: 'var(--space-10)',
            padding: 'var(--space-5) var(--space-6)', background: 'var(--amber-50)',
            border: '2px solid var(--amber-300)', borderRadius: 'var(--radius-xl)',
            display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start',
          }}>
            <span style={{ color: 'var(--amber-600)', flexShrink: 0, marginTop: '2px' }}>
              <Icon name="graduation" size={22} />
            </span>
            <div>
              <div style={{ fontWeight: 800, color: 'var(--amber-800)', marginBottom: 'var(--space-2)', fontSize: 'var(--fs-base)' }}>
                {d.policyTitle}
              </div>
              <p style={{ color: 'var(--amber-900)', fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-relaxed)', margin: 0 }}>
                {d.policyBody}
              </p>
            </div>
          </div>

          {/* Course cards */}
          <div className="courses-grid">
            {d.courses.map((co, idx) => {
              const isOpen = openIdx === idx;
              return (
                <article key={co.title} className={`course-card${isOpen ? ' course-card--open' : ''}`}>
                  {/* Card header */}
                  <div className="course-header" style={{ background: co.soft }}>
                    <span className="course-icon" style={{ color: co.ink }}><Icon name={co.ic} size={28} /></span>
                    <span className="course-badge" style={{ color: co.ink, border: `1px solid ${co.ink}22` }}>{co.badge}</span>
                  </div>

                  {/* Card body */}
                  <div className="course-body">
                    <h3 className="course-title">{co.title}</h3>
                    <p className="course-desc">{co.desc}</p>
                    <div className="course-metas">
                      {co.meta.map(m => <span key={m} className="course-meta-item">{m}</span>)}
                    </div>

                    {/* Toggle button */}
                    <button
                      className="course-toggle"
                      aria-expanded={isOpen}
                      onClick={() => toggle(idx)}
                    >
                      {d.detailBtn}
                      <Icon
                        name="chevron"
                        size={15}
                        className={`course-toggle-icon${isOpen ? ' course-toggle-icon--open' : ''}`}
                      />
                    </button>

                    {/* ── Accordion panel ── */}
                    <div className={`cdp-wrap${isOpen ? ' cdp-wrap--open' : ''}`}>
                      <div className="cdp-inner">
                        <div className="cdp-panel">

                          {/* Level-specific highlight */}
                          <div className="cdp-level" style={{ background: co.soft, borderColor: `${co.ink}33` }}>
                            <div className="cdp-level-row">
                              <span className="cdp-level-icon" style={{ color: co.ink }}><Icon name="clock" size={15} /></span>
                              <span className="cdp-level-label">{d.sessionsLabel}:</span>
                              <span className="cdp-level-val">{co.detail.sessions}</span>
                            </div>
                            <div className="cdp-level-row cdp-level-row--goal">
                              <span className="cdp-level-icon" style={{ color: co.ink }}><Icon name="target" size={15} /></span>
                              <div className="cdp-level-goal-wrap">
                                <span className="cdp-level-label">{d.goalLabel}:</span>
                                <p className="cdp-level-goal-text">{co.detail.goal}</p>
                              </div>
                            </div>
                          </div>

                          {/* General info */}
                          <div className="cdp-gen-head">
                            <span className="cdp-gen-line" />
                            <span className="cdp-gen-title">{d.generalTitle}</span>
                            <span className="cdp-gen-line" />
                          </div>

                          <div className="cdp-sections">
                            {d.general.map(sec => (
                              <div key={sec.title} className="cdp-section">
                                <div className="cdp-section-head">
                                  <span className="cdp-section-icon"><Icon name={sec.icon} size={14} /></span>
                                  <span className="cdp-section-title">{sec.title}</span>
                                </div>
                                {sec.items ? (
                                  <ul className="cdp-bullets">
                                    {sec.items.map((item, i) => (
                                      <li key={i} className="cdp-bullet">
                                        <span className="cdp-bullet-dot" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="cdp-body-text">{sec.text}</p>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* CTA at bottom of panel */}
                          <Link href="/#consult" className="cdp-cta">
                            {d.cta} <Icon name="chevron" size={14} />
                          </Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Consultation form ── */}
      <Consultation department="English" />
    </>
  );
}
