import Dsaver from '@/components/Dsaver';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'discord emoji & sticker mass downloader - tyster.io',
  description:
    'download all emojis and stickers from your discord server in a few steps with this incredible awesome tool',
  keywords: ['discord', 'emoji', 'sticker', 'downloader', 'tool', 'utility'],
};

export default function dsaver() {
  return (
    <div className='min-h-screen flex items-center'>
      <div className='flex-col justify-center'>
        <main>
          <Dsaver />
        </main>
      </div>
    </div>
  );
}
