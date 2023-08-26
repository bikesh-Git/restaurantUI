import React from 'react'

const page = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3 '>
        <thead>
        <tr className='text-left'>
          <th className='hidden md:block'>Order ID</th>
          <th>Date</th>
          <th>Price</th>
          <th className='hidden md:block'>Products</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-100'>
            <td className='py-6 px-1 hidden md:block'>23213213123</td>
            <td className='py-6 px-1 ' >23.03.1212</td>
            <td  className='py-6 px-1 '>243.2</td>
            <td  className='py-6 px-1 hidden md:block'>Burger allo tikki</td>
            <td className='py-6 px-1 '>On the way</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='py-6 px-1 hidden md:block'>23213213123</td>
            <td className='py-6 px-1 ' >23.03.1212</td>
            <td  className='py-6 px-1 '>243.2</td>
            <td  className='py-6 px-1 hidden md:block'>Burger allo tikki</td>
            <td className='py-6 px-1 '>On the way</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='py-6 px-1 hidden md:block'>23213213123</td>
            <td className='py-6 px-1 ' >23.03.1212</td>
            <td  className='py-6 px-1 '>243.2</td>
            <td  className='py-6 px-1 hidden md:block'>Burger allo tikki</td>
            <td className='py-6 px-1 '>On the way</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='py-6 px-1 hidden md:block'>23213213123</td>
            <td className='py-6 px-1 ' >23.03.1212</td>
            <td  className='py-6 px-1 '>243.2</td>
            <td  className='py-6 px-1 hidden md:block'>Burger allo tikki</td>
            <td className='py-6 px-1 '>On the way</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default page