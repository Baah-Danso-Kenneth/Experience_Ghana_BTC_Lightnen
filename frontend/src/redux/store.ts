import {configureStore} from "@reduxjs/toolkit"
import experienceReducer from './features/slices/experienceSlice'


export const store = configureStore({
    reducer: {
       experiences: experienceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch