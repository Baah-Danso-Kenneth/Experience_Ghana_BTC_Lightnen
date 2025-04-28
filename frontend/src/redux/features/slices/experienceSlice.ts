import {createSlice, createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit"
import { fetchAllExperiences } from "@/app/api/experienceApi"
import { ExperienceStateProps } from "@/types/state"
import { access } from "fs"

const initialState: ExperienceStateProps = {
    experiences: [],
    loading: false,
    error: null
}

export const getExperiences = createAsyncThunk(
    'experience/getAll',
    async(_,{})=>{
        try {
            const data = await fetchAllExperiences();
            return data;
        } catch (error) {
            return isRejectedWithValue(error)
        }
    }
)

const experienceSlice = createSlice({
    name: 'experiences',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
       builder
       .addCase(getExperiences.pending,(state)=>{
        state.loading=true;
        state.error = null;
       })
       .addCase(getExperiences.fulfilled, (state, action)=>{
        state.loading=false;
        state.experiences = action.payload;
       })
       .addCase(getExperiences.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload as string;
       })
    }
})

export default experienceSlice.reducer