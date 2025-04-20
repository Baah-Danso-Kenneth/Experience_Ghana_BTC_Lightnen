import React from 'react'
import { CgMenuOreos } from "react-icons/cg";
import { Button } from '../ui/button';
import { SearchIcon } from 'lucide-react';

function Header() {
  return (
    <div className='p-5 '>
      <div className='bg-[#fff] p-3 rounded-4xl flex items-center justify-between'>

         <div className='flex items-center space-x-3'>
           <CgMenuOreos className='text-[20px]'/>
          <h1 className='text-[20px]'>Menu</h1>
         </div>

         <div>
          <h1>Logo</h1>
         </div>

         <div className='flex items-center mr-6 gap-10'>
              <div className='flex items-center border-2 border-[#ddd] p-2 rounded-full '>
                <input className='outline-none border-none focus:border-none' placeholder='Search'/>
                 <SearchIcon/>
              </div>

              <Button className='button-cutout bg-[#ddd] text-black capitalize hover:bg-white hover:text-black'>get started</Button>
         </div>

      </div>
    </div>
  )
}

export default Header