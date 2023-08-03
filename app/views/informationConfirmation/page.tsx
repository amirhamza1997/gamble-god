'use client';
import Container from '@/components/Container';
import InputField from '@/components/InputField';
import Package from '@/components/Package';
import Radio from '@/components/core/Radio';
import Button from '@/components/core/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Link from 'next/link';

function InformationConfirmation() {
  const detailePackages = [
    {
      title: 'GOLD PACKAGE',
      selected: false,
      start: true,
      points: [
        {
          title: 'One Day Gamble God Package',
          highlighted1: '$25 + Fees',
          secondary:
            'With this package you will receive the plays for a one day period.',
          recommented: true,
          highlighted2: '100% MONEY BACK GUARANTEE'
        },
        {
          title: '7 Day - Weekly Gamble God Package',
          highlighted1: '$140 + Fee (20% discount)',
          secondary:
            'With this package you will receive all the plays released for a 7 day period. If at the end of the 7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.',
          recommented: true,
          highlighted2: '100% MONEY BACK GUARANTEE'
        },
        {
          title: '7 Day - Weekly Gamble God Package',
          highlighted1: '$140 + Fee (20% discount)',
          secondary:
            'With this package you will receive all the plays released for a 7 day period. If at the end of the 7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.',
          recommented: true,
          highlighted2: '100% MONEY BACK GUARANTEE'
        }
      ]
    }
  ];

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
      {/* <div className='absolute  w-full h-full -z-0   content-["  "] opacity-50 bg-[url("/images/texture.png")] '></div> */}
      <Container
        className={
          'flex justify-between flex-col md:flex-row gap-10 my-10 px-4'
        }
      >
        <div className='flex flex-col gap-3 flex-1'>
          <div className='flex items-center gap-2 '>
            <FaAngleLeft className='text-[#D6AA28] ' />
            <h3 className='text-[#D6AA28]'>Back</h3>
          </div>
          <h1 className='font-bold text-4xl text-white'>
            Please confirm the information you added is correct. If so click
            continue, otherwise edit your information.
          </h1>
          {detailePackages.map((item, index) => (
            <Package {...item} key={index} />
          ))}
        </div>
        <div className='flex flex-col	gap-2 flex-[0.8]'>
          <div className=' h-max bg-[white] relative'>
            <div className='p-6 flex flex-col gap-2'>
              <h3 className='text-xl pb-2 text-center'>Account Info</h3>
              <div className='flex flex-col gap-3 mt-3 lg:flex-row'>
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
              <Link href={'/views/payment'}>
                <Button className='relative bg-[#D6AA28] w-full rounded-md p-1 mt-3'>
                  Continue
                </Button>
              </Link>

              <div className='bg-[#e9e9e9] mt-3 p-6'>
                <div className='flex gap-3'>
                  <Radio
                    value={''}
                    checked={false}
                    onChange={function (value: string): void {
                      throw new Error('Function not implemented.');
                    }}
                  />
                  <h2>NEW! </h2>
                  <br />
                </div>
                <p className='text-sm'>
                  Check the box if you want to save your New Credit card
                  information for future use
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default InformationConfirmation;
