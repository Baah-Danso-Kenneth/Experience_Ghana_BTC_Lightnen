import { RecommendationProps } from '@/types/regular'
import { RecommendationState } from '@/types/state'
import {createSlice,  PayloadAction} from '@reduxjs/toolkit'

const initialState: RecommendationState={
    recommendations: [],
}

const recommendationSlice = createSlice({
    name: 'recommendations',
    initialState,
    reducers:{
        setRecommendations: (state, action: PayloadAction<RecommendationProps[]>)=>{
                state.recommendations = action.payload;
            }
    }

});

export const {setRecommendations} = recommendationSlice.actions;
export default recommendationSlice.reducer