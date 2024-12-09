import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import productReducer from './productSlice'
import courseReducer from './courseSlice'

const store = configureStore({
    // combineReducers מקביל ל
    reducer: {
        product: productReducer,
        counter: counterReducer,
        course: courseReducer
    }
})

export default store