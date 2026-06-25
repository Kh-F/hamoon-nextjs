import type { Metadata } from 'next';
import { Vazirmatn, Lexend } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'آکادمی هامون | Hamoon Academy',
  description: 'یادگیری هوشمند برای نسل آینده — Smart learning for the next generation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} ${lexend.variable}`}>
        {children}
        <elevenlabs-convai agent-id="agent_6901kvx2pxa4evqsz6bfm578n0a0" />
        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
