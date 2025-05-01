import Header from '@/components/Header/Header'
import { Button } from '@/components/ui/button'
import React from 'react'

function HeroSection() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/sunset.jpg')" }}>

 
       <h1 className='font-play_flaire text-center text-white capitalize text-[8em]'>Explore ghana</h1>
       <div className='relative'>
        <div className='absolute right-[30%] space-y-10'>
          <p className='w-80 text-white z-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusantium architecto at mollitia eum quis molestias delectus debitis deleniti officia 
            cumque incidunt dicta fugit, dolore vero magni aspernatur? Veritatis, ut!</p>
            <Button className='button-cutout'>lets&apos; go</Button>
        </div>

       </div>
    </div>
  )
}

export default HeroSection