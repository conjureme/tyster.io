'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Image from 'next/image';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className='font-workSans'>
      {/* mobile drawer */}
      {isDrawerOpen && (
        <div className='fixed inset-0 z-60'>
          <div
            className='absolute inset-0 bg-black/20 backdrop-blur-sm'
            onClick={closeDrawer}
          ></div>

          <div
            className={`absolute right-0 top-0 h-full w-80 bg-base-100/95 backdrop-blur-lg shadow-2xl border-l border-base-300 transform transition-transform duration-300 ease-out ${
              isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex items-center justify-between py-4 px-6 border-b border-base-300'>
              <div className='flex items-center gap-3'>
                <span className='text-xl font-bold text-base-content'>
                  navigation
                </span>
              </div>
              <button
                onClick={closeDrawer}
                className='p-2 rounded-full hover:bg-base-200 transition-colors'
                aria-label='Close navigation menu'
              >
                <Icon icon='material-symbols:close' width={28} height={28} />
              </button>
            </div>

            <nav className='py-4 px-6'>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/'
                    onClick={closeDrawer}
                    className={`flex items-center text-lg hover:bg-base-200 rounded-lg transition-all duration-200 py-3 px-2 ${
                      isActiveLink('/')
                        ? 'text-primary font-semibold bg-base-200'
                        : 'text-base-content hover:text-primary'
                    }`}
                  >
                    <span>home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    onClick={closeDrawer}
                    className={`flex items-center text-lg hover:bg-base-200 rounded-lg transition-all duration-200 py-3 px-2 ${
                      isActiveLink('/shop')
                        ? 'text-primary font-semibold bg-base-200'
                        : 'text-base-content hover:text-primary'
                    }`}
                  >
                    <span>shop</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    onClick={closeDrawer}
                    className={`flex items-center text-lg hover:bg-base-200 rounded-lg transition-all duration-200 py-3 px-2 ${
                      isActiveLink('/commissions')
                        ? 'text-primary font-semibold bg-base-200'
                        : 'text-base-content hover:text-primary'
                    }`}
                  >
                    <span>commissions</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    onClick={closeDrawer}
                    className={`flex items-center text-lg hover:bg-base-200 rounded-lg transition-all duration-200 py-3 px-2 ${
                      isActiveLink('/about')
                        ? 'text-primary font-semibold bg-base-200'
                        : 'text-base-content hover:text-primary'
                    }`}
                  >
                    <span>about</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* main navbar */}
      <div className='fixed top-0 left-0 right-0 mx-auto z-50 flex justify-between items-center w-full py-6 glass'>
        <div className='flex justify-between items-center w-full max-w-6xl mx-auto px-4 md:px-0'>
          {/* logo */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center justify-center'>
              <div className='w-10 h-10 rounded-lg flex items-center justify-center'>
                <Image
                  src='/tyster-triangle-dark.png'
                  width={90}
                  height={90}
                  alt='tyster.io pyramid dark logo'
                />
              </div>
            </Link>
          </div>

          {/* desktop nav links */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className={`relative py-2 transition-colors duration-200 font-medium group ${
                isActiveLink('/')
                  ? 'text-primary'
                  : 'text-base-content hover:text-primary'
              }`}
            >
              home
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200 ${
                  isActiveLink('/')
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              href='#'
              className={`relative py-2 transition-colors duration-200 font-medium group ${
                isActiveLink('/shop')
                  ? 'text-primary'
                  : 'text-base-content hover:text-primary'
              }`}
            >
              shop
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200 ${
                  isActiveLink('/shop')
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              href='#'
              className={`relative py-2 transition-colors duration-200 font-medium group ${
                isActiveLink('/commissions')
                  ? 'text-primary'
                  : 'text-base-content hover:text-primary'
              }`}
            >
              commissions
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200 ${
                  isActiveLink('/commissions')
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
            <Link
              href='#'
              className={`relative py-2 transition-colors duration-200 font-medium group ${
                isActiveLink('/about')
                  ? 'text-primary'
                  : 'text-base-content hover:text-primary'
              }`}
            >
              about
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200 ${
                  isActiveLink('/about')
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
          </div>

          {/* mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleDrawer}
              className='p-2 rounded-lg hover:bg-base-200 transition-colors duration-200'
              aria-label='Open navigation menu'
            >
              <Icon icon='material-symbols:menu' width={28} height={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
