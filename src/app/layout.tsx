import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Andres Bonilla',
    template: '%s | Andres Bonilla'
  },
  description: "Hello, my name is Andres Bonilla. I am a software developer and entrepreneur and this is my website",
  keywords: ["andres", "bonilla", "andres bonilla", "andres camilo bonilla", "andreb"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {children}
        <Analytics />
      </body>
    </html>
  )
};
