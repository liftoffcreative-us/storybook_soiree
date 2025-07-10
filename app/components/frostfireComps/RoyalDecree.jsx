import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RoyalDecree = ({ y }) => {
  return (
    <motion.div className='-ml-[3vw] md:flex hidden' style={{ y }}>
      <Image
        src='/royalDecree.png'
        alt='A parchment with a royal decree upon it'
        width={1200}
        height={1200}
        className='absolute h-[50vh] w-auto -rotate-10'
      />
      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLScNdLY9MxPXKbMxrIC1VLrrej7XY2nXk0nM3UC9VSd41mZuSA/viewform'
        target='_blank'
      >
        <Image
          src='/royalSeal.png'
          alt='The royal seal of the Ice Queen'
          width={258}
          height={263}
          className='absolute -rotate-10 mt-[35vh] ml-[28vh] h-[12vh] w-auto'
        />
      </a>
    </motion.div>
  );
};

export default RoyalDecree;
