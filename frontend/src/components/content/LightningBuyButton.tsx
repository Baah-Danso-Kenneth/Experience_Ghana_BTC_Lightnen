'use client'

import { createInvoice } from "@/lib/lightning";
import { LightningBuyButtonProps } from "@/types/regular"
import { useState } from "react"
import { Button } from "../ui/button";


function LightningBuyButton({productId,quantity, amountInSats}:LightningBuyButtonProps){
    const [paymentRequest, setPaymentRequest] = useState<string | null >(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    const handleClick=async()=>{
        setLoading(true);
        setError(null);
        try {
            const invoice = await createInvoice({
                productId,
                quantity,
                amountInSats
            });

            setPaymentRequest(invoice.paymentRequest);

        } catch (error:any) {
            setError(error.message || "Failed to create invoice")
        } finally{
            setLoading(false)
        }
    }
  return (
    <div>
         <Button onClick={handleClick} className='w-[50%] py-4 text-lg uppercase rounded-none bg-green-700'>
            {loading ? "Creating invoice" : "Buy"}
         </Button>
         {error && (
            <p>{error}</p>
         )}
        
        {paymentRequest && (
            <div>
                <p>scan this invoice</p>
                <code>{paymentRequest}</code>
            </div>
        )}
    </div>
  )
}

export default LightningBuyButton
