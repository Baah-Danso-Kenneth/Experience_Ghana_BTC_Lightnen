'use client'

import { useShop } from '@/hooks/useShop';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'

function ShopDetails() {
    const params = useParams();
    const id = params?.id
    const { products, loading } = useShop();


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

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <Image 
                        src={product.image} 
                        alt={product.product.description || 'Product image'} 
                        width={500} 
                        height={500} 
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="space-y-4 font-play_flaire">
                    <h1 className="text-3xl font-bold">{product.product.description}</h1>
                    <p className="text-xl">{product.product.price_in_sats} sats</p>
                    <div className="mt-4">
                        <p>{product.alt_text || 'No additional description available'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopDetails