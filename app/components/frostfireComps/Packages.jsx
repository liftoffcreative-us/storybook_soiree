import Image from 'next/image';

const Packages = () => {
  return (
    <div className='w-screen h-auto flex flex-col items-center gap-6'>
      <h2 className='font-indivisibleBold md:text-[3.5em]'>PACKAGES</h2>
      <div
        id='package1'
        className='w-[70%] h-[auto] bg-white rounded-3xl flex items-center justify-center p-6 my-[5vh]'
      >
        <Image
          src='/package1.png'
          alt='A picture showing what is included in the basic package'
          width={945}
          height={1181}
          className='h-[80vh] w-auto rounded-2xl'
        />
        <div className='w-1/2  flex flex-col items-center justify-center gap-4 text-[#000c52] text-center'>
          <h3 className='md:text-[3em] leading-5'>The Artisan's Spark</h3>
          <h5 className='md:text-[2em]'>Faire Only</h5>
          <p className='w-2/3'>
            Immerse yourself in a unique marketplace Access to The Artisans and
            Authors FrostFire Faire (10:00 AM - 3:00 PM)
            <br />
            <br />
            Opportunity to Meet and Support Small Creators: Engage with artisans
            and authors, discover unique items, and purchase books directly from
            Authors.
            <br />
            <br />
            Non-Alcoholic Beverages and Delightful Bites included.
          </p>
          <h3 className='font-black md:text-[4em] flex items-center '>
            <span className='md:text-[3rem]'>$</span>30
          </h3>
          <a
            href='https://storybook-soirees.square.site/product/the-artisan-s-spark-faire-only/DBA2JFWCJ5NHWMTG3C5R5WYY?cs=true&cst=custom'
            target='_blank'
          >
            <button className='bg-teal-700 hover:bg-ssLavender text-white px-24 py-4 rounded-2xl cursor-pointer'>
              Buy Now
            </button>
          </a>
        </div>
      </div>

      <div
        id='package2'
        className='w-[70%] h-[auto] bg-white rounded-3xl flex items-center justify-center p-6'
      >
        <div className='w-1/2 flex flex-col items-center justify-center gap-4 text-[#000c52] text-center py-[2vh]'>
          <h3 className='md:text-[3em] leading-5'>Courtier's Winter Embrace</h3>
          <h5 className='md:text-[2em]'>General Admission</h5>
          <p className='w-3/4 md:text-[.8em]'>
            <span className='font-bold'>
              Access to The Artisans and Authors FrostFire Faire (10:00 AM -
              3:00 PM):
            </span>{' '}
            Enjoy the daytime market before the evening's enchantment. <br />
            <br />
            <span className='font-bold'>
              Entry to The FrostFire Ball (Evening Event)
            </span>
            : Access to the main event on January 24th, 2026.
            <br />
            <br />
            <span className='font-bold'>Immersive Themed Atmosphere:</span>{' '}
            Experience the icy elegance and subtle warmth of the FrostFire Ball
            décor of the Queens Ballroom
            <br />
            <br />
            <span className='font-bold'>
              Lounge Access: "The Rebel Sanctuary":
            </span>{' '}
            A dedicated underground base with comfortable seating and enhanced
            décor.
            <br />
            <br />
            <span className='font-bold'>Live Entertainment:</span> Enjoy the
            music, performances, and ambiance of of the evening. Immersive
            yourself with our cast, watch fire performers and String Quartet.
            <br />
            <br />
            <span className='font-bold'>Dancing:</span> Take to the floor and
            celebrate the potential thawing of the Queen's heart - or celebrate
            her overthrow!
            <br />
            <br />
            <span className='font-bold'>
              {' '}
              Hosted Open Bar until 10:00 PM:
            </span>{' '}
            Enjoy complimentary beer, wine, and cocktails. <br />
            <br />
            <span className='font-bold'>
              Cash Bar Access (after 10:00 PM):
            </span>{' '}
            Purchase additional beverages as desired.
            <br />
            <br />
            <span className='font-bold'>
              Floating and Stationed Hors d'oeuvres:
            </span>{' '}
            Enjoy a variety of delicious bites throughout the evening - From
            Savory to Sweet
            <br />
            <br />
            <span className='font-bold'>Photo Opportunities:</span> Capture
            memorable moments in themed photo booths and backdrops, plus don’t
            forget to include our cast!
            <br />
            <br />
            <span className='font-bold'>
              Participation in The Story Activities - will we save the queen, or
              be her ruin?
            </span>
          </p>
          <h3 className='font-black md:text-[4em] flex items-center '>
            <span className='md:text-[3rem]'>$</span>325
          </h3>
          <a
            href='https://storybook-soirees.square.site/product/courtier-winter-embrace-ga/5S7HFY7FL4HHPJR3OTXSDNQB?cs=true&cst=custom'
            target='_blank'
          >
            <button className='bg-teal-700 hover:bg-ssLavender text-white px-24 py-4 rounded-2xl cursor-pointer'>
              Buy Now
            </button>
          </a>
        </div>
        <Image
          src='/package2.png'
          alt='A picture showing what is included in the basic package'
          width={945}
          height={1181}
          className='h-[80vh] w-auto rounded-2xl'
        />
      </div>

      <div
        id='package3'
        className='w-[70%] h-auto bg-white rounded-3xl flex items-center justify-center p-6 my-[5vh]'
      >
        <Image
          src='/package3.png'
          alt='A picture showing what is included in the basic package'
          width={945}
          height={1181}
          className='h-[80vh] w-auto rounded-2xl'
        />
        <div className='w-1/2 flex flex-col items-center justify-center gap-4 text-[#000c52] text-center py-[2vh]'>
          <h3 className='md:text-[3em] leading-5'>The Rebel's Flame</h3>
          <h5 className='md:text-[2em]'>VIP Access</h5>
          <p className='w-2/3'>
            <span className='font-bold'>
              All Inclusions of the Courtier’s Winter Embrace PLUS:
            </span>
            <br />
            <br />
            <span className='font-bold'>
              Early Entry to The FrostFire Ball ( 1 hour prior):
            </span>{' '}
            Get a head start on exploring the venue and photo opportunities -
            plus unfiltered moments with the cast to Co-Author our story.
            <br />
            <br />
            <span className='font-bold'>Priority Lounge Access:</span> "The
            Rebel Sanctuary": A dedicated underground base with comfortable
            seating and fiery décor.
            <br />
            <br />
            <span className='font-bold'>
              First Access to Engage with Cosplayers:
            </span>{' '}
            An exclusive opportunity to interact with costumed characters in the
            Queens Ballroom and the Rebel Sanctuary during the early entry hour.
            How will you shape the Story?
            <br />
            <br />
            <span className='font-bold'>
              Exclusive Entertainment During the First Hour:
            </span>{' '}
            Enjoy special performances only available to VIP guests during the
            early entry.
            <br />
            <br />
            <span className='font-bold'>Commemorative VIP Gift</span>
            <br />
            <br />
            <span className='font-bold'>
              Be Part of the Story - Save the Queen? or Overthrow Her?
            </span>
          </p>
          <h3 className='font-black md:text-[4em] flex items-center '>
            <span className='md:text-[3rem]'>$</span>400
          </h3>
          <a
            href='https://storybook-soirees.square.site/product/the-rebel-s-flame-vip/MJQ3WIOJN462JHUBUGCZKSQV?cs=true&cst=custom'
            target='_blank'
          >
            <button className='bg-teal-700 hover:bg-ssLavender text-white px-24 py-4 rounded-2xl cursor-pointer'>
              Buy Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Packages;
