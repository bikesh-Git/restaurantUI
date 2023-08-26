"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id:1,
            title:"WE can deliver whereEver you want in PUNE",
            image:"/slide1.png"
        },
        {
            id:3,
            title:"Hungryyyyyy Grab AnyThing",
            image:"/slide2.png"
        },
        {
            id:1,
            title:"VADAAAAA PAVVVVVV",
            image:"/slide3.jpg"
        },
    ]

    useEffect(() => {
     const interval = setInterval(()=>{
        setCurrentSlide(prev=> prev === data.length-1 ? 0 :  prev+1)
     },2000) 

     return ()=>{
        clearInterval(interval)
     }
    }, [])
    
  return (
    <div className='bg-pink-50 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
        <div className='flex-1 flex flex-col items-center justify-center gap-8'>
            <h1 className='text-center uppercase text-5xl md:text-6xl lg:text-7xl text-red-500 font-bold'>{data[currentSlide].title}</h1>
            <button className='bg-red-500 text-white py-4 px-8 font-bold' >Order Now</button>
        </div>
        <div className='flex-1 w-full relative'>
            <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider