import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Next.js로 만든 투두리스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
