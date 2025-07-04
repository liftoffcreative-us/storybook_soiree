'use client';
import React from 'react';
import { useState } from 'react';

const NavBarMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='fixed flex w-screen h-auto text-white md:hidden z-[1000]'>
      <div className='flex items-center justify-between w-[90%] p-6'>
        <img
          src='/logoIconWhite.svg'
          alt='Storybook Flying with Fairy Dust trailing'
          className='w-[20vw] z-[100]'
        />
        <img
          src='/hbMenu.svg'
          alt='Menu Icon'
          className='w-[5vw] z-[100]'
          onClick={() => setOpen(!open)}
        />
        <div
          className={
            open
              ? 'fixed flex flex-col items-center justify-center transition-all duration-200 top-0 left-0 w-screen h-screen bg-ssPurple'
              : 'fixed flex flex-col items-center justify-center transition-all duration-200 top-0 left-0 w-0 h-0 bg-ssPurple'
          }
        >
          <ul className='flex flex-col items-center justify-center font-indivisible'>
            <a
              href='/'
              className={
                open
                  ? 'flex items-center justify-center px-6 py-4 w-[80vw] border-y-2 border-[rgba(255,255,255,.6)]'
                  : 'hidden'
              }
            >
              <li>HOME</li>
            </a>

            <a
              href='/bookclub'
              className={
                open
                  ? 'flex items-center justify-center px-6 py-4 w-[80vw] border-b-2 border-[rgba(255,255,255,.6)]'
                  : 'hidden'
              }
            >
              <li>BOOK CLUB</li>
            </a>
            <a
              href='/retreats'
              className={
                open
                  ? 'flex items-center justify-center px-6 py-4 w-[80vw] border-b-2 border-[rgba(255,255,255,.6)]'
                  : 'hidden'
              }
            >
              <li>BOOKISH RETREATS</li>
            </a>
            <a
              href='/frostfire'
              className={
                open
                  ? 'flex items-center justify-center px-6 py-4 w-[80vw] border-b-2 border-[rgba(255,255,255,.6)]'
                  : 'hidden'
              }
            >
              <li>FROSTFIRE BALL</li>
            </a>
            <a
              href=''
              className={
                open
                  ? 'flex items-center justify-center px-6 py-4 w-[80vw] border-b-2 border-[rgba(255,255,255,.6)]'
                  : 'hidden'
              }
            >
              <li>BOOK SHOP</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
