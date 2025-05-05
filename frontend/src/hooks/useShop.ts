
'use client'

import { getAllItems } from "@/redux/features/slices/shopSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useShop(){
    const dispatch = useDispatch<AppDispatch>();
    const {products} = useSelector((state:RootState)=>state.shopItems)

    useEffect(()=>{
        dispatch(getAllItems())
    },[dispatch])

    return {products}
}