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

const frostfire = () => {
  const mainBody = useRef(null);

  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: mainBody,
    offset: ['start end', 'end start'],
  });
  useMotionValueEvent(scrollYProgressTarget2, 'change', (latest) => {
    console.log(latest);
  });
  return (
    <div className='w-screen h-screen'>
      <div className='w-screen h-screen'>
        <NavBarAlt bgColor={'#a48eae'} />
        <NavBarMobileAlt scroll={scrollYProgressTarget2} />
      </div>
    </div>
  );
};

export default frostfire;
