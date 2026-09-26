'use client';

import { useLang } from '@/context/LangContext';
import Link from 'next/link';

export default function WorkshopsContent() {
  const { lang } = useLang();
  const isFa = lang === 'fa';

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          {isFa ? 'کارگاه‌های تخصصی مؤسسه هامون' : 'Hamoon Institute Special Workshops'}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {isFa 
            ? 'کارگاه‌های عملی و تخصصی در حوزه‌های هوش مصنوعی، برنامه‌نویسی و طراحی وب برای نسل آینده.'
            : 'Practical and specialized workshops in artificial intelligence, programming, and web design for the next generation.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Workshop Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col p-6">
          <h3 className="text-xl font-bold mb-3">
            {isFa ? 'کارگاه هوش مصنوعی و بینایی ماشین' : 'AI & Computer Vision Workshop'}
          </h3>
          <p className="text-gray-600 mb-6 flex-1">
            {isFa 
              ? 'یادگیری مفاهیم تشخیص چهره، تشخیص حرکت و پردازش تصویر با ابزارهای نوین.'
              : 'Learning face detection, pose estimation, and image processing concepts with modern tools.'}
          </p>
          <Link 
            href="/workshops/ai-kids"
            className="inline-block text-center bg-primary text-white py-2 px-4 rounded-lg font-medium transition hover:opacity-90"
          >
            {isFa ? 'اطلاعات بیشتر و ثبت‌نام' : 'Learn More & Register'}
          </Link>
        </div>

        {/* Workshop Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col p-6">
          <h3 className="text-xl font-bold mb-3">
            {isFa ? 'کارگاه طراحی وب و اتوماسیون' : 'Web Design & Automation Workshop'}
          </h3>
          <p className="text-gray-600 mb-6 flex-1">
            {isFa 
              ? 'ساخت وب‌سایت‌های مدرن و راه‌اندازی فرآیندهای خودکار با ابزارهای پیشرفته.'
              : 'Building modern websites and setting up automated workflows with advanced tools.'}
          </p>
          <Link 
            href="/workshops/web-design"
            className="inline-block text-center bg-primary text-white py-2 px-4 rounded-lg font-medium transition hover:opacity-90"
          >
            {isFa ? 'اطلاعات بیشتر و ثبت‌نام' : 'Learn More & Register'}
          </Link>
        </div>

        {/* Workshop Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col p-6">
          <h3 className="text-xl font-bold mb-3">
            {isFa ? 'کارگاه تربیت مربی هوش مصنوعی' : 'AI Teacher Training Workshop'}
          </h3>
          <p className="text-gray-600 mb-6 flex-1">
            {isFa 
              ? 'آموزش تخصصی برای معلمان و مربیانی که می‌خواهند هوش مصنوعی را به کودکان تدریس کنند.'
              : 'Specialized training for educators who want to teach AI concepts to children.'}
          </p>
          <Link 
            href="/workshops/teacher-training"
            className="inline-block text-center bg-primary text-white py-2 px-4 rounded-lg font-medium transition hover:opacity-90"
          >
            {isFa ? 'اطلاعات بیشتر و ثبت‌نام' : 'Learn More & Register'}
          </Link>
        </div>
      </div>
    </div>
  );
}