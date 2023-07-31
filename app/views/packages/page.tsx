import Container from '@/components/Container';
import Headers from '@/components/Headers';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaYoutube,FaPinterestP } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from '@/components/PrimaryButton';

export default function New() {
  return (
    <main className='bg-dark-pink min-h-screen flex flex-col '>
      <div className='absolute  w-full h-full -z-0   content-["  "] opacity-50 bg-[url("/images/texture.png")] '></div>
      <Container>
        <div className='flex justify-between gap-10'>
          <div className='w-1/2'>
            <h3 className='text-[#D6AA28] pb-1'>WELCOME TO GAMBLE GOD, SCOTT lENNINGTON!</h3>
            <h1 className='font-bold text-4xl text-white'>Select your Player Package</h1>
            <p className='text-white mt-4'>When selecting this package you have to be willing to bet $25 a unit per play to properly follow our system and maximize the 
              profits. You can expect to wager between 20-35 units a day with an average of 25 units per day.<br/><br/> This translates to $500 - $875 per 
              day with an average of $625 per day. With this package you can expect to win 3- 15 units a day which translates to $75 - $375 a 
              day in profit.<br/><br/> Weekly you can expect to win 45 - 60 units which translates to $1125 - $1500 in profits. These are projections 
              based off past results and not a guarantee. The 100% money back guarantee is based on a weekly profit of at least 1 unit.</p>
          </div>
          <div className='w-1/2 flex flex-col	gap-2'>
            <div className=' h-max bg-[#3D0069] relative'>
              <div className='border-2 border-[#8A00CC] rounded-md	 p-3 text-white'>
                <div className='flex justify-between'>
                  <h3 className='text-xl pb-2'>Gold Package</h3>
                  <span className='text-[#D6AA28]'>$25 Unit Players</span>
                </div>

                <div>
                  <p className='text-sm'>Gamble God Gold Package for the new marketer on a budget just wants basic tracking ...</p>
                </div>
              </div>
            </div>
            <div className=' h-max bg-[#3D0069] relative'>
              <div className='border-2 border-[#8A00CC] rounded-md	 p-3 text-white'>
                <div className='flex justify-between'>
                  <h3 className='text-xl pb-2'>Gold Package</h3>
                  <span className='text-[#D6AA28]'>$25 Unit Players</span>
                </div>

                <div>
                  <p>Gamble God Gold Package for the new marketer on a budget just wants basic tracking ...</p>
                </div>
              </div>
            </div>
            <div className=' h-max bg-[#3D0069] relative'>
              <div className='border-2 border-[#8A00CC] rounded-md	 p-3 text-white'>
                <div className='flex justify-between'>
                  <h3 className='text-xl	pb-2'>Gold Package</h3>
                  <span className='text-[#D6AA28]'>$25 Unit Players</span>
                </div>

                <div>
                  <p>Gamble God Gold Package for the new marketer on a budget just wants basic tracking ...</p>
                </div>
              </div>
            </div>
            <button className='relative bg-[#D6AA28] rounded-md p-1 mt-3'>Continue</button>
          </div>
        </div>
      </Container>
      <div className='bg-[#3D0069] relative mt-16 text-white'>
        <Container>
          <h2 className='text-2xl	font-semibold	py-12 capitalize'>Additional features and services</h2>
          <div className='flex gap-4 pb-8'>
            <div className='border-2 border-[#8A00CC] rounded-md flex-1'>
              <h3 className='text-center p-2 bg-[#8A00CC]'>GOLD PACKAGE</h3>
              <div className='flex gap-2 mt-4'>
                <div>
                  <Image src={'/images/Vector.png'} width={50} height={50} alt={'Vector'}/>
                </div>
                
                <div className='text-base	'>
                  <span>One Day Gamble God Package</span><br />
                  <span className='bg-[#D6AA28] rounded-md'>$25 + Fees</span>
                  <p className='text-sm	mt-2'> With this package you will receive the plays for a one day period.</p>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <div>
                  <img src="/images/Vector.png" width={150} height={150} alt="" />
                </div>
                
                <div className='text-base	'>
                  <span>7 Day - Weekly Gamble God Package</span><br />
                  <span className='bg-[#D6AA28] rounded-md'>$140 + Fee (20% discount)</span><br />
                  <span>**RECOMMENDED**</span><br /><br />
                  <span className='bg-[#D6AA28] rounded-md'>100 % MONEY BACK GUARANTEE</span>
                  <p className='text-sm	mt-2'>With this package you will receive all the plays released for a 7 day period. 
                  If at the end of the 7 day period the package doesn’t result in a profit (Positive units), 
                  the pack age price will be refunded to you.</p>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <div>
                  <img src="/images/Vector.png" width={150} height={150} alt="" />
                </div>
                
                <div className='text-base	pb-8'>
                  <span>30 Day - Weekly Gamble God Package</span><br />
                  <span className='bg-[#D6AA28] rounded-md'>$525 + Fee (30% discount)</span><br /><br />
                  {/* <span>**RECOMMENDED**</span><br /><br /> */}
                  <span className='bg-[#D6AA28] rounded-md'>100 % MONEY BACK GUARANTEE</span>
                  <p className='text-sm	mt-2'>With this package you will receive all the plays released for a 7 day period. If at the end of the
                   7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.</p>
                </div>
              </div>
            </div>
            <div className='border-2 border-[#8A00CC] rounded-md flex-1'>
              <h3 className='text-center p-2 bg-[#D6AA28]'>PLATINUM PACKAGE</h3>
              <div className='flex gap-2 mt-4'>
                <div>
                  <Image src={'/images/Vector.png'} width={50} height={50} alt={'Vector'}/>
                </div>
                
                <div className='text-base	'>
                  <span>One Day Gamble God Package</span><br />
                  <span className='bg-[#D6AA28] rounded-md'>$50 + Fees</span>
                  <p className='text-sm	mt-2'> With this package you will receive the plays for a one day period.</p>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <div>
                  <img src="/images/Vector.png" width={150} height={150} alt="" />
                </div>
                
                <div className='text-base	'>
                  <span>7 Day - Weekly Gamble God Package</span><br />
                  <span className='bg-[#D6AA28] rounded-md'>$280 + Fee (20% discount)</span><br />
                  <span>**RECOMMENDED**</span><br /><br />
                  <span className='bg-[#D6AA28] rounded-md'>100 % MONEY BACK GUARANTEE</span>
                  <p className='text-sm	mt-2'>With this package you will receive all the plays released for a 7 day period. 
                  If at the end of the 7 day period the package doesn’t result in a profit (Positive units), 
                  the pack age price will be refunded to you.</p>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <div>
                  <img src="/images/Vector.png" width={150} height={150} alt="" />
                </div>
                
                <div className='text-base	pb-8'>
                  <span>30 Day - Weekly Gamble God Package</span><br />
                  <span className='bg-[#D6AA28] rounded-md'>$1050 + Fee (30% discount)</span><br /><br />
                  <span className='bg-[#D6AA28] rounded-md'>100 % MONEY BACK GUARANTEE</span>
                  <p className='text-sm	mt-2'>With this package you will receive all the plays released for a 7 day period. If at the end of the
                   7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.</p>
                </div>
              </div>
            </div>
            <div className='border-2 border-[#8A00CC] rounded-md flex-1'>
              <h3 className='text-center p-2 bg-[#8A00CC]'>GOLD PACKAGE</h3>
              <div className='flex gap-2 mt-4'>
                <div>
                  <Image src={'/images/Vector.png'} width={50} height={50} alt={'Vector'}/>
                </div>
                
                <div className='text-base	'>
                  <span>One Day Gamble God Package</span>
                  <span className='bg-[#D6AA28] rounded-md'>$100 + Fees</span>
                  <p className='text-sm	mt-2'> With this package you will receive the plays for a one day period.</p>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <div>
                  <img src="/images/Vector.png" width={150} height={150} alt="" />
                </div>
                
                <div className='text-base	'>
                  <span>7 Day - Weekly Gamble God Package</span><br />
                  <span className='bg-[#D6AA28] rounded-md'>$560 + Fee (20% discount)</span><br />
                  <span>**RECOMMENDED**</span><br /><br />
                  <span className='bg-[#D6AA28] rounded-md'>100 % MONEY BACK GUARANTEE</span>
                  <p className='text-sm	mt-2'>With this package you will receive all the plays released for a 7 day period. 
                  If at the end of the 7 day period the package doesn’t result in a profit (Positive units), 
                  the pack age price will be refunded to you.</p>
                </div>
              </div>
              <div className='flex gap-2 mt-8'>
                <div>
                  <img src="/images/Vector.png" width={150} height={150} alt="" />
                </div>
                
                <div className='text-base	pb-8'>
                  <span>30 Day - Weekly Gamble God Package</span><br />
                  <span className='bg-[#D6AA28] rounded-md'>$2100 + Fee (30% discount)</span><br /><br />
                  <span className='bg-[#D6AA28] rounded-md'>100 % MONEY BACK GUARANTEE</span>
                  <p className='text-sm	mt-2'>With this package you will receive all the plays released for a 7 day period. If at the end of the
                   7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}