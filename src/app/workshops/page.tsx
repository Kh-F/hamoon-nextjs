import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import WorkshopsContent from './Content';

export const metadata: Metadata = {
  title: 'کارگاه‌های ویژه | Workshops — Hamoon Academy',
  description: 'کارگاه‌های تخصصی طراحی وب، اتوماسیون، تربیت مربی و معرفی کتاب — Special workshops: web design, automation, teacher training & book clubs',
};

export default function WorkshopsPage() {
  return (
    <PageShell>
      <WorkshopsContent />
      <ElevenLabsWidget agentId="agent_9301kw4xp6sjf9h8p82vh766myv6" />
    </PageShell>
  );
}
