import Hero from '@/components/Hero';
import { Icon } from '@iconify/react';

import Showcase from '@/components/Showcase';

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
          </div>
        </div>
        <Showcase />
      </div>
    </div>
  );
}
