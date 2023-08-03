'use client';
import Container from '@/components/Container';
import DetailSection from '@/components/DetailSection';
import InputField from '@/components/InputField';
import Button from '@/components/core/Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const rightSideData = [
  'When selecting this package you have to be willing to bet $25 a unit per play to properly follow our system and maximize the profits. You can expect to wager between 20-35 units a day with an average of 25 units per day.',
  'This translates to $500 - $875 per day with an average of $625 per day. With this package you can expect to win 3- 15 units a day which translates to $75 - $375 a day in profit.',
  'Weekly you can expect to win 45 - 60 units which translates to $1125 - $1500 in profits. These are projections based off past results and not a guarantee. The 100% money back guarantee is based on a weekly profit of at least 1 unit.'
];

function Accounts() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: ''
  });
  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <main className='bg-dark-pink min-h-screen flex flex-col'>
      {/* <div className='absolute  w-full h-full z-0   content-["  "] opacity-50 bg-[url("/images/texture.png")] '></div> */}
      <Container>
        <div className='flex flex-col justify-between gap-10 mt-10 p-4 md:flex-row'>
          <DetailSection
            subTitle='THE LAST STEP'
            title='Ready to take a closer look at Gamble God?'
            description={rightSideData}
          />
          <div className='p-6 h-max bg-[white] relative flex-[0.7] flex flex-col gap-2 '>
            <form className='flex flex-col gap-3'>
              <h3 className='text-3xl pb-2 text-center text-dark-pink font-bold'>
                Account Info
              </h3>
              <div className='flex flex-col justify-evenly gap-3 lg:flex-row'>
                <InputField
                  label='First Name'
                  value={formData.firstName}
                  name='firstName'
                  onChange={handleChange}
                  placeholder='Enter Your First Name'
                />
                <InputField
                  label='Last Name'
                  value={formData.lastName}
                  name='lastName'
                  onChange={handleChange}
                  placeholder='Enter Your Last Name'
                />
              </div>

              <InputField
                label='Address'
                value={formData.address}
                name='address'
                onChange={handleChange}
                placeholder='Enter Your Address'
              />

              <InputField
                label='Email'
                value={formData.email}
                name='email'
                onChange={handleChange}
                placeholder='Enter Your Email'
              />
              <InputField
                label='Phone Number'
                value={formData.phoneNumber}
                name='phoneNumber'
                onChange={handleChange}
                placeholder='Enter Your Phone Number'
              />
              <Link href={'/views/informationConfirmation'}>
              <Button>Continue</Button>
              </Link>
            </form>

            <p className='text-sm bg-[#e9e9e9] mt-3 p-6 text-[#000]'>
              Our weekly newsletter is loaded with exclusive free picks, insight
              and advice from our expert handicappers. That include free sports
              picks, predictions and odds on almost every single game as well as
              general sports betting news updated daily.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Accounts;
