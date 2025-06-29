import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart:[],
    cartTotal:0
}

export const cartSlice = createSlice ({
      name:"cartData",
      initialState,
      reducers:{
        addCart:(state,action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            // console.log(action.payload)
            if(index != -1){
                // console.log(action.payload)
                state.cart[index] = action.payload;
            }else{
                state.cart.push(action.payload);
            }
        },


        updateCart:(state,action) => {
             const index = state.cart.findIndex(obj => obj.id == action.payload.id);
             state.cart[index] = action.payload;
        },


        deleteCart:(state,action) => {
             state.cart = state.cart.filter(item => item.id !== action.payload.id );
             state.cartTotal = state.cartTotal - action.payload.nam ;
        },

        addCartTotal:(state,action) => {
            state.cartTotal = state.cartTotal + action.payload
        },

        subCartTotal : (state,action) => {
            if(state.cartTotal > 0){
                state.cartTotal = state.cartTotal - action.payload
            }
        }
      }
})


export const  { updateCart , addCart , deleteCart , addCartTotal , subCartTotal } = cartSlice.actions ;
export default cartSlice.reducer ;