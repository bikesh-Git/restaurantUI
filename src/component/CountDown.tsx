"use client"
import React from 'react'
import Countdown from 'react-countdown';

const CountDown = () => {
    const endDate = new Date("2023-08-30")
  return (
    <div className='text-5xl text-yellow-500 font-bold'>
        <Countdown date={endDate}/>
    </div>
  )
}

export default CountDown