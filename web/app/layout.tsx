import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '長者互動陪伴機器人 × AI Brain — 90 天 MVP 規劃書',
  description: '長者互動陪伴機器人 × AI Brain — 90 天 MVP 與商業模式規劃書。給華碩 AI 代理人 / 服務型機器人主管 review 用途。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
