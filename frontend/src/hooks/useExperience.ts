'use client'

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { getExperiences } from "@/redux/features/slices/experienceSlice";


export function useExperience() {
    const dispatch = useDispatch<AppDispatch>();
    const {experiences, loading,error} = useSelector((state: RootState)=>state.experiences);

    useEffect(()=>{
        dispatch(getExperiences())
    }, [dispatch]);

    return {experiences, loading, error}
}