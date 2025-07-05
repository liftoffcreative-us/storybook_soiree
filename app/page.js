'use client';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import BookClub from './components/BookClub';
import BOTM from './components/BOTM';
import Retreats from './components/Retreats';
import FrostFire from './components/FrostFire';
import Hero from './components/Hero';
import HeroMobile from './components/HeroMobile';
import NavBarMobile from './components/NavBarMobile';

export default function Home() {
  const mainBody = useRef(null);

  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: mainBody,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgressTarget2, 'change', (latest) => {
    console.log(latest);
  });

  return (
    <div
      id='home'
      ref={mainBody}
      className='flex flex-col w-screen h-auto bg-white '
    >
      <NavBar scroll={scrollYProgressTarget2} />
      <NavBarMobile scroll={scrollYProgressTarget2} />
      <HeroMobile />
      <Hero />
      <About />
      <BookClub />
      <BOTM />
      <Retreats />
      <FrostFire />
    </div>
  );
}
