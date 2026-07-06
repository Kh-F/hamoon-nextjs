import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import MathContent from './Content';

export const metadata: Metadata = {
  title: 'بخش ریاضی | Mathematics Department — Hamoon Academy',
  description: 'یادگیری مفهومی ریاضی با رویکرد حل خلاقانه مسئله برای کودکان و نوجوانان — Conceptual math for kids & teens',
};

export default function MathDepartmentPage() {
  return (
    <PageShell>
      <MathContent />
      <ElevenLabsWidget agentId="agent_0001kw4wt7v5f6v80qda85r31pv8" />
    </PageShell>
  );
}
