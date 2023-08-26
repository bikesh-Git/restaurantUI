import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between uppercase md:h-20 ">
        <div className="  md:font-bold">
        <Link href="/">BIZZA</Link>
      </div>

      <p>
        @All Right Reserved
      </p>


    </div>
  )
}

export default page