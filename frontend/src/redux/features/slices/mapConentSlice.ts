import { fetchMapContents } from "@/app/api/mapContentApi";
import { MapContentState } from "@/types/state";
import { createAsyncThunk, createSlice, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";

const initialState: MapContentState={
    mapcontents:[],
    loading:false,
    error:null
}

export const getMapContent = createAsyncThunk(
    "mapContent/getAll",
    async(_,{})=>{
        try {
            const data = await fetchMapContents();
            return data;
        } catch (error:any) {
            return isRejectedWithValue(error.message)
        }
    }
)
export const mapContentSlice = createSlice({
    initialState,
    name: 'mapContents',
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(getMapContent.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(getMapContent.fulfilled,(state, action)=>{
                state.loading=false;
                state.mapcontents = action.payload
            })
            .addCase(getMapContent.rejected,(state, action)=>{
                state.loading=false;
                state.error = action.payload as string;
            })
    }
})


export default mapContentSlice.reducer