'use client';
import Image from 'next/image';
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

export default function Home() {
  const ref = useRef(null);
  const mainBody = useRef(null);
  const { scrollYProgress: scrollYProgressTarget1 } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
    target: mainBody,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgressTarget2, 'change', (latest) => {
    console.log(latest);
  });

  const yBack = useTransform(scrollYProgressTarget1, [0, 1], [-500, 1000]);
  const yMid = useTransform(scrollYProgressTarget1, [0, 1], [-100, 500]);
  const yfront = useTransform(scrollYProgressTarget1, [0, 1], [500, 100]);
  const ytext = useTransform(scrollYProgressTarget1, [0, 1], [300, 300]);

  return (
    <div id='home' ref={mainBody} className='flex flex-col w-screen bg-white '>
      <NavBar scroll={scrollYProgressTarget2} />
      <div className='relative w-screen h-screen overflow-hidden'>
        <div id='hero' ref={ref} className='relative w-screen h-[200vh]'>
          <ParallaxImage
            src={'/hero-background.png'}
            alt={'A picture of a castle on a hill'}
            y={yBack}
            className={'absolute z-20 w-full h-[120vh]'}
          />
          <ParallaxImage
            src={'/hero-midground.png'}
            alt={'A picture of a castle on a hill'}
            y={yMid}
            className={'absolute z-30 w-full'}
          />
          <motion.div
            style={{ y: ytext }}
            className='absolute w-full h-auto flex flex-col justify-center items-center px-[10vw] z-[35]'
          >
            <h2 className='font-lavishly text-white text-[6rem] -mb-[5vh] ml-[5vw] self-start z-[36] text-shadow-lg'>
              where every chapter is an
            </h2>
            <h1 className='font-alfarn text-[10rem] tracking-widest text-shadow-lg leading-none'>
              ADVENTURE
            </h1>
          </motion.div>
          <ParallaxImage
            src={'/hero_foreground.png'}
            alt={'A book sits on a tree stump overlooking the scenery'}
            y={yfront}
            className={'absolute z-40 w-full'}
          />
        </div>
      </div>
      <About />
      <BookClub />
      <BOTM />
      <Retreats />
      <FrostFire />
    </div>
  );
}

const ParallaxImage = ({ y = 0, src, alt, className }) => {
  return <motion.img src={src} alt={alt} style={{ y }} className={className} />;
};
