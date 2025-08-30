import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export const metadata: Metadata = {
  title: 'moemoe documentation - tyster.io',
  description: 'documentation hub for all moemoe modules',
  keywords: ['moemoe', 'discord', 'bot', 'AI', 'documentation'],
};

export default function MoemoeDocsLanding() {
  return (
    <div className='min-h-screen flex items-center bg-white'>
      <div className='container mx-auto px-4 py-8 max-w-4xl mt-16 md:mt-0'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='text-base-content'>moemoe documentation</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            explore documentation for moemoe
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* discord bot module */}
          <Link
            href='/moemoe/docs/discord'
            className='card shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200 group'
          >
            <div className='card-body'>
              <h2 className='card-title text-2xl text-base-content mb-4 flex items-center gap-2 group-hover:text-primary transition-colors'>
                discord bot
              </h2>
              <p className='text-gray-700'>
                a super awesome discord bot with AI integration, function
                calling, and additional configs for power users.
              </p>
              <div className='mt-4'>
                <span className='text-sm text-primary flex items-center gap-1'>
                  view documentation
                  <Icon icon='mdi:arrow-right' />
                </span>
              </div>
            </div>
          </Link>

          {/* placeholder for future modules */}
          <div className='card shadow-lg border border-gray-200 opacity-50'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4 flex items-center gap-2 text-gray-400'>
                additional modules
              </h2>
              <p className='text-gray-400'>
                additional moemoe modules coming soon...
              </p>
              <div className='mt-4'>
                <span className='text-sm text-gray-400'>coming soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center'>
          <Link
            href='/'
            className='text-gray-600 hover:text-gray-800 underline text-sm'
          >
            ← back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
