import Image from 'next/image';
import React from 'react';

const Retreat1 = () => {
  return (
    <div className='w-screen flex flex-col items-center mt-[10vh] '>
      <Image
        src='/purpleBorder.svg'
        width={1920}
        height={200}
        alt='a purple paint stroke border'
        className=''
      />
      <div className='w-screen md:h-[110vh] flex md:flex-row flex-col items-center justify-center bg-ssPurple md:-mt-[10vh]'>
        <div className='md:w-[45%] h-[80%] flex items-center justify-center overflow-clip '>
          <Image
            src='/retreat2.png'
            width={1080}
            height={1350}
            alt='a collage of pictures for the Pigeon Forge retreat'
            className='h-[90%] w-auto mb-8 md:mb-0'
          />
        </div>
        <div className='md:w-[45%] w-[80%] md:h-[80%] flex flex-col pb-8 md:pb-0 justify-center text-white font-indivisible md:text-left text-center'>
          <h2 className='md:text-[2em] text-[1.8em] font-indivisibleBold leading-tight'>
            Choose your Storybook Stay for our Sevierville/Pigeon Forge Retreat
          </h2>
          <h3 className='text-[1.2em] md:mt-[1vh] my-4 md:mb-0'>
            August 14th - 17th
          </h3>
          <p>
            Our next Storybook Soirées Bookish Retreat is taking place in the
            stunning Smoky Mountains of Sevierville, TN! 🌲✨ Get ready for a
            weekend of literary magic, luxurious accommodations, and
            unforgettable bookish experiences. <br />
            <br />
            Highlights include a 5-Star coursed dinner Saturday evening, Custom
            Knife Forging (Keepsake w/Sheath for every guest), multiple crafting
            activities and a huge theater for Movie Night. Who’s ready for an
            enchanted escape? <br />
            <br />
            🏰📖💫] Every great adventure starts with the perfect setting—choose
            the retreat experience that suits your tale!{' '}
          </p>
          <div className='flex md:flex-row flex-col items-center w-[100%] md:h-[65%] gap-6 md:mt-0 mt-8'>
            <div
              id='card1'
              className='md:w-[40%] w-full h-[85%] flex flex-col md:items-start items-center justify-between bg-white rounded-3xl hover:outline-purple-500 hover:outline-4 transition-all duration-150 px-4 py-6'
            >
              <div className='flex flex-col w-full h-[20%]'>
                <h2 className='text-[#431ea5] font-alfarn text-[1.2em] flex items-center justify-center md:justify-start w-full leading-6'>
                  THE ROYAL SUITE <span className='mb-2 text-[1.4em]'>👑</span>
                </h2>
                <h4 className='text-slate-500 text-[.8em]'>
                  Single King Room, Ultimate Comfort
                </h4>
              </div>
              <h3 className='text-black font-indivisibleBold text-[3em] py-2'>
                $900
              </h3>
              <div className='w-[100%] border-b-2 border-slate-200'></div>
              <p className='text-slate-500 text-[.8em] py-2'>
                For the lone ruler of their domain, this spacious King suite is
                fit for bookish royalty. Enjoy a long weekend of uninterrupted
                reading, luxurious comfort, and your own private escape for all
                3 evenings.
              </p>
              <a href=''>
                <button className='bg-purple-600 hover:bg-[#ee9f07] px-8 py-2 rounded-full text-[.9em] mt-2 cursor-pointer'>
                  BOOK NOW
                </button>
              </a>
            </div>
            <div
              id='card2'
              className='md:w-[40%] w-full h-[85%] flex flex-col md:items-start items-center justify-between bg-white rounded-3xl hover:outline-purple-500 hover:outline-4 transition-all duration-150 px-4 py-6'
            >
              <div className='flex flex-col w-full h-[20%]'>
                <h2 className='text-[#431ea5] font-alfarn text-[1.2em] flex items-center w-full leading-6'>
                  THE FOUND FAMILY QUARTERS{' '}
                </h2>
                <h4 className='text-slate-500 text-[.8em]'>
                  Shared Queen Room, Multiple Beds
                </h4>
              </div>
              <h3 className='text-black font-indivisibleBold text-[3em] py-2'>
                $750
              </h3>
              <div className='w-[100%] border-b-2 border-slate-200'></div>
              <p className='text-slate-500 text-[.8em] py-2'>
                For those who know the best adventures are shared, this cozy
                shared suite provides the perfect balance of camaraderie and
                relaxation.
              </p>
              <a href=''>
                <button className='bg-purple-600 hover:bg-[#ee9f07] px-8 py-2 rounded-full text-[.9em] mt-2 cursor-pointer'>
                  BOOK NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image
        src='/purpleBorder.svg'
        width={1920}
        height={200}
        alt='a purple paint stroke border'
        className='rotate-180 md:-mt-[10vh]'
      />
    </div>
  );
};

export default Retreat1;
