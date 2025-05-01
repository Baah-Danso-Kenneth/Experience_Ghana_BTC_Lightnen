'use client'
import { getMapContent } from "@/redux/features/slices/mapConentSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useMapContent(){
    const dispatch = useDispatch<AppDispatch>();
    const {mapcontents,error,loading} = useSelector((state:RootState)=>state.mapcontents)

    useEffect(()=>{
        dispatch(getMapContent());
    },[dispatch])

    return {mapcontents,error,loading}
}