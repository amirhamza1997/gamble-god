'use client';
import Container from '@/components/Container';
import DetailSection from '@/components/DetailSection';
import Package from '@/components/Package';
import PriceStack from '@/components/PriceStack';
import Button from '@/components/core/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react';

const goldPackageInfo = [
  'When selecting this package you have to be willing to bet $25 a unit per play to properly follow our system and maximize the profits. You can expect to wager between 20-35 units a day with an average of 25 units per day.',
  'This translates to $500 - $875 per day with an average of $625 per day. With this package you can expect to win 3- 15 units a day which translates to $75 - $375 a day in profit.',
  'Weekly you can expect to win 45 - 60 units which translates to $1125 - $1500 in profits. These are projections based off past results and not a guarantee. The 100% money back guarantee is based on a weekly profit of at least 1 unit.'
];
const platinumPackageInfo = [
  'When selecting this package you have to be willing to bet $50 a unit per play to properly follow our system and maximize the profits. You can expect to wager between 40-70 units a day with an average of 50 units per day.',
  'This translates to $1000 - $1750 per day with an average of $1250 per day. With this package you can expect to win 6- 30 units a day which translates to $150 - $750 a day in profit.',
  'Weekly you can expect to win 90 - 120 units which translates to $2250 - $3000 in profits. These are projections based off past results and not a guarantee. The 100% money back guarantee is based on a weekly profit of at least 1 unit.'
];
const diamondPackageInfo = [
  'When selecting this package you have to be willing to bet $100 a unit per play to properly follow our system and maximize the profits. You can expect to wager between 80-140 units a day with an average of 100 units per day.',
  'This translates to $2000 - $3500 per day with an average of $2500 per day. With this package you can expect to win 12- 60 units a day which translates to $300 - $1500 a day in profit.',
  'Weekly you can expect to win 180 - 240 units which translates to $4500 - $6000 in profits. These are projections based off past results and not a guarantee. The 100% money back guarantee is based on a weekly profit of at least 1 unit.'
];


const packages = [
  {
    title: 'Gold Package',
    subTitle: '$25 Unit Players',
    price: 25,
    description:
      'Gamble God Gold Package for the new marketer on a budget just wants basic tracking ...',
    value: 'gold'
  },

  {
    title: 'Platinum Package',
    subTitle: '$50 Unit Players',
    price: 50,
    description:
      'Gamble God Platinum Package for the new marketer on a budget just wants basic tracking ...',
    value: 'platinum'
  },
  {
    title: 'Diamond Package',
    subTitle: '$100 Unit Players',
    price: 100,
    description:
      'Gamble God Diamond Package for the new marketer on a budget just wants basic tracking ...',
    value: 'diamond'
  }
];

const detailePackages = [
  {
    title: 'GOLD PACKAGE',
    selected: false,
    value: 'gold',
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
        title: '30 Day - Weekly Gamble God Package',
        highlighted1: '$525 + Fee (20% discount)',
        secondary:
          'With this package you will receive all the plays released for a 7 day period. If at the end of the 7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.',
        recommented: true,
        highlighted2: '100% MONEY BACK GUARANTEE'
      }
    ]
  },
  {
    title: 'PLATINUM PACKAGE',
    selected: true,
    value: 'platinum',
    points: [
      {
        title: 'One Day Gamble God Package',
        highlighted1: '$50 + Fees',
        secondary:
          'With this package you will receive the plays for a one day period.',
        recommented: true,
        highlighted2: '100% MONEY BACK GUARANTEE'
      },
      {
        title: '7 Day - Weekly Gamble God Package',
        highlighted1: '$280 + Fee (20% discount)',
        secondary:
          'With this package you will receive all the plays released for a 7 day period. If at the end of the 7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.',
        recommented: true,
        highlighted2: '100% MONEY BACK GUARANTEE'
      },
      {
        title: '30 Day - Weekly Gamble God Package',
        highlighted1: '$1050 + Fee (30% discount)',
        secondary:
          'With this package you will receive all the plays released for a 7 day period. If at the end of the 7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.',
        recommented: true,
        highlighted2: '100% MONEY BACK GUARANTEE'
      }
    ]
  },
  {
    title: 'DIAMOND PACKAGE',
    selected: false,
    value: 'diamond',
    points: [
      {
        title: 'One Day Gamble God Package',
        highlighted1: '$100 + Fees',
        secondary:
          'With this package you will receive the plays for a one day period.',
        recommented: true,
        highlighted2: '100% MONEY BACK GUARANTEE'
      },
      {
        title: '7 Day - Weekly Gamble God Package',
        highlighted1: '$560 + Fee (20% discount)',
        secondary:
          'With this package you will receive all the plays released for a 7 day period. If at the end of the 7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.',
        recommented: true,
        highlighted2: '100% MONEY BACK GUARANTEE'
      },
      {
        title: '30 Day - Weekly Gamble God Package',
        highlighted1: '$2100 + Fee (30% discount)',
        secondary:
          'With this package you will receive all the plays released for a 7 day period. If at the end of the 7 day period the package doesn’t result in a profit (Positive units), the pack age price will be refunded to you.',
        recommented: true,
        highlighted2: '100% MONEY BACK GUARANTEE'
      }
    ]
  }
];

export default function New() {
  const [selected, setSelected] = useState('gold');
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleChange = useCallback((newValue: string) => {
    setSelected(newValue);
  }, []);

  const handleClick = () => {
    setLoading(true);
    router.push(`/views/accounts/${selected}`)
    setLoading(false)
    
  }
  console.log('selected', selected);
  return (
    <main className='bg-dark-pink flex flex-col'>
      {/* <div className='absolute  w-full h-full -z-0 content-["  "] opacity-50 bg-[url("/images/texture.png")] left-0 right-0 '></div> */}
      <Container className='flex justify-between flex-col gap-10 px-4 my-6 md:flex-row'>

        <DetailSection
          title={'Select your Player Package'}
          subTitle='WELCOME TO GAMBLE GOD, SCOTT lENNINGTON!'
          description={selected === 'gold' ? goldPackageInfo : (selected === 'platinum' ? platinumPackageInfo : diamondPackageInfo)}
        />
        <div className='flex flex-col	gap-2 flex-1'>
          {packages.map((item, index) => (
            <PriceStack
              {...item}
              key={index}
              onChange={handleChange}
              selected={selected === item.value}
            />
          ))}
          {/* <Link href={'/views/accounts'}> */}
          <Button onClick={handleClick}>{loading ? 'Loading ...' : 'Continue'}</Button>
          {/* </Link> */}
        </div>
      </Container>
      <div className='bg-[#3D0069] relative mt-16 text-white'>
        <Container className='px-4 '>
          <h2 className='text-2xl	font-semibold	py-12 capitalize'>
            Additional features and services
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4 pb-8'>
            {detailePackages.map((item, index) => (
              <Package {...item} key={index} selected={selected === item.value} />
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
}
