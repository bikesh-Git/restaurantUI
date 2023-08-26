import Link from 'next/link'
import React from 'react'

const page = () => {

    const menu = [
      {
      id:1,
      slug:"pastas",
      title:"Italian pastas",
      desc:"sdasd adas das dasd asd asdasd asdasd",
      img:"/temporary/m1.png",
      color:"white"        
      },
      {
      id:2,
      slug:"pastas",
      title:"Italian pastas",
      desc:"sdasd adas das dasd asd asdasd asdasd",
      img:"/temporary/m2.png",
      color:"white"        
      },
      {
      id:3,
      slug:"pastas",
      title:"Italian pastas",
      desc:"sdasd adas das dasd asd asdasd asdasd",
      img:"/temporary/m3.png",
      color:"white"        
      },

    ]

  return (
    <div className='p-4 lg:px-20 xl:px-40 flex flex-col justify-center items-center md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>

      {menu.map(el=>
      <Link href={`/menu/${el.slug}`} key={el.id} className='w-full h-1/3 bg-cover p-8 md:h-1/2' style={{backgroundImage:`url(${el.img})`}}>
        <div className=''>
          <h1>{el.title}</h1>
          <p className='text-sm my-8'>{el.desc}</p>
          <button className='hidden 2xl:block bg-red-500 rounded-md text-white px-4 py-2'>Explore</button>
        </div>
      </Link>)}

    </div>
  )
}

export default page