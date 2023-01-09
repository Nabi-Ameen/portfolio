import React from 'react'
import { useGlobalContext } from './Context'
const Home = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="relative">
      <div className='bg-hero bg-no-repeat lg:bg-contain absolute -top-[7rem] w-full h-screen -z-10 flex items-center justify-center md:px-20'>
        <div className=' md:mt-0 md:flex items-center  '>
          <div className='md:basis-1/2 self-center px-4 md:px-6 lg:px-16 space-y-3'>
            <h1 className='text-3xl lg:text-6xl font-extrabold'>Payments infrastructure for the internet</h1>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eum et labore exercitationem perferendis aut alias sit ex reprehenderit delectus tempora, at fugiat in ipsam inventore numquam, eos corrupti nisi!</p>
            <button className='bg-black px-4 py-1 rounded-sm text-white'>Start now</button>
          </div>
          <div className='md:basis-1/2 flex justify-center py-4'>
            <img src="./images/phone.svg" alt="phone" className='w-1/3 h-1/3 hidden md:flex'  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home