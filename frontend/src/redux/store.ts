import {configureStore} from "@reduxjs/toolkit"
import experienceReducer from './features/slices/experienceSlice'
import recommendationReducer from './features/slices/recommendationSlice'

export const store = configureStore({
    reducer: {
       experiences: experienceReducer,
       recommendations: recommendationReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch