import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    products:[],
    isloading:false,
    isError:false
}


export const productSlice =createSlice({
    name:'products',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.products = []
            state.isloading = true
            state.isError = false
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.products = action.payload
            state.isloading = false
            state.isError = false
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.products = []
            state.isloading = false
            state.isError = action.payload;
        })
    }
})

export const fetchData = createAsyncThunk("products/fetch", async ()=>{
    const data =await axios.get ("https://fakestoreapi.com/products")
    return data.data
})

const {reducer}=productSlice
export default reducer
