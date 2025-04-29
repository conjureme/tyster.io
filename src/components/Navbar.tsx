'use client';
import { useState, useEffect } from 'react';
import { MousePointer2 } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / windowHeight;
      setScrollProgress(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 mx-auto z-50 flex justify-between items-center w-full py-4 glass'>
      <div className='flex justify-between items-center w-full max-w-6xl mx-auto'>
        {/* left side */}
        <div className='flex items-center space-x-4'>
          <div className='flex items-center justify-center'>
            <div className='relative w-12 h-10'>
              <Link href='/'>
                <Image
                  src='/frieren-plush.png'
                  alt='logo'
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`
          relative flex items-center justify-between
          bg-white rounded-full
          border border-gray-200 shadow-sm
          transition-all duration-500 ease-in-out py-1
          ${
            isHovered
              ? 'w-96 px-6 animate-navbar-expand'
              : 'w-48 px-4 animate-navbar-collapse'
          }
        `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* left icon */}
          <div className='flex items-center justify-center text-gray-800'>
            <MousePointer2 size={32} className='transition-all duration-500' />
          </div>

          {/* center nav */}
          <div
            className={`
            absolute left-1/2 transform -translate-x-1/2
            flex items-center space-x-6
            transition-all duration-100
            ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
          `}
          >
            <Link
              href='/'
              className='flex items-center space-x-1 px-1 py-2 text-gray-700 hover:text-gray-900 transition-colors'
            >
              <span className='text-md font-medium'>shop</span>
            </Link>
            <Link
              href='/'
              className='flex items-center space-x-1 px-1 py-2 text-gray-700 hover:text-gray-900 transition-colors'
            >
              <span className='text-md font-medium'>home</span>
            </Link>
            <Link
              href='/'
              className='flex items-center space-x-1 px-1 py-2 text-gray-700 hover:text-gray-900 transition-colors'
            >
              <span className='text-md font-medium'>dsaver</span>
            </Link>
          </div>

          {/* right Icon */}
          <div className='flex items-center justify-center text-gray-800'>
            <div className='relative w-8 h-8'>
              {/* background circle */}
              <svg className='w-8 h-8' viewBox='0 0 32 32'>
                <circle
                  cx='16'
                  cy='16'
                  r='14'
                  fill='none'
                  stroke='#e5e7eb'
                  strokeWidth='2'
                />
              </svg>

              {/* progress circle */}
              <svg
                className='absolute top-0 left-0 w-8 h-8 -rotate-90 transition-all duration-300'
                viewBox='0 0 32 32'
              >
                <circle
                  cx='16'
                  cy='16'
                  r='14'
                  fill='none'
                  stroke='#4b5563'
                  strokeWidth='2'
                  strokeDasharray={`${2 * Math.PI * 14}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 14 * (1 - scrollProgress)
                  }`}
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes navbar-expand {
            0% {
              width: 12rem;
            }
            70% {
              width: 25rem;
            }
            85% {
              width: 23rem;
            }
            100% {
              width: 24rem;
            }
          }

          @keyframes navbar-collapse {
            0% {
              width: 24rem;
            }
            30% {
              width: 10rem;
            }
            70% {
              width: 13rem;
            }
            100% {
              width: 12rem;
            }
          }

          .animate-navbar-expand {
            animation: navbar-expand 0.6s forwards;
          }

          .animate-navbar-collapse {
            animation: navbar-collapse 0.6s forwards;
          }
        `}</style>
        {/* right side */}
        <div className='flex items-center space-x-4'>
          <div className='flex items-center justify-center'>
            <h1 className='font-bold text-gray-400 tracking-wider'>this</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
