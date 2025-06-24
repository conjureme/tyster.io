'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [showMyTimezone, setShowMyTimezone] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timezone = showMyTimezone ? 'America/Chicago' : undefined;

      const dateOptions: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: timezone,
      };

      const formattedDate = now.toLocaleDateString('en-US', dateOptions);
      const dateParts = formattedDate.split(' ');
      const month = dateParts[0];
      const day = dateParts[1].replace(',', '');
      const year = dateParts[2];

      const dayNum = parseInt(day);
      let suffix = 'th';
      if (dayNum % 10 === 1 && dayNum !== 11) suffix = 'st';
      else if (dayNum % 10 === 2 && dayNum !== 12) suffix = 'nd';
      else if (dayNum % 10 === 3 && dayNum !== 13) suffix = 'rd';

      let timezoneAbbr;
      if (showMyTimezone) {
        timezoneAbbr = 'CDT'; // my timezone
      } else {
        const timeString = now.toLocaleTimeString('en-US', {
          timeZoneName: 'short',
        });
        timezoneAbbr = timeString.split(' ').pop() || 'Local';
      }

      setCurrentDate(`${month} ${day}${suffix}, ${year} (${timezoneAbbr})`);

      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: timezone,
      };

      setCurrentTime(now.toLocaleTimeString('en-US', timeOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [showMyTimezone]);

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const toggleTimezone = () => setShowMyTimezone(!showMyTimezone);

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
          {/* background overlay */}
          <div
            className='absolute inset-0 bg-black/20 backdrop-blur-sm'
            onClick={closeDrawer}
          ></div>

          <div
            className={`absolute right-0 top-0 h-full w-80 bg-base-100/95 backdrop-blur-lg shadow-2xl border-l border-base-300 transform transition-transform duration-300 ease-out ${
              isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* header */}
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

            {/* nav items */}
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
                    href='/shop'
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
                    href='/commissions'
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
                    href='/about'
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

                <div className='border-t border-base-300 my-4'></div>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* main navbar */}
      <div className='fixed top-0 left-0 right-0 mx-auto z-50 flex justify-between items-center w-full py-4 bg-base-100 glass'>
        <div className='flex justify-between items-center w-full max-w-6xl mx-auto px-4 md:px-0'>
          {/* left side - logo */}
          <div className='flex items-center w-48 justify-start'>
            <Link href='/' className='flex items-center justify-center'>
              <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
                <span className='text-primary-content font-bold text-lg'>
                  T
                </span>
              </div>
            </Link>
          </div>

          {/* center nav - desktop only */}
          <div className='hidden md:flex items-center space-x-8 flex-1 justify-center'>
            <Link
              href='/'
              className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActiveLink('/')
                  ? 'text-primary bg-base-200'
                  : 'text-base-content hover:text-primary hover:bg-base-200'
              }`}
            >
              home
            </Link>
            <Link
              href='/shop'
              className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActiveLink('/shop')
                  ? 'text-primary bg-base-200'
                  : 'text-base-content hover:text-primary hover:bg-base-200'
              }`}
            >
              shop
            </Link>
            <Link
              href='/commissions'
              className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActiveLink('/commissions')
                  ? 'text-primary bg-base-200'
                  : 'text-base-content hover:text-primary hover:bg-base-200'
              }`}
            >
              commissions
            </Link>
            <Link
              href='/about'
              className={`px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActiveLink('/about')
                  ? 'text-primary bg-base-200'
                  : 'text-base-content hover:text-primary hover:bg-base-200'
              }`}
            >
              about
            </Link>
          </div>

          {/* right side - time display */}
          <div className='flex items-center w-48 justify-end'>
            <button
              onClick={toggleTimezone}
              className='text-right hover:bg-base-200 rounded-lg px-3 py-2 transition-colors duration-200'
            >
              <div className='text-sm font-medium text-base-content hidden md:block'>
                {currentDate}
              </div>
              <div className='text-lg font-mono text-primary'>
                {currentTime}
              </div>
            </button>
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
