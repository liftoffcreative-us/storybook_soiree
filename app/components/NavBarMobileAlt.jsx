'use client';
import React from 'react';
import { useState } from 'react';
import { motion, useTransform } from 'framer-motion';

const NavBarMobileAlt = ({ scroll }) => {
  const [open, setOpen] = useState(false);
  const backgroundColor = useTransform(
    scroll,
    [0, 0.587, 0.598, 1],
    [
      'rgba(164,142,174, 1)',
      'rgba(164,142,174, 1)',
      'rgba(17,9,38, 1)',
      'rgba(17,9,38, 1)',
    ]
  );

  // const color = useTransform(
  //   scroll,
  //   [0, 0.671, 0.69, 0.85, 0.86, 1],
  //   [
  //     'rgba(255, 255, 255, 1)',
  //     'rgba(255, 255, 255, 1)',
  //     'rgba(54, 65, 83, 1)',
  //     'rgba(54, 65, 83, 1)',
  //     'rgba(255, 255, 255, 1)',
  //     'rgba(255, 255, 255, 1)',
  //   ]
  // );
  // const fill = useTransform(
  //   scroll,
  //   [0, 0.671, 0.69, 0.85, 0.86, 1],
  //   [
  //     'rgba(255, 255, 255, 1)',
  //     'rgba(255, 255, 255, 1)',
  //     'rgba(54, 65, 83, 1)',
  //     'rgba(54, 65, 83, 1)',
  //     'rgba(255, 255, 255, 1)',
  //     'rgba(255, 255, 255, 1)',
  //   ]
  // );
  return (
    <div className='fixed flex w-screen h-auto text-white md:hidden z-[1000]'>
      <motion.div
        className='flex items-center justify-between w-screen h-[12vh] p-6'
        style={{ backgroundColor }}
      >
        <a href='#top'>
          <img
            src='/logoIconWhite.svg'
            alt='Storybook Flying with Fairy Dust trailing'
            className='w-[20vw] z-[100]'
          />
        </a>
        <img
          src='/hbMenu.svg'
          alt='Menu Icon'
          className='w-[5vw] z-[100]'
          onClick={() => setOpen(!open)}
        />
      </motion.div>
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
  );
};

export default NavBarMobileAlt;
