import { configureStore } from "@reduxjs/toolkit";
import currentCountReducer from "./features/appStateSlice";




export const store = configureStore({
    reducer:{
        currentCount: currentCountReducer
    }
})