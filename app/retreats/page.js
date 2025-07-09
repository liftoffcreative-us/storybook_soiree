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
import RetreatHero from '../components/retreatsComps/RetreatHero';
import Retreat1 from '../components/retreatsComps/Retreat1';
import RetreatHeroMobile from '../components/retreatsComps/RetreatHeroMobile';
import Included from '../components/retreatsComps/Included';

const retreats = () => {
  const mainBody = useRef(null);

  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: mainBody,
    offset: ['start end', 'end start'],
  });
  useMotionValueEvent(scrollYProgressTarget2, 'change', (latest) => {
    console.log(latest);
  });

  return (
    <div ref={mainBody} id='top' className='w-screen bg-ssLavender'>
      <NavBarAlt bgColor={'#a48eae'} />
      <NavBarMobileAlt scroll={scrollYProgressTarget2} />
      <RetreatHero />
      <RetreatHeroMobile />
      <Included />
      <Retreat1 />
    </div>
  );
};

export default retreats;
