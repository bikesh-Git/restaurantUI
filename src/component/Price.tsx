"use client"
import React, { useEffect, useState } from 'react'

type Prop ={
    price:number,
    option:{title:string , additionalPrice:number}[]
}

const Price = ({price,option}:Prop) => {
  const [total, setTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTotal(quantity * (option ?  price + option[selected].additionalPrice : price))
  }, [quantity,selected])
  
  
  return (
    <div className='flex flex-col gap-4'>
         <h2 className='text-2xl font-bold'>{total.toFixed(2)}</h2>
      <div className='flex gap-4'>
        {option.map((el,ind)=>
        <button className='p-2 ring-1 ring-red-500 text-red-500 rounded-md font-bold min-w-[6rem]'
        style={{"background" : selected === ind ? "rgb(239 68 68)" : "white" , "color" : selected === ind ? "white" :"red"  }}
        onClick={()=>setSelected(ind)}
        >{el.title}</button>
        )}

      

      </div>

      <div className='flex justify-between items-center ring-1   ring-red-500 '>
          <div className='w-full flex justify-between items-center px-3'>
            <span>Quantity</span>
            <div className='flex gap-2'>
            <button onClick={()=>setQuantity(prev => prev>1 ? prev-1 : 1)}> {'<'}  </button>
            <span>{quantity}</span>
            <button  onClick={()=>setQuantity(prev =>prev < 9  ? prev+ 1 : 9)}> {'>'}  </button>
            </div>
          </div>
          <button className='p-3 bg-red-500  text-white font-bold w-56' >Add to Cart</button>
        </div>
    </div>
  )
}

export default Price