'use client';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='container mx-auto py-8 md:py-16 max-w-6xl'>
      <div className='flex justify-center px-4'>
        <div className='w-full max-w-2xl border-2 md:border-4 border-primary rounded-2xl md:rounded-3xl p-8 md:p-16 lg:p-32 text-center shadow-lg shadow-neutral-600'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-600 mb-4'>
            hiya, i&apos;m <span className='gradient-flow'>tyler!</span>
          </h1>

          <p className='text-lg md:text-xl text-gray-600 mb-6'>
            silly coder and beginner artist
          </p>

          <div className='h-4 md:h-8'></div>

          <div className='flex justify-center space-x-4 md:space-x-6'>
            <Link
              href='https://github.com/conjureme'
              className='text-gray-600 hover:text-primary transition-colors duration-200 tooltip'
              data-tip='terrible coding practices ahead'
              target='_blank'
            >
              <Icon
                icon='mdi:github-box'
                width={48}
                height={48}
                className='md:w-16 md:h-16 hover:scale-105 active:scale-90 duration-250'
              />
            </Link>
            <Link
              href='https://x.com/caniacsauce'
              className='text-gray-600 hover:text-primary transition-colors duration-200 tooltip'
              data-tip='the website formerly known as twitter'
              target='_blank'
            >
              <Icon
                icon='mdi:twitter-box'
                width={48}
                height={48}
                className='md:w-16 md:h-16 hover:scale-105 active:scale-90 duration-250'
              />
            </Link>
            <Link
              href='https://steamcommunity.com/id/tyster1/'
              className='text-gray-600 hover:text-primary transition-colors duration-200 tooltip'
              data-tip={`don't check my skyrim hours`}
              target='_blank'
            >
              <Icon
                icon='mdi:steam-box'
                width={48}
                height={48}
                className='md:w-16 md:h-16 hover:scale-105 active:scale-90 duration-250'
              />
            </Link>
            <Link
              href='https://discord.gg/rn9j69ApJQ'
              className='text-gray-600 hover:text-primary transition-colors duration-200 tooltip'
              data-tip='there was no box icon for this :('
              target='_blank'
            >
              <Icon
                icon='cbi:discord'
                width={48}
                height={48}
                className='md:w-16 md:h-16 hover:scale-105 active:scale-90 duration-250'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
