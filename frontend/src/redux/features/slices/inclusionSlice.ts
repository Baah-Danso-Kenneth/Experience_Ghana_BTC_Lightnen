import { IncludedState } from "@/types/state";
import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import build from "next/dist/build";


const initialState:IncludedState={
    includedItems:[],
    loading:false,
    error:null
}

export const getIncludedContent = createAsyncThunk(
    "includedContent/getAll",
    async(_,thunkAPI)=>{
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/included-items/`)
            return response.data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const inclusionSlice=createSlice({
    name:'includedItems',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getIncludedContent.pending, (state)=>{
                state.loading = true;
                state.error=null;
            })
            .addCase(getIncludedContent.fulfilled, (state,action)=>{
                state.includedItems = action.payload;
                state.loading = false;
            })
            .addCase(getIncludedContent.rejected, (state,action)=>{
                state.error = action.payload as string;
                state.loading=false;
            })
    }
})

export default inclusionSlice.reducer