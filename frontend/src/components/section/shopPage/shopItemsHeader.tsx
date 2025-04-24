import { Button } from '@/components/ui/button'
import { shopItems } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

function ShopItemsHeader() {
  return (
    <div>
        <div className='flex items-center justify-center p-10'>
            <h1 className='font-outfit text-8xl uppercase'>Shop</h1>
        </div>

        <div className='flex space-x-5 items-center justify-center'>
            {shopItems.map(({name, query},index)=>(
                <Link key={index} href={query} className='border px-5 text-nowrap uppercase border-black bg-transparent p-2 rounded-[10px]'>{name}</Link>
            ))}
        </div>
     </div>
  )
}

export default ShopItemsHeader