import React from 'react';
import Snowfall from 'react-snowfall';

const FrostFire = () => {
  return (
    <div
      id='frostfire'
      className='relative flex items-center justify-center w-screen h-screen bg-[url(/frostfirebg.jpg)] bg-cover bg-center'
    >
      <div className='w-full h-full relative flex items-center justify-center bg-[rgba(0,32,62,.4)]'>
        <Snowfall />
        <div className='flex flex-col justify-start items-center md:items-start w-[70vw] md:h-[80vh]'>
          <h2 className='font-lavishly text-[2.5rem] md:text-[6rem] -ml-[5vw]'>
            The FrostFire Ball
          </h2>
          <h3 className='font-indivisibleBold text-[1rem] md:text-[1.8rem]'>
            Nashville, TN - January 24, 2026
          </h3>
          <p className='font-indivisible md:text-[1.6rem] md:w-[60vw] text-[1rem] md:pt-12 pt-4 leading-tight'>
            Join us for an evening where icy elegance meets the warmth of human
            connection, where we collectively strive to heal a shattered heart
            and usher in a new dawn for the winter kingdom. Or overthrow the
            Monarchy and place a new leader on the Throne.
            <br />
            <br />
            Bring with you the the fire of your hope, and help us do whats best
            for the Kingdom.
            <br />
            <br />
            Will your presence be the spark that ignites the frostfire and thaws
            the Queen?
            <br />
            <br />
            Will you join a rebellion to overthrow the tyrant Queen and save the
            Kingdom?
          </p>
          <a
            href='/frostfire'
            className='flex items-center justify-center mt-6 md:w-[15vw] w-[60vw] h-[8vh] md: bg-blue-600 rounded-3xl border-2 border-white font-bold'
          >
            SEE TICKET PACKAGES
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrostFire;
