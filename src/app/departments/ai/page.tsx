import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import AIContent from './Content';

export const metadata: Metadata = {
  title: 'بخش هوش مصنوعی | AI Department — Hamoon Academy',
  description: 'آشنایی با هوش مصنوعی و ابزارهای نوین برای نوجوانان و بزرگسالان — AI literacy & tools for teens and adults',
};

export default function AIDepartmentPage() {
  return (
    <PageShell>
      <AIContent />
    </PageShell>
  );
}
