import React from 'react';
import NavBarAlt from '../components/NavBarAlt';
import NavBarMobileAlt from '../components/NavBarMobileAlt';
import RetreatHero from '../components/retreatsComps/RetreatHero';
import Retreat1 from '../components/retreatsComps/Retreat1';
import RetreatHeroMobile from '../components/retreatsComps/RetreatHeroMobile';
import Included from '../components/retreatsComps/Included';

const retreats = () => {
  return (
    <div className='w-screen bg-ssLavender'>
      <NavBarAlt bgColor={'#a48eae'} />
      <NavBarMobileAlt />
      <RetreatHero />
      <RetreatHeroMobile />
      <Included />
      <Retreat1 />
    </div>
  );
};

export default retreats;
