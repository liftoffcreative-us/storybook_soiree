import React from 'react';
import booksData from './booksData';
const BOTM = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-ssLavender w-screen h-auto py-[5vh]'>
      <h2 className='font-a-day-without font-bold md:text-[4rem] text-[2rem] text-center'>
        THIS MONTH'S READS
      </h2>
      <div className='flex md:flex-row flex-col items-center justify-center gap-6 w-[90vw] overflow-hidden py-[5vh]'>
        {booksData.map((book) => {
          return (
            <div
              key={book.id}
              className='md:w-[20%] w-[90%] flex flex-col items-center '
            >
              <img
                src={book.bookCoverImage}
                alt='book cover picture'
                className='w-[50%] -mb-[100px] z-40'
              />
              <div className='flex flex-col items-center justify-between gap-2 pb-[3vh] bg-white rounded-2xl w-full h-[400px] text-ssPurple text-center px-4 '>
                <div className='h-[110px]'></div>
                <div>
                  <h3 className='font-indivisibleBold text-[2em] leading-tight'>
                    {book.bookName}
                  </h3>
                  <h4 className='text-[1.2em] font-indivisible font-light'>
                    {book.bookAuthor}
                  </h4>
                </div>
                <p className='font-a-day-without text-[1.3em]'>
                  {book.bookBlurb}
                </p>
                <button className='px-12 py-4 bg-ssPurple hover:bg-ssLavender border-2 border-ssLavender text-white rounded-3xl justify-self-end'>
                  BUY NOW
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BOTM;
