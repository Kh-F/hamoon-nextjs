import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import EnglishContent from './Content';

export const metadata: Metadata = {
  title: 'بخش زبان انگلیسی | English Department — Hamoon Academy',
  description: 'آموزش زبان انگلیسی با رویکرد ارتباط‌محور برای نوجوانان و بزرگسالان — Teen & adult English, communicative approach',
};

export default function EnglishDepartmentPage() {
  return (
    <PageShell>
      <EnglishContent />
      <ElevenLabsWidget agentId="agent_1001kw4vb0hjf45ayky9a9js9hnv" />
    </PageShell>
  );
}
