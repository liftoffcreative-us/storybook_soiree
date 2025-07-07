import Image from 'next/image';
import React from 'react';

const RetreatHero = () => {
  return (
    <div className='hidden w-screen h-[110vh] md:flex items-center justify-center   bg-ssLavender'>
      <div className='w-[90vw]  flex items-center justify-center'>
        <Image
          src='/retreatHero.png'
          width={1920}
          height={1080}
          alt='A cork board with pictures of past retreats and posters'
        />
      </div>
    </div>
  );
};

export default RetreatHero;
