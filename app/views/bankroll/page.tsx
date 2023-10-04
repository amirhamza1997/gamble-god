import Container from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function Bankroll() {
  return (
    <main className='bg-pink min-h-screen flex flex-col '>
      <div className='flex-1 relative bg-dark-pink'>
        <div className='max-w-[1100px] mx-auto p-4 flex flex-col text-white gap-6 z-10 relative'>
          <h1 className='text-left pr-5 text-4xl text-white leading-[3.5rem]	'>
          Gamble God – Bankroll – Money Management
          </h1>
          <p className='pb-7'>
            We recommend and follow the same principles as the top certified financial planners. We refer to the <br />
            guidelines of the 50/15/5 rule when it comes to determining your bankroll. At Gamble God, we treat our <br />
            system like a business, and protect our bankroll same as any responsible business would: <br /> <br />

            50% of your take home pay should be allocated to essential expenses (housing, food, insurance, debt  <br />
            repayment, childcare, etc.) <br /> <br />

            15% of your take home pay should be saved in some capacity for retirement.<br /><br />
            5% of your take home pay should be put away as an emergency fund for things that come up out the<br />
            blue that you don’t plan for.<br /><br />

            This leaves you with 30% of your take home pay that can be used as a slush fund for things like dining<br />
            out, entertainment, vacations, and a bankroll.<br /><br />

            Let’s assume you have a medium-low tolerance for risk, so you are going to use 15% of the 30% slush<br />
            fund for your starting bankroll. Let’s also assume that your annual income is the national blue-collar<br />
            average of $53,440 dollars a year. So, 15% of that would be $8,016 for a bankroll. Let’s round that down<br />
            to an even 8K to keep the math in this example simple.<br /><br />

            Knowing that any game can win or lose, you must have discipline and follow a bankroll management<br />
            system. All the top professional gamblers all share these 2 common thoughts, 1) you should never bet<br />
            more than 3% of your bankroll on any one game, and 2) you should never have more than 10% of your<br />
            bankroll at risk with action. Here’s what that looks like with our system at Gamble God:<br /><br />
          </p>
          <h2 className='text-lg'>We release these plays on a Thursday : </h2>
          <p>
            5-units (MLB) on the Cardinals Money Line 
            3-units (MLB) on the Pirates Money Line <br /><br />
            5-units (MLB) on the OVER 8 runs RED SOX/ASTROS <br /><br />
            6-units (MLB) Yankees Money Line <br /><br />
            7-units (NBA) on the Miami Heat -3 <br /><br />
            6-units (NHL) on Las Vegas Puck Line <br /><br />
            You must play all 6 of these selections for a total of 32 units. Your bankroll is $8000 and 10% of your <br />
            total bankroll would be $800 that you can wager that day. The 32 units divided by $800 would be $25 a<br />
            unit. So, the 5-unit plays would require you to wager (to win) $125, the 6-unit plays would require you<br />
            to wager (to win) $150, and the 7-unit selection would require you to wager (to win) $175.<br /><br />
            Let’s assume we won the first 4 plays and lost the last 2 plays in the above example. So, we won 19 units<br />
            and lost 13 units for a profit of 6 units that day. Being that our unit is $25, we profit $150 for the day.<br />
            Our bankroll now increases from 8K to $8,150 so by rights we will adjust our unit bet for the next day’s<br />
            wagers using the new bankroll amount. Please understand that it is not required to add the profit to<br />
            your bankroll, as every client has a different tolerance for risk, so you could take the 6 units of profit and<br />
            put it in your pocket. That is clearly your decision to make. With that said, the bigger your bankroll the <br />
            more money you make each day, but it all depends on your tolerance for risk.
          </p>
          <p className='text-lg pb-5'>
            Following this bankroll management system will prevent you from ever going broke as you will NEVER <br />
            risk more that 10% of your bankroll. You don’t have to be a rocket scientist or mathematician to follow<br />
            this system, but you do have to have discipline, and never chase a loss. The casinos and sportsbooks rely<br />
            on you getting greedy and expects you to go on tilt, make dumb decisions and reload often during any<br />
            sports season. Trust us when we say that there is no such thing as a LOCK or sure winner. Over the years<br />
            we have seen every imaginable thing happen that could happen to snap a sports bet. With that said, if<br />
            you follow our instructions, be smart, have discipline, treat this like a business, you will be shockingly<br />
            surprised how fast your bankroll will grow and how much profit you can make every single month.
          </p>
        </div>
      </div>
    </main>
  );
}
