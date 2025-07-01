import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    user:{},
    walletBill:1000,
    orderList:[]
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUserData: (state,action) => {
            // state.displayName = action.payload.displayName
            state.user = action.payload
        },

        updateWallet:(state,action) => {
            state.walletBill = action.payload
        },

        resetUserData : (state,action) => {
            state.user = {};
        }
    }
})


export const { updateUserData , updateWallet , resetUserData } = userSlice.actions ;
export default userSlice.reducer







