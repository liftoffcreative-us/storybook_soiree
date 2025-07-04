import React from 'react';
import Snowfall from 'react-snowfall';

const FrostFire = () => {
  return (
    <div
      id='frostfire'
      className='relative flex items-center justify-center w-screen h-screen bg-frostFire'
    >
      <div></div>
      <Snowfall color='rgba(255, 255, 255, .7)' snowflakeCount={200} />
    </div>
  );
};

export default FrostFire;
