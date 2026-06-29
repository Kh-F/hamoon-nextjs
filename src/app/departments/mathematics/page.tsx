import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import MathContent from './Content';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';

export const metadata: Metadata = {
  title: 'بخش ریاضی | Mathematics Department — Hamoon Academy',
  description: 'یادگیری مفهومی ریاضی با رویکرد حل خلاقانه مسئله برای کودکان و نوجوانان — Conceptual math for kids & teens',
};

export default function MathDepartmentPage() {
  return (
    <>
      <PageShell>
        <MathContent />
      </PageShell>
      <ElevenLabsWidget />
    </>
  );
}
