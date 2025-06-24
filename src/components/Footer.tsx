'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <footer className='bg-neutral text-neutral-content mt-auto'>
      <div className='max-w-6xl mx-auto py-8 px-4 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-1'>
            <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
              {/* placeholder logo */}
              <Link href='/' className='flex items-center justify-center'>
                <div className='w-10 h-10 bg-base-100 rounded-lg flex items-center justify-center'>
                  <span className='text-primary font-bold text-lg'>T</span>
                </div>
              </Link>
            </div>
          </div>

          <div className='md:col-span-1'>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className={`text-sm transition-colors duration-200 ${
                    isActiveLink('/')
                      ? 'text-neutral-content'
                      : 'text-neutral-content/70 hover:text-neutral-content'
                  }`}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  href='/shop'
                  className={`text-sm transition-colors duration-200 ${
                    isActiveLink('/shop')
                      ? 'text-neutral-content'
                      : 'text-neutral-content/70 hover:text-neutral-content'
                  }`}
                >
                  shop
                </Link>
              </li>
              <li>
                <Link
                  href='/commissions'
                  className={`text-sm transition-colors duration-200 ${
                    isActiveLink('/commissions')
                      ? 'text-neutral-content'
                      : 'text-neutral-content/70 hover:text-neutral-content'
                  }`}
                >
                  commissions
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className={`text-sm transition-colors duration-200 ${
                    isActiveLink('/about')
                      ? 'text-neutral-content'
                      : 'text-neutral-content/70 hover:text-neutral-content'
                  }`}
                >
                  about
                </Link>
              </li>
            </ul>
          </div>

          <div className='md:col-span-1'>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='https://github.com/conjureme'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-neutral-content/70 hover:text-neutral-content transition-colors duration-200 inline-flex items-center gap-3'
                >
                  github
                  <Icon icon='iconoir:open-new-window' width={16} height={16} />
                </Link>
              </li>
              <li>
                <Link
                  href='https://x.com/caniacsauce'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-neutral-content/70 hover:text-neutral-content transition-colors duration-200 inline-flex items-center gap-3'
                >
                  twitter
                  <Icon icon='iconoir:open-new-window' width={16} height={16} />
                </Link>
              </li>
              <li>
                <Link
                  href='https://discord.gg/rn9j69ApJQ'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-neutral-content/70 hover:text-neutral-content transition-colors duration-200 inline-flex items-center gap-3'
                >
                  discord
                  <Icon icon='iconoir:open-new-window' width={16} height={16} />
                </Link>
              </li>
              <li>
                <Link
                  href='https://steamcommunity.com/id/tyster1/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-neutral-content/70 hover:text-neutral-content transition-colors duration-200 inline-flex items-center gap-3'
                >
                  steam
                  <Icon icon='iconoir:open-new-window' width={16} height={16} />
                </Link>
              </li>
            </ul>
          </div>

          <div className='md:col-span-1'>
            <ul className='space-y-2'>
              <li>
                <span className='text-sm text-neutral-content/70 hover:text-neutral-content transition-colors duration-200 flex items-center gap-2'>
                  <Icon icon='ic:baseline-discord' width={16} height={16} />
                  @caniacsauce
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-neutral-content/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center'>
          <div className='text-sm text-neutral-content/60 mb-4 md:mb-0'>
            © {currentYear} tyster.io
          </div>
          <div className='text-sm text-neutral-content/60 flex items-center'>
            made with{' '}
            <Icon
              icon='mdi:heart'
              className='text-red-500 mx-1'
              width={16}
              height={16}
            />{' '}
            by tyler
          </div>
        </div>
      </div>
    </footer>
  );
}
