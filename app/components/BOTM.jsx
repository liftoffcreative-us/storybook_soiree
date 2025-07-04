import React from 'react';

const BOTM = () => {
  const botmData = [
    {
      id: 1,
      month: 'July',
      bookName: 'ASSISTANT TO THE VILLAIN',
      bookAuthor: 'Hannah Nicole Maehrer',
      bookBlurb: 'Comically Fun Adventure - No Spice',
      bookCoverImage:
        'https://images.squarespace-cdn.com/content/v1/66ca041b9b6e9f1983653134/66f5f823-0370-4e87-872b-b506dbfb7bb5/assistant+to+the+Villain.jpeg?format=2500w',
    },
    {
      id: 2,
      month: 'July',
      bookName: 'BLOOD OATH',
      bookAuthor: 'Morgan B Lee',
      bookBlurb: 'A SPICY Reverse Harem Series',
      bookCoverImage:
        'https://images.squarespace-cdn.com/content/v1/66ca041b9b6e9f1983653134/7bf78baa-5879-4094-8434-b8b1f1ad1d5b/Blood+Oath.jpg?format=2500w',
    },
    {
      id: 3,
      month: 'July',
      bookName: 'GRUMPY ROMANCE',
      bookAuthor: 'Nia Arthurs',
      bookBlurb: 'Billionare Dad Romance',
      bookCoverImage:
        'https://images.squarespace-cdn.com/content/v1/66ca041b9b6e9f1983653134/cfebf497-3a56-4ff6-91be-28f5f227907f/Grumpy+Romance.jpg?format=2500w',
    },
    {
      id: 4,
      month: 'July',
      bookName: 'SERPENT & DOVE',
      bookAuthor: 'Shelby Mahurin',
      bookBlurb: 'First of the Trilogy!',
      bookCoverImage:
        'https://images.squarespace-cdn.com/content/v1/66ca041b9b6e9f1983653134/e274b6fc-b193-4296-9a3a-653222f88c61/Serpent+and+Dove.jpg?format=2500w',
    },
  ];
  return (
    <div className='flex flex-col items-center justify-center bg-ssLavender w-screen h-auto py-[5vh]'>
      <h2 className='font-a-day-without font-bold md:text-[4rem] text-[2rem] text-center'>
        THIS MONTH'S READS
      </h2>
      <div className='flex md:flex-row flex-col items-center justify-center gap-6 w-[90vw] overflow-hidden py-[5vh]'>
        {botmData.map((book) => {
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
