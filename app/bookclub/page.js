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
    <div className='w-screen h-screen'>
      <NavBarAlt
        tsClass={
          'hidden md:flex fixed items-center justify-between w-screen h-[10vh] px-[6vw] py-2 z-50 overflow-hidden bg-blue-200/30 bg-clip-padding backdrop-filter backdrop-blur-md '
        }
      />
      <NavBarMobileAlt
        tsClass={
          'md:hidden flex fixed items-center justify-between w-screen h-[10vh] px-[6vw] py-2 z-50 overflow-hidden bg-purple-200/30 bg-clip-padding backdrop-filter backdrop-blur-md '
        }
      />
    </div>
  );
};

export default bookclub;
