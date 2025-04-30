import type { Metadata } from 'next';

import Hero from '@/components/Hero';
import { CircleArrowDown } from 'lucide-react';

export const metadata: Metadata = {
  description: 'the home page of a silly website living in the silly world.',
};

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='h-16'></div>
      <div className='mt-8 md:mt-16'>
        <Hero />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 mb-auto px-4 text-center'>
        <CircleArrowDown size={36} className='animate-bounce' />
        <span className='text-gray-700 text-3xl font-bold'>
          this website is still in construction... check back soon!
        </span>
      </div>
    </div>
  );
}
