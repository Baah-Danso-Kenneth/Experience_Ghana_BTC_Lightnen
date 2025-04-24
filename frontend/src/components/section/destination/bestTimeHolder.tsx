import Image from 'next/image'
import React from 'react'

function BestTimeHolder() {
  return (
    <div className='flex items-center justify-center mx-auto max-w-5xl gap-20 py-10'>
        <div className='flex-1'>
            <Image src="/images/GH-AH.svg" className='w-[500px] h-[500px] object-contain' alt="" width={500} height={500}/>
        </div>

        <div className='flex-1 space-y-10 place-self-start'>
            <div>
                <h1 className='text-[20px] font-play_flaire font-bold uppercase mb-3'>best time of year visit</h1>
                <p className='text-[18px] text-zinc-800 font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia tempore dolore sunt quidem exercitationem, deleniti dicta in voluptas magnam sit, excepturi maiores incidunt ea iste aperiam architecto. Qui id molestiae officia optio neque, iste incidunt quisquam consectetur numquam aliquid necessitatibus
                     atque quaerat repellat exercitationem
                      illum beatae molestias aspernatur 
                      debitis saepe.</p>
            </div>

            <div>
            <h1 className='text-[20px] font-play_flaire font-bold uppercase mb-3'>weather</h1>
            <p className='text-[18px] text-zinc-800 font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia tempore dolore sunt quidem exercitationem, deleniti dicta in voluptas magnam sit, excepturi maiores incidunt ea iste aperiam architecto. Qui id molestiae officia optio neque, iste incidunt quisquam consectetur numquam aliquid necessitatibus
                     atque quaerat repellat exercitationem
                      illum beatae molestias aspernatur 
                      debitis saepe.</p>
            </div>

        </div>
    </div>
  )
}

export default BestTimeHolder