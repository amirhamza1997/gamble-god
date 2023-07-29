import React from 'react';
import PrimaryButton from './PrimaryButton';
import Container from './Container';

const Headers = () => {
  return (
    <div className='bg-pink'>
      <Container className='w-[100%]  py-4 flex items-center justify-between xs:flex-col-reverse xs: gap-3'>
        <div className='flex items-center gap-3 xs:flex-col-reverse sm:flex-row sm:items-center'>
          <PrimaryButton className=''>Free $ 60 account</PrimaryButton>
          <PrimaryButton>today's best bet</PrimaryButton>
        </div>
        <div className='flex items-center gap-3 text-white flex-col'>
          <p className='text-base'>service@docsports.com</p>
          <p className='text-base'>1-866-2575-236</p> 
        </div>
      </Container>
    </div>
  );
};

export default Headers;
