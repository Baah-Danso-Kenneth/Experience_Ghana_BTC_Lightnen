
import { CreateInvoiceParams, InvoiceResponse } from "@/types/regular";
import axios from "axios";

export async function createInvoice({
    productId,
    quantity,
    amountInSats
}:CreateInvoiceParams):Promise<InvoiceResponse>{
    try {
        const response = await axios.post('app/api/lightning/create-invoice/',{
            productId,
            quantity,
            amountInSats
        })

        return response.data
    } catch (error:any) {
        throw new Error(error?.response?.data?.error || 'Something went wrong while creating invoice');
    }
}