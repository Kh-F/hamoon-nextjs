'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import Icon from '@/components/Icon';
import Consultation from '@/components/Consultation';

const DEPT = {
  fa: {
    badge: 'بخش هوش مصنوعی',
    title: 'هوش مصنوعی، داده و تفکر محاسباتی',
    lead: 'آشنایی عمیق و کاربردی با دنیای هوش مصنوعی؛ از مفاهیم پایه AI و تحلیل داده تا ساخت پروژه‌های خلاقانه و استفاده هوشمندانه از فناوری‌های نوین. برنامه‌های آموزشی هامون با ترکیب تفکر ریاضی، حل مسئله و تجربه عملی طراحی شده‌اند تا یادگیرندگان برای دنیای دیجیتال آینده آماده شوند.',
    back: 'بازگشت به صفحه اصلی',
    cta: 'رزرو مشاوره رایگان',
    consultCta: 'رزرو مشاوره اختصاصی هوش مصنوعی',
    ctaLead: 'برای انتخاب بهترین مسیر یادگیری با مشاوران ما صحبت کنید.',
    ctaTitle: 'آماده‌سازی برای دنیای هوش مصنوعی',
    featuresTitle: 'رویکرد آموزشی ما',
    features: [
      {
        ic: 'graduation', soft: 'var(--blue-50)', ink: 'var(--blue-600)',
        title: 'مفاهیم و کاربردهای هوش مصنوعی',
        desc: 'آشنایی با مفاهیم پایه هوش مصنوعی، یادگیری ماشین، مدل‌های زبانی بزرگ و کاربردهای روزمره AI؛ با زبانی ساده، جذاب و متناسب با سطح یادگیرنده.',
      },
      {
        ic: 'trending', soft: 'var(--amber-50)', ink: 'var(--amber-600)',
        title: 'تحلیل داده و تفکر داده‌محور',
        desc: 'یادگیری نحوه مشاهده، تحلیل و تفسیر داده‌ها؛ مهارتی ضروری برای تصمیم‌گیری هوشمند در دنیایی که داده‌ها نقش اصلی را ایفا می‌کنند.',
      },
      {
        ic: 'target', soft: 'var(--mint-50)', ink: 'var(--mint-600)',
        title: 'ساخت پروژه‌های هوشمند',
        desc: 'تبدیل ایده‌ها به پروژه‌های واقعی با استفاده از ابزارهای هوش مصنوعی، برنامه‌نویسی و فناوری‌های نوین؛ از تجربه‌های ساده تا پروژه‌های پیشرفته‌تر.',
      },
    ],
    curriculum: {
      badge: 'برنامه درسی اختصاصی هوش مصنوعی هامون',
      title: 'از یادگیری مفاهیم تا ساختن آینده',
      body: 'آموزش هوش مصنوعی نیازمند یک مسیر منظم و مرحله‌به‌مرحله است. بسیاری از منابع آموزشی موجود، اگرچه مطالب ارزشمندی ارائه می‌دهند، اما گاهی بدون یک ساختار پیوسته و مسیر یادگیری مشخص هستند. در هامون، برنامه آموزشی هوش مصنوعی پس از بررسی و مطالعه دوره‌ها و منابع آموزشی بین‌المللی در کشورهای مختلف از جمله ایران، کانادا و هند طراحی شده است. با تحلیل روش‌های آموزشی موجود و بررسی منابع تخصصی، تلاش کرده‌ایم یک مسیر منسجم و قابل فهم برای یادگیرندگان ایجاد کنیم.',
    },
    approach: {
      title: 'رویکرد آموزشی ما',
      lead: 'مسیر یادگیری هوش مصنوعی در هامون از پایه‌های تفکر محاسباتی آغاز می‌شود و به سمت مفاهیم پیشرفته‌تر حرکت می‌کند:',
      steps: [
        { title: 'تفکر الگوریتمی و حل مسئله', desc: 'دانش‌آموزان ابتدا یاد می‌گیرند چگونه مسائل را تحلیل کنند، مراحل حل مسئله را طراحی کنند و مانند یک دانشمند کامپیوتر فکر کنند.' },
        { title: 'شناخت کامپیوتر و دنیای دیجیتال', desc: 'درک نحوه کار ماشین‌ها، سیستم‌های کامپیوتری، داده‌ها و نقش فناوری در زندگی روزمره، پایه‌ای برای ورود به دنیای هوش مصنوعی است.' },
        { title: 'الگوریتم‌ها و برنامه‌نویسی', desc: 'یادگیری دستورها، توالی‌ها، الگوریتم‌ها، الگوها، حلقه‌ها و مفاهیم برنامه‌نویسی از طریق فعالیت‌های عملی و پروژه‌محور.' },
        { title: 'ورود به دنیای هوش مصنوعی', desc: 'آشنایی با مفاهیم اصلی هوش مصنوعی، یادگیری ماشین، داده‌ها و کاربردهای واقعی AI در دنیای امروز.' },
      ],
    },
    books: {
      title: 'کتاب‌های آموزشی اختصاصی هامون',
      body: 'برای ایجاد یک مسیر آموزشی منسجم، مجموعه کتاب‌های اختصاصی هوش مصنوعی هامون در حال تألیف است. این کتاب‌ها با ترکیب منابع آموزشی معتبر بین‌المللی، تجربه تدریس، و نیازهای واقعی دانش‌آموزان طراحی شده‌اند تا یادگیری هوش مصنوعی از سطح مقدماتی تا پیشرفته به صورت ساختاریافته انجام شود. کتاب‌های هامون در دو نسخه فارسی و انگلیسی تهیه می‌شوند. نسخه انگلیسی با هدف آماده‌سازی دانش‌آموزان برای مسیرهای آموزشی و رقابت‌های بین‌المللی طراحی شده است. در کنار آموزش مفاهیم، هر فصل شامل:',
      bullets: ['اهداف یادگیری مشخص', 'مثال‌های کاربردی', 'فعالیت‌های عملی', 'تمرین‌های تحلیلی', 'پروژه‌های آزمایشگاهی'],
      closing: 'است تا دانش‌آموز تنها مصرف‌کننده فناوری نباشد، بلکه توانایی ساخت و خلق با فناوری را پیدا کند.',
    },
    projectBased: {
      title: 'یادگیری پروژه‌محور',
      body: 'در هامون، هوش مصنوعی فقط با توضیح مفاهیم آموزش داده نمی‌شود؛ یادگیرندگان با انجام فعالیت‌های عملی، ساخت پروژه و تجربه مستقیم، مفاهیم را عمیق‌تر یاد می‌گیرند. هدف ما تربیت نسلی است که بتواند فناوری‌های آینده را درک کند، از آن‌ها استفاده کند و در آینده خود به سازنده این فناوری‌ها تبدیل شود.',
    },
  },
  en: {
    badge: 'AI Department',
    title: 'Future Literacy,\nData Analytics & Agentic AI',
    lead: 'A deep grasp of AI concepts, data analytics, and agentic AI architecture — through a custom curriculum that unites mathematical rigour with real-world deployment.',
    back: 'Back to home',
    cta: 'Book a free consultation',
    consultCta: 'Book an AI consultation',
    ctaLead: 'Talk to our advisors to find the right AI learning path for you.',
    ctaTitle: 'Get ready for the AI-powered world',
    featuresTitle: 'Three core pillars',
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
      badge: "Hamoon's Dedicated AI Curriculum",
      title: 'From Learning Concepts to Building the Future',
      body: "Learning AI requires a structured, step-by-step path. Many existing educational resources — while valuable — often lack a coherent structure and a clear learning path. At Hamoon, our AI curriculum was designed after studying international courses and resources from several countries, including Iran, Canada, and India. By analyzing existing teaching methods and specialized resources, we've worked to build a coherent, understandable path for learners.",
    },
    approach: {
      title: 'Our Teaching Approach',
      lead: "The AI learning path at Hamoon begins with the foundations of computational thinking and moves toward more advanced concepts:",
      steps: [
        { title: 'Algorithmic Thinking & Problem Solving', desc: 'Students first learn how to analyze problems, design solution steps, and think like a computer scientist.' },
        { title: 'Understanding Computers & the Digital World', desc: "Understanding how machines and computer systems work, what data is, and technology's role in daily life — the foundation for entering the world of AI." },
        { title: 'Algorithms & Programming', desc: 'Learning commands, sequences, algorithms, patterns, loops, and programming concepts through hands-on, project-based activities.' },
        { title: 'Entering the World of AI', desc: 'Introducing core AI concepts, machine learning, data, and real-world AI applications today.' },
      ],
    },
    books: {
      title: "Hamoon's Dedicated AI Textbooks",
      body: "To build a coherent learning path, Hamoon's dedicated AI textbook series is currently being authored. These books combine credible international resources, real teaching experience, and students' actual needs to deliver structured AI learning from beginner to advanced level. Hamoon's books are produced in both Persian and English editions. The English edition is designed to prepare students for international learning paths and competitions. Alongside the core concepts, every chapter includes:",
      bullets: ['Clear learning objectives', 'Practical examples', 'Hands-on activities', 'Analytical exercises', 'Lab projects'],
      closing: "— so students aren't just consumers of technology, but gain the ability to build and create with it.",
    },
    projectBased: {
      title: 'Project-Based Learning',
      body: "At Hamoon, AI isn't taught through explanation alone; learners deepen their understanding through hands-on activities, building projects, and direct experience. Our goal is to raise a generation that can understand tomorrow's technologies, use them, and one day become the creators of those technologies.",
    },
  },
} as const;

function scrollToConsult() {
  document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' });
}

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
                <button type="button" className="btn-primary" onClick={scrollToConsult}>{d.consultCta}</button>
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

      {/* ── Curriculum detail ── */}
      <section>
        <div className="section">
          <div className="ai-curriculum-detail">
            <div className="ai-curriculum-block">
              <h3 className="ai-curriculum-block-title">{d.approach.title}</h3>
              <p className="section-body">{d.approach.lead}</p>
              <ol className="ai-step-list">
                {d.approach.steps.map((s, i) => (
                  <li key={s.title} className="ai-step">
                    <span className="ai-step-num">{i + 1}</span>
                    <div className="ai-step-body">
                      <div className="ai-step-title">{s.title}</div>
                      <p className="ai-step-desc">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="ai-curriculum-block">
              <h3 className="ai-curriculum-block-title">{d.books.title}</h3>
              <p className="section-body">{d.books.body}</p>
              <ul className="cdp-bullets">
                {d.books.bullets.map(b => (
                  <li key={b} className="cdp-bullet">
                    <span className="cdp-bullet-dot" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="section-body">{d.books.closing}</p>
            </div>

            <div className="ai-curriculum-block">
              <h3 className="ai-curriculum-block-title">{d.projectBased.title}</h3>
              <p className="section-body">{d.projectBased.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Consultation form ── */}
      <Consultation department="Artificial Intelligence" />
    </>
  );
}
