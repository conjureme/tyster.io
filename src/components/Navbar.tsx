'use client';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

import toast from 'react-hot-toast';

import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div>
      {/* mobile drawer */}
      {isDrawerOpen && (
        <div className='fixed inset-0 z-60'>
          {/* background overlay */}
          <div
            className='absolute inset-0 bg-black/20 backdrop-blur-sm'
            onClick={closeDrawer}
          ></div>

          <div
            className={`absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-lg shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ease-out ${
              isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* header */}
            <div className='flex items-center justify-between py-4 px-6 border-b border-gray-200'>
              <div className='flex items-center gap-3'>
                <span className='text-xl font-bold text-gray-800'>
                  da navigator
                </span>
              </div>
              <button
                onClick={closeDrawer}
                className='p-2 rounded-full hover:bg-gray-100 transition-colors'
                aria-label='Close navigation menu'
              >
                <Icon icon='material-symbols:close' width={28} height={28} />
              </button>
            </div>

            {/* nav items */}
            <nav className='py-4 px-6'>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/'
                    onClick={closeDrawer}
                    className='flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200  py-3 group'
                  >
                    <span className='font-medium'>home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/shop'
                    onClick={closeDrawer}
                    className='flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200  py-3 group'
                  >
                    <span className='font-medium'>shop</span>
                  </Link>
                </li>

                <div className='border-t border-gray-200 my-4'></div>

                <li>
                  <div className='flex items-center text-lg text-gray-500  py-3'>
                    <span className='font-medium'>tyster.io</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* main navbar */}
      <div className='fixed top-0 left-0 right-0 mx-auto z-50 flex justify-between items-center w-full py-4 glass'>
        <div className='flex justify-between items-center w-full max-w-6xl mx-auto px-4 md:px-0'>
          {/* left side - logo */}
          <div className='flex items-center'>
            <div className='flex items-center justify-center'>
              <div
                className='relative w-12 h-10 hover:cursor-pointer hover:scale-300 duration-1000 active:scale-50'
                onClick={() => {
                  toast(() => (
                    <span className={`${spaceGrotesk.className} font-semibold`}>
                      {`yamete yo ! <(=w=)>`}
                    </span>
                  ));
                }}
              >
                <Image
                  src='/frieren-plush.png'
                  alt='frieren plush logo'
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* big screen nav */}
          <div
            className={`
            relative hidden md:flex items-center justify-between
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
              <Icon
                icon='lineicons:pointer'
                width={26}
                height={26}
                className='transition-all duration-500 text-gray-600'
              />
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
                <span className='text-md font-medium'>home</span>
              </Link>
              <Link
                href='/shop'
                className='flex items-center space-x-1 px-1 py-2 text-gray-700 hover:text-gray-900 transition-colors'
              >
                <span className='text-md font-medium'>shop</span>
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

          <div className='md:hidden flex items-center space-x-4'>
            <div className='flex items-center justify-center'>
              <h1 className='font-bold text-gray-400 tracking-wider'>
                {currentTime}
              </h1>
            </div>
          </div>

          {/* small screen nav - mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleDrawer}
              className='p-2 rounded-full hover:bg-gray-100/50 transition-colors duration-200'
              aria-label='Open navigation menu'
            >
              <Icon icon='material-symbols:menu' width={28} height={28} />
            </button>
          </div>

          {/* right side text */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='flex items-center justify-center'>
              <h1 className='font-bold text-gray-400 tracking-wider'>
                {currentTime}
              </h1>
            </div>
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

        .glass {
          backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}
