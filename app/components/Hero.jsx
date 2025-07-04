'use client';
import React from 'react';
import { useRef } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress: scrollYProgressTarget1 } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yBack = useTransform(scrollYProgressTarget1, [0, 1], [-500, 1000]);
  const yMid = useTransform(scrollYProgressTarget1, [0, 1], [-100, 500]);
  const yfront = useTransform(scrollYProgressTarget1, [0, 1], [500, 100]);
  const ytext = useTransform(scrollYProgressTarget1, [0, 1], [300, 300]);

  return (
    <div className='relative w-screen h-screen overflow-hidden hidden md:flex'>
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
  );
};

export default Hero;

const ParallaxImage = ({ y = 0, src, alt, className }) => {
  return <motion.img src={src} alt={alt} style={{ y }} className={className} />;
};
