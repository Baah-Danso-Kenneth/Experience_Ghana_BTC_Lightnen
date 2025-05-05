import { fetchAllProductItems } from "@/app/api/productItems";
import { ProductState } from "@/types/state";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
    products: [],
    loading:false,
    error: null
}

export const getAllItems = createAsyncThunk(
    'allItems/getAll',
    async(_,thunkAPI)=>{
        try {
            const data = await fetchAllProductItems();
            return data;
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const shopItemsSlice = createSlice({
    name:'shopItems',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getAllItems.pending, (state)=>{
                state.loading=true;
                state.error=null
            })
            .addCase(getAllItems.fulfilled, (state, action)=>{
                state.loading=false;
                state.products = action.payload
            })
            .addCase(getAllItems.rejected, (state, action)=>{
                state.loading=false;
                state.error = action.payload as string;
            })  
    }
})

export default shopItemsSlice.reducer