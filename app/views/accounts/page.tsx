'use client';
import Container from '@/components/Container'
import InputField from '@/components/InputField'
import Image from 'next/image';
import React, { useState } from 'react'

function Accounts() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phoneNumber: '',
    })
    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
  return (
    <main className='bg-dark-pink min-h-screen flex flex-col'>
        <div className='absolute  w-full h-full -z-0   content-["  "] opacity-50 bg-[url("/images/texture.png")] '></div>
        <Container>
        <div className='flex justify-between gap-10 mt-10'>
          <div className='w-1/2'>
            <h3 className='text-[#D6AA28] pb-1'>THE LAST STEP</h3>
            <h1 className='font-bold text-4xl text-white'>Ready to take a closer look at Gamble God?</h1>
            <p className='text-white mt-4'>When selecting this package you have to be willing to bet $25 a unit per play to properly follow our system and maximize the 
              profits. You can expect to wager between 20-35 units a day with an average of 25 units per day.<br/><br/> This translates to $500 - $875 per 
              day with an average of $625 per day. With this package you can expect to win 3- 15 units a day which translates to $75 - $375 a 
              day in profit.<br/><br/> Weekly you can expect to win 45 - 60 units which translates to $1125 - $1500 in profits. These are projections 
              based off past results and not a guarantee. The 100% money back guarantee is based on a weekly profit of at least 1 unit.</p>
          </div>
          <div className='w-1/2 flex flex-col	gap-2'>
            <div className=' h-max bg-[white] relative'>
              <div className='p-6'>
                <div className=''>
                    {/* <Image src={'/images/whitesquare.png'} width={50} height={50} alt={''}/> */}
                  <h3 className='text-xl pb-2 text-center'>Account Info</h3>
                    <div className='flex justify-evenly gap-3 mt-3'>
                        <div>
                            <InputField label='First Name' value={formData.firstName} name='firstName' onChange={handleChange} placeholder='Enter Your First Name'/>
                        </div>
                        <div>
                            <InputField label='Last Name' value={formData.lastName} name='lastName' onChange={handleChange} placeholder='Enter Your Last Name'/>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <InputField label='Address' value={formData.address} name='address' onChange={handleChange} placeholder='Enter Your Address'/>
                    </div>
                    <div className='mt-2'>
                        <InputField label='Email' value={formData.email} name='email' onChange={handleChange} placeholder='Enter Your Email'/>
                    </div>
                    <div className='mt-2'>
                        <InputField label='Phone Number' value={formData.phoneNumber} name='phoneNumber' onChange={handleChange} placeholder='Enter Your Phone Number'/>
                    </div>
                </div>

                <button className='relative bg-[#D6AA28] w-full rounded-md p-1 mt-3'>Continue</button>
                <div className='bg-[#e9e9e9] mt-3 p-6'>
                  <p className='text-sm'>Our weekly newsletter is loaded with exclusive free picks, insight and advice from our expert handicappers. 
                  That include free sports picks, predictions and odds on almost every single game as well as general sports betting news updated daily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Accounts
