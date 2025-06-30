'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  return (
    <div className='min-h-screen flex flex-col bg-base-100'>
      <div className='flex-1 pt-28 p-6 md:p-0 md:flex md:items-center mx-auto max-w-6xl'>
        <div className='max-w-6xl'>
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
