import { shopItemsContent } from '@/lib/data'
import React from 'react'
import ShopItem from './shopItem'

function ShopContainer() {
    return (
      <div className='mt-20 border-b-0 border-2 p-5 border-[#ccc] border-l-0 border-r-0'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
          {shopItemsContent.map(({ title, image, description, price, category,info }, index) => (
            <ShopItem
              key={index}
              title={title}
              image={image}
              description={description}
              price={price}
              category={category}
              info={info}
            />
          ))}
        </div>
      </div>
    );
  }
  

export default ShopContainer