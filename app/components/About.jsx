import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      className='flex flex-col items-center w-screen h-[120vh] bg-ssPurple'
    >
      <img
        src='/grass_overlay.png'
        alt='Purple grass tops the next section'
        className='w-screen h-auto -mt-[25vh] z-45 '
      />
      <p className='w-3/4 text-[1.5vw] font-indivisible'>
        Calling all readers, fantasy lovers, and kindred spirits—this is your
        place to escape into the magic of stories, build lifelong friendships,
        and celebrate the books we love in unforgettable ways! Experience a
        community that values connections over transactions, where every budding
        bookfriend blossoms into a cherished bookbestie. <br />
        <br />
        At Storybook Soirées, we create immersive events and retreats that bring
        stories to life—from fantasy balls to cozy bookish getaways. Join our
        virtual book club, test your knowledge in monthly trivia nights,
        celebrate midnight release parties, and so much more! <br />
        <br />
        Founded by a female entrepreneur passionate about building a community,
        this is more than just events—it’s about empowering each other to live
        our best, most magical lives. So grab your favorite book, step into the
        story, and let’s make memories together!
      </p>
    </div>
  );
};

export default About;
