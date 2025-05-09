'use client'

import LightningBuyButton from '@/components/content/LightningBuyButton';
import { Button } from '@/components/ui/button';
import { useShop } from '@/hooks/useShop';
import clsx from 'clsx';
import { Link } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

function ShopDetails() {
    const params = useParams();
    const id = params?.id
    const { products, loading } = useShop();
    const [quantity, setQuantity] = useState(1);


    const product = products?.find(prod => String(prod.product.id) === String(id));

   
    if (loading) {
        return <div className="container mx-auto py-10 px-4 text-center">Loading...</div>;
    }

  
    if (!product) {
        return (
            <div className="container mx-auto py-10 px-4 text-center">
                <h2 className="text-2xl font-bold">Product not found</h2>
                <p className="mt-4">The product you're looking for doesn't exist or might have been removed.</p>
            </div>
        );
    }
    const amountInSats = product.product.price_in_sats * quantity;

    return (
      <div className='px-10 py-14 mx-20'>
      {/* Breadcrumb */}
      <div className='mb-6 text-2xl'>
      
          <span className=' text-gray-600 hover:underline'>
            Shop &gt;
          </span>
  
          {' '}
          <span className='font-medium'>{product.category}</span>
     
 
      </div>

      {/* Main Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch'>
        {/* Image Section */}
        <div className="flex">
          <Image
            src={product.image}
            alt="Explore Ghana"
            width={500}
            height={700}
            className=" object-cover h-full w-full"
          />
        </div>

        {/* Text Content */}
        <div className='flex flex-col justify-between gap-y-6'>
          {/* Title and Basic Info */}
          <div className='space-y-2'>
            <h1 className='text-4xl font-semibold capitalize'>
              Explore Ghana X Aburi Gardens
            </h1>
            <p className='text-xl text-gray-800 font-play_flaire'>{product.product.price_in_sats}</p>
            <p className={clsx('text-sm  font-medium font-poppins italic',product.product.quantity > 10 ? 'text-green-500' : 'text-red-500')}>{product.product.stock_quantity} Available in stock</p>
          </div>

          {/* Description */}
          <div>
            <h2 className='text-lg  mb-1 font-bowlby'>{product.product.price_in_sats} sats</h2>
            <p className='text-gray-700 font-poppins'>
              {product.product.description}
            </p>
          </div>

          {/* Details */}
          <div>
            <h2 className='text-lg font-semibold mb-2 font-play_flaire'>Details</h2>
            <ul className='list-disc list-inside text-gray-700 pl-2 text-[20px]'>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>

          {/* Quantity */}
          <div>
            <h2 className='text-lg font-semibold mb-2 font-play_flaire'>Quantity</h2>
            <input
              type="number"
              className="w-24 py-3 px-4 border border-black outline-none placeholder-gray-500 appearance-none"
              placeholder="Enter number"
            />
          </div>


          <LightningBuyButton
           productId={product.product.id}
            quantity={quantity}
             amountInSats={amountInSats}/>
        </div>
      </div>
</div>
    );
}

export default ShopDetails