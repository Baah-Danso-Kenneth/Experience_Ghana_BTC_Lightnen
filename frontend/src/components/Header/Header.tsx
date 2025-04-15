"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/lib/data'


function Header() {
  const pathname = usePathname();
  return (
    <div>
    <div className='flex items-center justify-between  h-20 ml-5 mr-10'>
        <div className='relative '>
          <Image src="/images/logo.png" className='pt-5' alt="app_logo"  width={150} height={110}/>
        </div>

        <div className='space-x-8 '>
        {navLinks.map((items,index)=>(
                <Link  href={items.href} key={index}>
                    <span className='uppercase'>{items.name}</span>
                </Link>
             ))}
        </div>

        <div>
          <Button className='button-cutout bg-[#fff] text-[#000] hover:text-white font-poppins capitalize'>get started</Button>
        </div>
    </div>
    </div>
  )
}

export default Header