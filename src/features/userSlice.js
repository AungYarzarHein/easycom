import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    user:{
        walletBill:10000
    }
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUserData: (state,action) => {
            // state.displayName = action.payload.displayName
            state.user = {...action.payload,walletBill:state.user.walletBill}
        },

        updateWallet:(state,action) => {
            state.user = {...state,walletBill:action.payload}
        },

        resetUserData : (state,action) => {
            state.user = {};
        }
    }
})


export const { updateUserData , updateWallet , resetUserData } = userSlice.actions ;
export default userSlice.reducer







