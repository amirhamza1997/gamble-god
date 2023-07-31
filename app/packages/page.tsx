import Container from '@/components/Container';
import React from 'react';

const Packages = () => {
  return (
    <main className='bg-pink min-h-screen flex flex-col '>
      <Container>
        <div className='flex-1 relative bg-dark-pink'>
          <div className='absolute  w-full h-full -z-0   content-["  "] opacity-50 bg-[url("/images/texture.png")] '></div>
          <div className='w-1/2'>
            <h3 className='text-[#D6AA28] pb-1'>
              WELCOME TO GAMBLE GOD, SCOTT lENNINGTON!
            </h3>
            <h1 className='font-bold text-4xl text-white'>
              Select your Player Package
            </h1>
            <p className='text-white'>
              When selecting this package you have to be willing to bet $25 a
              unit per play to properly follow our system and maximize the
              profits. You can expect to wager between 20-35 units a day with an
              average of 25 units per day.
              <br />
              <br /> This translates to $500 - $875 per day with an average of
              $625 per day. With this package you can expect to win 3- 15 units
              a day which translates to $75 - $375 a day in profit.
              <br />
              <br /> Weekly you can expect to win 45 - 60 units which translates
              to $1125 - $1500 in profits. These are projections based off past
              results and not a guarantee. The 100% money back guarantee is
              based on a weekly profit of at least 1 unit.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Packages;
