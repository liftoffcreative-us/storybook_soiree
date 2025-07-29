import React from 'react';
import booksData from './booksData';
const PastBOTM = ({ month, color }) => {
  const thisMonth = booksData.filter((book) => book.month === month);
  console.log(thisMonth);
  return (
    <div
      className='flex flex-col items-center justify-center w-screen h-auto '
      style={{ backgroundColor: color }}
    >
      <h2 className='font-a-day-without font-bold md:text-[4rem] text-[2rem] text-center'>
        {month} Reads
      </h2>
      <div className='flex md:flex-row flex-col items-center justify-center gap-6 w-[90vw] overflow-hidden py-[5vh]'>
        {thisMonth.map((book) => {
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
                  <h3 className='font-indivisibleBold text-[1.8em] leading-tight'>
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

export default PastBOTM;
