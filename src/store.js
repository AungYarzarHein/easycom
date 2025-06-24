import { configureStore } from "@reduxjs/toolkit";
import currentCountReducer from "./features/appStateSlice";
import userReducer from "./features/userSlice";



export const store = configureStore({
    reducer:{
        currentCount: currentCountReducer,
        userData: userReducer
    }
})