'use client';

import { Icon } from '@iconify/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-32 pb-8'>
      <div className='mx-auto pt-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center space-y-2'>
            <p className='text-sm text-gray-500'>
              made with{' '}
              <span className='inline-block animate-pulse'>
                <Icon
                  icon='mdi:heart'
                  className='text-red-500 inline'
                  width={16}
                />
              </span>
            </p>
            <p className='text-xs text-gray-400'>© {currentYear} tyster.io</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
