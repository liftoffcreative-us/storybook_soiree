import Image from 'next/image';
import React from 'react';

const RetreatHeroMobile = () => {
  return (
    <div className='w-screen md:hidden flex flex-col items-center overflow-x-hidden'>
      <Image
        src='/retreatsPoster.png'
        alt='A vintage poster advertising the Bookish Retreats'
        width={1049}
        height={1455}
        className='w-[90%] mt-[8vh]'
      />
      <Image
        src='/martinQuote.png'
        alt='A quote inspired by George R.R. Martin on a torn piece of paper'
        width={922}
        height={383}
        className='w-[85%] -mt-[3vh]'
      />
      <div className='flex items-center justify-center w-[120vw] h-[40vh] -mt-[3vh] overflow-hidden'>
        <Image
          src='/groupPhoto2.png'
          alt='A photo of attendees from a previous event'
          width={475}
          height={344}
          className='w-[90vw] ml-[30vw] rotate-6'
        />
        <Image
          src='/groupPhoto1.png'
          alt='A photo of attendees from a previous event'
          width={331}
          height={430}
          className='absolute w-[65%]  -ml-[60vw]'
        />
      </div>
    </div>
  );
};

export default RetreatHeroMobile;
