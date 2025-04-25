import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ItemDetail() {
  return (
    <div className='px-10 py-14 mx-20'>
      {/* Breadcrumb */}
      <div className='mb-6 text-2xl'>
        <Link href="/shop">
          <span className=' text-gray-600 hover:underline'>
            Shop &gt;
          </span>{' '}
          <span className='font-medium'>Explore Ghana x Aburi Gardens</span>
        </Link>
      </div>

      {/* Main Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch'>
        {/* Image Section */}
        <div className="flex">
          <Image
            src="/images/sunset.jpg"
            alt="Explore Ghana"
            width={500}
            height={700}
            className=" object-cover h-full w-full"
          />
        </div>

        {/* Text Content */}
        <div className='flex flex-col justify-between gap-y-6'>
          {/* Title and Basic Info */}
          <div className='space-y-2'>
            <h1 className='text-4xl font-semibold capitalize'>
              Explore Ghana X Aburi Gardens
            </h1>
            <p className='text-xl text-gray-800 font-play_flaire'>$18.00</p>
            <p className='text-sm text-red-500 font-medium font-poppins italic'>Only 3 available</p>
          </div>

          {/* Description */}
          <div>
            <h2 className='text-lg  mb-1 font-bowlby'>Price: $18</h2>
            <p className='text-gray-700 font-poppins'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              explicabo voluptatibus impedit iusto eligendi ullam autem
              debitis?{' '}
              <Link href="/" className='underline text-blue-600'>
                Consequatur
              </Link>
              .
            </p>
          </div>

          {/* Details */}
          <div>
            <h2 className='text-lg font-semibold mb-2 font-play_flaire'>Details</h2>
            <ul className='list-disc list-inside text-gray-700 pl-2 text-[20px]'>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>

          {/* Quantity */}
          <div>
            <h2 className='text-lg font-semibold mb-2 font-play_flaire'>Quantity</h2>
            <input
              type="number"
              className="w-52 py-3 px-4 border border-black outline-none placeholder-gray-500 appearance-none"
              placeholder="Enter number"
            />
          </div>

          {/* Buy Button */}
          <div>
            <Button className='w-52 py-4 text-lg uppercase rounded-none bg-green-700'>Buy</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
