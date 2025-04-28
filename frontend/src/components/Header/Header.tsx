import React from 'react'
import { CgMenuOreos } from "react-icons/cg";
import { Button } from '../ui/button';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';

function Header() {
  return (
    <div>
      <div className='mx-20 flex items-center justify-between'>

         <div className='flex items-center space-x-3 invert'>
           <CgMenuOreos className='text-[20px]'/>
          <h1 className='text-[20px]'>Menu</h1>
         </div>

         <div>
            <Image src="/images/tour-logo.png" alt="app-logo" className=' object-cover invert' width={100} height={50}/>
         </div>

         <div className='flex items-center mr-6 gap-10'>


              <Button className='button-cutout bg-[#ddd] text-black capitalize hover:bg-white hover:text-black'>get started</Button>
         </div>

      </div>
    </div>
  )
}

export default Header