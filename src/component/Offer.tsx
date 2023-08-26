import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-black md:h-[70vh] md:bg-[url('/offerBg.png')]">


    <div className='flex-1 flex flex-col items-center justify-center text-center gap-8'>
      <h1 className='text-white text-5xl'>Delicious Food </h1>
      <p className='text-white'>sdsdas das das d asdasdasd as da sd asd a sd as asdasdas d</p>
        <CountDown/>
      <button className='bg-red-500 text-white py-2 px-4 rounded-md' >Order Now</button>
    </div>

    <div className='flex-1 w-full relative'>
      <Image src="/offerProduct.png" alt="" fill className='object-contain' />
    </div>

    </div>
  )
}

export default Offer