import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'tyster.io',
  description: 'a silly website living in a silly world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <head>
        <link
          rel='preload'
          href='https://use.typekit.net/rgg0oon.css'
          as='style'
        />
        <link rel='stylesheet' href='https://use.typekit.net/rgg0oon.css' />
      </head>
      <body className='min-h-screen h-full m-0 flex justify-center bg-white font-graphie'>
        <div className='h-full max-w-6xl'>{children}</div>
      </body>
    </html>
  );
}
