'use client';
import Container from '@/components/Container';
import InputField from '@/components/InputField';
import Package from '@/components/Package';
import Button from '@/components/core/Button';
import Radio from '@/components/core/Radio';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react'

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

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
            <h3 className='text-[#D6AA28]'>Back</h3>
          </div>
          <h1 className='font-bold text-4xl text-white'>Subscribe to Gamble God!</h1>
          <h1 className='font-bold text-5xl text-[#D6AA28]'>USD 650.00</h1>
          <div className='p-4 rounded-md		bg-[#4d0084] mt-8'>
          <h3 className='text-white font-semibold text-2xl'>Your Order</h3>
          <div className='flex justify-between text-white text-lg font-bold mt-8'>
            <h4>Gold Package</h4>
            <h4>USD 650.00</h4>
          </div>
          <div className='flex justify-between text-[#929292] text-sm	'>
            <p>Billed yearly</p>
            <p>USD 650.00 per package</p>
          </div>
          <div className='text-white font-bold text-lg mt-8 flex justify-between'>
            <h4>Subtotal</h4>
            <h4>USD 650.00</h4>
          </div>
          <div className='border-spacing-1 mt-8'></div>
          <h3 className='text-[#D6AA28] text-lg font-bold'>Add promotion code</h3>
          <div className='border-spacing-1'></div>
          <div className='text-white font-semibold text-base flex justify-between mt-8'>
            <h4>Total</h4>
            <h4>USD 650.00</h4>
          </div>
          </div>
        </div>
        <div className='flex flex-col	gap-2 flex-[0.8]'>
          <div className=' h-max bg-[white] relative'>
            <div className='p-6 flex flex-col gap-2'>
              <h3 className='text-4xl font-extrabold pb-2 text-center text-[#3D0069]'>Billing Information</h3>
              <div className='text-[grey] mt-1'>
                <p className='text-xs'>Complete your purchase by providing your payment details</p>
              </div>
              <div className='flex flex-col gap-3 mt-3 lg:flex-row'>
                <InputField
                  label='First Name'
                  value='Alex'
                  name='firstName'
                  onChange={handleChange}
                  placeholder='Enter Your First Name'
                />
                <InputField
                  label='Last Name'
                  value='Muller'
                  name='Muller'
                  onChange={handleChange}
                  placeholder='Enter Your Last Name'
                />
              </div>
              <div className='mt-2'>   
                <InputField
                    label='Address'
                    value='142 Audubon Ave Jersey City NJ 07305-1006 USA'
                    name='address'
                    onChange={handleChange}
                    placeholder='Enter Your Address'
                />
              </div>
              <div className='mt-2'>
              <InputField
                label='Email'
                value='alex.muller@company.com'
                name='email'
                onChange={handleChange}
                placeholder='Enter Your Email'
              />
              </div>
              <div className='mt-2'> 
                <InputField
                    label='Phone Number'
                    value='+18143008038'
                    name='phoneNumber'
                    onChange={handleChange}
                    placeholder='Enter Your Phone Number'
                />
              </div>
              {/* <Button className='relative bg-[#D6AA28] w-full rounded-md p-1 mt-3'>
                Continue
              </Button> */}
            </div>
          </div>
          <div className=' h-max bg-[white] relative mt-8'>
            <div className='p-6 flex flex-col gap-2'>
              <h3 className='text-4xl font-extrabold pb-2 text-center text-[#3D0069]'>Payment Details</h3>
              <div className='text-[grey] mt-1'>
                <p className='text-xs'>Complete your purchase by providing your payment details</p>
              </div>
              <div className='flex flex-col mt-3 lg:flex-row rounded-lg bg-[#dadddf]'>
                <button className='w-full border rounded-lg	p-3 bg-[white]'>Pay by Card</button>
                <button className='w-full rounded-lg	p-3 bg-[#dadddf]'>Pay with PayPal</button>
                 {/* <Button className=' bg-white'>Pay by Card</Button>
                 <Button className='w-1/2'>Pay with PayPal</Button> */}
              </div>
              <div className='mt-2'>   
                <InputField
                    label='Card Number *'
                    value=''
                    name='address'
                    onChange={handleChange}
                    placeholder='xxxx xxxx xxxx xxxx'
                />
              </div>
              <div className='flex flex-col gap-3 mt-3 lg:flex-row'>
                <InputField
                  label='Expiration month *'
                  value=''
                  name='firstName'
                  onChange={handleChange}
                  placeholder='Month'
                />
                <InputField
                  label='Expiration year *'
                  value=''
                  name='Muller'
                  onChange={handleChange}
                  placeholder='Year'
                />
              </div>
              
              <div className='mt-2 w-1/2'>
              <InputField
                label='CVC *'
                value=''
                name='email'
                onChange={handleChange}
                placeholder='No.'
              />
              </div>
              <div className='flex flex-col mt-3 lg:flex-row rounded-lg gap-3'>
                <button className='w-full border rounded-lg	p-4 bg-[#F3F4F5]'>Cancel</button>
                <button className='w-full rounded-lg	p-4 bg-[#D6AA28]'>Confirm</button>
                 {/* <Button className=' bg-white'>Pay by Card</Button>
                 <Button className='w-1/2'>Pay with PayPal</Button> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Payment;
