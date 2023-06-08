import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-violet-900 min-h-screen md:p-10 lg:p-20 max-[440px]:p-6 max-[320px]:p-2">
      <div className="flex items-center text-[color:white]">
        <div className="max-[440px]:w-14 mr-2">
          <Image
            src={'/images/gamble-god-logo.png'}
            alt='Gamblegod Logo'
            width={150}
            height={200}
          />
        </div>

        <div className='md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-medium md:ml-4 leading-tight max-[375px]:text-[font-size: 16px] max-[320px]:text-[font-size: 13px]'>
          <span>Welcome To Gamble God!!! The</span><br/><span>Home Of Proven Information</span>
        </div>
      </div>
     

      <div className="mt-20 flex items-center justify-center text-[color:white] ">
        <div className=' mr-3 mb-3'>
          <span className='mr-3 md:text-6xl md:text-4xl font-bold lg:text-5xl xl:text-6xl'>SOMETHING</span>
          <span className='xl:text-8xl md:text-6xl font-bold text-[color:#f8c05a] lg:text-7xl'>BIG</span>
          <span className='ml-3 md:text-6xl md:text-4xl font-bold lg:text-5xl xl:text-6xl'>IS COMING !</span>
        </div>
      </div>
      <div className='flex sm:justify-end mt-9 max-[375px]: justify-center'>
        <Image
          src={'/images/gamble-god-logo.png'}
          alt='Gamblegod Logo'
          width={150}
          height={200}
          className='opacity-30'
        />
      </div>
    </main>
  )
}
