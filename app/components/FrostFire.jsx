import React from 'react';
import Snowfall from 'react-snowfall';

const FrostFire = () => {
  return (
    <div
      id='frostfire'
      className='relative flex items-center justify-center w-screen h-screen bg-frostFire'
    >
      <div className='w-full h-full relative'>
        <Snowfall />
      </div>
    </div>
  );
};

export default FrostFire;
