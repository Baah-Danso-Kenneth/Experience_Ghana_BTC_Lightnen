import { shopItemsContent } from '@/lib/data'
import React from 'react'
import ShopItem from './shopItem'

function ShopContainer() {
  return (
    <div className='mt-20   border-b-0 border-2 p-5 border-[#ccc] border-l-0 border-r-0'>
        <div className='flex flex-wrap gap-10 items-center justify-center p-5'>
            {shopItemsContent.map(({title,image,description,price,category},index)=>(
                <ShopItem
                key={index}
                 title={title}
                  image={image} 
                  description={description}
                   price={price} 
                   category={category}
                   />
            ))}
        </div>
    </div>
  )
}

export default ShopContainer