
import type { DepartmentArticle } from './DepartmentArticles';

type Language = 'fa' | 'en';
type Department = 'ai' | 'english' | 'mathematics';

type LocalizedArticle = {
  slug: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  category: Record<Language, string>;
  readTime: Record<Language, string>;
};

const articles: Record<Department, LocalizedArticle[]> = {
  ai: [
    {
      slug: 'ai-influence-children-choices',
      title: {
        fa: 'وقتی هوش مصنوعی بر انتخاب کودکان اثر می‌گذارد؛ از تلنگرهای پنهان تا تفکر انتقادی',
        en: "When AI Influences Children's Choices: From Subtle Nudges to Critical Thinking",
      },
      excerpt: {
        fa: 'چگونه شیوهٔ بیان و پیشنهادهای هوش مصنوعی ممکن است بر انتخاب کودکان اثر بگذارند و چگونه می‌توان تفکر انتقادی را در آن‌ها تقویت کرد؟',
        en: 'How AI wording and recommendations may influence children’s choices, and how critical thinking can help.',
      },
      category: {
        fa: 'تفکر انتقادی و سواد هوش مصنوعی',
        en: 'Critical Thinking and AI Literacy',
      },
      readTime: { fa: '۱۰ دقیقه مطالعه', en: '10 min read' },
    },
    {
      slug: 'ai-chatbots-as-friends-child-safety',
      title: {
        fa: 'وقتی چت‌بات هوش مصنوعی شبیه یک دوست می‌شود؛ کودکان چگونه از خود محافظت کنند؟',
        en: 'When an AI Chatbot Becomes Like a Friend: How Can Children Protect Themselves?',
      },
      excerpt: {
        fa: 'آشنایی با وابستگی عاطفی به چت‌بات‌ها، نشانه‌های هشداردهنده و راهکارهای محافظت از حریم خصوصی و سلامت کودکان.',
        en: 'Understanding emotional attachment to chatbots, warning signs, privacy, and ways to help children stay safe.',
      },
      category: {
        fa: 'ایمنی کودکان و هوش مصنوعی',
        en: 'Child Safety and AI',
      },
      readTime: { fa: '۱۲ دقیقه مطالعه', en: '12 min read' },
    },
  ],
  english: [],
  mathematics: [],
};

export function getDepartmentArticles(
  department: Department,
  lang: Language,
): DepartmentArticle[] {
  return articles[department].map((article) => ({
    slug: article.slug,
    title: article.title[lang],
    excerpt: article.excerpt[lang],
    category: article.category[lang],
    readTime: article.readTime[lang],
  }));
}
