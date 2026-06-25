'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';
import DeptInstructor from '@/components/DeptInstructor';
import DeptVoiceAssistant from '@/components/DeptVoiceAssistant';

const MATH_AGENT_ID = 'YOUR_MATH_AGENT_ID';

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
    coursesTitle: 'دوره‌های بخش ریاضی',
    voice: {
      title: 'مشاوره صوتی دپارتمان ریاضی',
      desc: 'برای راهنمایی در انتخاب دوره ریاضی مناسب، با مشاور صوتی هامون صحبت کنید.',
      button: 'مشاوره صوتی دپارتمان ریاضی',
    },
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
    courses: [
      { ic: 'calculator', title: 'ریاضی کودکان',          desc: 'پایه‌های منطق عددی، الگوشناسی و تفکر ریاضی با بازی و چالش‌های گروهی.',       meta: ['۸ جلسه', '۱۰–۱۱ سال'],  badge: 'پرطرفدار', soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'bulb',       title: 'ریاضی نوجوانان',        desc: 'حل مسئله، منطق ریاضی و مقدمه‌ای بر ساختارهای گسسته — برای ذهن‌های کنجکاو.',  meta: ['۱۲ جلسه', '۱۲–۱۳ سال'], badge: 'جدید',     soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'trending',   title: 'ترکیبیات و ساختار گسسته',desc: 'دوره پیشرفته ترکیبیات، نظریه گراف و کاربرد در علوم کامپیوتر.',               meta: ['۱۶ جلسه', '۱۴–۱۶ سال'], badge: 'STEM',    soft: 'var(--mint-50)',  ink: 'var(--mint-600)' },
    ],
    instructor: {
      sectionLabel: 'مدرس بخش ریاضی',
      name: 'دکتر خدیجه فتحعلی‌خانی',
      role: 'بنیان‌گذار و استاد ارشد — متخصص ریاضیات نظری و کاربردی',
      bio: 'دکتر خدیجه فتحعلی‌خانی دارای دکترای ریاضیات با تخصص در ترکیبیات و نظریه گراف از دانشگاه الزهرا است. او سابقه تدریس گسترده‌ای در مقطع دانشگاهی دارد که شامل تدریس در دانشگاه الزهرا و دانشگاه کاشان می‌شود. مشارکت در پژوهش‌های بین‌المللی در اسپانیا و اسلوونی، تخصص علمی و دیدگاه جهانی او در حوزه ریاضیات نظری را نشان می‌دهد. رویکرد تدریس او بر فهم عمیق مفاهیم، استدلال منطقی دقیق و کاربرد ساختارهای گسسته در حل مسائل پیچیده تأکید دارد.',
      creds: ['Ph.D. ریاضیات — ترکیبیات و نظریه گراف', 'دانشگاه الزهرا', 'دانشگاه کاشان'],
      skills: ['ترکیبیات', 'نظریه گراف', 'ریاضیات گسسته', 'منطق ریاضی', 'پژوهش بین‌المللی'],
      linkedin: 'https://www.linkedin.com/in/khadijeh-fathalikhani-405b0627',
      linkedinLabel: 'مشاهده پروفایل LinkedIn',
      initials: 'خ ف',
      bg: 'var(--amber-100)', ink: 'var(--amber-700)',
    },
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
    coursesTitle: 'Mathematics Department Courses',
    voice: {
      title: 'Mathematics Department Voice Advisor',
      desc: 'Speak with the Hamoon voice advisor for guidance on choosing the right mathematics course for your child.',
      button: 'مشاوره صوتی دپارتمان ریاضی',
    },
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
    courses: [
      { ic: 'calculator', title: 'Math for Kids',                 desc: 'Foundations of numerical logic, pattern recognition and mathematical thinking through games and group challenges.',      meta: ['8 sessions', 'Ages 10–11'],  badge: 'Popular', soft: 'var(--amber-50)', ink: 'var(--amber-600)' },
      { ic: 'bulb',       title: 'Teen Mathematics',              desc: 'Problem-solving, mathematical logic and an introduction to discrete structures — for the curious young mind.',          meta: ['12 sessions', 'Ages 12–13'], badge: 'New',     soft: 'var(--blue-50)',  ink: 'var(--blue-600)' },
      { ic: 'trending',   title: 'Combinatorics & Discrete Math', desc: 'Advanced combinatorics, graph theory and their applications in computer science and algorithmic thinking.',             meta: ['16 sessions', 'Ages 14–16'], badge: 'STEM',   soft: 'var(--mint-50)',  ink: 'var(--mint-600)' },
    ],
    instructor: {
      sectionLabel: 'Lead instructor — Mathematics Department',
      name: 'Dr. Khadijeh Fathalikhani',
      role: 'Co-Founder & Lead Instructor — Theoretical & Applied Mathematics',
      bio: 'Dr. Khadijeh Fathalikhani holds a Ph.D. in Mathematics specialising in Combinatorics and Graph Theory from Alzahra University. She has an extensive university-level teaching history at Alzahra University and the University of Kashan, establishing her as a rigorous and experienced educator. Her international academic research in Spain and Slovenia reflects her global standing in theoretical mathematics. Her teaching philosophy emphasises deep conceptual understanding, precise logical reasoning, and the application of discrete structures to solving complex problems.',
      creds: ['Ph.D. Mathematics — Combinatorics & Graph Theory', 'Alzahra University', 'University of Kashan'],
      skills: ['Combinatorics', 'Graph Theory', 'Discrete Mathematics', 'Mathematical Logic', 'International Research'],
      linkedin: 'https://www.linkedin.com/in/khadijeh-fathalikhani-405b0627',
      linkedinLabel: 'View LinkedIn Profile',
      initials: 'KF',
      bg: 'var(--amber-100)', ink: 'var(--amber-700)',
    },
  },
} as const;

export default function MathContent() {
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

      {/* ── Instructor profile ── */}
      <DeptInstructor {...d.instructor} />

      {/* ── Inline voice assistant ── */}
      <DeptVoiceAssistant
        agentId={MATH_AGENT_ID}
        buttonText={d.voice.button}
        title={d.voice.title}
        description={d.voice.desc}
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
