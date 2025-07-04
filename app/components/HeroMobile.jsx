import React from 'react';
import Image from 'next/image';

const HeroMobile = () => {
  return (
    <div className='flex item-center justify-center md:hidden w-screen h-screen bg-[url(/mobileHero.png)] bg-cover  bg-center'></div>
  );
};

export default HeroMobile;
