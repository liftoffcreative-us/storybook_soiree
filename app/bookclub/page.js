'use client';

// import {
//   motion,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from 'framer-motion';
// import { useRef } from 'react';
import React from 'react';
import NavBarAlt from '../components/NavBarAlt';
import NavBarMobileAlt from '../components/NavBarMobileAlt';
import BookClub from '../components/BookClub';
import BOTM from '../components/BOTM';
import PastBOTM from '../components/PastBOTM';
import Image from 'next/image';
import Footer from '../components/Footer';

const bookclub = () => {
  // const mainBody = useRef(null);

  // const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
  //   target: mainBody,
  //   offset: ['start end', 'end start'],
  // });
  // useMotionValueEvent(scrollYProgressTarget2, 'change', (latest) => {
  //   console.log(latest);
  // });

  return (
    <div className='w-screen h-screen' id='home'>
      <NavBarAlt
        tsClass={
          'hidden md:flex fixed items-center justify-between w-screen h-[10vh] px-[6vw] py-2 z-50 overflow-hidden bg-purple-200/30 bg-clip-padding backdrop-filter backdrop-blur-md '
        }
      />
      <NavBarMobileAlt
        tsClass={
          'md:hidden flex fixed items-center justify-between w-screen h-[10vh] px-[6vw] py-2 z-50 overflow-hidden bg-purple-200/30 bg-clip-padding backdrop-filter backdrop-blur-md '
        }
      />
      <BookClub />
      <BOTM />
      <div className='bg-ssLavender'>
        <Image
          src='/purpleBorder.svg'
          width={1920}
          height={200}
          alt='Paint stroke border'
        ></Image>
      </div>
      <PastBOTM color='#110926' month='May' />
      <div className='bg-ssPurple'>
        <Image
          src='/pinkBorder.svg'
          width={1920}
          height={200}
          alt='Paint stroke border'
        ></Image>
        <PastBOTM color='#a48eae' month='April' />
      </div>
      <div className='bg-ssLavender'>
        <Image
          src='/purpleBorder.svg'
          width={1920}
          height={200}
          alt='Paint stroke border'
        ></Image>
      </div>
      <PastBOTM color='#110926' month='March' />
      <div className='w-full h-[10vh] bg-ssPurple'></div>
      <Footer />
    </div>
  );
};

export default bookclub;
