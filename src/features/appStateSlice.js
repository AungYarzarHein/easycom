import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    count:3
}


export const currentCountSlice = createSlice({
    name:"currentCount",
    initialState,
    reducers:{

        saveCurrentCount: (state,action) => {
            // console.log("Payload is ",action.payload)
            state.count = action.payload
        }
    }
})



export const { saveCurrentCount } = currentCountSlice.actions ;
export default currentCountSlice.reducer ;