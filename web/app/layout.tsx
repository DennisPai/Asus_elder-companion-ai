import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '長者陪伴 AI Robot — 90 Day MVP',
  description: '長者互動陪伴機器人 × AI Brain — 90 天 MVP + 商業模式 demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
