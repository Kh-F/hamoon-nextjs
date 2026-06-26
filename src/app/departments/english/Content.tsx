'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';
import DeptVoiceAssistant from '@/components/DeptVoiceAssistant';

const ENGLISH_AGENT_ID = 'YOUR_ENGLISH_AGENT_ID';

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
    voiceTitle: 'تمرین مکالمه با مشاور زبان هوشمند',
    voiceDesc: 'مکالمه زبان انگلیسی را با مشاور هوشمند هامون تمرین کنید — در هر زمان، بدون قضاوت، با بازخورد فوری.',
    voiceButton: 'شروع گفتگوی انگلیسی و مشاوره',
    policyTitle: 'قانون الزامی ثبت‌نام',
    policyBody: 'در آکادمی هامون، یادگیری یک مسیر پیوسته و زنجیره‌وار است. هیچ زبان‌آموزی نمی‌تواند بدون گذراندن دوره‌های قبلی، مستقیماً وارد سطوح بالاتر (مانند سطح ۲ و بعد از آن) شود. تمامی زبان‌آموزان جدید واجد شرایط، الزامات آموزشی را از «سطح ۱» آغاز خواهند کرد.',
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
        title: 'مسیر پیوسته و ساختارمند',
        desc: 'شش سطح به‌هم‌پیوسته که هر کدام بر پایه سطح قبلی بنا می‌شود — رشد واقعی و قابل اندازه‌گیری در هر مرحله.',
      },
    ],
    courses: [
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۱',
        desc: 'نقطه شروع اجباری برای تمامی زبان‌آموزان جدید. در این سطح A1، پایه‌های اساسی زبان انگلیسی — از واژگان روزمره تا ساختارهای ابتدایی — با روشی تعاملی و لذت‌بخش بنا می‌شود.',
        meta: ['۱۶ جلسه', 'A1', 'پیش‌نیاز: ندارد'],
        badge: 'شروع اجباری', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۲',
        desc: 'ادامه مسیر A1 و تقویت پایه‌های زبانی. زبان‌آموز مهارت‌های چهارگانه را در موضوعات متنوع‌تر تمرین می‌کند و اعتماد به نفس ارتباطی‌اش رشد می‌یابد.',
        meta: ['۱۶ جلسه', 'A1+', 'پیش‌نیاز: سطح ۱'],
        badge: 'پایه', soft: 'var(--blue-50)', ink: 'var(--blue-700)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۳',
        desc: 'ورود به سطح A2 و توسعه مهارت‌های چهارگانه. موضوعات پیچیده‌تر، جملات طولانی‌تر و توانایی بیان ایده‌های روزمره با جزئیات بیشتر.',
        meta: ['۱۶ جلسه', 'A2', 'پیش‌نیاز: سطح ۲'],
        badge: 'متوسطه پایین', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۴',
        desc: 'تکمیل سطح A2 و گذار به B1. زبان‌آموز قادر به مکالمه درباره موضوعات گسترده‌تر، خواندن متون متوسط و نگارش پاراگراف‌های ساختارمند می‌شود.',
        meta: ['۱۶ جلسه', 'A2+', 'پیش‌نیاز: سطح ۳'],
        badge: 'متوسطه', soft: 'var(--amber-50)', ink: 'var(--amber-700)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۵',
        desc: 'تثبیت سطح B1 و آمادگی برای B2. مکالمه روان، درک مطلب پیشرفته، نگارش انشا و آمادگی برای شرکت در محیط‌های دو زبانه.',
        meta: ['۱۶ جلسه', 'B1', 'پیش‌نیاز: سطح ۴'],
        badge: 'متوسطه بالا', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover - سطح ۶',
        desc: 'تسلط کامل در سطح B2 معادل آیلتس ۶.۵. فارغ‌التحصیلان این سطح توانایی برقراری ارتباط مؤثر در محیط‌های آکادمیک و حرفه‌ای بین‌المللی را خواهند داشت.',
        meta: ['۱۶ جلسه', 'B2 ≈ IELTS 6.5', 'پیش‌نیاز: سطح ۵'],
        badge: 'پیشرفته', soft: 'var(--mint-50)', ink: 'var(--mint-700)',
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
    voiceTitle: 'Practise with the AI language mentor',
    voiceDesc: "Practise English conversation with the Hamoon AI mentor — any time, judgment-free, with instant feedback. Click below to start speaking.",
    voiceButton: 'شروع گفتگوی انگلیسی و مشاوره',
    policyTitle: 'Mandatory Enrolment Policy',
    policyBody: 'At Hamoon Academy, learning follows a continuous, sequential path. No learner may skip directly into a higher level (Level 2 or above) without completing the prerequisite levels. All new eligible learners begin their journey at Level 1.',
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
        title: 'Continuous structured path',
        desc: 'Six sequential levels, each building on the last — measurable, real progress at every stage of the journey.',
      },
    ],
    courses: [
      {
        ic: 'graduation', title: 'Oxford Discover — Level 1',
        desc: 'Mandatory starting point for all new learners. At A1, foundational English skills — everyday vocabulary, basic structures, and communicative confidence — are built through interactive, enjoyable methods.',
        meta: ['16 sessions', 'A1', 'Prerequisite: None'],
        badge: 'Required Start', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 2',
        desc: 'Continuing the A1 journey and strengthening language foundations. Learners practise all four skills across varied topics, building communicative confidence step by step.',
        meta: ['16 sessions', 'A1+', 'Prerequisite: Level 1'],
        badge: 'Foundation', soft: 'var(--blue-50)', ink: 'var(--blue-700)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 3',
        desc: 'Entry into A2, developing all four language skills. More complex topics, longer sentences, and the ability to express everyday ideas in greater detail.',
        meta: ['16 sessions', 'A2', 'Prerequisite: Level 2'],
        badge: 'Elementary', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 4',
        desc: 'Completing A2 and transitioning to B1. Learners can converse on a wider range of topics, read intermediate texts, and write structured paragraphs.',
        meta: ['16 sessions', 'A2+', 'Prerequisite: Level 3'],
        badge: 'Intermediate', soft: 'var(--amber-50)', ink: 'var(--amber-700)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 5',
        desc: 'Consolidating B1 and preparing for B2. Fluent conversation, advanced reading comprehension, essay writing, and readiness for bilingual environments.',
        meta: ['16 sessions', 'B1', 'Prerequisite: Level 4'],
        badge: 'Upper-Intermediate', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
      },
      {
        ic: 'graduation', title: 'Oxford Discover — Level 6',
        desc: 'Full B2 mastery, equivalent to IELTS 6.5. Graduates can communicate effectively in international academic and professional settings.',
        meta: ['16 sessions', 'B2 ≈ IELTS 6.5', 'Prerequisite: Level 5'],
        badge: 'Advanced', soft: 'var(--mint-50)', ink: 'var(--mint-700)',
      },
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
          <p style={{
            marginTop: 'var(--space-3)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-muted)',
            fontWeight: 600,
          }}>
            {d.manager}
          </p>
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
          <div className="section-center" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 className="section-title">{d.coursesTitle}</h2>
          </div>

          {/* Enrollment policy alert */}
          <div style={{
            maxWidth: 'var(--container-xl)',
            marginInline: 'auto',
            marginBottom: 'var(--space-10)',
            padding: 'var(--space-5) var(--space-6)',
            background: 'var(--amber-50)',
            border: '2px solid var(--amber-300)',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            gap: 'var(--space-4)',
            alignItems: 'flex-start',
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

      {/* ── Inline voice assistant ── */}
      <DeptVoiceAssistant
        agentId={ENGLISH_AGENT_ID}
        buttonText={d.voiceButton}
        title={d.voiceTitle}
        description={d.voiceDesc}
      />

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
