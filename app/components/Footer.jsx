import React from 'react';
import Image from 'next/image';
import { RiInstagramFill, RiDiscordFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-ssPurple w-screen md:h-[32vh] h-auto'>
      <Image
        src='/footerTopBorder.svg'
        alt='footer section border'
        height={300}
        width={1920}
        className='md:-mt-[17vh] -mt-[4vh] z-100'
      />
      <div className='flex md:flex-row flex-col items-center justify-between text-white w-[85vw] '>
        <div className='flex flex-col items-center md:items-start justify-center p-6 md:w-[45%]'>
          <h2 className='md:text-[2em] text-[1.3em] pb-4'>
            Join ✨ The Soirée Society ✨
          </h2>
          <p className='text-[.9em] text-center md:text-left'>
            By signing up for our Soirée Society emails, you'll be the first to
            hear about our latest news, events, and promotions. Don't miss out
            on these insider perks - join today!
          </p>
          {/* <form
            action='https://squareup.com/outreach/hPZRZx/subscribe'
            method='POST'
            target='_blank '
            className='py-4 flex md:flex-row flex-col gap-4'
          >
            <input
              type='email'
              name='email_address'
              placeholder='Your Email Address'
              className='h-[38px] w-full md:w-auto py-2 px-8 text-[1em] border border-[#bec3c8] rounded-lg mr-4 '
            ></input>
            <input type='hidden' name='embed' value='true' />
            <button
              type='submit'
              className='cursor-pointer bg-ssLavender text-white px-12 py-2 rounded-lg  '
            >
              Join Now
            </button>
          </form> */}
          <a
            href='https://squareup.com/customer-programs/enroll/4Z5mt8BYb3Rn?utm_source=postoffice'
            target='_blank'
            className='py-4'
          >
            <button className='cursor-pointer bg-ssLavender text-white px-12 py-2 rounded-lg  '>
              Join Now
            </button>
          </a>
          <h6 className='text-[.7em] text-gray-500 cursor-pointer'>
            We respect your privacy and do not sell or share personal
            information. Click here to see our Pravacy Policy
          </h6>
        </div>
        <div className='flex flex-col md:items-end items-center  md:w-[40%] w-[80%] mb-6 md:mb-0'>
          <Image
            src='/logoWhiteLong.svg'
            alt='Storybook Soirees Logo'
            width={600}
            height={200}
            className='md:w-[60%]'
          />
          <div className='flex items-center gap-4 justify-center h-[10vh] -mt-[2vh] '>
            <a href='https://www.instagram.com/storybooksoireesllc/#'>
              <RiInstagramFill className='text-[1.5em]' />
            </a>
            <a href='https://discord.com/invite/rg6zqb5m6J'>
              <RiDiscordFill className='text-[1.5em]' />
            </a>
            <a href='https://www.tiktok.com/@storybook_soirees'>
              <FaTiktok className='text-[1.5em]' />
            </a>
            <a href='mailto:storybooksoireesllc@gmail.com'>
              <FaEnvelope className='text-[1.5em]' />
            </a>
          </div>
          <p className='italic text-[.7em] text-gray-500'>
            Copyright 2025 Storybook Soirees LLC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
