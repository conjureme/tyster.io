import type { Metadata } from 'next';
import './globals.css';

import { Montserrat, Work_Sans, Space_Grotesk } from 'next/font/google';

export const metadata: Metadata = {
  title: 'home - tyster.io',
  description: "tyler's very unprofessional and silly personal website.",
  keywords: [
    'tyster',
    'tyler',
    'silly',
    'unprofessional portfolio',
    'emoji downloader',
    'wannabe coder',
  ],
  openGraph: {
    title: 'home - tyster.io',
    siteName: 'tyster.io',
    description:
      'personal website of tyster- an out of touch coder and art enthusiast, filled with his projects and ugly art',
    url: 'https://tyster.io/',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tyster.io/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: "tyster.io - tyler's personal website",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@caniacsauce',
    title: 'home - tyster.io',
    description:
      'personal website of tyster- an out of touch coder and art enthusiast, filled with his projects and ugly art',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-workSans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`min-h-screen h-full m-0 flex justify-center bg-white ${montserrat.className} ${workSans.variable} ${spaceGrotesk.variable}`}
      >
        <div className='h-full w-full'>{children}</div>
      </body>
    </html>
  );
}
