import Image from 'next/image'
import React from 'react'

function MainBaseContent() {
  return (
    <div className='mx-10 border p-10 border-t-0 border-b-0 relative'>
        <div><h1 className='font-dmMono text-4xl'>Hi i&apos;m kenneth Danso</h1></div>

        <div className='py-10 z-50'>
            <h1 className='text-[8rem] font-bowlby leading-[8rem] z-50'>i build  magical stuff using code</h1>
        </div>

        <div className='absolute top-0 right-0 transform rotate-45  '>
          <Image src="/images/sticker.png" alt="" className="z-20" width={450} height={250}/>
        </div>

    </div>
  )
}

export default MainBaseContent