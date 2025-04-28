import { fetchAllItineraries } from '@/app/api/itineraryApi'
import { ItineraryState } from '@/types/state'
import {createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction} from '@reduxjs/toolkit'


const initialState:ItineraryState={
    itineraries: [],
    loading: false,
    error: null
}


export const fetchItinerary = createAsyncThunk(
    'itinerary/fetchItinerary',
    async(_,{})=>{
        try {
            const data = await fetchAllItineraries();
            return data;
        } catch (error:any) {
            return isRejectedWithValue(error.message || "Failed to fetch data")
        }
    }
)
const itinerarySlice=createSlice({
    name:'itineraries',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchItinerary.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(fetchItinerary.fulfilled,(state,action: PayloadAction<any[]>)=>{
                state.loading=false;
                state.itineraries = action.payload
            })
            .addCase(fetchItinerary.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload as string;
            });
    },
});

export default itinerarySlice.reducer