import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'tyster.io',
  description: 'a silly website living in a silly world.',
  openGraph: {
    title: 'tyster.io',
    siteName: 'tyster.io',
    description: 'the silliest of all silly websites living in the silly world',
    url: 'https://tyster.io/',
    locale: 'en_US',
    type: 'website',
    images: ['https://tyster.io/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
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
