'use client';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import React from 'react';
import NavBarAlt from '../components/NavBarAlt';
import NavBarMobileAlt from '../components/NavBarMobileAlt';
import Snowfall from 'react-snowfall';
import Image from 'next/image';
import FrostFireHero from '../components/frostfireComps/FrostFireHero';
import RoyalDecree from '../components/frostfireComps/RoyalDecree';
import RoyalDecreeMobile from '../components/frostfireComps/RoyalDecreeMobile';
import Packages from '../components/frostfireComps/Packages';
import Cast from '../components/frostfireComps/Cast';
import Footer from '../components/Footer';

const frostfire = () => {
  const mainBody = useRef(null);

  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: mainBody,
    offset: ['start end', 'end start'],
  });
  useMotionValueEvent(scrollYProgressTarget2, 'change', (latest) => {
    console.log(latest);
  });

  const y = useTransform(scrollYProgressTarget2, [0, 1], [500, -1000]);

  return (
    <div
      id='home'
      className='relative w-screen  bg-linear-to-br from-blue-800 to-cyan-500 overflow-clip'
    >
      <Snowfall snowflakeCount={200} />
      <NavBarAlt
        tsClass={
          'hidden md:flex fixed items-center justify-between w-screen h-[10vh] px-[6vw] py-2 z-[1000] overflow-hidden bg-blue-400/30 bg-clip-padding backdrop-filter backdrop-blur-md  '
        }
      />
      <NavBarMobileAlt
        tsClass={
          'fixed flex w-screen  text-white md:hidden z-[1000] bg-blue-200/30 bg-clip-padding backdrop-filter backdrop-blur-md '
        }
      />
      <FrostFireHero mainBody={mainBody} />
      <RoyalDecree y={y} />
      <RoyalDecreeMobile />
      <Packages />
      <Cast />
      <Footer />
    </div>
  );
};

export default frostfire;
