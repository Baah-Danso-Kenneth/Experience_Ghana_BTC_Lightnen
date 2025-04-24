import { outTro } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

function Location() {
  return (
    <div className='py-20'>
        <div className='flex flex-col items-center space-y-3'>
            <h1 className='text-5xl uppercase font-play_flaire'>explore ghana X Aburi</h1>
            <p className='text-[15px] font-bowlby'>10 days | 9 nights</p>
        </div>

        <div className=' flex items-center justify-center mt-5'>
            <p className='w-[70%] text-[20px] text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint culpa repellat eum iure cum? Saepe vitae animi aperiam officia nemo dignissimos unde maxime eveniet iure, perferendis obcaecati ducimus sapiente inventore, blanditiis molestiae quis ad esse, facilis deserunt exercitationem corporis! Quos explicabo nesciunt enim, culpa at quae nulla voluptatibus magnam commodi!</p>
        </div>

        <div className="py-10 flex items-center justify-center space-x-2 text-lg">
  {outTro.map(({ name, query }, index) => (
    <React.Fragment key={index}>
      <Link href={query} className="underline text-[20px] uppercase">
        {name}
      </Link>
      {index !== outTro.length - 1 && <span className="mx-2">|</span>}
    </React.Fragment>
  ))}
</div>


    </div>
  )
}

export default Location