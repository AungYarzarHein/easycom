import { configureStore } from "@reduxjs/toolkit";
import currentCountReducer from "./features/appStateSlice";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";



export const store = configureStore({
    reducer:{
        currentCount: currentCountReducer,
        userData: userReducer,
        cart: cartReducer
    }
})