
import { notFound } from 'next/navigation';
import ArticleDetail from '@/components/articles/ArticleDetail';
import { getArticleContent } from '@/components/articles/articleContent';
import { getDepartmentArticles } from '@/components/articles/articleData';

const departments = ['ai', 'english', 'mathematics'] as const;

type Props = {
  params: Promise<{
    department: string;
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { department, slug } = await params;

  if (!departments.includes(department as (typeof departments)[number])) {
    notFound();
  }

  const validDepartment = department as (typeof departments)[number];
  const content = getArticleContent(validDepartment, slug);

  if (!content) {
    notFound();
  }

  const articleFa = getDepartmentArticles(validDepartment, 'fa').find(
    (article) => article.slug === slug,
  );

  const articleEn = getDepartmentArticles(validDepartment, 'en').find(
    (article) => article.slug === slug,
  );

  if (!articleFa || !articleEn) {
    notFound();
  }

  return (
    <ArticleDetail
      content={content}
      articleFa={articleFa}
      articleEn={articleEn}
    />
  );
}
