import './globals.css';
import localFont from 'next/font/local';
import TanstackQueryProviders from '@/provider/tanstack-query-provider';
import ToastProvider from '@/provider/toast-provider';
import LayoutWrapper from '@/shared/layout/layout-wrapper';
import Header from '@/shared/layout/header';
import Footer from '@/shared/layout/footer';

import type { Metadata } from 'next';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DODO',
  description: '쉽고 빠르게 할 일을 관리하는 서비스, DODO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>
        <TanstackQueryProviders>
          <ToastProvider>
            <LayoutWrapper>
              <Header />
              <main className='flex-1 px-4 py-2'>{children}</main>
              <Footer />
            </LayoutWrapper>
          </ToastProvider>
        </TanstackQueryProviders>
      </body>
    </html>
  );
}
