'use client'

import { fetchCategories } from "@/redux/features/slices/categorySlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useCategories(){
    const dispatch = useDispatch<AppDispatch>();
    const {selected,categories,loading,error} = useSelector((state:RootState)=>state.categoryItems);

    useEffect(()=>{
        dispatch(fetchCategories());
    },[dispatch])

    return {loading, categories,selected,error}
}