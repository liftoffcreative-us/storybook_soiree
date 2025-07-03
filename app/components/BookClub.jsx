import React from 'react';
import Image from 'next/image';

const BookClub = () => {
  return (
    <div
      id='book-club'
      className='flex flex-col items-center w-screen h-auto pb-[5vh] bg-ssLavender text-white'
    >
      <Image
        src='/book_club_section_top.png'
        alt='a silhouette of a gnome walking through mushrooms'
        width={1920}
        height={300}
        className='w-[100vw] -mt-[15vw] border '
      />

      <div className='flex flex-col items-center -mt-[30vh]'>
        <h2 className='text-[3rem]  lavishly py-4'>Welcome to the Book Club</h2>
        <p className='w-3/4 font-a-day-without text-[2rem] text-center'>
          Welcome to the Storybook Soirees Book Club (The Soiree Society)—a
          reading experience designed for every kind of book lover! Each month,
          we offer four captivating book choices, ranging from No-Low Spice
          reads to dark romance with long trigger warning pages. Whether you
          prefer BYOB (Bring Your Own Book) or want to elevate your reading
          experience with our exclusive Book Box (launching in May!) we’ve got
          you covered. <br />
          <br />
          📚 Your Reading, Your Way Pick the book that speaks to you, dive into
          the story at your own pace, and engage in lively discussions on our
          dedicated Discord channels—one for each book, to keep the conversation
          focused and spoiler-free. We also keep the bookish fun going on
          Instagram, TikTok, and Facebook, so you can connect with fellow
          readers everywhere! <br />
          <br />
          🎁 Upgrade Your Reading Experience (Starting in May for June’s Reads)
          Pre-order our Storybook Soirees Book Box to receive not just the book
          of the month but also exclusive swag and everything you need to make
          your reading time extra special.Join us in creating a community where
          every book is an adventure, and every reader has a place to belong.{' '}
          <br />
          <br />✨ Ready to turn the page? Sign up and start reading with us
          today! ✨
        </p>
      </div>
    </div>
  );
};

export default BookClub;
