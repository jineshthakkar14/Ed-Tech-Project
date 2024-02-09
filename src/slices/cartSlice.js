import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("totalItems")):0
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCart(state,value){
            state.totalItems = value.payload
        }
    }
})

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer