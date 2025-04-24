import { zoneItenary } from '@/lib/data'
import React from 'react'
import ItenaryCard from './itenaryCard'

function TenaryHolder() {
  return (
    <div className='py-10'>
        <div className='flex items-center justify-center py-10'>
            <h1 className='font-play_flaire text-center text-5xl uppercase'>Aburi itenary</h1>
        </div>

        <div className='flex items-center flex-col justify-center mx-20'>
            {zoneItenary.map((data,index )=>(
                <ItenaryCard 
                key={index}
                image={data.image}
                 day={data.day}
                  place={data.place} 
                  description={data.description} 
                  meals={data.meals} />
            ))}
        </div>

            <div className='mx-20 flex justify-center items-center'>
                <p className='text-sm text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quo hic suscipit quos aliquam illum dolorem sapiente nemo dignissimos quas ?</p>
            </div>
    </div>
  )
}

export default TenaryHolder