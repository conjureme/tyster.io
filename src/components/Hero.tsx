'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const [currentText, setCurrentText] = useState('wannabe coder');

  const titles = [
    'wannabe coder',
    'pretender artist',
    'professional procrastinator',
    '#1 frieren and vinland saga fan',
    'big bee fan',
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentText((prev) => {
          const currentIndex = titles.indexOf(prev);
          return titles[(currentIndex + 1) % titles.length];
        });
        setIsTyping(false);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container mx-auto py-8 md:py-16 max-w-6xl overflow-x-hidden relative'>
      <div className='flex justify-center px-4 relative z-10'>
        <div
          className='w-full max-w-3xl rounded-2xl md:rounded-3xl p-8 py-16 md:p-16 lg:p-32 text-center shadow-lg shadow-neutral-600 gradient-outline relative group'
          style={{
            transform: `perspective(1000px) rotateX(${
              mousePosition.y * 0.05
            }deg) rotateY(${mousePosition.x * 0.05}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-600 mb-4'>
            hiya, i&apos;m <span className='gradient-flow'>tyler!</span>
          </h1>

          <div className='h-8 relative'>
            <p
              className={`text-lg md:text-xl text-gray-600 transition-all duration-300 ${
                isTyping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {currentText}
            </p>
          </div>

          <div className='h-4 md:h-8'></div>

          <div className='flex justify-center space-x-4 pt-4 md:space-x-6'>
            <Link
              href='https://github.com/conjureme'
              className='text-gray-600 hover:text-purple-400 transition-all duration-200 tooltip relative group'
              data-tip='terrible coding practices ahead'
              target='_blank'
              aria-label='visit my github profile'
            >
              <Icon
                icon='mdi:github-box'
                width={48}
                height={48}
                className='md:w-16 md:h-16 hover:scale-105 active:scale-90 duration-250 hover:rotate-12'
                aria-hidden='true'
              />
              <span className='absolute -top-2 -right-2 bg-purple-400 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Icon icon='material-symbols:terminal-rounded' />
              </span>
            </Link>
            <Link
              href='https://x.com/caniacsauce'
              className='text-gray-600 hover:text-purple-400 transition-all duration-200 tooltip relative group'
              data-tip='the website formerly known as twitter'
              target='_blank'
              aria-label='perhaps give me a twitter follow'
            >
              <Icon
                icon='mdi:twitter-box'
                width={48}
                height={48}
                className='md:w-16 md:h-16 hover:scale-105 active:scale-90 duration-250 hover:-rotate-12'
                aria-hidden='true'
              />
              <span className='absolute -top-2 -right-2 bg-blue-400 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Icon icon='fa6-brands:x-twitter' />
              </span>
            </Link>
            <Link
              href='https://steamcommunity.com/id/tyster1/'
              className='text-gray-600 hover:text-purple-400 transition-all duration-200 tooltip relative group'
              data-tip={`don't check my skyrim hours`}
              target='_blank'
              aria-label='view my steam profile'
            >
              <Icon
                icon='mdi:steam-box'
                width={48}
                height={48}
                className='md:w-16 md:h-16 hover:scale-105 active:scale-90 duration-250 hover:rotate-12'
                aria-hidden='true'
              />
              <span className='absolute -top-2 -right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                +rep
              </span>
            </Link>
            <Link
              href='https://discord.gg/rn9j69ApJQ'
              className='text-gray-600 hover:text-purple-400 transition-all duration-200 tooltip relative group'
              data-tip='there was no box icon for this :('
              target='_blank'
              aria-label='join my discord server and use silly emotes'
            >
              <Icon
                icon='cbi:discord'
                width={48}
                height={48}
                className='md:w-16 md:h-16 hover:scale-105 active:scale-90 duration-250 hover:-rotate-12'
                aria-hidden='true'
              />
              <span className='absolute -top-2 -right-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Icon icon='fluent:snooze-16-filled' />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        :global(.animate-float) {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
