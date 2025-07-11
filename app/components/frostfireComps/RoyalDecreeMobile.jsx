import React from 'react';
import Image from 'next/image';

const RoyalDecreeMobile = () => {
  return (
    <div className='flex flex-col items-center justify-center md:hidden -mt-[10vh] mb-[10vh] '>
      <Image
        src='/royalDecree.png'
        alt='A parchment with a royal decree upon it'
        width={1200}
        height={1200}
        className='h-[50vh] w-auto -rotate-10'
      />
      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLScNdLY9MxPXKbMxrIC1VLrrej7XY2nXk0nM3UC9VSd41mZuSA/viewform'
        target='_blank'
      >
        <Image
          src='/royalSeal.png'
          alt='The royal seal of the Ice Queen'
          width={258}
          height={263}
          className=' -rotate-10 -mt-[15vh] ml-[30vw] h-[12vh] w-auto'
        />
      </a>
    </div>
  );
};

export default RoyalDecreeMobile;
