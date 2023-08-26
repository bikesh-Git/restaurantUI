import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%]  w-full lg:w-[60%]'>
      <div className='relative h-1/3 w-full md:h-full  md:w-1/2'>
        <Image src="/loginBg.png" alt="" fill className='object-cover'/>
      </div>

      <div className='p-10 flex flex-col md:w-1/2  gap-8'>
        <h1 className='font-bold text-xl'>Welcome</h1>
        <p>dasdasd asd a sd asd as d asd as dasdasdasd</p>
        <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
          <Image src="/google.png" alt="" width={20} height={20} />
          <span>SignIn with google</span>
        </button>
        <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
          <Image src="/facebook.png" alt="" width={20} height={20} />
          <span>SignIn with google</span>
        </button>

        <p>Have a problem <Link className='underline' href="/">Contact Us</Link></p>
      </div>
      </div>
     
    </div>
  )
}

export default page