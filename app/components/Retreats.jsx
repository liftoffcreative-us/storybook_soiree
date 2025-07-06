'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Retreats = () => {
  const retreatImage = [
    `url(/retreatImg1.jpg)`,
    `url(/retreat1.png)`,
    `url(/retreat2.png)`,
  ];
  const [imageInt, setImageInt] = useState(0);
  const upcomingRetreats = [
    {
      id: 1,
      location: 'Pigeon Forge, TN',
      locationMainImage:
        'https://images.squarespace-cdn.com/content/v1/66ca041b9b6e9f1983653134/eddc60ac-4106-460e-ab41-3f3ef3ba2858/what+are+you+Waiting+for+%28Instagram+Post+%2845%29%29.png?format=2500w',
      locationThumb: '',
      locationAbout:
        'Join us for a Storybook Soirées Bookish Retreat in the stunning Smoky Mountains of Sevierville, TN! 🌲✨ Get ready for a weekend of literary magic, luxurious accommodations, and unforgettable bookish experiences. ',
    },
  ];
  return (
    <div className='flex flex-col items-center w-screen h-[140vh] bg-ssPink md:overflow-hidden'>
      <Image
        src='/book_section_bottom.svg'
        width={1920}
        height={200}
        className='-mt-[2vw]'
      />
      <div
        id='retreats'
        className='flex items-center justify-center md:h-[12vh] w-screen'
      ></div>
      <div className='flex md:flex-row flex-col items-center w-[90vw] md:h-[85vh] h-[130vh] '>
        <div className='flex flex-col items-center md:items-start md:gap-[1vw] gap-6 md:w-1/2 h-full px-[2vw] '>
          <h2 className='md:w-3/4 w-[90%] font-indivisible font-bold md:text-[3.5em] text-[2.5em] text-center md:text-left md:leading-15 text-gray-700 mt-[2vh] '>
            AN ALL INCLUSIVE ESCAPE FOR BOOK LOVERS
          </h2>
          <p className='md:w-5/6 w-[90%] font-indivisible font-light text-gray-700 text-[1.5em] text-center md:text-left md:leading-tight'>
            Immerse yourself in a magical weekend filled with books, connection,
            and relaxation. Whether you're curling up with a novel, engaging in
            enchanting activities, or indulging in gourmet dining, this retreat
            is designed just for you.
          </p>
          <button className='bg-[#c900d0] px-12 py-4 rounded-3xl cursor-pointer hidden md:flex '>
            GET THE DETAILS
          </button>
          {/* Section to preview retreats */}
          <div className='hidden md:flex md:items-center absolute w-[70vw] h-[25vh] bg-white -ml-[10vw] rounded-3xl mt-[60vh] overflow-hidden'>
            <div className='w-[10vw] h-[90%] '></div>
            <div className='w-auto flex gap-8 items-center justify-center'>
              <div className='w-[35vw] flex flex-col gap-2 text-gray-700 font-indivisible'>
                <h3 className='font-bold text-[1.7em]'>Weekend Getaway</h3>
                <h5 className='font-medium text-[1em]'>
                  Thurday Afternoon - Sunday Mid-Morning
                </h5>
                <p className='font-light'>
                  All inclusive of Accommodations, Activities, Meals, Drinks and
                  Snacks - All for ONE Price!!!{' '}
                </p>
                <div className='flex justify-between items-center w-[90%]'>
                  <p>Click on one of our upcoming retreats for more details</p>
                  <FaArrowAltCircleRight className='text-[2em]' />
                </div>
              </div>
              <div
                className='flex items-end justify-center w-[10vw] h-[10vw] overflow-hidden rounded-2xl py-2 cursor-pointer'
                style={{
                  backgroundImage: `url(/beloit.jpg)`,
                  backgroundSize: 'cover',
                }}
                onClick={() => setImageInt(1)}
              >
                <h5 className='font-bold'>BELOIT, WI</h5>
              </div>
              <div
                className='flex items-end justify-center w-[10vw] h-[10vw] overflow-hidden rounded-2xl py-2 cursor-pointer'
                style={{
                  backgroundImage: `url(/pigeon_forge.jpg)`,
                  backgroundSize: 'cover',
                }}
                onClick={() => setImageInt(2)}
              >
                <h5 className='font-bold'>PIGEON FORGE, TN</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Image for selected retreat */}
        <div className='flex flex-col items-center justify-center md:w-1/2 w-[95%] h-full  gap-4'>
          <a href='/retreats'>
            <button className='bg-[#c900d0] px-12 py-4 rounded-3xl cursor-pointer md:hidden flex my-[2vh]'>
              GET THE DETAILS
            </button>
          </a>
          <div
            className='flex items-center justify-center md:w-[85%] md:h-[95%] w-full h-full rounded-3xl overflow-hidden'
            style={{
              backgroundImage: retreatImage[imageInt],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Retreats;
