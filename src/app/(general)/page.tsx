import type { Metadata } from 'next';

import Hero from '@/components/Hero';
import { Icon } from '@iconify/react';

export const metadata: Metadata = {
  openGraph: {
    title: 'tyster.io',
    siteName: 'tyster.io',
    description: 'the silliest of all silly websites living in the silly world',
    url: 'https://tyster.io/',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <div className='min-h-screen flex flex-col items-center justify-center px-4'>
          <Hero />

          <div className='flex flex-col items-center justify-center gap-8 mt-16 text-center'>
            <Icon
              icon='mdi:arrow-down-circle'
              width={36}
              height={36}
              className='animate-bounce text-gray-600'
            />
            <span className='text-gray-600 text-3xl font-bold'>
              this website is still under construction... check back soon!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
