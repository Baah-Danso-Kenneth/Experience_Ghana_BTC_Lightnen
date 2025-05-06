import { CategoryState } from "@/types/state";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stat } from "fs";
import { act } from "react";


const initialState:CategoryState={
    selected:'all',
    categories:[],
    loading:false,
    error:null
}

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async()=>{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/`)
        return response.data
    }
)

const categorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategory:(state, action)=>{
            state.selected = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchCategories.pending, (state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(fetchCategories.fulfilled, (state,action)=>{
                state.categories=action.payload
                state.error = null
            })
            .addCase(fetchCategories.rejected, (state,action)=>{
                state.loading=false
                state.error = action.payload as string
            })
    }
});

export const {setCategory} = categorySlice.actions
export default categorySlice.reducer