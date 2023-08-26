import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:[calc(100vh-9rem)] text-red-500  lg:flex-row '>
      
      <div className='h-1/2 p-4 flex flex-col overflow-scroll  justify-center lg:w-2/3 lg:h-full 2xl:w-1/2 lg:px-20 xl:px-40'>

        <div className='flex items-center justify-around mb-4'>
          <Image src="/temporary/p1.png" alt= "" width={100} height={100}  />
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>Tondori</h1>
            <span>sdasasdasdasd</span>
          </div>
          <h3 className='font-bold'>234.33</h3>

          <span>X</span>
        </div>
        <div className='flex items-center justify-around mb-4'>
          <Image src="/temporary/p1.png" alt= "" width={100} height={100}  />
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>Tondori</h1>
            <span>sdasasdasdasd</span>
          </div>
          <h3 className='font-bold'>234.33</h3>

          <span>X</span>
        </div>
        <div className='flex items-center justify-around mb-4'>
          <Image src="/temporary/p1.png" alt= "" width={100} height={100}  />
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>Tondori</h1>
            <span>sdasasdasdasd</span>
          </div>
          <h3 className='font-bold'>234.33</h3>

          <span>X</span>
        </div>
   
      </div>

      <div className='bg-pink-100 h-1/2 p-4 flex flex-col justify-center  gap-4 lg:w-1/3 lg:h-full 2xl:w-1/2 lg:px-20 xl:px-40'>
        <div className='flex justify-between items-center '>
          <span>Subtotal (3item)</span>
          <span className=''>123.2</span>
        </div>
        <div  className='flex justify-between items-center '>
          <span>ServiceCost</span>
          <span>0.2</span>
        </div>
        <div  className='flex justify-between items-center '>
          <span>Delivery cost</span>
          <span className='text-green-500'>Free!</span>
        </div>

        <hr className='my-2'></hr>
        <div className='flex justify-between items-center' >
          <h1>Total</h1>
          <span className='font-bold'>228.2</span>
        </div>

        <button className='bg-red-500 text-white rounded px-4 py-2 w-1/2 self-end '>Checkout</button>
      </div>
      
      </div>
  )
}

export default page