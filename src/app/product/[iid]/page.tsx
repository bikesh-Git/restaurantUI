import Price from '@/component/Price'
import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const product = 
  {
    id:1,
    title:"Tandoori",
    desc:"Yummmmy you can eat any time ",
    img:"/temporary/p5.png",
    price:400.22,
    option:[
        {title:"small", additionalPrice:19.9},
        {title:"medium", additionalPrice:29.9},
        {title:"large", additionalPrice:59.9}
    ],
}
  return (
    <div className='p-4 lg:p-20 xl:p-40 flex h-screen flex-col justify-around md:items-center text-red-500 md:flex-row '>

    <div className='relative w-full h-1/2 md:h-[70%]'>
      
    {product.img &&  <Image src={product.img} alt=""   className="object-contain" fill />}
    </div>

    <div className='h-1/2 flex flex-col gap-4'>
      <h1 className='text-4xl font-bold'>{product.title}</h1>
      <p>{product.desc}</p>
     
      <Price option = {product.option} price = {product.price} />
    </div>
    </div>
  )
}

export default page