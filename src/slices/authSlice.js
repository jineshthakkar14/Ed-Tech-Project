import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null,
    loading: false,
    signUpData: null
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken(state,value){
            state.token = value.payload
        },
        setLoading(state,value){
            state.loading = value.payload
        },
        setsignUpData(state,value){
            state.signUpData = value.payload
        }
    }
})

export const { setToken,setLoading,setsignUpData } = authSlice.actions;

export default authSlice.reducer