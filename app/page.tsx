import Container from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-pink min-h-screen flex flex-col '>
      <div className='flex-1 relative bg-dark-pink'>
        <div className='max-w-[1100px] mx-auto p-4 flex flex-col text-white gap-6 z-10 relative'>
          <p className='text-lg'>
            Imagine walking into a casino and the cocktail waitress comes up to
            you and says, “hey, I would play that slot machine right there
            because the jackpot is about to hit.” What would you do? Would you
            play the machine? Of course you would, because you know that she
            works there and watches those machines all day long serving drinks.
            If anybody knows when a slot machine is “due” to hit, it’s got to be
            her, right? Imagine that you take her advice, as the information she
            is telling you is reliable, and you sit down and play the slot
            machine. After playing the machine for a while, it actually does hit
            a{' '}
            <span className='bg-yellow text-dark-pink'>
              {'jackpot, and you’re paid. '}
            </span>
            Would you go find the waitress and{' '}
            <span className='bg-yellow text-dark-pink'>
              {'give her a tip for sharing the '}
            </span>
            information with you? Of course you would, anybody would, right? You
            hit a jackpot because that nice cocktail waitress shared information
            with you…Information, she has information, she shared it, and you
            won. How wonderful.
            <br /> <br /> Imagine this, what if the sports book manager at the
            casino comes up to you the same way the cocktail waitress did, and
            says “hey, I just want you to know that guy over there is some
            alumni of Duke university{' '}
            <span className='bg-yellow text-dark-pink'>
              {'and just bet 75K on Duke tonight '}
            </span>{' '}
            to cover the spread.” What would you do, besides think to yourself
            what kind of a maniac madman{' '}
            <span className='bg-yellow text-dark-pink'>
              {
                'bets 75K on a college basketball game? Would you get in line at the sports book and bet Duke? Obviously, '
              }
            </span>
            this person betting that much money on a game must have some
            information? Right? Let’s take this a few steps further, what if
            multiple{' '}
            <span className='bg-yellow text-dark-pink'>(like 25+)</span>
            sport book managers, lines makers, ex-players, & bookies all came up
            to you and said the same thing? Would you think that you are now
            sitting in the hot seat and about to also hit a jackpot? You have
            all the information about the game from reliable sources. This is
            similar to that of the situation with the cocktail waitress, but the
            main difference is a slot machine is a computer that has a
            predetermined outcome before you even hit the button to play it, a
            sports game doesn’t. <br /> <br /> What’s the next step you ask?
            Simply click the JOIN button and create an account, from there you
            can pick the package that best fits you & we can start breaking the
            books. As you are picking a package to purchase, remember to pick a
            package that is within your means, as you have to grind this out to
            make money, not just bet my plays here and there.
          </p>
        </div>
      </div>
      <div className='relative flex-1 bg-dark-pink font-black pt-12 pb-32'>
        <Container>
          <h1 className='text-center px-5 text-4xl text-white leading-[3.5rem]	'>
            Sports betting meets proven information,
            <br /> Proven Systems, Proven WINNERS!!! <br /> Money Back
            Guarantee!!!
          </h1>
          {/* <Link href={'/views/packages'} > */}
          {/* <div className='text-4xl text-center text-yellow'> */}
            <Link href={'/views/packages'} className='text-4xl text-center text-yellow block' style={{ position: 'relative', zIndex: 1 }}>Join Now</Link>
          {/* </div> */}
          <div className='absolute p-4 transform -translate-x-1/2 -translate-y-1/2 top-[64%] left-[57%] w-80 h-30'>
            <Image
              src={'/images/stars.png'}
              alt={'stars'}
              width={500}
              height={500}
              className=' mix-blend-color-dodge '
            />
          </div>
          {/* </Link> */}
        </Container>
      </div>
    </main>
  );
}
