'use client';
import PixelArtEyes from './Eyes';

export default function Hero() {
  return (
    <div className='container mx-auto py-16 max-w-6xl'>
      <div className='flex flex-col md:flex-row items-center justify-between  px-4 md:px-6'>
        {/* left */}
        <div className='md:w-1/2 mb-10 md:mb-0 md:pr-10'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            hiya, my name is tyler!
          </h1>
          <p className='text-gray-700 text-lg mb-8'>
            this will be a totally awesome biography about myself where i tell
            you what i am and what i offer. unfortunately, i am not that great
            at writing about myself yet, so this will have to do!
          </p>
          <div className='bg-gray-100 border-l-4 border-gray-500 py-2 px-4 rounded'>
            <p className='text-gray-700 italic'>
              "this will be a banger quote one day..."
            </p>
          </div>
        </div>

        {/* right */}
        <div className='md:w-1/2 flex justify-end'>
          <div className='relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg'>
            <PixelArtEyes />
          </div>
        </div>
      </div>
    </div>
  );
}
