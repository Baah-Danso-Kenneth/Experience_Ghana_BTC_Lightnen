import { fetchAllAccommodations } from "@/app/api/accomodationApi";
import { fetchAllRecommendations } from "@/app/api/recommendationApi";
import { AccommodationState } from "@/types/state";
import { createAsyncThunk, createSlice, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
import { error } from "console";



const initialState: AccommodationState = {
    accommodations: [],
    loading: false,
    error: null
}


export const getAccommodations = createAsyncThunk(
    "accommodation/getAll",
    async(_,{})=>{
        try {
            const data = await fetchAllAccommodations();
            return data;
        } catch (error:any) {
            return isRejectedWithValue(error.message || 'Failed to fetch message')
        }
    }
)

const accommodationSlice=createSlice({
    name: 'accommodations',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(getAccommodations.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(getAccommodations.fulfilled,(state,action)=>{
                state.loading=false;
                state.accommodations = action.payload;
            })
            .addCase(getAccommodations.rejected,(state,action)=>{
                state.loading=false;
                state.error = action.payload as string;
            })
    }
})

export default accommodationSlice.reducer