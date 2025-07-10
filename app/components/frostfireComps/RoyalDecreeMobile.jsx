import React from 'react';
import Image from 'next/image';

const RoyalDecreeMobile = () => {
  return (
    <div className='md:hidden -mt-[5vh]'>
      <Image
        src='/royalDecree.png'
        alt='A parchment with a royal decree upon it'
        width={1200}
        height={1200}
        className='absolute h-[50vh] w-auto -rotate-10'
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
          className='absolute -rotate-10 mt-[35vh] ml-[24vh] h-[12vh] w-auto'
        />
      </a>
    </div>
  );
};

export default RoyalDecreeMobile;
