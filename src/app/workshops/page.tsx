import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import WorkshopsContent from './Content';

export const metadata: Metadata = {
  title: 'کارگاه‌های ویژه | Workshops — Hamoon Academy',
  description: 'کارگاه‌های تخصصی طراحی وب، اتوماسیون، تربیت مربی و معرفی کتاب — Special workshops: web design, automation, teacher training & book clubs',
};

export default function WorkshopsPage() {
  return (
    <PageShell>
      <WorkshopsContent />
    </PageShell>
  );
}
