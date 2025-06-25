import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-base-100'>
      <div className='flex-1 pt-24 p-6 md:p-0 md:flex md:items-center mx-auto max-w-6xl'>
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
                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>◇</span>
                    <div>
                      <Link
                        href='https://github.com/conjureme/tyster.io'
                        target='_blank'
                        className='text-base-content hover:text-primary transition-colors underline'
                      >
                        tyster.io
                      </Link>
                      <span className='text-base-content/70 ml-1'>
                        — this website
                      </span>
                    </div>
                  </div>

                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>◇</span>
                    <div>
                      <Link
                        href='https://github.com/conjureme/moemoe'
                        target='_blank'
                        className='text-base-content hover:text-primary transition-colors underline'
                      >
                        moemoe
                      </Link>
                      <span className='text-base-content/70 ml-1'>
                        — an incredibly awesome discord bot with AI integration,
                        function calling, and a ton of other cool stuff! built
                        with discord.js
                      </span>
                    </div>
                  </div>

                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>◇</span>
                    <div>
                      <Link
                        href='/anti-domo'
                        className='text-base-content hover:text-primary transition-colors underline'
                      >
                        anti-domo
                      </Link>
                      <span className='text-base-content/70 ml-1'>
                        — a crude discord bot that automatically bans anyone who
                        uses the domoAI application. that&apos;s literally it.
                      </span>
                    </div>
                  </div>

                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>◇</span>
                    <div>
                      <Link
                        href='https://github.com/conjureme/next-blog'
                        target='_blank'
                        className='text-base-content hover:text-primary transition-colors underline'
                      >
                        next-blog
                      </Link>
                      <span className='text-base-content/70 ml-1'>
                        — aperture science themed blog site built with next.js
                        and supabase
                      </span>
                    </div>
                  </div>

                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>◇</span>
                    <div>
                      <span className='text-base-content/50'>
                        and many more to come!
                      </span>
                      <span className='text-base-content/70 ml-1'></span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className='text-lg text-base-content mb-4'>links</h2>
                <div className='space-y-2 text-sm'>
                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>☆</span>
                    <Link
                      href='https://github.com/conjureme'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors underline'
                    >
                      github
                    </Link>
                  </div>

                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>☆</span>
                    <Link
                      href='https://x.com/caniacsauce'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors underline'
                    >
                      twitter
                    </Link>
                  </div>

                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>☆</span>
                    <Link
                      href='https://discord.gg/rn9j69ApJQ'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors underline'
                    >
                      discord server
                    </Link>
                  </div>

                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>☆</span>
                    <Link
                      href='https://steamcommunity.com/id/tyster1/'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors underline'
                    >
                      steam profile
                    </Link>
                  </div>

                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>☆</span>
                    <Link
                      href='https://www.youtube.com/@tyster_'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors underline'
                    >
                      youtube
                    </Link>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-primary'>☆</span>
                    <Link
                      href='https://twitch.tv/tyster6'
                      target='_blank'
                      className='text-base-content hover:text-primary transition-colors underline'
                    >
                      twitch
                    </Link>
                  </div>
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
