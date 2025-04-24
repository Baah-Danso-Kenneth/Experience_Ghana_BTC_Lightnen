import { ItenaryTypes } from '@/types/regular'
import Image from 'next/image'
import React from 'react'

function ItenaryCard({image,day, place, description,meals}:ItenaryTypes) {
  return (
    <div className='flex items-center gap-10 mb-10'>
        <div className='flex-1'>
            <Image src={image} alt="" width={500} height={500} className='w-full'/>
        </div>
        <div className='flex-1 place-self-start'>
            <h1 className='uppercase text-[25px] font-bowlby'>{day}: <span className='font-dmMono'>{place}</span></h1>
            <p className='text-[20px]'>{description}</p>

            <div className='py-5'>
                <h1>Meals included: <span>{meals ? "dinner" : "Not included"}</span></h1> 
            </div>
        </div>
    </div>
  )
}

export default ItenaryCard