"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from './CustomModal';
import { useRouter } from 'next/navigation';

function Welcome() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (link:string) => () => {
    
    // if (true) {
    //   router.push(link)
    // }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='bg-fadeBlack p-5'>
        <div className='max-w-[1100px] mx-auto flex gap-12'>
          <Link href={'/'} className='text-yellow '>
            Home
          </Link>
          <div className='text-yellow' >
            {/* <button onClick={openModal}>Unit System</button> */}
            <button onClick={openModal("/views/unitsystem")} >Unit System</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2 className="text-xl mb-4">Welcome to our Member Area!</h2>
              <p className='pb-2'>To get started, please log in or sign up. Your journey with us awaits!</p>
            </Modal>
          </div>
          <button onClick={openModal("/views/bankroll")} className='text-yellow '>
            Bankroll
          </button>
        </div>
      </div>

      <div className='flex-1 relative bg-dark-pink'>
        {/* <div className='absolute w-full h-full -z-0 content-["  "] opacity-50 bg-[url("/images/texture.png")] '></div> */}
        <img
          src={'/images/portal.png'}
          alt='portal'
          className='absolute w-[35%] z-[0] right-10 mix-blend-color-dodge hidden md:block'
        />
        <div className='max-w-[1100px] mx-auto p-4 flex flex-col text-white gap-6 z-10 relative'>
          <div className='flex items-start gap-6 flex-col sm:items-center sm:flex-row'>
            <div className='h-36 w-36 relative'>
              <Image src={'/images/gamble-god-logo.png'} alt={'logo'} fill sizes='' />
            </div>
            <h1 className='text-2xl w-[80%] font-bold sm:text-3xl md:text-5xl'>
              Welcome to Gamble God!!! The home of PROVEN Information.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
