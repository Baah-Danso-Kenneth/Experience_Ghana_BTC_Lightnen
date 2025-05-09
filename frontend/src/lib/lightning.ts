import { CreateInvoiceParams, InvoiceResponse, SubmitOrderArgs } from "@/types/regular";
import axios from "axios";

export async function createInvoice({
    productId,
    quantity,
    amountInSats
}:CreateInvoiceParams):Promise<InvoiceResponse>{
    try {
        const response = await axios.post('/api/lightning/create-invoice/',{
            productId,
            quantity,
            amountInSats
        })

        return response.data
    } catch (error:any) {
        throw new Error(error?.response?.data?.error || 'Something went wrong while creating invoice');
    }
}


export async function checkpayment(invoiceId:string): Promise<{paid:boolean}> {
    try {
        const response = await axios.get(`/api/lighning/check-payment/`)
        return response.data
    } catch (error:any) {
        throw new Error(error?.response?.data?.error|| 'Failed to check payment status')
    }
}

export async function submitOrder({ productId, quantity, invoiceId }: SubmitOrderArgs) {
    try {
      const response = await axios.post("/api/lightning/create-order/", {
        product_id: productId,
        quantity,
        invoice_id: invoiceId,
      });
  
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Failed to submit order";
  
      throw new Error(errorMessage);
    }
  }
  