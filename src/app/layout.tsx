import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  weight: '600',
  subsets: ['cyrillic'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
