import {configureStore} from "@reduxjs/toolkit"
import experienceReducer from './features/slices/experienceSlice'
import recommendationReducer from './features/slices/recommendationSlice'
import itineraryReducer from './features/slices/itinerarySlice'

export const store = configureStore({
    reducer: {
       experiences: experienceReducer,
       recommendations: recommendationReducer,
       itineraries: itineraryReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch