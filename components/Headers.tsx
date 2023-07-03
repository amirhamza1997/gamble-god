import React from 'react';
import PrimaryButton from './PrimaryButton';
import Container from './Container';

const Headers = () => {
  return (
    <Container className='w-[100%] px-20 py-4 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <PrimaryButton>Free $ 60 account</PrimaryButton>
        <PrimaryButton>Free $ 60 account</PrimaryButton>
      </div>
      <div className='flex items-center gap-3'>
        <p className='text-base'>service@docsports.com</p>
        <p className='text-base'>1-866-2575-236</p>
      </div>
    </Container>
  );
};

export default Headers;
