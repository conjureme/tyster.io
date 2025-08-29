import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'moemoe - tyster.io',
  description: 'the silliest AI the world has ever seen',
  keywords: ['discord', 'bot', 'AI'],
};

export default function Moemoe() {
  return (
    <div className='min-h-screen flex items-center bg-white'>
      <div className='container mx-auto px-4 py-8 max-w-4xl mt-16 md:mt-0'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='text-base-content'>moemoe discord bot</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8'>docs coming soon !!</p>
        </div>
      </div>
    </div>
  );
}
