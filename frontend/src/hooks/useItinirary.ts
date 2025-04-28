'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { fetchItinerary } from "@/redux/features/slices/itinerarySlice";

export function useItiniraries(){
    const dispatch = useDispatch<AppDispatch>();
    const {itineraries,loading,error} = useSelector((state:RootState)=>state.itineraries);

    useEffect(()=>{
        dispatch(fetchItinerary());
    },[dispatch])

    return {itineraries,loading,error}
}