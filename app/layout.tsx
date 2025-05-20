import type { Metadata } from 'next';
import './globals.css';
import { aleo, kleeOne } from './fonts';

export const metadata: Metadata = {
  title: 'I am Renzo',
  description: 'This is my personal portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kleeOne.className} ${aleo.className}`}>
      <body className="px-2 lg:px-20">{children}</body>
    </html>
  );
}
