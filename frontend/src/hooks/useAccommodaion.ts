'use client'

import { getAccommodations } from "@/redux/features/slices/accommodationSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export function useAccommodation(){
    const dispatch = useDispatch<AppDispatch>();
    const {accommodations,loading,error} = useSelector((state:RootState)=>state.accommodations);

    useEffect(()=>{
        dispatch(getAccommodations())
    },[dispatch]);

    return {accommodations, loading,error}
}