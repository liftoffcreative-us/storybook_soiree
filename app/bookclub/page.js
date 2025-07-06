import React from 'react';
import NavBarAlt from '../components/NavBarAlt';
import NavBarMobileAlt from '../components/NavBarMobileAlt';

const bookclub = () => {
  return (
    <div className='w-screen h-screen'>
      <NavBarAlt />
      <NavBarMobileAlt />
    </div>
  );
};

export default bookclub;
