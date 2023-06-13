import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-violet-900 min-h-screen xl:p-10 lg:p-7 md:p-2 max-[440px]:p-4 max-[320px]:p-2">
      <div className="flex items-center text-[color:white]">
        <div className="max-[440px]:w-14 min-[425px]:w-20 min-[375px]:w-16 md:w-24 xl:w-36 mr-2">
          <Image
            src={'/images/gamble-god-logo.png'}
            alt='Gamblegod Logo'
            width={150}
            height={200}
          />
        </div>

        <div className='md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-medium md:ml-4 leading-tight max-[375px]:text-[font-size: 16px] max-[320px]:text-[font-size: 13px] min-[425px]:text-[font-size:30px]'>
          <span>Welcome To Gamble God!!! The</span><br/><span>Home Of Proven Information</span>
        </div>
      </div>
     

      <div className="xl:mt-20 lg:mt-16 md:mt-20 min-[425px]:mt-24 min-[375px]:mt-24 min-[320px]:mt-24 flex items-center justify-center text-[color:white] ">
        <div className=' mr-3 mb-3'>
          <span className='mr-3 md:text-4xl font-bold lg:text-5xl xl:text-6xl min-[425px]:text-xl min-[375px]:text-xl [320px]:text-xl' >SOMETHING</span>
          <span className='xl:text-8xl md:text-6xl font-bold text-[color:#f8c05a] lg:text-7xl min-[425px]:text-4xl min-[375px]:text-3xl min-[320px]:text-3xl'>BIG</span>
          <span className='ml-3 md:text-4xl font-bold lg:text-5xl xl:text-6xl min-[425px]:text-xl [375px]:text-xl [320px]:text-xl'>IS COMING !</span>
        </div>
      </div>
      <div className='flex sm:justify-end xl:mt-24 lg:mt-16 md:mt-24 min-[425px]:mt-24 min-[375px]:mt-24 min-[320px]:mt-24 xl:mt-28 max-[375px]: justify-center'>
        <Image
          src={'/images/gamble-god-logo.png'}
          alt='Gamblegod Logo'
          width={150}
          height={200}
          className='opacity-30 xl:w-56'
        />
      </div>
    </main>
  )
}
