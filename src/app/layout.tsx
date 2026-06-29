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
  icons: { icon: '/icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} ${lexend.variable}`}>
        {children}
        <Script id="raychat-widget" strategy="afterInteractive">
          {`window.RAYCHAT_TOKEN="0600cb81-098e-4155-8492-4e2e46820d5c";(function(){d=document;s=d.createElement("script");s.src="https://widget-react.raychat.io/install/widget.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>
      </body>
    </html>
  );
}
