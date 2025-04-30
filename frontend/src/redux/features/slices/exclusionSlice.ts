import { ExcludedState } from "@/types/state";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getIncludedContent } from "./inclusionSlice";

const initialState:ExcludedState={
    excludedItems: [],
    loading: false,
    error: null
}

export const getUnExcludedItems = createAsyncThunk(
    "excludedContent/getAll",
    async(_,thunkAPI)=>{
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/included-items/`)
            return response.data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const exclusionSlice=createSlice({
    name:'excludedItems',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getUnExcludedItems .pending, (state)=>{
                state.loading = true;
                state.error=null;
            })
            .addCase(getIncludedContent.fulfilled, (state,action)=>{
                state.excludedItems = action.payload;
                state.loading = false;
            })
            .addCase(getIncludedContent.rejected, (state,action)=>{
                state.error = action.payload as string;
                state.loading=false;
            })
    }
})

export default exclusionSlice.reducer