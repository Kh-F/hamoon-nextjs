import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import AIIntroWorkshopContent from './Content';

export const metadata: Metadata = {
  title: 'آشنایی با دنیای هوش مصنوعی | Workshops — Hamoon Academy',
  description: 'کارگاه رایگان آشنایی با دنیای هوش مصنوعی؛ از ریاضیات تا AI مدرن — Free workshop: Introduction to the world of AI, from mathematics to modern AI',
};

export default function AIIntroWorkshopPage() {
  return (
    <PageShell>
      <AIIntroWorkshopContent />
      <ElevenLabsWidget agentId="agent_9301kw4xp6sjf9h8p82vh766myv6" />
    </PageShell>
  );
}
