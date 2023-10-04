import React from 'react';
import Container from './Container';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP
} from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import PrimaryButton from './PrimaryButton';

const Footer = () => {
  return (
    <div className='bg-pink'>
      <Container className='pt-12 py-8 px-3 flex flex-col-reverse gap-3 md:flex-row md:gap-28'>
        <div className='flex items-end flex-col'>
          <div className='h-28 w-28 relative'>
            <Image src={'/images/gamble-god-logo.png'} alt={'logo'} fill />
          </div>
          <div className='flex gap-x-4 text-white mt-6'>
            <FaFacebookF />
            <FaTwitter />
            <BsInstagram />
            <FaYoutube />
            <FaPinterestP />
          </div>
        </div>
        <div className=' text-white '>
          <h4>Gamble Article Archives LI</h4>
          <p className='text-xs	max-w-screen-md mt-2 '>
            If you think you have a gambling problem call the National Problem
            Gambling Helpline at 1-800-522-4700 or visit ncpgambling.org While
            internet gambling is legal in over 80 countries activities offered
            by advertising links to other websites may be deemed an illegal
            activity in your jurisdiction. Viewers are warned that they should
            inquire into the legality of participating in any games and/or
            activities offered by such other sites. The owner of this website
            assumes no responsibility for the actions by and makes no
            representation or endorsement of any of these games and/or
            activities offered by the advertiser. As a condition of viewing this
            website viewers agree to hold the owner of this website harmless
            from any claims arising from the viewer&apos;s participation in any
            of the games and/or activities offered by the advertiser.
          </p>
          <div>
            <ul className='mt-2 flex flex-col gap-1 md:flex-row md:flex-wrap md:justify-between'>
              <li className='w-fit'>Contact Us</li>
              <li className='w-fit'>Privacy Policy</li>
              <li className='w-fit'>Terms of Service</li>
              <li className='w-fit'>
                Affilliate Program, RSS, Writer Bios, Archives
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className='bg-yellow '>
        <Container className='flex flex-col-reverse justify-between items-center gap-2 p-2 md:flex-row'>
          <span>© 2023 Gamblegod site Service. All Rights Reserved.</span>
          <div>
            {/* <PrimaryButton>Free $ 60 account</PrimaryButton> */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
