import React from 'react';
import Image from 'next/image';
import { RiInstagramFill, RiDiscordFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className='flex fixed items-center justify-between w-screen h-[10vh] px-[6vw] py-2 z-50 overflow-hidden'>
      <a href='#home' id='logo' className='flex items-center h-[100%]'>
        <Image
          src='/logoWhiteLong.svg'
          alt='Logo'
          width={600}
          height={100}
          className='h-[80%] w-auto'
        />
      </a>
      <ul className='flex items-center justify-end gap-12 w-[70vw] h-[10vh] mt-3 text-white font-indivisible'>
        <a href='#home'>
          <li>HOME</li>
        </a>
        <a href='#about'>
          <li>ABOUT</li>
        </a>
        <a href='#book-club'>
          <li>BOOK CLUB</li>
        </a>
        <a href='#retreats'>
          <li>BOOKISH RETREATS</li>
        </a>
        <a href=''>
          <li>FROSTFIRE BALL</li>
        </a>
        <a href=''>
          <li>BOOK SHOP</li>
        </a>
      </ul>
      <div className='flex items-center gap-4 justify-center h-[10vh] mt-3 pl-12'>
        <a href=''>
          <RiInstagramFill className='text-[1.5em]' />
        </a>
        <a href=''>
          <RiDiscordFill className='text-[1.5em]' />
        </a>
        <a href=''>
          <FaTiktok className='text-[1.5em]' />
        </a>
        <a href=''>
          <FaEnvelope className='text-[1.5em]' />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
