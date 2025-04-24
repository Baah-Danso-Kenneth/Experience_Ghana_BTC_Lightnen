import Image from 'next/image';
import React from 'react'

function SleepCard({image, name, alias, description}:{image:string;name:string; alias:string; description:string}) {
  return (
    <div className='mb-10'>
        <div className='w-[500px]'>
            <Image alt='' className='w-[500px] h-[350px] object-cover' src={image} width={500} height={500}/>

        <div className='space-y-3 flex flex-col items-center justify-center mt-3'>
            <h1 className='text-3xl uppercase'>{name}</h1>
            <h1 className='text-2xl font-poppins'>{alias}</h1>
            <p>{description}</p>
        </div>
        </div>

    </div>
  )
}

export default SleepCard