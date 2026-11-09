
'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import type { ArticleContent } from './articleContent';
import type { DepartmentArticle } from './DepartmentArticles';

type Props = {
  content: ArticleContent;
  articleFa: DepartmentArticle;
  articleEn: DepartmentArticle;
};

const departmentNames = {
  fa: {
    ai: 'هوش مصنوعی',
    english: 'زبان انگلیسی',
    mathematics: 'ریاضیات',
  },
  en: {
    ai: 'Artificial Intelligence',
    english: 'English',
    mathematics: 'Mathematics',
  },
};

const labels = {
  fa: {
    home: 'بازگشت به دپارتمان',
    intro: 'مقدمه',
    takeaway: 'جمع‌بندی',
    articles: 'مقالات آموزشی',
    notFound: 'محتوایی برای نمایش وجود ندارد.',
    author: 'نویسنده: دکتر خدیجه فتحعلی‌خانی',
  },
  en: {
    home: 'Back to department',
    intro: 'Introduction',
    takeaway: 'Key Takeaway',
    articles: 'Learning Resources',
    notFound: 'No content is available.',
    author: 'Author: Dr. Khadijeh Fathalikhani',
  },
};

function renderParagraph(text: string) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;

  return text.split(urlPattern).map((part, index) => {
    if (!/^https?:\/\//i.test(part)) return part;

    const url = part.replace(/[.,؛،)]+$/u, '');
    const trailing = part.slice(url.length);

    return (
      <span key={`${index}-${part}`}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
        {trailing}
      </span>
    );
  });
}

export default function ArticleDetail({
  content,
  articleFa,
  articleEn,
}: Props) {
  const { lang } = useLang();
  const fa = lang === 'fa';
  const article = fa ? articleFa : articleEn;
  const t = labels[lang];
  const department = content.department;

  return (
    <main className="article-page" dir={fa ? 'rtl' : 'ltr'}>
      <div className="article-page-inner">
        <nav
          className="article-breadcrumb"
          aria-label={fa ? 'مسیر صفحه' : 'Breadcrumb'}
        >
          <Link href={`/departments/${department}`}>
            {t.home}: {departmentNames[lang][department]}
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/departments/${department}#articles`}>
            {t.articles}
          </Link>
        </nav>

        <header className="article-header">
          <span className="dept-article-category">{article.category}</span>

          <h1 className="article-title">{article.title}</h1>

          <p className="article-excerpt">{article.excerpt}</p>

          {department === 'ai' && (
            <div className="article-author">
              <span className="article-author-name">{t.author}</span>

              <div className="article-author-links">
                <a
                  className="author-link author-link-scholar"
                  href="https://scholar.google.com/citations?user=vNX16Z4AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 9.2 12 4l10 5.2L12 14 2 9.2Z" />
                    <path d="M6 11.4v5.1c3.7 3 8.3 3 12 0v-5.1" />
                    <path d="M22 9.2v6" />
                  </svg>
                  Google Scholar
                </a>

                <a
                  className="author-link author-link-linkedin"
                  href="https://www.linkedin.com/in/khadijeh-fathalikhani-405b0627"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          )}

          {department === 'mathematics' && (
            <div className="article-author">
              <span className="article-author-name">
                {fa ? 'نویسنده: دکتر اعظم بابایی' : 'Author: Dr. Azam Babaei'}
              </span>

              <div className="article-author-links">
                <a
                  className="author-link author-link-scholar"
                  href="https://scholar.google.com/citations?user=Z7O0siUAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 9.2 12 4l10 5.2L12 14 2 9.2Z" />
                    <path d="M6 11.4v5.1c3.7 3 8.3 3 12 0v-5.1" />
                    <path d="M22 9.2v6" />
                  </svg>
                  Google Scholar
                </a>
              </div>
            </div>
          )}

          <div className="article-meta">
            <span>{content.publicationDate[lang]}</span>
            <span aria-hidden="true"> · </span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <article className="article-body">
          <section className="article-introduction">
            <h2>{t.intro}</h2>
            <p>{renderParagraph(content.introduction[lang])}</p>
          </section>

          {content.sections.map((section, index) => (
            <section
              className="article-section"
              key={`${index}-${section.heading[lang]}`}
            >
              <h2>{section.heading[lang]}</h2>

              {section.paragraphs[lang].map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{renderParagraph(paragraph)}</p>
              ))}

              {section.bullets?.[lang] && (
                <ul>
                  {section.bullets[lang].map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{renderParagraph(bullet)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className="article-takeaway">
            <h2>{t.takeaway}</h2>
            <p>{renderParagraph(content.takeaway[lang])}</p>
          </aside>
        </article>

        <footer className="article-bottom">
          <Link
            className="article-back-link"
            href={`/departments/${department}#articles`}
          >
            ← {t.articles}
          </Link>
        </footer>
      </div>
    </main>
  );
}
