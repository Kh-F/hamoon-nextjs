'use client';

import Link from 'next/link';

export type DepartmentArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

type Props = {
  department: 'ai' | 'english' | 'mathematics';
  lang: 'fa' | 'en';
  articles: DepartmentArticle[];
};

const labels = {
  fa: {
    title: 'مقالات و مطالب آموزشی',
    subtitle: 'مطالب کاربردی برای گسترش دانش و تقویت مهارت‌ها',
    read: 'مطالعه مقاله',
    empty: 'مقاله‌ای برای نمایش وجود ندارد.',
  },
  en: {
    title: 'Articles & Learning Resources',
    subtitle: 'Explore useful ideas and strengthen your skills',
    read: 'Read article',
    empty: 'No articles are available yet.',
  },
};

export default function DepartmentArticles({
  department,
  lang,
  articles,
}: Props) {
  const t = labels[lang];

  return (
    <section
      className="dept-articles"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
      aria-labelledby={`articles-title-${department}`}
    >
      <div className="dept-articles-inner">
        <header className="dept-articles-header">
          <span className="dept-articles-eyebrow">
            {lang === 'fa' ? 'مجله هامون' : 'HAMOON JOURNAL'}
          </span>

          <h2
            id={`articles-title-${department}`}
            className="dept-articles-title"
          >
            {t.title}
          </h2>

          <p className="dept-articles-subtitle">{t.subtitle}</p>
        </header>

        {articles.length > 0 ? (
          <div className="dept-articles-grid">
            {articles.map((article) => (
              <article
                className="dept-article-card"
                key={article.slug}
              >
                <div className="dept-article-content">
                  <span className="dept-article-category">
                    {article.category}
                  </span>

                  <h3 className="dept-article-title">
                    {article.title}
                  </h3>

                  <p className="dept-article-excerpt">
                    {article.excerpt}
                  </p>

                  <div className="dept-article-footer">
                    <span className="dept-article-read-time">
                      {article.readTime}
                    </span>

                    <Link
                      className="dept-article-link"
                      href={`/departments/${department}/articles/${article.slug}`}
                    >
                      {t.read} <span aria-hidden="true">←</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>{t.empty}</p>
        )}
      </div>
    </section>
  );
}
