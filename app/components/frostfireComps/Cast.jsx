import Image from 'next/image';
import React from 'react';

const Cast = () => {
  return (
    <div className='w-screen h-auto bg-[#002b6b] flex flex-col items-center justify-center'>
      <h2 className='text-[2em] mt-[5vh]'>Meet the Cast</h2>
      <div className='md:w-screen w-[80%] md:h-[60%] h-auto flex md:flex-row flex-col items-center justify-center'>
        <a
          href=''
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] -mr-[10vw] md:-mt-[5vh] cursor-pointer'
        >
          <Image
            src='/Xilvyre.png'
            width={1824}
            height={2621}
            alt='Ice Queen'
            className='md:h-[80%] h-[100%] w-auto rotate-2 hover:h-[90%] transition-all duration-300 hover:-rotate-3 hover:z-50'
          />
        </a>
        <a
          href='https://www.instagram.com/stacylkellam/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] cursor-pointer'
        >
          <Image
            src='/Rhyden.png'
            width={1824}
            height={2621}
            alt='Ice Queen'
            className='-mr-[10vw] md:h-[80%] h-[100%] w-auto -rotate-2 hover:h-[90%] transition-all duration-300 hover:rotate-2 hover:z-50 '
          />
        </a>
        <a
          href='https://www.instagram.com/learea_cosplay/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] cursor-pointer'
        >
          <Image
            src='/iceQueen.png'
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
            src='/Ria.png'
            width={1824}
            height={2621}
            alt='Ice Queen'
            className='md:h-[80%] h-[100%] w-auto -rotate-2 hover:h-[90%] transition-all duration-300 hover:rotate-4 z-20 hover:z-50'
          />
        </a>
        <a
          href='https://www.instagram.com/_thebookishlifeofsyd/'
          target='_blank'
          className='flex items-center justify-center h-[550px] md:w-[350px] w-[400px] -ml-[5vw] -mt-[2vh] cursor-pointer'
        >
          <Image
            src='/Cyrene.png'
            width={1824}
            height={2621}
            alt='Ice Queen'
            className=' md:h-[80%] h-[100%] w-auto rotate-2 hover:h-[90%] transition-all duration-300 hover:-rotate-2 hover:z-50'
          />
        </a>
      </div>
    </div>
  );
};

export default Cast;
