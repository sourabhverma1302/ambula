import { configureStore } from "@reduxjs/toolkit";
import CreateData from './slices/createData';
import CartData from './slices/cartData'

const store=configureStore({
    reducer:{
        tododata:CreateData,
        cartdata:CartData
    }
})

export default store;