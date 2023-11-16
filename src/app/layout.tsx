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
  keywords: ["andres", "bonilla", "andres bonilla", "andres camilo bonilla", "andreb"],
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
    
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
};
