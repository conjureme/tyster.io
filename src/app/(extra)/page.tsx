'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

const parentAnim = {
  initial: {
    x: 0,
  },
  hover: {
    x: 2,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
};

const linkIconAnim = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.1,
    },
  },
};

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredText, setHoveredText] = useState('hi there!');
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const mouseY = useMotionValue(0);
  const mouseX = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const diamondY = useSpring(mouseY, springConfig);
  const diamondX = useSpring(mouseX, { damping: 20, stiffness: 200 });

  const hoverTextMap: { [key: string]: string } = {
    github: 'clone away friend!',
    twitter: 'lots of frieren reposting',
    discord: 'join us!',
    steam: 'i love achievements',
    youtube: 'incredible editing ahead',
    twitch: 'i stream games!',
    'tyster.io': 'thank you for visiting!',
    moemoe: 'the silliest discord bot',
    'anti-domo': 'no domos allowed',
    'next-blog': 'this was a triumph',
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!contentRef.current || !isHovering) return;

      const rect = contentRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const centerY = rect.height / 2;
      const relativeY = y - centerY;

      // apply resistance/damping to all movement
      const dampingFactor = 0.4; // overall resistance % of mouse
      const clampedY = relativeY * dampingFactor;

      mouseY.set(clampedY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering, mouseY]);

  useEffect(() => {
    if (!isHovering) {
      mouseY.set(0);
      mouseX.set(0);
      const timeout = setTimeout(() => {
        if (!isHoveringLink) {
          setHoveredText('hi there!');
        }
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      mouseX.set(-50);
    }
  }, [isHovering, isHoveringLink, mouseY, mouseX]);

  const handleLinkHover = (text: string) => {
    const displayText = hoverTextMap[text.toLowerCase()] || text;
    setHoveredText(displayText);
    setIsHoveringLink(true);
  };

  const handleLinkLeave = () => {
    setIsHoveringLink(false);
    if (!isHovering) {
      setTimeout(() => {
        if (!isHoveringLink) {
          setHoveredText('hi there!');
        }
      }, 50);
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-base-100'>
      <div className='flex-1 pt-28 p-6 md:p-0 md:flex md:items-center mx-auto max-w-6xl'>
        <div
          ref={contentRef}
          className='max-w-6xl relative'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* floating icon tracker- desktop only */}
          <motion.div
            className='hidden md:flex items-center gap-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none'
            style={{ y: diamondY, x: diamondX }}
          >
            {/* text box - always rendered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{
                opacity: isHovering ? 1 : 0.3,
                scale: isHovering ? 1 : 0.8,
                x: isHovering ? 0 : 10,
              }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { type: 'spring', stiffness: 500, damping: 15 },
                x: { type: 'spring', stiffness: 400, damping: 20 },
              }}
              className='bg-neutral px-3 py-1 rounded-md text-sm text-neutral-content whitespace-nowrap'
            >
              {hoveredText}
            </motion.div>

            {/* icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovering ? 1 : 0.3,
                scale: isHovering ? 1 : 0.8,
              }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { type: 'spring', stiffness: 400, damping: 25 },
              }}
            >
              <Image
                src='/diamond-icon-dark-export.svg'
                alt=''
                width={40}
                height={40}
                className='w-5 h-5'
              />
            </motion.div>
          </motion.div>

          <div className='space-y-8'>
            <section>
              <h1 className='text-2xl font-bold font-workSans text-base-content mb-3'>
                hiya, i&apos;m tyler!
              </h1>
              <p className='text-base-content leading-relaxed text-sm max-w-2xl'>
                here, you&apos;ll find a collection of some of my hobby
                projects, commission info, and an assortment of other things.
              </p>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 font-spaceGrotesk'>
              <section>
                <h2 className='text-lg text-base-content mb-4'>projects</h2>
                <div className='space-y-2 text-sm'>
                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ◇
                    </motion.span>
                    <div>
                      <Link
                        href='https://github.com/conjureme/tyster.io'
                        target='_blank'
                        className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                        onMouseEnter={() => handleLinkHover('tyster.io')}
                        onMouseLeave={handleLinkLeave}
                      >
                        tyster.io
                      </Link>
                      <span className='text-base-content/70 ml-1'>
                        — this website
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ◇
                    </motion.span>
                    <div>
                      <Link
                        href='https://github.com/conjureme/moemoe'
                        target='_blank'
                        className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                        onMouseEnter={() => handleLinkHover('moemoe')}
                        onMouseLeave={handleLinkLeave}
                      >
                        moemoe
                      </Link>
                      <span className='text-base-content/70 ml-1'>
                        — an incredibly awesome discord bot with AI integration,
                        function calling, and a ton of other cool stuff! built
                        with discord.js
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ◇
                    </motion.span>
                    <div>
                      <Link
                        href='/anti-domo'
                        className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                        onMouseEnter={() => handleLinkHover('anti-domo')}
                        onMouseLeave={handleLinkLeave}
                      >
                        anti-domo
                      </Link>
                      <span className='text-base-content/70 ml-1'>
                        — a crude discord bot that automatically bans anyone who
                        uses the domoAI application. that&apos;s literally it.
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ◇
                    </motion.span>
                    <div>
                      <Link
                        href='https://github.com/conjureme/next-blog'
                        target='_blank'
                        className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                        onMouseEnter={() => handleLinkHover('next-blog')}
                        onMouseLeave={handleLinkLeave}
                      >
                        next-blog
                      </Link>
                      <span className='text-base-content/70 ml-1'>
                        — aperture science themed blog site built with next.js
                        and supabase
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ◇
                    </motion.span>
                    <div>
                      <span className='text-base-content/50'>
                        and many more to come!
                      </span>
                      <span className='text-base-content/70 ml-1'></span>
                    </div>
                  </motion.div>
                </div>
              </section>

              <section>
                <h2 className='text-lg text-base-content mb-4'>links</h2>
                <div className='space-y-2 text-sm'>
                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ☆
                    </motion.span>
                    <Link
                      href='https://github.com/conjureme'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                      onMouseEnter={() => handleLinkHover('github')}
                      onMouseLeave={handleLinkLeave}
                    >
                      github
                    </Link>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ☆
                    </motion.span>
                    <Link
                      href='https://x.com/caniacsauce'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                      onMouseEnter={() => handleLinkHover('twitter')}
                      onMouseLeave={handleLinkLeave}
                    >
                      twitter
                    </Link>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ☆
                    </motion.span>
                    <Link
                      href='https://discord.gg/rn9j69ApJQ'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                      onMouseEnter={() => handleLinkHover('discord')}
                      onMouseLeave={handleLinkLeave}
                    >
                      discord server
                    </Link>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ☆
                    </motion.span>
                    <Link
                      href='https://steamcommunity.com/id/tyster1/'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                      onMouseEnter={() => handleLinkHover('steam')}
                      onMouseLeave={handleLinkLeave}
                    >
                      steam profile
                    </Link>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ☆
                    </motion.span>
                    <Link
                      href='https://www.youtube.com/@tyster_'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                      onMouseEnter={() => handleLinkHover('youtube')}
                      onMouseLeave={handleLinkLeave}
                    >
                      youtube
                    </Link>
                  </motion.div>

                  <motion.div
                    className='flex items-start gap-2 group'
                    whileHover='hover'
                    variants={parentAnim}
                    initial='initial'
                  >
                    <motion.span
                      className='text-primary transition-all duration-300 group-hover:text-primary-focus'
                      variants={linkIconAnim}
                    >
                      ☆
                    </motion.span>
                    <Link
                      href='https://twitch.tv/tyster6'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors duration-300 underline hover:no-underline'
                      onMouseEnter={() => handleLinkHover('twitch')}
                      onMouseLeave={handleLinkLeave}
                    >
                      twitch
                    </Link>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
