import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'

function TripLeader({image,name}:{image:string;name:string}) {
  return (
    <div className='flex flex-col items-center justify-center space-y-10 py-10'>
         <div>
            <h1 className='text-5xl uppercase font-play_flaire'>meet your trip leader</h1>
         </div>

         <div className='w-[500px] h-[500px] rounded-full'>
            <Image src={image} width={500} height={500} alt="guide" className='w-[500px] h-[500px] rounded-full object-cover'/>
         </div>

         <Button className='capitalize px-10 py-5 text-[15px]'>meet {" "}{name}</Button>
    </div>
  )
}

export default TripLeader