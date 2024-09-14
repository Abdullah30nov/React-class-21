import React from 'react'
import reducers from './slices/counterSlices'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlices'
import productreducer from './slices/productSlice'
const Store =configureStore({
    reducer:{
        counterReducer,
        productreducer
    }
})

export default Store