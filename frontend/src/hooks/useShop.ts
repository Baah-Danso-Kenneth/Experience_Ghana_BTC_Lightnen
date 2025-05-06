
'use client'

import { getAllItems } from "@/redux/features/slices/shopSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useShop() {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.shopItems);
    const [isInitialized, setIsInitialized] = useState(false);
  
    useEffect(() => {
    
      if (!products.length && !isInitialized) {
        setIsInitialized(true);
        dispatch(getAllItems());
      }
    }, [dispatch, products.length, isInitialized]);
  
    return { products, loading, error };
  }