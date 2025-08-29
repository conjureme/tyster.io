import { Metadata } from 'next';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'anti-domo discord bot - tyster.io',
  description:
    'automatically ban users who use domoAI in your discord server. protect your community from unwanted AI image generation.',
  keywords: ['discord', 'bot', 'domoAI', 'anti-AI', 'moderation', 'ban'],
};

export default function AntiDomo() {
  return (
    <div className='min-h-screen flex items-center bg-white'>
      <div className='container mx-auto px-4 py-8 max-w-4xl mt-16 md:mt-0'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='text-base-content'>anti-domo</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            a discord bot that automatically bans users who use domoAI
          </p>
        </div>

        <div className='card bg-red-50 border border-red-200 mb-8'>
          <div className='card-body'>
            <h2 className='card-title text-2xl mb-4 flex items-center gap-2 text-red-700'>
              <Icon icon='mdi:alert-circle' className='text-red-500' />
              bot discontinued!
            </h2>
            <ul className='space-y-2 text-red-700'>
              <li className='flex items-start gap-2'>
                <Icon icon='mdi:arrow-right' className='mt-1 flex-shrink-0' />
                <span>
                  due to security risks involved with using this bot, it will be
                  removed from active servers and shut down!
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Icon icon='mdi:arrow-right' className='mt-1 flex-shrink-0' />
                <span>
                  spammers and other bad actors are able to utilize the{' '}
                  <span>use external apps</span> permission the bot requires
                  enabled to abuse your server
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Icon icon='mdi:arrow-right' className='mt-1 flex-shrink-0' />
                <span>
                  this is a risk that simply outweighs the benefit from using
                  this bot. i HIGHLY recommend disabling the use external apps
                  permission on your server and default roles and instead focus
                  on advocating against AI usage.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Icon icon='mdi:arrow-right' className='mt-1 flex-shrink-0' />
                <span>
                  feel free to derive the logic and come up with your own
                  solutions if possible! i just won&apos;t be providing hosting,
                  support, or any updates for it. perhaps i&apos;ll (or someone
                  smarter than me) will come up with something better.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* what it does */}
          <div className='card bg-base-100 shadow-lg border border-gray-200 text-base-content'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4 flex items-center gap-2'>
                <Icon icon='mdi:shield-check' className='text-green-500' />
                what it does
              </h2>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start gap-2'>
                  <Icon
                    icon='mdi:check-circle'
                    className='text-green-500 mt-1 flex-shrink-0'
                  />
                  <span>detects domoAI messages instantly</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Icon
                    icon='mdi:check-circle'
                    className='text-green-500 mt-1 flex-shrink-0'
                  />
                  <span>deletes outputed AI-generated content immediately</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Icon
                    icon='mdi:check-circle'
                    className='text-green-500 mt-1 flex-shrink-0'
                  />
                  <span>automatically bans the user who triggered it</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Icon
                    icon='mdi:check-circle'
                    className='text-green-500 mt-1 flex-shrink-0'
                  />
                  <span>helps protect artists from unauthorized AI usage</span>
                </li>
              </ul>
            </div>
          </div>

          {/* why it exists */}
          <div className='card bg-base-100 shadow-lg border border-gray-200 text-base-content'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4 flex items-center gap-2'>
                <Icon icon='mdi:lightbulb' className='text-yellow-500' />
                why it exists
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                domoAI is an external app that lets anyone
                transform/&quot;restyle&quot; images using AI - including art
                posted by people who don&apos;t consent to their work being used
                for it. this bot aims to help protect artists, though it&apos;s
                unfortunately a minimal defense.
              </p>
              <div className='mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg'>
                <p className='text-sm text-yellow-800 font-medium'>
                  💡 if you&apos;re an artist posting online, always watermark
                  your work!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* action buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <div className='btn bg-gray-400 text-gray-600 px-8 py-3 text-lg font-semibold rounded-lg cursor-not-allowed flex items-center gap-2 opacity-60'>
            <Icon icon='simple-icons:discord' width={24} height={24} />
            <span className='line-through'>invite bot to server</span>
            <span className='text-sm font-normal'>(discontinued)</span>
          </div>

          <Link
            href='https://github.com/conjureme/anti-domo'
            target='_blank'
            className='btn bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2'
          >
            <Icon icon='mdi:github' width={24} height={24} />
            view source code
          </Link>
        </div>

        <div className='text-center mt-8'>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mb-4'>
            <Link
              href='/anti-domo/privacy-policy'
              className='text-gray-600 hover:text-gray-800 underline text-sm'
            >
              privacy policy
            </Link>
            <Link
              href='/anti-domo/terms-of-service'
              className='text-gray-600 hover:text-gray-800 underline text-sm'
            >
              terms of service
            </Link>
          </div>
        </div>

        {/* footer note */}
        <div className='text-center mt-12'>
          <p className='text-gray-500 text-sm'>
            this bot is open source and free to use. feel free to host it
            yourself or contribute improvements!
          </p>
        </div>
      </div>
    </div>
  );
}
