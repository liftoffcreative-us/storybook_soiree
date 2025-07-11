import Image from 'next/image';
import React from 'react';

const Retreat2 = () => {
  return (
    <div className='w-screen flex flex-col items-center -mt-[6vh] pt-[10vh]'>
      <div className='w-screen md:h-[110vh] flex md:flex-row flex-col items-center justify-center bg-white md:-mt-[10vh]'>
        <div className='md:w-[45%] w-[80%] md:h-[80%] flex flex-col pb-8 md:pb-0 justify-center text-ssPurple font-indivisible md:text-left text-center'>
          <h2 className='md:text-[2em] text-[1.8em] font-indivisibleBold leading-tight'>
            Choose Your Storybook Stay for our Beloit, WI Fantasy Experience
          </h2>
          <h3 className='text-[1.2em] md:mt-[1vh] my-4 md:mb-4 font-bold'>
            November 6 - 9
          </h3>
          <p>
            Storybook Soirées LLC - Bookish Retreat is bringing the magic to the
            Beloit, WI area—where the elegant Dreamweavers Fantasy Ball awaits!
            ✨🌙 Step into a weekend of literary enchantment, lavish
            accommodations, and unforgettable bookish adventures.
            <br />
            <br /> The Beloit WI Fantasy Experience INCLUDES The VIP Ball Ticket
            for each guest to attend the Fantasy Ball!! We DO offer Payment
            Plans via Klarna!
          </p>
          <div className='flex md:flex-row flex-col items-center w-[100%] md:h-[65%] gap-6 md:mt-0 mt-8'>
            <div
              id='card1'
              className=' md:w-[40%] w-full h-[85%] flex flex-col md:items-start items-center justify-start bg-ssPurple rounded-3xl hover:outline-purple-500 hover:outline-4 transition-all duration-150 px-4 py-6'
            >
              <div className='flex flex-col w-full h-[17%]'>
                <h2 className='text-indigo-400 font-alfarn text-[1.2em] flex items-center justify-center md:justify-start w-full leading-6'>
                  LORD OR LADY'S BEDCHAMBER
                  <span className='mb-2 text-[1.4em]'>⚜️</span>
                </h2>
                <h4 className='text-slate-300 text-[.8em]'>
                  Single Queen Room
                </h4>
              </div>
              <div className='w-full h-[23%]'>
                <h3 className='text-white font-indivisibleBold text-[3em] py-2'>
                  $1,250
                </h3>
                <div className='w-[100%] border-b-2 border-slate-200'></div>
              </div>
              <div className='flex flex-col justify-between h-[60%]'>
                <p className='text-slate-300 text-[.8em] py-2'>
                  For the queens who need a little space after spending time
                  bonding, this bedchamber offers private sleeping quarters so
                  you can make yourself comfortable for all 3 nights. Whether
                  preparing for our night of intrigue or unwinding with a
                  beloved book, revel in luxurious comfort, solitude, and the
                  perfect space to don your finest fantasy apparel!
                </p>
                <a href=''>
                  <button className='bg-purple-600 hover:bg-[#ee9f07] px-8 py-2 rounded-full text-[.9em] mt-2 cursor-pointer text-white'>
                    BOOK NOW
                  </button>
                </a>
              </div>
            </div>
            <div
              id='card2'
              className=' md:w-[40%] w-full h-[85%] flex flex-col md:items-start items-center justify-start bg-ssPurple rounded-3xl hover:outline-purple-500 hover:outline-4 transition-all duration-150 px-4 py-6'
            >
              <div className='flex flex-col w-full h-[17%]'>
                <h2 className='text-indigo-400 font-alfarn text-[1.2em] flex items-center justify-center md:justify-start w-full leading-6'>
                  THE FOUND FAMILY QUARTERS
                </h2>
                <h4 className='text-slate-300 text-[.8em]'>
                  Shared Single Room, Separate Beds
                </h4>
              </div>
              <div className='w-full h-[23%]'>
                <h3 className='text-white font-indivisibleBold text-[3em] py-2'>
                  $1,050
                </h3>
                <div className='w-[100%] border-b-2 border-slate-200'></div>
              </div>
              <div className='flex flex-col justify-between w-full h-full '>
                <p className='text-slate-300 text-[.8em] py-2'>
                  For kindred spirits on a shared journey, this cozy chamber
                  offers two single beds and a space to unwind after a night of
                  revelry. Perfect for late-night book discussions, quiet
                  companionship, and preparing for the adventures ahead.
                </p>
                <a href=''>
                  <button className='bg-purple-600 hover:bg-[#ee9f07] px-8 py-2 rounded-full text-[.9em] mt-2 cursor-pointer text-white'>
                    BOOK NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[45%] h-[80%] flex items-center justify-center overflow-clip '>
          <Image
            src='/retreat1.png'
            width={1080}
            height={1350}
            alt='a collage of pictures for the Pigeon Forge retreat'
            className='h-[90%] w-auto mb-8 md:mb-0'
          />
        </div>
      </div>
    </div>
  );
};

export default Retreat2;
