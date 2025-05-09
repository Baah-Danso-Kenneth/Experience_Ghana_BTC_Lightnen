import {configureStore} from "@reduxjs/toolkit"
import experienceReducer from './features/slices/experienceSlice'
import recommendationReducer from './features/slices/recommendationSlice'
import itineraryReducer from './features/slices/itinerarySlice'
import accommodationReducer from './features/slices/accommodationSlice'
import mapContentReducer from './features/slices/mapConentSlice'
import includedItemReducer from './features/slices/inclusionSlice'
import excludedItemReducer from './features/slices/exclusionSlice'
import shopItemReducer from './features/slices/shopSlice'
import categoryReducer from './features/slices/categorySlice'



export const store = configureStore({
    reducer: {
       experiences: experienceReducer,
       recommendations: recommendationReducer,
       itineraries: itineraryReducer,
       accommodations: accommodationReducer,
       mapcontents: mapContentReducer,
       includedItems:includedItemReducer,
       excludedItems: excludedItemReducer,
       shopItems:shopItemReducer,
       categoryItems: categoryReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch