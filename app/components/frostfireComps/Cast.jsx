import Image from 'next/image';
import React from 'react';

const Cast = () => {
  return (
    <div className='w-screen h-auto bg-[#002b6b] flex flex-col items-center justify-center md:pt-[5vh] pb-[10vh]'>
      <h2 className='text-[2.5em] md:text-[4.5em] mt-[5vh] font-lavishly'>
        Meet the Cast
      </h2>
      <h5 className='md:text-2xl font-indivisible'>
        Click on their Card to Connect to the Socials of Each Amazing Cast
        Member!
      </h5>
      {/* First Grouping of Cast Members */}
      <div
        id='cast1'
        className='md:w-screen w-[80%] md:h-[60%] h-auto flex md:flex-row flex-col items-center justify-center'
      >
        <a
          href='https://www.instagram.com/_thebookishlifeofsyd/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] -mr-[10vw] md:-mt-[5vh] cursor-pointer'
        >
          <Image
            src='/Cyrene2.png'
            width={1824}
            height={2621}
            alt='General Cyrene'
            className=' md:h-[80%] h-[100%] w-auto rotate-2 hover:h-[90%] transition-all duration-300 hover:-rotate-2 hover:z-50'
          />
        </a>
        <a
          href='https://www.instagram.com/m.m.wyatt/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] cursor-pointer'
        >
          <Image
            src='/Rhyden.png'
            width={1824}
            height={2621}
            alt='Rebel Leader Rhyden'
            className='-mr-[10vw] md:h-[80%] h-[100%] w-auto -rotate-2 hover:h-[90%] transition-all duration-300 hover:rotate-2 hover:z-50 '
          />
        </a>
        <a
          href='https://www.instagram.com/learea_cosplay/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] cursor-pointer'
        >
          <Image
            src='/iceQueen2.png'
            width={1824}
            height={2621}
            alt='Ice Queen'
            className='md:h-[80%] h-[100%] w-auto rotate-5 hover:h-[90%] transition-all duration-300 hover:-rotate-3 z-30 '
          />
        </a>
        <a
          href='https://www.instagram.com/valkyrie.kae/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] -ml-[5vw] cursor-pointer'
        >
          <Image
            src='/Ria2.png'
            width={1824}
            height={2621}
            alt='General Ria'
            className='md:h-[80%] h-[100%] w-auto -rotate-2 hover:h-[90%] transition-all duration-300 hover:rotate-4 z-20 hover:z-50'
          />
        </a>
        <a
          href='https://www.instagram.com/kickasskimikat/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] -ml-[5vw] -mt-[2vh] cursor-pointer'
        >
          <Image
            src='/Seryza.png'
            width={1824}
            height={2621}
            alt='Rogue Seryza'
            className='md:h-[80%] h-[100%] w-auto rotate-2 hover:h-[90%] transition-all duration-300 hover:-rotate-3 hover:z-50'
          />
        </a>
      </div>
      {/* Second Grouping of Cast Members */}
      <div
        id='cast2'
        className='md:w-screen w-[80%] md:h-[60%] h-auto flex md:flex-row flex-col items-center justify-center md:-mt-[8vh]'
      >
        <a
          href='https://www.instagram.com/dress_up_rae/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] -mr-[10vw] md:-mt-[5vh] cursor-pointer'
        >
          <Image
            src='/Kali2.png'
            width={1824}
            height={2621}
            alt='Rebel Spy Kali'
            className='md:h-[80%] h-[100%] w-auto -rotate-3 hover:h-[90%] transition-all duration-300 hover:rotate-2 hover:z-50'
          />
        </a>
        <a
          href='https://www.instagram.com/anastasia.reverie/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] cursor-pointer'
        >
          <Image
            src='/Floe2.png'
            width={1824}
            height={2621}
            alt='Lady in Waiting Floe'
            className='-mr-[10vw] md:h-[80%] h-[100%] w-auto rotate-0 z-20 hover:h-[90%] transition-all duration-300 hover:rotate-2  hover:z-50 '
          />
        </a>
        <a
          href='https://www.instagram.com/johnna.lynn.books/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] cursor-pointer'
        >
          <Image
            src='/Adara.png'
            width={1824}
            height={2621}
            alt='Princess Adara'
            className='md:h-[80%] h-[100%] -mt-[2vh] w-auto rotate-2 hover:h-[90%] transition-all duration-300 hover:-rotate-3 z-30 '
          />
        </a>
        <a
          href='https://www.instagram.com/stacylkellam/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] -ml-[5vw] -mb-[2vh] cursor-pointer'
        >
          <Image
            src='/Xilvyre2.png'
            width={1824}
            height={2621}
            alt='Queens Agent Xilvyre'
            className='md:h-[80%] h-[100%] w-auto -rotate-2 hover:h-[90%] transition-all duration-300 hover:rotate-4 z-20 hover:z-50'
          />
        </a>
        <a
          href='https://www.instagram.com/eternal_cursebreaker/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] -ml-[5vw] -mt-[2vh] cursor-pointer'
        >
          <Image
            src='/Solara.png'
            width={1824}
            height={2621}
            alt='General Solara'
            className=' md:h-[80%] h-[100%] w-auto -rotate-2 hover:h-[90%] transition-all duration-300 hover:rotate-2 hover:z-50'
          />
        </a>
      </div>
    </div>
  );
};

export default Cast;
