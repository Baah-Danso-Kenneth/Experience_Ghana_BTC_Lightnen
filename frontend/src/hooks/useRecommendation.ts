import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type {RootState, AppDispatch} from '@/redux/store'
import { fetchAllRecommendations } from "@/app/api/recommendationApi";


export function useRecommendations() {
    const dispatch = useDispatch<AppDispatch>();
    const {recommendations} = useSelector((state:RootState)=>state.recommendations)

    useEffect(()=>{
        dispatch(fetchAllRecommendations());
    },[dispatch])

    return {recommendations}
}