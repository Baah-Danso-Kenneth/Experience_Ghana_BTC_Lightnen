import React from 'react'
import SleepCard from './sleepCard'
import { sleepPlace } from '@/lib/data'

function SleepHolder() {
  return (
    <div className='py-10'>
        <div className='flex items-center justify-center py-10'>
            <h1 className='font-play_flaire text-center text-5xl uppercase'>where you&apos;ll sleep</h1>
        </div>

        <div className="grid grid-cols-2 gap-5 mx-auto max-w-5xl">
        {sleepPlace.map((data, index) => (
      <SleepCard
      key={index}
      image={data.image}
      name={data.name}
      alias={data.alias}
      description={data.description}
    />
  ))}
</div>


    </div>
  )
}

export default SleepHolder