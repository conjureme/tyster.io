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
    <div className='min-h-screen flex items-center'>
      <div className='container mx-auto px-4 py-8 max-w-4xl mt-16 md:mt-0'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='gradient-flow'>anti-domo</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            a discord bot that automatically bans users who use domoAI
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* what it does */}
          <div className='card bg-base-100 shadow-lg border border-gray-200'>
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
          <div className='card bg-base-100 shadow-lg border border-gray-200'>
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

        {/* important notes */}
        <div className='card bg-red-50 border border-red-200 mb-8'>
          <div className='card-body'>
            <h2 className='card-title text-2xl mb-4 flex items-center gap-2 text-red-700'>
              <Icon icon='mdi:alert-circle' className='text-red-500' />
              important setup notes
            </h2>
            <ul className='space-y-2 text-red-700'>
              <li className='flex items-start gap-2'>
                <Icon icon='mdi:arrow-right' className='mt-1 flex-shrink-0' />
                <span>
                  &apos;use external apps&apos; permission must be enabled in
                  your server
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Icon icon='mdi:arrow-right' className='mt-1 flex-shrink-0' />
                <span>
                  the bot must have a hoisted role above other member roles
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <Icon icon='mdi:arrow-right' className='mt-1 flex-shrink-0' />
                <span>
                  bot needs read messages, manage messages, and ban member
                  permissions
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* action buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            href='https://discord.com/oauth2/authorize?client_id=1374962695698386985'
            target='_blank'
            className='btn bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2'
          >
            <Icon icon='simple-icons:discord' width={24} height={24} />
            invite bot to server
          </Link>

          <Link
            href='https://github.com/conjureme/anti-domo'
            target='_blank'
            className='btn bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2'
          >
            <Icon icon='mdi:github' width={24} height={24} />
            view source code
          </Link>
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
