import React from 'react';
import PrimaryButton from './PrimaryButton';
import Container from './Container';

const Headers = () => {
  return (
    <div className='bg-pink'>
      <Container className='w-[100%] flex flex-col items-center justify-center gap-1 py-3 md:flex-row-reverse md:justify-between px-2'>
        <div className='flex items-center justify-center gap-3 text-white sm:w-full md:w-fit'>
          <p className='text-sm md:text-base'>service@docsports.com</p>
          <p className='text-sm md:text-base'>1-866-2575-236</p>
        </div>
        <div className='flex flex-col justify-center gap-2 sm:flex-row sm:w-full md:w-fit'>
          <PrimaryButton>FREE $ 60 ACCOUNT</PrimaryButton>
          <PrimaryButton>TODAY’S BEST BET</PrimaryButton>
        </div>
      </Container>
    </div>
  );
};

export default Headers;
