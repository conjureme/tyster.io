import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'tyster.io',
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
    title: 'tyster.io',
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
    title: "tyster.io - tyler's personal website",
    description:
      'personal website of tyster- an out of touch coder and art enthusiast, filled with his projects and ugly art',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body className='min-h-screen h-full m-0 flex justify-center bg-white font-graphie'>
        <div className='h-full max-w-6xl'>{children}</div>
      </body>
    </html>
  );
}
