import type { Metadata } from 'next';
import ClientLayout from './client-layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Earthly Herbs',
  description: 'earthly herbs store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir={'ltr'} lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
